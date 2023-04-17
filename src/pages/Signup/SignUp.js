import React from 'react'
import { useState } from "react";
import Axios from "axios";
import FormInput from "../../components/FormInput";
import { useNavigate } from 'react-router-dom';
import "./signup.css"
function SignUp() {
    const navigate = useNavigate();


    // const [signupStatus,setsignupStatus]=useState('');


    // const [values, setValues] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     dob: "",
    //     address: "",
    //     phone: ""
    // });

    // const register = () => {
    //     Axios.post("http://localhost:5000/api/signup", values
    //     ).then((res) => {
    //         var result = res.data

    //         if (result.success) {
    //             // console.log(result.sucess)
    //             navigate('/home');
    //         } else {
    //             setsignupStatus(result.message)

    //             if (result.success) {
    //                 navigate('/home');

    //             }
    //         }
    //     })
    // }


    // const inputs = [
    //     {
    //         id: 1,
    //         name: "username",
    //         type: "text",
    //         placeholder: "User Name",
    //         errorMessage:
    //             "Username should be 3-16 characters and shouldn't include any special character!",
    //         label: "User Name",
    //         pattern: "^[A-Za-z0-9]{3,16}$",
    //         required: true,
    //     },
    //     {
    //         id: 2,
    //         name: "email",
    //         type: "email",
    //         placeholder: "Email",
    //         errorMessage: "It should be a valid email address!",
    //         label: "Email",
    //         required: true,
    //     },
    //     {
    //         id: 3,
    //         name: "password",
    //         type: "password",
    //         placeholder: "Password",
    //         errorMessage:
    //             "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //         label: "Password",
    //         pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //         required: true,
    //     },
    //     {
    //         id: 4,
    //         name: "confirmPassword",
    //         type: "password",
    //         placeholder: "Confirm Password",
    //         errorMessage: "Passwords don't match!",
    //         label: "Confirm Password",
    //         pattern: values.password,
    //         required: true,
    //     },
    //     {
    //         id: 5,
    //         name: "dob",
    //         type: "date",
    //         placeholder: "Date of Birth",
    //         label: "Date of Birth",
    //     },
    //     {
    //         id: 6,
    //         name: "address",
    //         type: "text",
    //         placeholder: "Address",
    //         errorMessage:
    //             "Add an address to your account",
    //         label: "Address",
    //         required: true,
    //     },
    //     {
    //         id: 7,
    //         name: "phone",
    //         type: "text",
    //         placeholder: "Phone Number",
    //         errorMessage:
    //             "Add an address to your account",
    //         label: "Address",
    //         required: true,
    //     }
    // ];

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

    // return (
    //     <div className="app">
    //         <form onSubmit={handleSubmit}>
    //             <h1>Register</h1>
    //             {inputs.map((input) => (
    //                 <FormInput
    //                     key={input.id}
    //                     {...input}
    //                     value={values[input.name]}
    //                     onChange={onChange}
    //                 />
    //             ))}
    //             <button onClick={register}>Submit</button>


    //             <h4>{signupStatus}</h4>


    //         </form>
    //         <span>{signupStatus}</span>
    //     </div>

    const [username, setUsername] = useState('');
    const [DOB, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  
    const handleUsername = (e)=>{
        setUsername(e.target.value);
        setSubmitted(false);
    }
    const handleDOB = (e)=>{
        setDOB(e.target.value);
        setSubmitted(false);
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value);
        setSubmitted(false);
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (0) {
          setError(true);
        }
        else {
            var data = {
                username:username,
                dob:DOB,
                address:address,
                phone:phone,
                password:password,
                email:email
            }
            Axios.post("http://localhost:5000/api/signup", data)
                .then((response)=>{
                
                    setSubmitted(true);
                    setError(false);
                    var data = response.data
                    
                    if(data.success==1){
                        navigate("/login")
                    }
                    else{
                        console.log(data)
                    }
                
                })
          
        }
    }
    const handleRedirect =(e)=>{
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
                        <input type="email" placeholder="Email" required="required" onChange={handleEmail}/>
                    </div>
                    <div class="Phone">
                        <input class="phone" type="tel" name="phone" placeholder="Phone" onChange={handlePhone}/>
                    </div>
                </div>

                <div class="passGroup">
                    <div class="inputPass">
                        <input type="password" placeholder="Password" required="required" />
                    </div>
                    <div class="inputConformPass">
                        <input type="password" placeholder="Conform Password" required="required" onChange={handlePassword}/>
                    </div>
                </div>

                <div class="SignUpBtn">
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
                <div class="SignInSection">
                    <p>Already Have Account?</p> <a onClick={handleRedirect} className='redirectlink'>Sign in</a>
                </div>
               
            </div>
        </div>
    )
}

export default SignUp