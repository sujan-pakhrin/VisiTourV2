// import { use } from 'bcrypt/promises';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const Staff = () => {
    const [packageDetails, setpackageDetails] = useState([]);


    useEffect(() => {
        Axios.post("http://localhost:5000/api/package",
        ).then((res) => {
            // console.log(res);
            setpackageDetails(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>PackageName</th>
                    <th>Added Date</th>
                    {/* <th>UserPassword</th> */}


                </tr>
                {

                    packageDetails.map(post => (
                        <tr key={post.id}>
                            <td>{post.PackageName}</td>
                            <td>{post.AddedDate}</td>


                        </tr>
                        // <li key={post.id}>{post.UserName}</li>
                    ))
                }
            </table>
        </div>
    )
}

export default Staff