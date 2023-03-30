import "./newstaff.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
const Newstaff = () => {
  return (
    <div className="new-staff">
      <Sidebar />
      <div className="newstaffContainer">
        <Navbar />
        <div className="staff-up">
          <h1>Add Staff</h1>
        </div>
        <div className="staff-down">
          <div className="staff-left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="" />
          </div>
          <div className="staff-right">
            <form>
              <div className="staff-formInput">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Email" />
              </div>
              <div className="staff-formInput">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Email" />
              </div>
              <div className="staff-formInput">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="staff-formInput">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="Email" />
              </div>
              <div className="staff-formInput">
                <label>Date Of Birth</label>
                <input type="date" name="dob" placeholder="Date Of Birth" />
              </div>
              <div className="staff-formInput">
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

export default Newstaff