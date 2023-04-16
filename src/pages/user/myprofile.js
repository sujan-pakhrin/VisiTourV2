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
    const [packageData, setPackageData] = useState([]);
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
        //process.env.REACT_APP_SERVER_BASE_URL+
        Axios.post("http://localhost:5000/api/user/update", data)
            .then((res)=>{
                console.log(res)
            })
    }

    
    var params = {
        userid:userid
    }

   const getUserBooking = ()=>{
    //process.env.REACT_APP_SERVER_BASE_URL+
    Axios.post('http://localhost:5000/api/user/booking', params)
    .then((response)=>{
        var data = response.data;
        if(data.success ===0){
            console.log(data.message)
        }
        else{
            var mybooking = data.message;
            var tempArr = []
            mybooking.forEach((booking)=>{
                var packageDetails =  Axios.post('http://localhost:5000/api/packagedetails', {
                packageid: booking.packageId
                })
                var entry = {
                    noOfChild:booking.NoOfChild,
                    noOfAdult:booking.NoOfAdult,
                    TotalAmount: booking.TotalAmount,
                    StartDate:booking.StartDate,
                    EndDate:booking.EndDate,
                    packageDetails: packageDetails
                };
                tempArr.push(entry)
            })
            setPackageData(tempArr)
        }
        
    })
}
if(packageData.length===0){
    getUserBooking()

}
console.log(packageData)
//    setTimeout(getUserBooking, 1000)
//    console.log(packageData)



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
                <h2>My Bookings</h2>
                <div className='myprofile_mybookings_row'>
                <img className='mybookings_image' src="/image/300x200.jpg" alt=""/>
                <div>
                    <h3>package name</h3>
                    <p>package description</p>
                    <p>no of child 2 no of adult 3</p>
                    <p>total price : 4600</p>
                    <p>Start : 2023-23-23 End: 2023-3-2</p>
                </div>

                </div>
            </div>
        </div>

    )
}


export default Myprofile