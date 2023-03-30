
import Navbar from '../../../components/admin/navbar/Navbar';
// import './home.css'
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Widget from '../../../components/admin/widget/Widget';
import './admin.css'
import Featured from '../../../components/admin/featured/Featured';
import Chart from '../../../components/admin/chart/Chart';
import Table from '../../../components/admin/table/Table';
// import { Table } from '@mui/material';
const Home = () => {
  return (
    <div className="home-admin">
      <Sidebar />
      <div className="home-admin-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home;