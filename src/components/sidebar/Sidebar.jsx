import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ParkIcon from '@mui/icons-material/Park';
import SpaIcon from '@mui/icons-material/Spa';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import ReviewsIcon from '@mui/icons-material/Reviews';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CropDoc Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/disease" style={{ textDecoration: "none" }}>
            <li>
              <SpaIcon className="icon" />
              <span>Disease</span>
            </li>
          </Link>
          <Link to="/treatment" style={{ textDecoration: "none" }}>
          <li>
            <ParkIcon className="icon" />
            <span>Treatments</span>
          </li>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
          <li>
            <LocationOnIcon className="icon" />
            <span>Locations</span>
          </li>
          </Link>
          <Link to="/record" style={{ textDecoration: "none" }}>
          <li>
            <InsertDriveFileIcon className="icon" />
            <span>User Records</span>
          </li>
          </Link>
          <Link to="/instructor" style={{ textDecoration: "none"}}>
          <li>
            <PeopleAltIcon className="icon" />
            <span>Professionals</span>
          </li>
          </Link>
          <Link to="/review" style={{ textDecoration: "none"}}>
          <li>
            <ReviewsIcon className="icon" />
            <span>Feedbacks</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
