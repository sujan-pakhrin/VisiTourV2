import {useState} from 'react'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import './StaffLogin.css'
function StaffLogin(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=>{
        setPass(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        var data = {
            email:email,
            password:pass,
            IsStaff:1
        }
        Axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/signin1`, data)
            .then(result=>{
                if(!result.data.success)
                    console.log(result.data)
                else{
                    var userData = result.data.message
                    console.log(userData)
                    navigate('/Staff')
                }
            })
    }
    return(
        <div className='StaffLogin_mainDiv'>
            <div className='StaffLogin_mainDiv_formWrapper'>
                <input type='email' placeholder='Email' onChange={handleEmailChange}></input>
                <input type='password' placeholder='Password' onChange={handlePasswordChange}></input>
                <button type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default StaffLogin