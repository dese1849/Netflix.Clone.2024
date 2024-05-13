import React from "react";
import "./Header.css";
import Logo from "../../assests/images/lgo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="Header_Outer_Container">
      <div className="Header_Container">
        <div className="Header_left">
          <ul>
            <li>
              <img src={Logo} alt="netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My Lists</li>
            <li>Browse by Lnaguages</li>
          </ul>
        </div>

        <div className="Header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>

            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
