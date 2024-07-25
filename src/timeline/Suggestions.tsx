import React, { useState } from "react";
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
  const [clicked, setClicked] = useState<boolean>(true);
  const click = () => {
    setClicked(clicked ? false : true);
  }
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
            {clicked ? (<button className="follow__button" onClick={click}>Follow</button>) : (<button className="follow__button" onClick={click}>UnFollow</button>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
