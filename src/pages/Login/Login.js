import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Cookies from 'js-cookie';

import "../Signup/signup.css"
function SignUp() {
    const navigate = useNavigate();


    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const handleEmail = (e)=>{
        setUserEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setUserPassword(e.target.value)
    }
    const handleSubmit = (e) => {


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
                if (packageid === undefined || packageid==null) {
                    navigate('/home')
                } else {
                    navigate('/packagedesc?id=' + packageid)
                }



            } else {
                console.log(result.message)
                // setStatus(result.message)
            }
        })
    }
    const handleRedirect =(e)=>{
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
                        <input type="email" placeholder="Email" required="required" onChange={handleEmail}/>
                    </div>
                    <div class="inputPass">
                        <input type="password" placeholder="Password" required="required" onChange={handlePassword}/>
                    </div>
                </div>

               

                <div class="SignUpBtn">
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div class="SignInSection">
                    <p>Don't have an account?</p> <a onClick={handleRedirect} className='redirectlink'>Sign Up</a>
                </div>
               
            </div>
        </div>
    )
}

export default SignUp