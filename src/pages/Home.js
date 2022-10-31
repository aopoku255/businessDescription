import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
import { BsCardText } from "react-icons/bs";
import fast from "../assets/images/fast.svg";
import write from "../assets/images/write.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <h1>
          Say ‘goodbye’ to the blank busi
          <span className="g-text">ness description</span>
        </h1>
        <p className="hero_text">
          Get your <span className="deep">free account today</span>
        </p>
        <div className="signin_btns d-sm-flex align-items-center justify-content-center">
          <button className="btn_getstarted bg_deep">
            <img src={google} alt="" className="mx-2 google_image" /> Sign up
            with Google
          </button>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none">or</p>
          <button className="btn_getstarted mt-sm-0 mt-2">
            Sign up with email{" "}
            <span className="mx-2">
              <ImArrowRight2 />
            </span>
          </button>
        </div>
        <p className="mt-4 gray_text">No credit card required</p>
        <div className="line mb-4"></div>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={fast} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={write} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={fast} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
