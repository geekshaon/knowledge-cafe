import React from "react";
import "./Blogs.css";

const Blogs = (props) => {
  const { title, blogImg } = props.blog;
  return (
    <div>
      <div className="blogInfo">
        <img src={blogImg} alt="" />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Blogs;
