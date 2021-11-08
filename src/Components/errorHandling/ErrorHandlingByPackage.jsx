import React, {useState} from 'react';
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
function ErrorHandlingByPackage(props) {
    const [input , setInput] = useState({})
    return (
        <>
            <form action="">
                <Textbox
                    attributesInput={{ // Optional.
                        id: 'Name',
                        name: 'Name',
                        type: 'text',
                        placeholder: 'Place your name here ^-^',
                    }}
                    value={input.name} // Optional.[String].Default: "".
                    onChange={(name, e) => {
                        setInput(prevState => ({
                            ...prevState , name
                        }))
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                        name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        locale : 'fa'
                    }}
                />
                <button type='submit'>Send</button>
            </form>
        </>
    );
}

export default ErrorHandlingByPackage;