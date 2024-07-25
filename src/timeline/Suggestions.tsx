import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
interface suggestion {
  username: string;
  relation: string;
}

interface SuggestionsProps {
  suggest: suggestion[];
}

function Suggestions({ suggest }: SuggestionsProps) {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        {suggest.map(({ username, relation }, idx) => (
          <div className="suggestions__username" key={idx}>
            <div className="username__left">
              <span className="avatar">
                <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
              </span>
              <div className="username__info">
                <span className="username">{username}</span>
                <span className="relation">{relation}</span>
              </div>
            </div>
            <button className="follow__button">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
