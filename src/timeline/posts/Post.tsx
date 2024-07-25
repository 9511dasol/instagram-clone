import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface Post {
  user: string;
  postImage: string;
  likes: number;
  timestamp: string;
}

function Post({ user, postImage, likes, timestamp }: Post) {
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
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__footerIcons">
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
        Liked by {Liked} people
      </div>
    </div>
  );
}

export default Post;
