import "./stafflist.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Staffdata from "../../../components/admin/staffdatatable/Staffdatatable";

const Staffdetails = () => {
    return (
        <div className="staff-list">
            <Sidebar />
            <div className="staff-listContainer">
                <Navbar />
                <Staffdata />
                <Outlet />
            </div>
        </div>
    )
}

export default Staffdetails