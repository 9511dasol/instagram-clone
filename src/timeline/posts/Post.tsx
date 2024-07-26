import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Posts as post } from "../Ingredients";

function Post({ user, postImage, likes, timestamp }: post) {
  const [Liked, setLiked] = useState<number>(likes);
  const [cLiked, setCLiked] = useState<boolean>(false);
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar sx={{ marginRight: 1 }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>
          <span style={{ color: "white", marginRight: 1 }}>{user}</span> •{" "}
          <span style={{ marginLeft: 2 }}>{timestamp}</span>
        </div>
        <MoreHorizIcon style={{ cursor: "pointer" }} onClick={() => alert("준비중")} />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__footerIcon">
            <button
              onClick={() => {
                if (Liked === likes) {
                  setLiked(Liked + 1);
                  setCLiked(true);
                } else {
                  setLiked(Liked - 1);
                  setCLiked(!true);
                }
              }}
              style={{
                background: 0,
                color: "white",
                border: 0,
                paddingTop: "4px",
              }}
            >
              {cLiked ? (
                <FavoriteIcon className="postIcon" />
              ) : (
                <FavoriteBorderIcon className="postIcon" />
              )}
            </button>
            <button
              style={{
                background: 0,
                color: "white",
                border: 0,
                paddingTop: "4px",
              }}
            >
              <ChatBubbleOutlineIcon className="postIcon" />
            </button>
            <button
              style={{
                background: 0,
                color: "white",
                border: 0,
                paddingTop: "4px",
              }}
            >
              <TelegramIcon className="postIcon" />
            </button>
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        좋아요 {Liked}개
      </div>
    </div>
  );
}

export default Post;
