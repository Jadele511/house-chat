import React from "react";
import "./Comment.css";

const Comment = (props: { text: string }) => {
    return (
      <div className="container">
        <div className="com-header">
          <p>Username</p>
        </div>
        <div className="com-content">{props.text}</div>
        <div className="com-footer">Upvote</div>
      </div>
    );
};
export default Comment;