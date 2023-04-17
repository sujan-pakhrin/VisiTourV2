import React from 'react'
import { useState } from "react";
import Axios from "axios";
import FormInput from "../../components/FormInput";
import { useNavigate } from 'react-router-dom';
import "./signup.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    const navigate = useNavigate();




    const [username, setUsername] = useState('');
    const [DOB, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    }
    const handleDOB = (e) => {
        setDOB(e.target.value);
        setSubmitted(false);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleConPassword = (e) => {
        setConPassword(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?/g;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        const phoneRegex = /^98\d{8}$/;
        const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (0) {
            setError(true);
        }
        else {
            if (!username && !password && !DOB && !phone && !address && !email&&!conPassword) {
                toast.error('All feilds are empty!')
            } else {
                if (!username || !password || !DOB || !phone || !address || !email|| !conPassword) {
                    toast.error('Entry every details!')
                } else {
                    if (!nameRegex.test(username)) {
                        toast.error('Invalid Name: ' + username)
                    } else {
                        if (!emailRegex.test(email)) {
                            toast.error('Invalid Email: ' + email)
                        } else {
                            if (!phoneRegex.test(phone)) {
                                toast.error('Invalid phone number!')
                            } else {
                                if (!passwordRegex.test(password)) {
                                    toast.error('Invalid password formate: Eg: Abcd@123')
                                } else {
                                    if (password !== conPassword) {
                                        toast.error('Password did no match!')
                                    } else {
                                        var data = {
                                            username: username,
                                            dob: DOB,
                                            address: address,
                                            phone: phone,
                                            password: password,
                                            email: email
                                        }
                                        Axios.post("http://localhost:5000/api/signup", data)
                                            .then((response) => {

                                                setSubmitted(true);
                                                setError(false);
                                                var data = response.data

                                                if (data.success === 1) {
                                                    toast.success(data.message)
                                                    navigate("/login")
                                                }
                                                else {
                                                    toast.error(data.message)
                                                    console.log(data)
                                                }

                                            })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const handleRedirect = (e) => {
        navigate('/login')
    }
    return (
        <div class="signup-background">
            <div class="signup-all">
                <div class="signUp">
                    <p>Sign up</p>
                </div>
                <div class="signUpDesc">
                    <p>
                        Join The Movement
                    </p>
                </div>
                <div class="inputName">
                    <div class="inputFName">
                        <input type="text" class="FirstName" placeholder="Username" required="required" onChange={handleUsername} />
                    </div>

                </div>
                <div class="DOBAddress">
                    <div class="DateOfBirth">
                        <input
                            placeholder="Date"
                            class="textbox-n"
                            type="date"
                            onfocus="(this.type='date')"
                            id="date"
                            onChange={handleDOB}
                        />
                    </div>
                    <div class="Address">
                        <input type="text" placeholder="Address" required="required" onChange={handleAddress} />
                    </div>
                </div>

                <div class="EmailPhone">
                    <div class="inputEmail">
                        <input type="email" placeholder="Email" required="required" onChange={handleEmail} />
                    </div>
                    <div class="Phone">
                        <input class="phone" type="tel" name="phone" placeholder="Phone" onChange={handlePhone} />
                    </div>
                </div>

                <div class="passGroup">
                    <div class="inputPass">
                        <input type="password" placeholder="Password" required="required" onChange={handlePassword} />
                    </div>
                    <div class="inputConformPass">
                        <input type="password" placeholder="Conform Password" required="required" onChange={handleConPassword} />
                    </div>
                </div>

                <div class="SignUpBtn">
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
                <div class="SignInSection">
                    <p>Already Have Account?</p> <a onClick={handleRedirect} className='redirectlink'>Sign in</a>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp