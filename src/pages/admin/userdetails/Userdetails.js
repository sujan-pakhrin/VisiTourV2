
import "./userlist.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Datatable from "../../../components/admin/userdatatable/Userdatatable";

const List = () => {
    return (
        <>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <Datatable/>
                    <Outlet/>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default List