import './packagedatatable.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Packagedatatable = () => {
    const data = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 33, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 44, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 55, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 66, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 77, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 80, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 95, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 111, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 122, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 334, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 564, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 545, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 116, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 117, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 118, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 123, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 114, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const rowsToShow = data.slice(startIndex, endIndex);

    
  return (
    <div className="staff-data">
            <div className='staff-datatable'>
                <div className="title-staff">
                    <div className="search-staff">
                        <input type="text" placeholder='Search Package' />
                        <SearchOutlinedIcon />
                    </div>
                    <div className="addstaff">
                        <Link to='/package/new' className='add-new-staff'> 
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
                        {rowsToShow.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.age}</td>
                                <td><div className='button'><button>Update</button> <button>Delete</button></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="page-desc">
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
                </div>

            </div>
        </div>
  )
}

export default Packagedatatable