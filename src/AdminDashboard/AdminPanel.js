import React, { useState } from 'react';
import axios from 'axios';
import "./AdminPanel.css"
import userEvent from '@testing-library/user-event';

const AdminPanel = () => {
  const [activeButton, setActiveButton] = useState(null);
 
  const showData = async(event)=>{
    const el = event.target;
    const dataToShow = el.id;
    setActiveButton(dataToShow);
    
    if(dataToShow==="staff"){
      const dataField = document.querySelector(".div3")
      try {
        const response = await axios.post('http://localhost:5000/api/staff');
        const data = response.data;
        var result = `
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>UserName</th>
              <th>UserEmail</th>
              <th>Address</th>
              <th>Phone</th>
              <th>UserDOB</th>
            </tr>
          </thead>
        
        <tbody>`
        data.map((data) => (
          result = result + `
          <tr>
          <td>${data.UserId}</td>
          <td>${data.UserName}</td>
          <td>${data.UserEmail}</td>
          <td>${data.UserAddress}</td>
          <td>${data.UserPhone}</td>
          <td>${data.UserDOB.split("T")[0]}</td>
        </tr>
          `
        ))
      dataField.innerHTML = result;
      } catch (e) {
        
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }
    else if(dataToShow==="package"){
      const dataField = document.querySelector(".div3")
      try {
        const response = await axios.post('http://localhost:5000/api/package');
        const data = response.data;
        var result = `
        <table>
          <thead>
            <tr>
              <th>Package Id</th>
              <th>Package Name</th>
              <th>Added Date</th>
            </tr>
          </thead>
        
        <tbody>`
        data.map((data) => (
          result = result + `
          <tr>
          <td>${data.PackageId}</td>
          <td>${data.PackageName}</td>
          <td>${data.AddedDate.split("T")[0]}</td>          
        </tr>
          `
        ))
      dataField.innerHTML = result;
      } catch (e) {
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }else if(dataToShow==="agency"){
      const dataField = document.querySelector(".div3")
      try {
        const response = await axios.post('http://localhost:5000/api/agency');
        const data = response.data;
        var result = `
        <table>
          <thead>
            <tr>
              <th>AgencyId</th>
              <th>AgencyName</th>
              <th>AgencyEmail</th>
              <th>AgencyPhone</th>
            </tr>
          </thead>
        
        <tbody>`
        data.map((data) => (
          result = result + `
          <tr>
          <td>${data.AgencyId}</td>
          <td>${data.AgencyName}</td>
          <td>${data.AgencyEmail}</td>
          <td>${data.AgencyPhone}</td>
        </tr>
          `
        ))
      dataField.innerHTML = result;
      } catch (e) {
        
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }
    else if(dataToShow==="booking"){
      const dataField = document.querySelector(".div3")
      try {
        const response = await axios.post('http://localhost:5000/api/booking');
        const data = response.data.message;
        var result = `
        <table>
          <thead>
            <tr>
              <th>BookingId</th>
              <th>BookingDate</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>NoOfAdult</th>
              <th>NoOfChild</th>
              <th>TotalAmount</th>
              <th>packageId</th>
              <th>paymentMethod</th>
              <th>userid</th>
              <th>additional</th>
            </tr>
          </thead>
        
        <tbody>`
        data.map((data) => (
          result = result + `
          <tr>
          <td>${data.BookingId}</td>
          <td>${data.BookingDate.split("T")[0]}</td>
          <td>${data.StartDate.split("T")[0]}</td>
          <td>${data.EndDate.split("T")[0]}</td>
          <td>${data.NoOfAdult}</td>
          <td>${data.NoOfChild}</td>
          <td>${data.TotalAmount}</td>
          <td>${data.packageId}</td>
          <td>${data.paymentMethod}</td>
          <td>${data.userid}</td>
          <td>${data.additional}</td>
        </tr>
          `
        ))
      dataField.innerHTML = result;
      } catch (e) {
        
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }
  }

  const submitData = async(e)=>{
    e.preventDefault();
    if(document.querySelector(".UserName")===null) return
    else{
      var emptyInput = false
      var UserName = []
      var UserEmail = []
      var UserAddress = []
      var UserPhone = []
      var UserDOB = []
      document.querySelectorAll(".UserName").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        UserName.push(input.value)
      })
      document.querySelectorAll(".UserEmail").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        UserEmail.push(input.value)
      })
      document.querySelectorAll(".UserAddress").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        UserAddress.push(input.value)
      })
      document.querySelectorAll(".UserPhone").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        UserPhone.push(input.value)
      })
      document.querySelectorAll(".UserDOB").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        UserDOB.push(input.value)
      })
      // if(emptyInput){
      //   console.log("empty input")
      //   return
      // }
      var newData = UserName.map((UserName,index)=>{
        return{
          password:"root",
          username:UserName,
          email:UserEmail[index],
          userAddress:UserAddress[index],
          userPhone:UserPhone[index],
          userDOB:UserDOB[index],
        }
      })
      var rejected = [];
      newData.forEach(async(data)=>{
        const response = await axios.post('http://localhost:5000/api/signup', data);
        // if(response.data.success===0){
        //   rejected.push(data)
        //   // return
        // }
        console.log(response)
      })
      // console.log("rejected",rejected)
    }
  }
  const handleAdd = (e)=>{
    e.preventDefault();
    if(activeButton===null) return
    else if(activeButton=="staff"){
      const dataField = document.querySelector(".div3 table tbody")
      var result =
      `
      <tr>
        <td>#</td>
        <td><input type='text' placeholder='username' class="UserName"></td>
        <td><input type='email' placeholder='email' class="UserEmail"></td>
        <td><input type='text' placeholder='address' class="UserAddress"></td>
        <td><input type='text' placeholder='phone' class="UserPhone"></td>
        <td><input type='date' placeholder='DOB' class="UserDOB"></td>
      </tr>`
      dataField.innerHTML += result;
    }
  }

  return (
    <>
    <div className="parent">
      <div className="div1">
        <h2>Admin Panel</h2> 
        <button className='add' onClick={handleAdd}>+ Add</button> 
        <button id="confirm" onClick={submitData}>Confirm</button>
      </div>
      <div className="div2">
        <button onClick={ showData } id="staff" className={activeButton === 'staff' ? 'active' : ''}>Staff</button>
        <button onClick={ showData } id="package" className={activeButton === 'package' ? 'active' : ''}>Package</button>
        <button onClick={ showData } id="agency"  className={activeButton === 'agency' ? 'active' : ''}>Agency</button>
        <button onClick={ showData } id="booking"  className={activeButton === 'booking' ? 'active' : ''}>booking</button>
      </div>
      <div className="div3">
        <p>Data here</p>
      </div>
    </div>
        
    </>
  )
}

export default AdminPanel