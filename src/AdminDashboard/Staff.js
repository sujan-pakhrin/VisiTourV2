// import { use } from 'bcrypt/promises';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const Staff = () => {
    const [staffDetails, setStaffDetails] = useState([]);


    useEffect(() => {
        Axios.post("http://localhost:5000/api/staff",
        ).then((res) => {
            // console.log(res);
            setStaffDetails(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>UserName</th>
                    <th>UserEmail</th>
                    {/* <th>UserPassword</th> */}
                    <th>UserName</th>
                    <th>UserDOB</th>
                </tr>
                {

                    staffDetails.map(post => (
                        <tr key={post.id}>
                            <td>{post.UserName}</td>
                            <td>{post.UserEmail}</td>
                            {/* <td>{post.UserPassword}</td> */}
                            <td>{post.UserName}</td>
                            <td>{post.UserDOB}</td>
                        </tr>
                        // <li key={post.id}>{post.UserName}</li>
                    ))
                }
            </table>
        </div>
    )
}

export default Staff