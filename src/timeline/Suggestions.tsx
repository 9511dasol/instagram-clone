import "./Suggestions.css";
import Suggperson from "./Suggperson";
import { SuggestionsProps } from "./Ingredients";

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
