import React from 'react'
import { useState } from "react";
import Axios from "axios";
import FormInput from "../../components/FormInput";
import { useNavigate } from 'react-router-dom';
import "./signup.css"
function SignUp() {
    // const navigate = useNavigate();


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
                        <input type="text" class="FirstName" placeholder="First Name" required="required" />
                    </div>
                    <div class="inputLName">
                        <input type="text" class="LastName" placeholder="Last Name" required="required" />
                    </div>
                </div>
                <div class="DOBAddress">
                    <div class="DateOfBirth">
                        <input
                            placeholder="Date"
                            class="textbox-n"
                            type="date"
                            onfocus="(this.type='date')"
                            id="date" />
                    </div>
                    <div class="Address">
                        <input type="text" placeholder="Address" required="required" />
                    </div>
                </div>

                <div class="EmailPhone">
                    <div class="inputEmail">
                        <input type="email" placeholder="Email" required="required" />
                    </div>
                    <div class="Phone">
                        <input class="phone" type="tel" name="phone" placeholder="Phone" />
                    </div>
                </div>

                <div class="passGroup">
                    <div class="inputPass">
                        <input type="password" placeholder="Password" required="required" />
                    </div>
                    <div class="inputConformPass">
                        <input type="password" placeholder="Conform Password" required="required" />
                    </div>
                </div>

                <div class="SignUpBtn">
                    <button>Sign Up</button>
                </div>
                <div class="SignInSection">
                    <p>Already Have Account?</p> <a href="#">Sign in</a>
                </div>
                <div class="rounded-md bg-primary text-white p-3">
                    This is a rounded element with a primary background color.
                </div>
            </div>
        </div>
    )
}

export default SignUp