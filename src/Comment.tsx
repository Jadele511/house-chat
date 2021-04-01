import React from "react";
import "./Comment.css";

const Comment = (props: { text: string }) => {
  return (
    <div className="comment">
      <div className="header">
        <div className="vote">
          <button className="up-vote">&#9650;</button>
          <button className="down-vote">&#9660;</button>
        </div>
        <div className="metadata" >
            <p className="author">Username</p>
            <p className="num-vote">18 votes : 3 days ago</p>
        </div>
      </div>
      <div className="content">
        <p>{props.text}</p>
      </div>
      <div className="footer">
        <button>Reply</button>
      </div>
    </div>
  );
};
export default Comment;
