import React, { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { auth } from "../firebase";
import { logoutUser, setLoading } from "../features/userSlice";
import { signOut } from "firebase/auth";

function Sidenav() {
  const user = useSelector((state: RootState) => state.data.user);
  const [hide, setHide] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(setLoading(false));
    signOut(auth);
  };
  const show = () => {
    setHide(hide? false :true);
  };
  return (
    <div className="sidenav"> 
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button className="sidenav__button" id="profile">
          <Avatar sx={{ width: 24, height: 24 }}>
            {user.userName?.charAt(0).toUpperCase()}
          </Avatar>
          <span>Profile</span>
        </button>
      </div>
      <div className="sidenav__more">
        <div className="hide">
          {hide ? (
            <>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
            </>
          ) : (
            <></>
          )}
        </div>

        <button onClick={show} className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
