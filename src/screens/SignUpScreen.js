import React, { useRef, useState } from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase'

function SignUpScreen() {
    const emailRef = useRef(null)   //poitning toward email input
    const passwordRef = useRef(null) //towards password input

    // Can be done with State also
    const [emailstate, setemailstate] = useState(null)
    const [passwordstate, setpasswordstate] = useState(null)
    
    const register = (e) => {
        e.preventDefault();
        // Registering the User
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            // emailstate,
            // passwordstate,
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }


    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} onChange={(e)=>{setemailstate(e.target.value)}} placeholder='Email' type='email' />
                <input ref={passwordRef} onChange={(e)=>{setpasswordstate(e.target.value)}} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen_gray'>New to Netflix? </span>
                    <span className='signUpScreen_link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
