import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { BsList } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center flex_height">
        <Link href="font-bold" className="navbar_brand">
          <img src={logo} alt="" className="logo" />
        </Link>

        <ul className="navbar_items">
          <li className="nav_links">
            <Link to="/" className="links">
              Templates
            </Link>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Resources
            </Link>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Weekly Demos
            </Link>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Pricing
            </Link>
          </li>
        </ul>

        <div className="get_started">
          <Link href="" className="navbar_login">
            Login
          </Link>
          <button className="btn_getstarted">Write business plan now</button>
        </div>
        <div className="d-sm-none">
          <BsList size={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
