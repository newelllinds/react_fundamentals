//imrs
import React, { useState } from 'react'; 
import Login from "./Login/Login" //this Auth file is the parent of the login and signup
import Signup from "./Signup/Signup"

//sfc
const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){

        setShowLogin(!showLogin); //this is the short version of what's below!!

        // if(showLogin === true){
        //     setShowLogin(false)
        // } else {
        //     setShowLogin(true);
        // }
    }

    return ( 
        <div>
            {showLogin ? <Login /> : <Signup />} 

            {/* if showLogin is true then show the Login, if not then show the Signup. If it's true execute what's after the ? if not then execute what is after the : */}

            <button onClick={handleToggle}>Click to Toggle</button>
        </div> 
    );
};
 
export default Auth;

