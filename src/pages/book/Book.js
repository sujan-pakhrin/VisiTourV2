import React, { useState, useEffect } from 'react'

import { useNavigate, Link } from 'react-router-dom';
import './booking.css'
import Axios from 'axios';
const Book = () => {
    // const elementRef = useRef(null);

    const navigate = useNavigate();
    const [bookDate, setBookDate] = useState('')
    const [noOfPeople, setNoOfPeople] = useState('')
    const [endDate, setEndDate] = useState('')
    const [value, setValue] = useState('');
    const [packageData, setPackageData] = useState([]);
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
    // Axios.post('http://localhost:5000/api/showavailablepackage')
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    useEffect(() => {
        const packageData = async () => {
        //   try {
            const response = await Axios.post("http://localhost:5000/api/showavailablepackage");
            setPackageData(response.data);
            console.log(response.data);
        //   } catch (error) {
        //     console.error(error);
        //   }
        };
        packageData();
      }, []);
    // const ShowAvailablePackage = () => {
    //     Axios.post("http://localhost:5000/api/showavailablepackage", {
    //         bookDate: bookDate,
    //         noOfPeople: noOfPeople
    //     }

    //     ).then((res) => {
    //         var result = res.data
    //         result.forEach((item) => {
    //             var element = `<div className='packageCard'>
    //             <div className='package-img'>
    //                 <img src="https://source.unsplash.com/featured/300x200" alt=''/> 
    //             </div>
    //             <div>
    //                 <h1>Package Name</h1>
    //                 <p>Total Date</p>
    //                 <p>Discription</p>
    //                 <button className='explore'>Explore</button>
    //             </div>

    //         </div>`
    //         elementRef.current.innerHtml+=element;
    //         })


    //     })
    // }


    const handleEplore = (package_id) => {
        console.log(package_id)
        navigate('/packagedesc?id=' + package_id)
    }


    return (
        <>
            {/* <div className='booking'>
                <div>{errorMsg}</div>
                <div className='bookDate'>
                    <input
                        className='bookingStartDate'
                        onChange={(e) => setBookDate(e.target.value)}
                        onClick={handleDateChange}
                        type="date" />
                </div>
                <div className='bookDate'>
                    <input
                        type="number"

                        onChange={(e) => setNoOfPeople(e.target.value)}
                        min="0"
                        placeholder='Total People' />
                </div>
                <div className='totalPrice'>
                    <label
                        htmlFor=""
                    >totalprice</label>
                    <input type="number"
                    value={totalPrice}

                    />
                </div>
                <div className='submit-booking'
                    onClick={ShowAvailablePackage}>
                    Submit
                </div>

            </div> */}
            <div>
                {packageData.map((post) => {
                    return (
                        <div className='packageCard' key={post.id}>
                            <div className='package-img'>
                                <img src="https://source.unsplash.com/featured/300x200" alt='' />
                            </div>
                            <div>
                                <h1>{post.PackageName}</h1>
                                <p>{post.PackageDescription}</p>
                                {/* <p>Discription</p> */}
                                <button className='explore'
                                    onClick={() => { handleEplore(post.PackageId) }}
                                // onClick={handleEplore(post.PackageId)}
                                >Explore</button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* <div className='package-wrapper' ref={elementRef}>

            </div> */}
        </>
    )
}

export default Book