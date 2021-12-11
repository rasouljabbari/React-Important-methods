import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {

    errorHandler ({touched , error}){
        if(touched && error){
            return(
                <div className="text-danger">
                    {error}
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete={'off'}/>
                <div>{this.errorHandler(meta)}</div>
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <form className={'w-100 needs-validation'} onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name={'title'} type={'number'} component={this.renderInput} label={'Title'}/>
                <Field name={'description'} component={this.renderInput} label='Description'/>
                <button className={'btn btn-info'}>Send</button>
            </form>
        );
    }
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

export default reduxForm({form: 'streamCreate', validate})(StreamCreate);