// import { use } from 'bcrypt/promises';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './All.css';

const Staff = () => {
    const [agencyDetails, setagencyDetails] = useState([]);


    useEffect(() => {
        Axios.post("http://localhost:5000/api/agency",
        ).then((res) => {
            // console.log(res);
            setagencyDetails(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Agency Name</th>
                    <th>Agency Email</th>
                    {/* <th>UserPassword</th> */}


                </tr>
                {

                    agencyDetails.map(post => (
                        <tr key={post.id}>
                            <td>{post.AgencyName}</td>
                            <td>{post.AgencyEmail}</td>


                        </tr>
                        // <li key={post.id}>{post.UserName}</li>
                    ))
                }
            </table>
        </div>
    )
}

export default Staff