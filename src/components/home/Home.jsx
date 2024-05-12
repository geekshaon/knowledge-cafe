import React, { useEffect, useState } from "react";
import "./Home.css";
import Blogs from "../blogs/Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json").then((res) => res.json().then((data) => setBlogs(data)));
  }, []);
  return (
    <div>
      <div className="main-container">
        <div className="blog-container">
          {blogs.map((blog) => (
            <Blogs key={blog.id} blog={blog}></Blogs>
          ))}
        </div>
        <div className="sidebar">
          <h3>Sidebar</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
