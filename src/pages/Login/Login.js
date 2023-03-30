import './LogIn.css';
import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    // const [isActive, setIsActive] = useState('');
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    // const cookies = new CookiesProvider();

    // const [status, setStatus] = useState('');

    // const Signup = () => {
    //     navigate('/signup')
    // }
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
                if (packageid === undefined) {
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


    return (
        // <div className="signin-background">
        //     <div className="all">
        //         <div className="signIn">
        //             <p>Sign in</p>
        //         </div>
        //         <div className="signInDesc">
        //             <p>
        //                 Sign in and start managing your candidates
        //             </p>
        //         </div>
        //         <div className="inputEmail">
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 value={email}
        //                 placeholder="Email"
        //                 required
        //                 autoComplete='email'
        //                 onChange={(e) => setUserEmail(e.target.value)}
        //             />

        //         </div>
        //         <div className="inputPass">
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 required
        //                 id="password"
        //                 name="password"
        //                 value={password}
        //                 autoComplete="current-password"
        //                 onChange={(e) => setUserPassword(e.target.value)}
        //             />

        //         </div>
        //         <div className="remember">
        //             <Link to="">Forget Password?</Link>
        //         </div>
        //         <div className="SignInBtn">
        //             <button
        //                 type="submit"
        //                 onClick={handleSubmit}
        //             >Sign in
        //             </button>
        //         </div>
        //         <div className="SignupSection">
        //             <p>New in VisiTour?</p><Link to="">Create an account</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="main">
            <div className="container">
                <div className="Email">
                    <input type="text"
                        placeholder='Email'
                        className="email-input"
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="Password">

                    <input type="password"
                        placeholder='Password'
                        className="password-input"
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="LogIn">
                    <button onClick={handleSubmit}>LogIn</button>
                </div>
                <div className="Forget">
                    <label>Forget Password</label>
                </div>
                <div className="Create">
                    <label className="Create-text">Create new accout?</label>
                    {/* <button onClick={Signup}>Sign Up</button> */}
                </div>
                <div>
                    {/* <label className='Error-message'>{loginStatus}</label> */}
                </div>
            </div>
        </div>



    )
}
export default Login;
