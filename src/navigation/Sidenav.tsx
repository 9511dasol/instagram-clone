import React, { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { Avatar } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { auth } from "../firebase";
import { logoutUser, setLoading } from "../features/userSlice";
import { signOut } from "firebase/auth";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    setHide(hide ? false : true);
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="insta__logo">
        <button className="sidenav__button">
          <InstagramIcon className="insta__logo" />
        </button>
      </div>

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>홈</span>
        </button>
        <button className="sidenav__button" id="search">
          <SearchIcon />
          <span>검색</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>탐색 탭</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>릴스</span>
        </button>
        <button className="sidenav__button" id="dm">
          <ChatIcon />
          <span>메세지</span>
        </button>
        <button className="sidenav__button" id="liked">
          <FavoriteBorderIcon />
          <span>알림</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>만들기</span>
        </button>
        <button className="sidenav__button" id="profile">
          <Avatar sx={{ width: 24, height: 24 }}>
            {user.userName?.charAt(0).toUpperCase()}
          </Avatar>
          <span>프로필</span>
        </button>
      </div>
      <div className="sidenav__more">
        <div
          className="hide"
          style={{ border: hide ? "0.1px solid gray" : "0" }}
        >
          {hide ? (
            <>
              <div onClick={handleLogout} className="hide__button">
                <SettingsSuggestOutlinedIcon />
                <span>설정</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <DoneAllOutlinedIcon />
                <span>내 활동</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <BookmarkBorderIcon />
                <span>저장됨</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <Brightness6Icon />
                <span>모드 전환</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <ReportGmailerrorredIcon />
                <span>문제 신고</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <span>계정 전환</span>
              </div>
              <div onClick={handleLogout} className="hide__button">
                <span>로그아웃</span>
              </div>
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
