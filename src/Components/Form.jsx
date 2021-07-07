import React, {useCallback, useState} from "react";
import '../assets/style/components-styles.css'
import {Images} from "../assets/scripts/Images";
import useToggle from "../assets/scripts/GeneralFunctions";





export function Form(props){
    const [inputs,setInputs] = useState({});
    const [isOn, toggleIsOn] = useToggle();

    const inputHandler = useCallback(
        ({target:{name , value}}) => setInputs(state => ({...state , [name]:value}),[])
    )
    const formHandler = (e) =>{
        e.preventDefault()
        console.log(inputs)
    }

    return(

        <form onSubmit={formHandler}>

            {/*<input type="text" name='name' onChange={({target}) => setInputs(state => ({...state ,name: target.value}))} value={inputs.name}/>*/}
            {/*<input type="number" name='mobile' onChange={({target}) => setInputs(state => ({...state , mobile: target.value}))} value={inputs.mobile}/>*/}

            <input type="text" placeholder='Enter name' name='name' onChange={inputHandler} value={inputs.name}/>
            <input type="number" placeholder='Enter phone number' name='mobile' onChange={inputHandler} value={inputs.mobile}/>
            <label style={{position: "relative"}}>
                <input type={isOn ? 'text' : "password"} placeholder='Enter password' name='password' onChange={inputHandler} value={inputs.password}/>
                <img className='open-eye' onClick={toggleIsOn} src={isOn ? Images.openEye.default : Images.closeEye.default} alt="open eye"/>
            </label>

            <button type='submit'>Send</button>

        </form>
    )
}