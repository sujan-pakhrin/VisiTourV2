import React, { useState, useEffect } from 'react'
import './packagedesc.css'
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Packagedesc = () => {
  const [bookDate, setBookDate] = useState('')
  const [noOfAdult, setNoOfAdult] = useState('')

  const [noOfChild, setNoOfChild] = useState('')
  const [additional, setAdditional] = useState('')


  const [date, setDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  
  const handleDateChange = (e) => {
    const inputDate = new Date(e.target.value);
    const today = new Date();
    const differenceInTime = inputDate.getTime() - today.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log(differenceInDays)
    if (differenceInDays < 30) {
      setErrorMsg('Date must be at least 30 days from today.');
    } else {
      setErrorMsg('');
    }
    setDate(e.target.value);
  };
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState('');
  const [basicModal, setBasicModal] = useState(false);
 

  const confirmLogin = () => {

    const userid = Cookies.get('UserId');
    if (userid === undefined) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const packageid = urlParams.get('id');
      navigate('/login?packageid=' + packageid)
    }
  }
  const toggleShow = async () => setBasicModal(!basicModal);
  // var packagedays = JSON.parse(packageData["PackageNoOfDays"]);
  // console.log(packagedays)
  var totalPrice= (parseInt(noOfAdult)+parseInt(noOfChild))*parseInt(packageData["PackagePrice"])

  const packageBooked = ()=>{
    console.log("booked");
   
  }
  const confirmBooking = () => {
    var userid = Cookies.get('UserId');
    userid = (JSON.parse(userid).UserId);
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var packageid = urlParams.get('id');
    // console.log(packageid);
    
    
    var ele = document.getElementsByName('paymentmethod');
    var paymentmethod = null;
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked)
        paymentmethod = ele[i].value;
    }
    if (paymentmethod !== null) {
      const confirmBook = async () => {
        if(paymentmethod==null || userid == undefined || userid==null || packageid == null || packageid == undefined || bookDate=='' || noOfAdult == '' || noOfChild == ''){
          console.log("value missing")
        }
        else{
          await Axios.post('http://localhost:5000/api/confirmbooking', {
            paymentmethod: paymentmethod,
            userid: userid,
            packageid: packageid,
            bookdate:bookDate,
            noofadult:noOfAdult,
            noofchild:noOfChild,
            additional:additional
            // packagedays: packagedays
          }).then((response) => {
            var data = response.data;
            if(data.success){
              packageBooked()
            }
            else{
              console.log(data)
            }
          }
          )
        }
        
      }
      confirmBook()
    }
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const packageid = urlParams.get('id');
    const packageData = async () => {
      //   try {
      const response = await Axios.post('http://localhost:5000/api/packagedetails', {
        packageid: packageid
      })
      setPackageData(response.data[0]);
      console.log(response.data[0]);
      //   } catch (error) {
      //     console.error(error);
      //   }
    };
    packageData();
  }, []);

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const packageid = urlParams.get('id');
  //   // console.log(packageid)
  //   Axios.post('http://localhost:5000/api/packagedetails', {
  //     packageid: packageid
  //   }).then((response) => {
  //     setPacakgeData(response.data[0]);
  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(packageData)

  // console.log(typeof (packageData["PackageIteration"]))
  // const packageIteration = JSON.parse(packageData["PackageIteration"]);
  // const packageInclude = JSON.parse(packageData.PackageInclude);
  // console.log(packageInclude)
  // console.log(packageData.PackageIteration)
  // packageIteration=
  // setTimeout(()=>{console.log(JSON.parse(packageData.PackageIteration))},1000)
  // setTimeout(JSON.parse(packageData["PackageIteration"]),1000);
  // packageData = JSON.parse(packageData);
  // ARRAY
  // console.log(packageData.PackageInclude)
  // setTimeout(()=>{console.log(JSON.parse(packageData.PackageInclude))},1000)
  return (
    <>
      <div></div>
      <div>
        <div className="packageBooked_congrats_div">
          <p>Congratoins</p>
        </div>
        <div className='package-desc' >
          <div className='package-desc-header'>
            <div className='package-desc-img-section'>
              <img className='package-desc-img' src="https://source.unsplash.com/featured" alt="" />
            </div>
          </div>
          <div className="package-desc-main">
            <div className="package-title">
              <h1>{packageData["PackageName"]}</h1>
              <p>No Of days: {packageData["PackageNoOfDays"]}</p>
              <p>Price per person: {packageData["PackagePrice"]}</p>
            </div>
            <div className="package-desc-agency-details">
              <h1>Name: ABC Agency</h1>
            </div>
            <div className="about-package">
              <h1>About Package</h1>
              <p>{packageData["PackageDescription"]}</p>
            </div>
            <div className="package-desc-day">
              <h1>Days We Visit.</h1>
              <ul className='package-desc-day-list'>

                {/* {Object.keys(packageIteration).map(key => (
                  <li key={key}>
                    {key}: {packageIteration[key]}
                  </li>
                ))} */}

              </ul>
            </div>
            <div className="package-include-exclude">
              <div className="package-include">
                <h1>Include</h1>
                <ol className='package-include-list'>
                  {/* {Object.keys(packageInclude).map(key => (
                  <li key={key}>
                    {key}: {packageInclude[key]}
                  </li>
                ))} */}
                  <li>Arrival & departure transfers by private vehicle</li>
                  <li>Twin share room (3 nights) with breakfast in a 3 star hotel</li>
                  <li>Hotels can be arranged as per client’s choice which might incur extra cost</li>
                  <li>Domestic airplane flights strictly as per itinerary</li>
                  <li>Surface transportation</li>
                  <li>Fully organized camping</li>
                </ol>
              </div>
              <div className="package-exclude">
                <h1>Exclude</h1>
                <ol className='package-exclude-list'>
                  <li>Arrival & departure transfers by private vehicle</li>
                  <li>Twin share room (3 nights) with breakfast in a 3 star hotel</li>
                  <li>Hotels can be arranged as per client’s choice which might incur extra cost</li>
                  <li>Domestic airplane flights strictly as per itinerary</li>
                  <li>Surface transportation</li>
                  <li>Fully organized camping</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="book-btn">
            <button className='book-now-btn' onClick={() => { confirmLogin(); toggleShow(); }}>Book Now</button>
          </div>
        </div>

        {/* })
        } */}
      </div>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Book Now</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='booking'>
                <div>{errorMsg}</div>
                <div className='bookDate'>
                  <input
                    className='bookingStartDate'
                    onChange={(e) => setBookDate(e.target.value)}
                    onClick={handleDateChange}
                    type="date" />
                </div>
                <div className='bookDate'>
                  <label htmlFor="">Total People</label>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setNoOfAdult(e.target.value)}
                    placeholder='Adult'
                  />
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setNoOfChild(e.target.value)}
                    placeholder='Child'
                  />
                </div>
                <div className='totalPrice'>
                  <label
                    htmlFor=""
                  >totalprice</label>
                  <input type="number"
                    min="0"
                  value={totalPrice}
                  disabled
                  />
                </div>
                <div className='additional-service'>
                  <label htmlFor="">Any Aditional Service</label>
                  <input
                    type="textarea"
                    onChange={(e) => setAdditional(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <input type="radio" id='onlinemethod' name='paymentmethod' value='online' /> Online
              </div>
              <div>
                <input type="radio" id='cashmethod' name='paymentmethod' value='cash' /> Cash
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => { toggleShow(); confirmBooking(); }} >Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


     
    </>
  )
}

export default Packagedesc


