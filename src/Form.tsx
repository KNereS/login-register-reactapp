import './Form.css'

import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { useState } from 'react';

import Facebook from './assets/Facebook.svg'
import Apple from './assets/apple.svg'
import Google from './assets/google.svg'

function Form() {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {

        setShowPassword(!showPassword);

    }

    return (
        <div>

            <form className="pageForm" onSubmit={handleSubmit}>

                <h2>
                    Sign In
                </h2>

                <div className='pageForm__inputs'>
                    <input type="text" placeholder="Enter your E-Mail Address" />
                    <input type="text" placeholder="Password" />
                    <button id="pwrdButton" onClick={togglePasswordVisibility}>
                        {showPassword ? <BiShowAlt /> : <BiHide /> }
                    </button>
                </div>

                <a href="#">Forgot Password?</a>

                <button>Login</button>

            </form>

            <p className='loginWithSocialMedia'>or continue with</p>

            <div className='loginWithSocialMedia__links'>
                <a href="#">
                    <img src={Facebook} />
                </a>
                <a href="#">
                    <img src={Apple} />
                </a>
                <a href="#">
                    <img src={Google} />
                </a>
            </div>

        </div>
    )
}

export default Form;