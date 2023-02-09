import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  const linkStyle = {
    color: "black",
    textDecoration: "none"
  };
  return (
    <>
      <nav>
        <Link to="/" style={linkStyle}>
          <h3>VisiTour</h3>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;