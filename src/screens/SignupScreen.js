import React from 'react'
import { useRef } from 'react';
import { getAuth,signInWithEmailAndPassword,  createUserWithEmailAndPassword } from 'firebase/auth'
import './SignupScreen.css';
import { firebaseApp } from '../firebase';


function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const authentication = getAuth(firebaseApp);
    
 
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(authentication,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    function signIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(authentication,emailRef.current.value,passwordRef.current.value).then((authUser)=>{console.log(authUser)}).catch((error)=>{alert(error.message)})
    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email' />
            <input  ref={passwordRef} placeholder='password' type='passowrd'/>
            <button onClick={signIn} type='submit '>Sign In</button>
            <h4>
                <span className='singupScreen_gray'>New to Netflix?</span>
                 <span className='signupScreen_link' onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignupScreen