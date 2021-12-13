import React from 'react'

import Forminput from '../form-input/Form-input_component'
import CustomButton from '../custom-button/Custom-button_component'
import { auth, signInWithGoogle } from '../firebase/firebase_untils'

import './Signin_style.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        // const email = this.state
        // const password = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

        
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {

        const { email, password } = this.state;
        return(
            <div className="sign-in">
                <h1>I do not have an account</h1>
                <span>signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Forminput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    label='Email'
                    required />
                    
                    <Forminput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='Password'
                    required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignin> Sign in with Google </CustomButton>  
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Signin