import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Suggperson.css"
interface recommend{
    idx:number;
    username: string;
    relation: string;
}

function Suggperson({username, relation, idx}:recommend) {
  const [clicked, setClicked] = useState<boolean>(true);
  const click = () => {
    setClicked(clicked ? false : true);
  };
  return (
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
      {clicked ? (
        <button className="follow__button" onClick={click}>
          Follow
        </button>
      ) : (
        <button className="follow__button" onClick={click}>
          UnFollow
        </button>
      )}
    </div>
  );
}

export default Suggperson;
