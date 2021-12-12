import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createStream} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function StreamCreate(props) {
    let navigate = useNavigate ();
    const errorHandler = ({touched, error}) => {
        if (touched && error) {
            return (
                <div className="text-danger">
                    {error}
                </div>
            )
        }
    }

    const renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete={'off'}/>
                <div>{errorHandler(meta)}</div>
            </div>
        )
    }

    const onSubmit = (formValues) => {
        props.createStream(formValues)
        navigate("/streams");
    }


    return (
        <form className={'w-100 needs-validation'} onSubmit={props.handleSubmit(onSubmit)}>
            <Field name={'title'} type={'number'} component={renderInput} label={'Title'}/>
            <Field name={'description'} component={renderInput} label='Description'/>
            <button className={'btn btn-info'}>Send</button>
        </form>
    )
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'you must enter a title !'
    }
    if (!formValues.description) {
        errors.description = 'you must enter description !'
    }

    return errors
}


const formWrapped = reduxForm({form: 'streamCreate', validate})(StreamCreate);

export default connect(null, {createStream})(formWrapped)