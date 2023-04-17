import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

import "../Signup/signup.css"
function SignUp() {
    const navigate = useNavigate();
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?/g;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const handleSubmit = (e) => {

        if (!email && !password) {
            toast.error('All fields are empty!');
        } else {
            if (!email || !password) {
                toast.error('One field is empty!');
            } else {
                if (!emailRegex.test(email)) {
                    toast.error('Invalid Email!');
                } else {
                    if (!passwordRegex.test(password)) {
                        toast.error('Invalid password!');
                    } else {
                        Axios.post("http://localhost:5000/api/signin1", {
                            email: email,
                            password: password
                        }
                        ).then((res) => {
                            // console.log(res);
                            var result = res.data
                            if (result.success) {
                                // console.log(result.sucess)
                                Cookies.set('UserId', JSON.stringify(result.message), { expires: 7 });
                                const id = Cookies.get('UserId');
                                // console.log(id)
                                var queryString = window.location.search;
                                var urlParams = new URLSearchParams(queryString);
                                var packageid = urlParams.get('packageid');
                                console.log(packageid)
                                if (packageid === undefined || packageid == null) {
                                    toast.sucess(result.message);
                                    navigate('/home')
                                } else {
                                    toast.sucess(result.message);
                                    navigate('/packagedesc?id=' + packageid)
                                }
                            } else {
                                toast.error(result.message);
                                console.log(result.message)
                                // setStatus(result.message)
                            }
                        })
                    }
                }
            }
        }
    }
    const handleRedirect = (e) => {
        navigate('/signup')
    }
    return (
        <div class="signup-background">
            <div class="signup-all">
                <div class="signUp">
                    <p>Login</p>
                </div>
                <div class="signUpDesc">
                    <p>
                        Join The Movement
                    </p>
                </div>

                <div class="EmailPhone">
                    <div class="inputEmail">
                        <input type="email" placeholder="Email" required="required" onChange={handleEmail} />
                    </div>
                    <div class="inputPass">
                        <input type="password" placeholder="Password" required="required" onChange={handlePassword} />
                    </div>
                </div>



                <div class="SignUpBtn">
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div class="SignInSection">
                    <p>Don't have an account?</p> <a onClick={handleRedirect} className='redirectlink'>Sign Up</a>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp