import './navbar.css';
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="wrapper">
          {/* <div className="search">
            <input type="text" placeholder='Search' />
            <SearchOutlinedIcon />
          </div> */}
          <div className="items">
            <div className="item">
              <NotificationsIcon className='admin-icon' />
              <div className="noti-counter">9+</div>
            </div>
            <div className="item">
              <AccountCircleIcon className='admin-icon' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar