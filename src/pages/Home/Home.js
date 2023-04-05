import React from 'react'
import { useState } from "react";
import Axios from "axios";
import './Home.css'
const handle_homePage_featured_input = ()=>{

}

const Home = () => {

  var [popularPackageID, setPopularPackageID] = useState([]);
  if(popularPackageID.length==0){
   Axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/popularPackages`)
    .then(result=>{
      popularPackageID = result.data.message
      setTimeout(()=>{
        popularPackageID.forEach((id)=>{
          Axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/packagedetails`, {packageid:id})
            .then(result=>{
              console.log(result)
            })
        })
      },1000)
    })
  }
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
            <h3>Abc package</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            Colours that are very saturated can look very good on light UI interfaces as they have a good contrast ratio. However, on darker backgrounds highly saturated colours can cause eye strain and often don’t meet accessibility guidelines. Less saturated colours are generally better f=all
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>10</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>2450</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'>Book</button>
          </div>
          <div className='homePage_popularPackages_packageCard_div'>
            <img className='homePage_popularPackages_packageCard_bgImg' src='/image/300x200.jpg'/>
            <h3>Abc package</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            Colours that are very saturated can look very good on light UI interfaces as they have a good contrast ratio. However, on darker backgrounds highly saturated colours can cause eye strain and often don’t meet accessibility guidelines. Less saturated colours are generally better f=all
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>10</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>2450</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'>Book</button>
          </div>
          <div className='homePage_popularPackages_packageCard_div'>
            <img className='homePage_popularPackages_packageCard_bgImg' src='/image/300x200.jpg'/>
            <h3>Abc package</h3>
            <p className='homePage_popularPackages_packageCard_description'>
            Colours that are very saturated can look very good on light UI interfaces as they have a good contrast ratio. However, on darker backgrounds highly saturated colours can cause eye strain and often don’t meet accessibility guidelines. Less saturated colours are generally better f=all
            </p>
            <p>Days : <span className='homePage_popularPackages_packageCard_days'>10</span></p>
            <p>Price : <span className='homePage_popularPackages_packageCard_days'>2450</span></p>
            <button className='homePage_popularPackages_packageCard_btnBook'>Book</button>
          </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default Home