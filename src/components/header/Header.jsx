import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="logo">rexBlog</div>
        <div className="profile">
          <img
            src="https://rexshaon.com/wp-content/uploads/2024/05/profile.png"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
