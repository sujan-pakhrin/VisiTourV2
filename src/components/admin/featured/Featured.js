import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <h1 className="featured-title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured-bottom">
        <div className="featuredChart">
          {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
        </div>
        <p className="featured-title">Total sales made today</p>
        <p className="featured-amount">$420</p>
        <p className="featured-desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="featured-summary">
          <div className="featured-item">
            <div className="featured-itemTitle">Target</div>
            <div className="featured-itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="featured-resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-itemTitle">Last Week</div>
            <div className="featured-itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-itemTitle">Last Month</div>
            <div className="featured-itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;