import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.css'
import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="admin-top">
                <span className='logo'>Visitour</span>
            </div>
            <hr />
            <div className="admin-center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <Link className='link' to="/admin1">
                            <DashboardIcon className='admin-icon' />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">Details</p>
                    <li>
                        <Link className='link' to="/admin1/users">
                            <PersonIcon className='admin-admin-icon' />
                            <span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin1/staff1" className='link'>
                            <GroupsIcon className='admin-icon' />
                            <span>Staff</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin1/agency1" className='link'>
                            <GroupsIcon className='admin-icon' />
                            <span>Agency</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin1/package1" className='link'>
                            <GroupsIcon className='admin-icon' />
                            <span>Package</span>
                        </Link>
                    </li>
                    <li>
                        <SettingsIcon className='admin-icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AccountCircleIcon className='admin-icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='admin-icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">Color Option</div>
            <Outlet />
        </div>
    )
}

export default Sidebar