// import "./adduser.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"

const Newpackage = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="up">
          <h1>Add Package</h1>
        </div>
        <div className="down">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Email" />
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Email" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="Email" />
              </div>
              <div className="formInput">
                <label>Date Of Birth</label>
                <input type="date" name="dob" placeholder="Date Of Birth" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" name="address" placeholder="Address" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newpackage