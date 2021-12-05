import React, {Component} from 'react'
// import {DropzoneDialog} from 'material-ui-dropzone'
// import Button from '@material-ui/core/Button';

import {DropzoneArea} from 'material-ui-dropzone'

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            open: false,
        }
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    render() {
        return (
            <div>
                {/*Upload in modal*/}
                {/*<Button onClick={this.handleOpen.bind(this)}>*/}
                {/*    Add Image*/}
                {/*</Button>*/}
                {/*<DropzoneDialog*/}
                {/*    previewText={'previewText'}*/}
                {/*    dropzoneText={'dropzoneText'}*/}
                {/**/}
                {/*    // showPreviews={true}*/}
                {/*    open={this.state.open}*/}
                {/*    filesLimit={1000}*/}
                {/*    onSave={this.handleSave.bind(this)}*/}
                {/*    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}*/}
                {/*    maxFileSize={5000000}*/}
                {/*    onClose={this.handleClose.bind(this)}*/}
                {/*/>*/}

                <DropzoneArea
                    dropzoneText={"Drag and drop an image here or click"}
                    open={this.state.open}
                    filesLimit={1000}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}

export default Dropzone;