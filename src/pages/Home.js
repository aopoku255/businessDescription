import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <h1>
          Say ‘goodbye’ to the blank business{" "}
          <span className="g-text">description</span>
        </h1>
        <p className="hero_text">
          Get your <span className="deep">free account today</span>
        </p>
        <div className="signin_btns d-sm-flex align-items-center justify-content-center">
          <div className="btn_getstarted bg_deep">
            <img src={google} alt="" className="mx-2 google_image" /> Sign up
            with Google
          </div>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none">or</p>
          <div className="btn_getstarted mt-sm-0 mt-2">
            Sign up with email{" "}
            <span className="mx-2">
              <ImArrowRight2 />
            </span>
          </div>
        </div>
        <p className="mt-4 gray_text">No credit card required</p>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Home;
