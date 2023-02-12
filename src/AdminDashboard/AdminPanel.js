import React, { useState } from 'react';
import axios from 'axios';
import "./AdminPanel.css"

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
            </tr>
          </thead>
        
        <tbody>`
        data.map((data) => (
          result = result + `
          <tr>
          <td>${data.AgencyId}</td>
          <td>${data.AgencyName}</td>
          <td>${data.AgencyEmail}</td>
        </tr>
          `
        ))
      dataField.innerHTML = result;
      } catch (e) {
        
        dataField.innerHTML = " <p>Error while fetching data</p>";
      }
    }
  }
  return (
    <>
    <div className="parent">
      <div className="div1">
        <h2>Admin Panel</h2>  
      </div>
      <div className="div2">
        <button onClick={ showData } id="staff" className={activeButton === 'staff' ? 'active' : ''}>Staff</button>
        <button onClick={ showData } id="package" className={activeButton === 'package' ? 'active' : ''}>Package</button>
        <button onClick={ showData } id="agency"  className={activeButton === 'agency' ? 'active' : ''}>Agency</button>
      </div>
      <div className="div3">
        <p>Data here</p>
       
      </div>
    </div>
        
    </>
  )
}

export default AdminPanel

{/* <table>
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

<tbody>
  <tr>
    <td>cell1_1</td>
    <td>cell2_1</td>
    <td>cell3_1</td>
    <td>cell4_1</td>
    <td>cell5_1</td>
    <td>cell6_1</td>
  </tr>
  
</tbody>
</table> */}