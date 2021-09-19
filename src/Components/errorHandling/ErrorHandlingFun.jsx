import React, {useState} from 'react';

const ErrorHandlingFun = () => {
    const [error, setError] = useState({})
    const [input, setInputs] = useState({})

    const inputHandler = (e) => {
        setInputs(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const errorHandler = () => {
        let error_result = true
        let error = {};
        // name
        if (!input['name']) {
            error['name'] = 'فیلد متن نمیتواند خالی باشد'
            error_result = false
        }

        // Email
        let emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!input['email']) {
            error['email'] = 'فیلد ایمیل نمیتواند خالی باشد'
            error_result = false
        } else if (!emailRgx.test(input['email'])) {
            error['email'] = 'آدرس ایمیل نامعتبر است'
            error_result = false
        }

        // Phone Numbewr
        let mobRgx = /^(\+98|0)9\d{9}$/;
        if (!input['phone']) {
            error['phone'] = 'فیلد شماره تماس نمیتواند خالی باشد'
            error_result = false
        } else if (!mobRgx.test(input['phone'])) {
            error['phone'] = 'شماره تماس نامعتبر است'
            error_result = false
        }
        setError(error)
        return error_result
    }

    const formHandler = (e) => {
        e.preventDefault()
        if (errorHandler()) {
            alert('فرم با موفقیت ارسال شد')
        } else {

        }
    }
    return (
        <form onSubmit={formHandler}>
            <label htmlFor="name">
                <input type="text" name='name' id='name' value={input.name} onChange={inputHandler}/>
                <span style={{color: 'red'}}>{error.name}</span>
            </label>
            <br/>
            <label htmlFor="email">
                <input type="email" name='email' id='email' value={input.email} onChange={inputHandler}/>
                <span style={{color: 'red'}}>{error.email}</span>
            </label>
            <br/>
            <label htmlFor="phone">
                <input type="number" name='phone' id='phone' value={input.phone} onChange={inputHandler}/>
                <span style={{color: 'red'}}>{error.phone}</span>
            </label>
            <br/>
            <button type='submit' style={{backgroundColor: '#7525854', color: '#000'}}>ثبت و ادامه</button>
        </form>
    );
};

export default ErrorHandlingFun;