import './staffdatatable.css'
import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Staffdatatable = () => {
    
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    // const [staffDetails, setStaffDetails] = useState([]);
    const [staff, setData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        if (searchTerm) {
          Axios.post(`http://localhost:5000/api/searchStaff?searchTerm=${searchTerm}`)
            .then(response => {
              setSearchData(response.data);
            });
        } else {
          Axios.post('http://localhost:5000/api/staff')
            .then(response => {
              setData(response.data);
            });
        }
      }, [searchTerm]);
    
      const handleChange = event => {
        setSearchTerm(event.target.value);
      };
    
      const tableData = searchTerm ? searchData : staff || [];

    // useEffect(() => {
    //     Axios.post("http://localhost:5000/api/staff",
    //     ).then((res) => {
    //         // console.log(res);
    //         setStaffDetails(res.data);
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])
    
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


    return (

        <div className="staff-data">
            <div className='staff-datatable'>
                <div className="title-staff">
                    <div className="search-staff">
                        <input type="text" placeholder='Search Staff' value={searchTerm} onChange={handleChange}  />
                        <SearchOutlinedIcon />
                    </div>
                    <div className="addstaff">
                        <Link to='/staff/new' className='add-new-staff'>
                            Add New
                        </Link>
                    </div>
                </div>
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
                        {tableData.map((post) => (
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
                <div className="page-desc">
                    {/* <div>
                        <span>Rows per page:</span>
                        <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </div> */}
                    {/* <div>
                        <span>Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}</span>
                        <button onClick={() => handleChangePage(null, currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <button onClick={() => handleChangePage(null, currentPage + 1)} disabled={currentPage === Math.ceil(data.length / rowsPerPage)}>Next</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Staffdatatable