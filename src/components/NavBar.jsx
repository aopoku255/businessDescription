import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { BsList, BsFillTriangleFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { Collapse } from "reactstrap";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center flex_height">
        <Link href="font-bold" className="navbar_brand">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="navbar_items">
          <li className="nav_links">
            <Link to="/" className="links">
              Templates{" "}
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <div className="triangle">
              <BsFillTriangleFill />
            </div>

            <ul className="nav_below shadow-lg">
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Executive summary
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Company description
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Market analysis
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Organization
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Goods and services
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Marketing
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Financial projections
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Resources
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <div className="triangle">
              <BsFillTriangleFill />
            </div>
            <ul className="nav_below shadow-lg">
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Executive summary
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Company description
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Market analysis
                </Link>
              </li>
            </ul>
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
          <IoMenu size={20} onClick={handleClick} />
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <nav className="collapse_card card border-0 mt-3 d-lg-none">
          <div className="collapse_container">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="">Template</Link>
              <Link to="">Template</Link>
            </div>
          </div>
        </nav>
      </Collapse>
    </nav>
  );
};

export default NavBar;
