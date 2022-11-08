import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
import { BsCardText } from "react-icons/bs";
import fast from "../assets/images/fast.svg";
import write from "../assets/images/write.svg";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Typed from "react-typed";
import { useEffect, useRef } from "react";
const Home = () => {
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div>
      <div className="hero">
        <h1>
          Say ‘goodbye’ to the blank business
          <span className="g-text"> description</span>
        </h1>
        <p className="hero_text">
          Get your <span className="deep">free account today</span>
        </p>
        <div className="signin_btns d-sm-flex align-items-center justify-content-center">
          <button className="btn_getstarted bg_deep d-block w-100 text-nowrap">
            <img src={google} alt="" className="mx-2 google_image" /> Sign up
            with Google
          </button>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none">or</p>
          <button className="btn_getstarted mt-sm-0 mt-2 d-block w-100">
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
      <div className="text-center large_para">
        <p>
          Experience the full power of an AI content generator that{" "}
          <span className="large_bold">
            delivers premium results in seconds.
          </span>
        </p>
      </div>
      <div className="large_line_height">
        <h1 className="large_num text-center">1,500,000+</h1>
        <div className="text-center text_with_logo">
          <p>
            professionals & teams choose{" "}
            <Link to="/" className="navbar_brand">
              <img src={logo} alt="" className="mb-2" width={120} />
            </Link>
          </p>
        </div>
        <div>
          <div className="about_large_text text-center">
            <div>Bdesc.ai helps</div>
            <span className="about_large_text_color">
              <Typed
                strings={[
                  "Business Owners",
                  "Startup teams",
                  "Marketing Managers",
                ]}
                typeSpeed={50}
                showCursor={false}
                loop={true}
                smartBackspace={true}
                backSpeed={40}
                backDelay={3000}
              ></Typed>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
