import './LogIn.css';
import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();
    const [loginStatus, setloginStatus] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const Signup = () => {
        navigate('/signup')
    }
    const login = () => {

        Axios.post("http://localhost:5000/api/signin1", {
            email: userEmail,
            password: userPassword
        }
        ).then((res) => {
            // console.log(res);
            var result = res.data
            if (result.success) {
                // console.log(result.sucess)
                navigate('/home');
            } else {
                // console.log(result.message)
                setloginStatus(result.message)
            }
        })
    }


    return (
        <div className="main">
            <div className="container">
                <div className="Email">
                    <i class="fa-solid fa-envelope" />
                    <input type="text"
                        placeholder='Email'
                        className="email-input"
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="Password">
                    <i class="fa-solid fa-key" />
                    <input type="password"
                        placeholder='Password'
                        className="password-input"
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="LogIn">
                    <button onClick={login}>LogIn</button>
                </div>
                <div className="Forget">
                    <label>Forget Password</label>
                </div>
                <div className="Create">
                    <label className="Create-text">Create new accout?</label>
                    <button onClick={Signup}>Sign Up</button>
                </div>
                <div>
                    <label className='Error-message'>{loginStatus}</label>
                </div>
            </div>
        </div>



    )
}
export default LogIn;
