import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import { posts, suggest } from "./Ingredients";


function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          {posts.map((post, idx) => (
            <Post
              key={idx}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions suggest={suggest} />
      </div>
    </div>
  );
}

export default Timeline;
