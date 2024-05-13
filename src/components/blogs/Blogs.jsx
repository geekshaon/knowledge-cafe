import React from "react";
import "./Blogs.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fa-bookmark} from "@awesome.me/kit-KIT_CODE/icons";

const Blogs = (props) => {
  const { title, blogImg, profileImg, Author, date, ReadTime } = props.blog;
  const handleTime = props.handleTime;
  const handleBookmark = props.handleBookmark;
  // console.log(props.blog);
  return (
    <div>
      <div className="blogInfo">
        <img src={blogImg} alt="" />
        <div className="author">
          <div className="author-left">
            <img src={profileImg} alt="" />
            <div className="auth-info">
              <h4>{Author}</h4>
              <p>{date}</p>
            </div>
          </div>
          <div className="author-right"></div>
          <p>
            {ReadTime} to Read{" "}
            <span
              onClick={() => handleBookmark({ title })}
              className="bookmark"
            >
              Bookmark
            </span>
          </p>
        </div>
        <h2>{title}</h2>
        <button onClick={() => handleTime({ ReadTime })} className="markbtn">
          <p>Mark as Read</p>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
