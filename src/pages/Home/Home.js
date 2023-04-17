import React from 'react'
import { useState } from "react";
import Axios from "axios";
import './Home.css'
const handle_homePage_featured_input = ()=>{

}

const Home = () => {

  const [popularPackages, setPopularPackages] = useState(null)
  const [popularPackages1, setPopularPackages1] = useState(null)
  const [popularPackages2, setPopularPackages2] = useState(null)
  const [popularPackages3, setPopularPackages3] = useState(null)
  if(popularPackages==null){
   Axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/popularPackages`)
    .then(result=>{
      var popularPackageID = result.data.message

        var tempArr = []
        popularPackageID.forEach((id,index)=>{
          Axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/packagedetails`, {packageid:id})
            .then(result=>{
              tempArr.push(result.data[0])
              if(index==0)
                setPopularPackages1(result.data[0])
              if(index==1)
                setPopularPackages2(result.data[0])
              if(index==2)
                setPopularPackages3(result.data[0])
            })
        })
        setPopularPackages(tempArr) 
    })
  } 
    const handleBook = (e)=>{
      e.preventDefault()
      var id = (e.target.value)
      window.location.assign("/packagedesc?id="+id)
    }
    console.log(popularPackages)
 
  return (
  
    <div className='homePage_main_div'>
      <div className='homePage_featured_div'>
        <div className='homePage_featured_centerElement'>
          <h1>Find Your Next Destination</h1>
          <div className='homePage_featured_input_div'>
            <input className='homePage_featured_input' type={'text'} onChange={handle_homePage_featured_input}></input>
            <p>SEARCH</p>
          </div>
        </div>
      </div>

      <div className='homePage_popularPackages_div'>
        <h1>Most Popular Packages</h1>
        <div className='homePage_popularPackages_packageCard_wrapper'>
          <div className='homePage_popularPackages_packageCard_div'>
            <img className='homePage_popularPackages_packageCard_bgImg' src='/image/300x200.jpg'/>
            <h3>{(popularPackages1===null)?"default":popularPackages1.PackageName}</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            {(popularPackages1===null)?"default":popularPackages1.PackageDescription}
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages1===null)?"default":popularPackages1.PackageNoOfDays}</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages1===null)?"default":popularPackages1.PackagePrice}</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'
            value={(popularPackages1===null)?"default":popularPackages1.PackageId}
            onClick={handleBook}
            >Book</button>
          </div>
          <div className='homePage_popularPackages_packageCard_div'>
            <img className='homePage_popularPackages_packageCard_bgImg' src='/image/300x200.jpg'/>
            <h3>{(popularPackages2===null)?"default":popularPackages2.PackageName}</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            {(popularPackages2===null)?"default":popularPackages2.PackageDescription}
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages2===null)?"default":popularPackages2.PackageNoOfDays}</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages2===null)?"default":popularPackages2.PackagePrice}</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'
            value={(popularPackages2===null)?"default":popularPackages2.PackageId}
            onClick={handleBook}
            >Book</button>
          </div>
          <div className='homePage_popularPackages_packageCard_div'>
            <img className='homePage_popularPackages_packageCard_bgImg' src='/image/300x200.jpg'/>
            <h3>{(popularPackages3===null)?"default":popularPackages3.PackageName}</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            {(popularPackages3===null)?"default":popularPackages3.PackageDescription}
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages3===null)?"default":popularPackages3.PackageNoOfDays}</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>{(popularPackages3===null)?"default":popularPackages3.PackagePrice}</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'
            value={(popularPackages3===null)?"default":popularPackages3.PackageId}
            onClick={handleBook}
            >Book</button>
          </div>
         
        
        </div>
        
      </div>
    </div>
      
  )
  

}

export default Home