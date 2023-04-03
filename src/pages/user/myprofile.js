import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './myprofile.css'


const userdetails = JSON.parse(Cookies.get('UserId'));



const Myprofile = () => {
    const [username, setUsername] = useState(userdetails.UserName);
    const [email, setEmail] = useState(userdetails.UserEmail);
    const [address, setAddress] = useState(userdetails.UserAddress);
    const [phone, setPhone] = useState(userdetails.UserPhone);
    var userid = userdetails.UserId;
    
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value)
    }

    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleDetailSubmit = (e)=>{
        e.preventDefault()
       
        var data = {
            userid:userid,
           username:username,
           email:email,
           address:address,
           phone:phone
        }
        Axios.post(process.env.REACT_APP_SERVER_BASE_URL+"/api/user/update", data)
            .then((res)=>{
                console.log(res)
            })
    }

    
    var params = {
        userid:userid
    }
   const getUserBooking = ()=>{
    Axios.post(process.env.REACT_APP_SERVER_BASE_URL+"api/user/booking", params)
    .then((response)=>{
        console.log(response)
    })
   }
   setTimeout(getUserBooking, 5000)
    return(
        <div className='myprofile_main_div'>
            <div className='myprofile_mydetails_div'>
                <h3>Edit Your Details</h3>
                <div className='myprofile_mydetails_row'>
                    <input className='myprofile_mydetails_input' type={'text'} value={username} onChange={handleUsername}></input>
                    <input className='myprofile_mydetails_input' type={'email'} value={email} onChange={handleEmail}></input>
                </div>
                <div className='myprofile_mydetails_row'>
                    <input className='myprofile_mydetails_input' type={'text'} value={address} onChange={handleAddress}></input>
                    <input className='myprofile_mydetails_input' type={'text'} value={phone} onChange={handlePhone}></input>
                </div>
                <div className='myprofile_mydetails_row'>
                    <button className='myprofile_mydetails_change' onClick={handleDetailSubmit}>Save Changes</button>    
                </div>
            </div>
            
            <div className='myprofile_mybookings_div'>
                <div className='myprofile_mybookings_row'>

                </div>
            </div>
        </div>
    )
}


export default Myprofile