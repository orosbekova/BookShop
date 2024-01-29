import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-content">
            <div className="link">
              <NavLink to="/link">Bookshop</NavLink>
              <NavLink to="/logo">Categories</NavLink>
              <NavLink to="/content">Recent</NavLink>
              <NavLink to="/books">Books</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
