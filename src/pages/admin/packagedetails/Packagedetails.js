import "./packagelist.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Package from "../../../components/admin/packagedatatable/Packagedatatable";

const Packagedetails = () => {
  return (
    <div className="staff-list">
            <Sidebar />
            <div className="staff-listContainer">
                <Navbar />
                <Package />
                <Outlet />
            </div>
        </div>
  )
}

export default Packagedetails