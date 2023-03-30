import './userdatatable.css'
import React, { useState,useEffect } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', flex: 1 },
//   { field: 'lastName', headerName: 'Last name', flex: 1 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     flex: 1.5,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];



const Datatable = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState();

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setCurrentPage(1);
    // };

    // const handleChangePage = (event, newPage) => {
    //     setCurrentPage(newPage);
    // };

    // const startIndex = (currentPage - 1) * rowsPerPage;
    // const endIndex = startIndex + rowsPerPage;
    // const rowsToShow = data.slice(startIndex, endIndex);
    useEffect(() => {
        Axios.get("http://localhost:5000/api/user",
        ).then((res) => {
            // console.log(res);
            setUser(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className="data">
            <div className='datatable'>
                <div className="title-user">
                    <div className="search-user">
                        <input type="text" placeholder='Search User' />
                        <SearchOutlinedIcon />
                    </div>
                    <div className="adduser">
                        <Link to='/users/new' className='add-new-user'>
                            Add New
                        </Link>
                    </div>
                </div>
                <table>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((post) => (
                            <tr key={post.id}>
                                <td>{post.UserId}</td>
                                <td>{post.UserName}</td>
                                <td>{post.UserEmail}</td>
                                <td>{post.UserDOB}</td>
                                <td><div className='button'><button>Update</button> <button>Delete</button></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </table>
                {/* <div className="page-desc">
                    <div>
                        <span>Rows per page:</span>
                        <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <div>
                        <span>Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}</span>
                        <button onClick={() => handleChangePage(null, currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <button onClick={() => handleChangePage(null, currentPage + 1)} disabled={currentPage === Math.ceil(data.length / rowsPerPage)}>Next</button>
                    </div>
                </div> */}

            </div>
        </div>
    );
};


export default Datatable;
