import React, { useEffect, useState } from "react";
import "./Home.css";
import Blogs from "../blogs/Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("blog.json").then((res) => res.json().then((data) => setBlogs(data)));
  }, []);

  const handleTime = (t) => {
    setTime(time + t.ReadTime);
  };
  const handleBookmark = (mark) => {
    const exit = bookmark.find((blog) => blog === mark.title);
    if (exit) {
      window.alert("This Blog Already Added as Bookmark");
    } else {
      setBookmark([...bookmark, mark.title]);
    }
  };
  return (
    <div>
      <div className="main-container">
        <div className="blog-container">
          {blogs.map((blog) => (
            <Blogs
              key={blog.id}
              blog={blog}
              handleTime={handleTime}
              handleBookmark={handleBookmark}
            ></Blogs>
          ))}
        </div>
        <div className="sidebar">
          <div className="readTime">
            <h4>Total Read Time {time} Minute</h4>
          </div>
          <div className="bookMark">
            <h2>Bookmark</h2>
            {bookmark.map((tt) => (
              <p>{tt}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
