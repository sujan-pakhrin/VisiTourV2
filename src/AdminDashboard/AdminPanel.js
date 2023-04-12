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
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/staff`);
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
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/package`);
        const data = response.data;
        var PackageIteration = (data).map((el,index)=>{
          return Object.values(JSON.parse(el.PackageIteration))
        })
        var PackageInclude = (data).map((el,index)=>{
          return (JSON.parse(el.PackageInclude))
        })
        var PackageExclude = (data).map((el,index)=>{
          return (JSON.parse(el.PackageExclude))
        })
        console.log(PackageExclude)
        var result = `
        <table>
          <thead>
            <tr>
              <th>Package Id</th>
              <th>Package Name</th>
              <th>Added Date</th>
              <th>PackagePrice</th>
              <th>PackageNoOfDays</th>
              <th>PackageDescription</th>
              <th>PackageIteration</th>
              <th>PackageInclude</th>
              <th>PackageExclude</th>
              <th>AgencyId</th>
            </tr>
          </thead>
        
        <tbody>`
        data.map((data,index) => (
          result = result + `
          <tr>
          <td>${data.PackageId}</td>
          <td>${data.PackageName}</td>
          <td>${data.AddedDate.split("T")[0]}</td>          
          <td>${data.PackagePrice}</td>
          <td>${data.PackageNoOfDays}</td>
          <td>${data.PackageDescription}</td>
          <td>${PackageIteration[index]}</td>
          <td>${PackageInclude[index]}</td>
          <td>${PackageExclude[index]}</td>
          <td>${data.AgencyId}</td>
        </tr>
          `
        ))
        console.log(data)
      dataField.innerHTML = result;
      } catch (e) {
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }else if(dataToShow==="agency"){
      const dataField = document.querySelector(".div3")
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/agency`);
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
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/booking`);
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
// handle submit
const submitNewStaff = async()=>{
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
      if(emptyInput){
        console.log("empty input")
        return
      }
      var newData = UserName.map((UserName,index)=>{
        return{
          password:"root",
          username:UserName,
          email:UserEmail[index],
          address:UserAddress[index],
          phone:UserPhone[index],
          dob:UserDOB[index],
          IsStaff:1
        }
      })
      var rejected = [];
      newData.forEach(async(data)=>{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/signup`, data);
        if(response.data.success===0){
          rejected.push({data,response})
          return
        }
        console.log(response)
      })
    
      setTimeout(()=>{
        console.log("rejected",rejected)
        document.querySelector("#staff").click()
      }, 1000)
       

    }
}
const submitNewPackage = async()=>{
  if(document.querySelector(".PackageName")===null) return
    else{
      var emptyInput = false
      var PackageName = []
      var AddedDate = []
      var PackagePrice = []
      var PackageNoOfDays = []
      var PackageDescription = []
      var PackageIteration = []
      var PackageInclude = []
      var PackageExclude = []
      var AgencyId = []
      document.querySelectorAll(".PackageName").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageName.push(input.value)
      })
      document.querySelectorAll(".AddedDate").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        AddedDate.push(input.value)
      })
      document.querySelectorAll(".PackagePrice").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackagePrice.push(input.value)
      })
      document.querySelectorAll(".PackageNoOfDays").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageNoOfDays.push(input.value)
      })
      document.querySelectorAll(".PackageDescription").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageDescription.push(input.value)
      })
      document.querySelectorAll(".PackageIteration").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageIteration.push(input.value)
      })
      document.querySelectorAll(".PackageInclude").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageInclude.push(input.value)
      })
      document.querySelectorAll(".PackageExclude").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        PackageExclude.push(input.value)
      })
      document.querySelectorAll(".AgencyId").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        AgencyId.push(input.value)
      })

      // if(emptyInput){
      //   console.log("empty input")
      //   return
      // }
      PackageIteration = PackageIteration.map((iteration,index)=>{
      
        return iteration.split(',')
      })
      PackageInclude = PackageInclude.map((iteration,index)=>{
        return iteration.split(',')
      })
      PackageExclude = PackageExclude.map((iteration,index)=>{
        return iteration.split(',')
      })
      var newData = PackageName.map((PackageName,index)=>{
        return{
          PackageName:PackageName,
          AddedDate:AddedDate[index],
          PackagePrice:PackagePrice[index],
          PackageNoOfDays:PackageNoOfDays[index],
          PackageDescription:PackageDescription[index],
          PackageIteration:PackageIteration[index],
          PackageInclude:PackageInclude[index],
          PackageExclude:PackageExclude[index],
          AgencyId:AgencyId[index],
        }
      })
      // var rejected = [];
      // newData.forEach(async(data)=>{
      //   const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/signup`, data);
      //   if(response.data.success===0){
      //     rejected.push({data,response})
      //     return
      //   }
      //   console.log(response)
      // })
    
      // setTimeout(()=>{
      //   console.log("rejected",rejected)
      //   document.querySelector("#staff").click()
      // }, 1000)
      console.log(newData)
       

    }
}
const submitNewAgency = async()=>{
  if(document.querySelector(".AgencyName")===null) return
    else{
      var emptyInput = false
      var AgencyName = []
      var AgencyEmail = []
      var AgencyPhone = []
      document.querySelectorAll(".AgencyName").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        AgencyName.push(input.value)
      })
      document.querySelectorAll(".AgencyEmail").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        AgencyEmail.push(input.value)
      })
      document.querySelectorAll(".AgencyPhone").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        AgencyPhone.push(input.value)
      })
      if(emptyInput){
        console.log("empty input")
        return
      }
      var newData = AgencyName.map((AgencyName,index)=>{
        return{
          // password:"root",
          AgencyName:AgencyName,
          AgencyEmail:AgencyEmail[index],
          AgencyPhone:AgencyPhone[index],
        }
      })
      var rejected = [];
      newData.forEach(async(data)=>{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/add/agency`, data);
        if(response.data.success===0){
          rejected.push({data,response})
          return
        }
        console.log(response)
      })
    
      setTimeout(()=>{
        console.log("rejected",rejected)
        document.querySelector("#agency").click()
      }, 1000)

    }
}
const submitNewBooking = async()=>{
      var emptyInput = false
      var StartDate = []
      var NoOfAdult = []
      var NoOfChild = []
      var packageId = []
      var paymentMethod = []
      var userid = []
      var additional = []
      document.querySelectorAll(".StartDate").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        StartDate.push(input.value)
      })
      document.querySelectorAll(".NoOfAdult").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        NoOfAdult.push(input.value)
      })
      document.querySelectorAll(".NoOfChild").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        NoOfChild.push(input.value)
      })
      document.querySelectorAll(".packageId").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        packageId.push(input.value)
      })
      document.querySelectorAll(".paymentMethod").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        paymentMethod.push(input.value)
      })
      document.querySelectorAll(".userid").forEach(input=>{
        if(input.value===''){
          emptyInput=true
          return
        }
        userid.push(input.value)
      })
      document.querySelectorAll(".additional").forEach(input=>{
        additional.push(input.value)
      })
      if(emptyInput){
        console.log("empty input")
        return
      }
      var newData = StartDate.map((StartDate,index)=>{
        return{
          bookdate:StartDate,
          userid:userid[index],
          paymentmethod:paymentMethod[index],
          packageid:packageId[index],
          noofadult:NoOfAdult[index],
          noofchild:NoOfChild[index],
          additional:additional[index],
        }
      })
      var rejected = [];
      newData.forEach(async(data)=>{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/confirmbooking`, data);
        if(response.data.success===0){
          rejected.push({data,response})
          return
        }
        console.log(response)
      })
    
      setTimeout(()=>{
        console.log("rejected",rejected)
        document.querySelector("#booking").click()
      }, 1000)
      console.log(newData)
    
}
//
  const submitData = async(e)=>{
    e.preventDefault();
    switch(activeButton){
      case 'staff':
        submitNewStaff();
        break;
      case 'package':
        submitNewPackage();
        break;
      case 'agency':
        submitNewAgency();
        break;
      case 'booking':
        submitNewBooking();
        break;
          
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
    else if(activeButton=="package"){
      const dataField = document.querySelector(".div3 table tbody")
      var result =
      `
      <tr>
        <td>#</td>
        <td><input type='text' placeholder='PackageName' class="PackageName"></td>
        <td><input type='date' placeholder='AddedDate' class="AddedDate"></td>
        <td><input type='text' placeholder='PackagePrice' class="PackagePrice"></td>
        <td><input type='text' placeholder='PackageNoOfDays' class="PackageNoOfDays"></td>
        <td><input type='text' placeholder='PackageDescription' class="PackageDescription"></td>
        <td><input type='text' placeholder='PackageIteration' class="PackageIteration"></td>
        <td><input type='text' placeholder='PackageInclude' class="PackageInclude"></td>
        <td><input type='text' placeholder='PackageExclude' class="PackageExclude"></td>
        <td><input type='text' placeholder='AgencyId' class="AgencyId"></td>
      </tr>`
      dataField.innerHTML += result;
    }
    else if(activeButton=="agency"){
      const dataField = document.querySelector(".div3 table tbody")
      var result =
      `
      <tr>
        <td>#</td>
        <td><input type='text' placeholder='AgencyName' class="AgencyName"></td>
        <td><input type='text' placeholder='AgencyEmail' class="AgencyEmail"></td>
        <td><input type='text' placeholder='AgencyPhone' class="AgencyPhone"></td>
      </tr>`
      dataField.innerHTML += result;
    }
    else if(activeButton=="booking"){
      const dataField = document.querySelector(".div3 table tbody")
      var result =
      `
      <tr>
        <td>#</td>
        <td>#</td>
        <td><input type='date' placeholder='StartDate' class="StartDate"></td>
        <td>#</td>
        <td><input type='text' placeholder='NoOfAdult' class="NoOfAdult"></td>
        <td><input type='text' placeholder='NoOfChild' class="NoOfChild"></td>
        <td>#</td>
        <td><input type='text' placeholder='packageId' class="packageId"></td>
        <td><input type='text' placeholder='paymentMethod' class="paymentMethod"></td>
        <td><input type='text' placeholder='userid' class="userid"></td>
        <td><input type='text' placeholder='additional' class="additional"></td>
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