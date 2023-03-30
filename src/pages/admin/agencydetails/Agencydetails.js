import "./agencylist.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Agencydata from "../../../components/admin/agencydatatable/Agencydatatable";

const AgencyDetails = () => {
  return (
    

        <div className="staff-list">
            <Sidebar />
            <div className="staff-listContainer">
                <Navbar />
                <Agencydata />
                <Outlet />
            </div>
        </div>
  )

}

export default AgencyDetails