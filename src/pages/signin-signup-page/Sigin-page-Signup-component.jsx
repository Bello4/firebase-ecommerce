import React from 'react'
import Signin from '../../components/Sign-in/Signin_component';
import SignUp from '../../components/sign-up/Sign-up_component';
import './Signup-Signin-page.scss';

const SiginSignupComponent = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}

export default SiginSignupComponent
