import React, { useState } from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
import Suggperson from "./Suggperson";
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
          <Suggperson username={username} relation={relation} idx = {idx}/>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
