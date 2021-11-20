import React, {useState} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import parse from 'html-react-parser';
import './ckEditor.scss'

let token = '1'
export default function CkEditorTest() {
    let editor = null
    const [data, setData] = useState('')
    return (
        <div className="App">
            <h2>CKEditor 5 using a custom build - decoupled editor</h2>
            <CKEditor
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);

                    // Insert the toolbar before the editable area.
                    editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );

                    editor = editor;
                }}
                onError={({willEditorRestart}) => {
                    // If the editor is restarted, the toolbar element will be created once again.
                    // The `onReady` callback will be called again and the new toolbar will be added.
                    // This is why you need to remove the older toolbar.
                    if (willEditorRestart) {
                        this.editor.ui.view.toolbar.element.remove();
                    }
                }}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setData(data)
                    console.log( data );
                } }
                editor={DecoupledEditor}
                data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                config={{
                    extraPlugins: [ MyCustomUploadAdapterPlugin ],
                    toolbar: ['heading', '|', 'bold', 'italic','alignment',
                        'link', '|', 'numberedList',
                        'blockquote', '|', 'imageStyle:full',
                        'uploadImage', 'imageStyle:side'],
                    heading: {
                        options: [
                            {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
                            {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
                            {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
                            {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
                            {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'},
                            {model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5'},
                            {model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6'},
                        ]
                    }
                }}
            />
            {parse(data)}
        </div>
    );
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader)
    }
}

class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
        this.loader = props;
        // URL where to send files.
        this.url = `${'ENV'}/Services/SaveImage`;
    }

    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject);
            this._sendRequest();
        } );
    }

    // Aborts the upload process.
    abort() {
        if ( this.xhr ) {
            this.xhr.abort();
        }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', this.url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.setRequestHeader('Authorization', token)
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners( resolve, reject ) {
        const xhr = this.xhr;
        const loader = this.loader;
        console.log(loader.file , loader)
        const genericErrorText = 'Couldn\'t upload file:' + ` ${ loader.file.name }.`;

        xhr.addEventListener( 'error', () => reject( genericErrorText ) );
        xhr.addEventListener( 'abort', () => reject() );
        xhr.addEventListener( 'load', () => {
            const response = xhr.response;
            if ( !response || response.error ) {
                return reject( response && response.error ? response.error.message : genericErrorText );
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            resolve({
                default: response.s3Url
            });
        } );

        if ( xhr.upload ) {
            xhr.upload.addEventListener( 'progress', evt => {
                if ( evt.lengthComputable ) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            } );
        }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
        const data = new FormData();

        this.loader.file.then(result => {
                data.append('file', result);
                this.xhr.send(data);
            }
        )
    }

}
