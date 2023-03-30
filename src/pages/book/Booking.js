import React, { useState } from 'react'
import './booking1.css'

const Booking = () => {
    // const navigate = useNavigate();
    const [bookDate, setBookDate] = useState('')
    const [noOfAdult, setNoOfAdult] = useState('')

    const [noOfChild, setNoOfChild] = useState('')

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
    return (
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
                // value={totalPrice}
                />
            </div>
            <div className='additional-service'>
                <label htmlFor="">Any Aditional Service</label>
                <input 
                type="textarea"
              
                />
            </div>
            <div className='submit-booking'>
                <button>Book</button>
            </div>

        </div>
    )
}

export default Booking