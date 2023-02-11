import React from 'react'
import { Outlet, Link ,useNavigate} from "react-router-dom";

const Adminnav = () => {
    const linkStyle = {
        color: "black",
        textDecoration: "none"
      };
      const navigate = useNavigate();
      return (
        <>
          <nav>
            <Link to="/" style={linkStyle}>
              <h3>VisiTour</h3>
            </Link>
    
            <ul>
              <li>
                <Link onClick={navigate('/dashboard')}>Dashboard</Link>
              </li>
              <li>
                <Link onClick={navigate('/staff')}>Staff</Link>
              </li>
              <li>
                <Link onClick={navigate('/agency')}>Agency</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </>
      )
    };


export default Adminnav