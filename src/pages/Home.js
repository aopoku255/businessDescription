import React from "react";
import "../assets/styles/home.css";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImInsertTemplate } from "react-icons/im";
import { FaBusinessTime } from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="text-capitalize">
          Start, Grow and Scale Your Business{" "}
          <span className="g-text">Faster</span>
        </h1>
        <p className="home_para my-5">
          Bdesc.ai Business Plans works with international companies from
          Startups to Fortune 500 across a diverse range of industries to
          prepare stunning business plans, pitch decks, and investment
          materials.
        </p>
        <div className="signin_btns pb-5 d-sm-flex align-items-center justify-content-center">
          <button className="btn_getstarted  bg_deep d-block w-100 text-nowrap">
            <RiCustomerService2Fill className="mx-2" size={20} />
            Get A Quote
          </button>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none"></p>
          <button className="btn_getstarted text-nowrap mt-sm-0 mt-2 d-block w-100">
            {/* <ImInsertTemplate className="mx-2" size={30} /> */}
            View Sample{" "}
            <span className="mx-2">
              <ImArrowRight2 size={20} />
            </span>
          </button>
        </div>
      </div>

      <div className="">
        <h1 className="text-center headers mb-3">Professional Services</h1>
        <p className="home_para">
          Bdesc.ai Business Plans offers a variety of services to help companies
          navigate market research, strategic planning, and the capital raising
          process.
        </p>
        <div className="container">
          <div className="row gy-3 mt-5">
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <SiMicrostrategy size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Startegic Advisory</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <FaBusinessTime size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Business Plans</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <GiTeacher size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Pitch Desk</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="row gy-3 mt-sm-5">
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <GiTeacher size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Pitch Desk</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <FaBusinessTime size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Business Plans</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <SiMicrostrategy size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Startegic Advisory</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="brands_container">
            <div className="line mx-auto move_down"></div>
            <h1 className="text-center headers mb-3 w-50 mx-auto">
              Outstanding Quality Tangible Results
            </h1>
            <p className="home_para mt-5">
              Learn why the leading executives and startup founders consistently
              trust Pro Business Plans.
            </p>
            <div className="row mt-5">
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <HiOutlineUserGroup
                      size={30}
                      style={{ color: "#47BEB9" }}
                    />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    Expert Team
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <AiOutlineFileSearch
                      size={30}
                      style={{ color: "#47BEB9" }}
                    />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    RELIABLE RESEARCH
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <TbEdit size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    FULLY CUSTOM
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="example_templates">
          <h1 className="text-center headers mb-3 w-50 mx-auto">
            Being an Industry Leader is Earned, Not Given.
          </h1>
          <p className="home_para mt-4">
            Bdesc.ai Business Plans offers a variety of services to help
            companies navigate market research, strategic planning, and the
            capital raising process.
          </p>
          <div className="row mt-5">
            <div className="col-sm-3">
              <div className="rounded-circle mx-auto">
                <GiReceiveMoney size={30} style={{ color: "#47BEB9" }} />
              </div>
              <div className="fund_cont">
                <h3 className="text-center text-uppercase fund">
                  ${" "}
                  <span>
                    <CountUp start={0} end={1000} duration={3} />
                  </span>
                  M+
                </h3>
                <p className="fund_text">Funding Raised</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="rounded-circle mx-auto">
                <FaChalkboardTeacher size={30} style={{ color: "#47BEB9" }} />
              </div>
              <div className="fund_cont">
                <h3 className="text-center text-uppercase fund">
                  ${" "}
                  <span>
                    <CountUp start={0} end={1000} duration={3} />
                  </span>
                  K+
                </h3>
                <p className="fund_text">BUSINESS CONSULTATIONS</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="rounded-circle mx-auto">
                <TfiWrite size={30} style={{ color: "#47BEB9" }} />
              </div>
              <div className="fund_cont">
                <h3 className="text-center text-uppercase fund">
                  ${" "}
                  <span>
                    <CountUp start={0} end={1000} duration={3} />
                  </span>
                  K+
                </h3>
                <p className="fund_text">WRITTEN BUSINESS PLANS</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="rounded-circle mx-auto">
                <FaPeopleArrows size={30} style={{ color: "#47BEB9" }} />
              </div>
              <div className="fund_cont">
                <h3 className="text-center text-uppercase fund">
                  ${" "}
                  <span>
                    <CountUp start={0} end={1000} duration={3} />
                  </span>
                  K+
                </h3>
                <p className="fund_text">CONSULTING HOURS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
