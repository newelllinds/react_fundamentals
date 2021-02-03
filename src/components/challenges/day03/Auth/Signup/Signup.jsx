import React, { useState } from 'react';

const Signup = () => {

const [emailSignup, setEmailSignup] = useState("")
const [passwordSignup, setPasswordSignup] = useState("")

    function emailSignupOnChange(event){
        //event.target.value
        console.log(event.target.value);
        setEmailSignup(event.target.value)
    }

    function passwordSignupOnChange(event){
        console.log(event.target.value);
        setPasswordSignup(event.target.value)
    }

    return (        
        <div>
            <h3>Signup</h3>
            <input 
            type="text" 
            placeholder="Signup With Your Email"
            value= {emailSignup} 
            onChange = {(e)=> emailSignupOnChange(e)}/> 
            <input 
            type="text" 
            placeholder="Create Your Password"
            value = {passwordSignup}
            onChange = {(e)=> passwordSignupOnChange(e)} />
    </div>  );
}
 
export default Signup;