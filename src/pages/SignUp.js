import React from 'react'
import { useState } from "react";
import Axios from "axios";
import FormInput from "../components/FormInput";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        address: "",
        phone: ""
    });

    const register = () => {
        Axios.post("http://localhost:5000/api/signup", values
        ).then((res) => {
            var result = res.data
            if(result.success){
                navigate('/home');
            }
        })
    }

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "User Name",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "User Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
        {
            id: 5,
            name: "dob",
            type: "date",
            placeholder: "Date of Birth",
            label: "Date of Birth",
        },
        {
            id: 6,
            name: "address",
            type: "text",
            placeholder: "Address",
            errorMessage:
                "Add an address to your account",
            label: "Address",
            required: true,
        },
        {
            id: 7,
            name: "phone",
            type: "text",
            placeholder: "Phone Number",
            errorMessage:
                "Add an address to your account",
            label: "Address",
            required: true,
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button onClick={register}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp