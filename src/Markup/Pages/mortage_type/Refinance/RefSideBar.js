import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./RefSideBar.css";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";

const RefSideBar = () => {
  const location = useLocation();
  const mort =
    location.pathname === "/ref/mortageinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100 ";
  const pers =
    location.pathname === "/ref/personalinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const cobo =
    location.pathname === "/ref/Co-Borrowers"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const inc =
    location.pathname === "/ref/income"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const ass =
    location.pathname === "/ref/assets"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const real =
    location.pathname === "/ref/realstate"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const Decl =
    location.pathname === "/ref/declaration"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const demo =
    location.pathname === "/ref/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const credit =
    location.pathname === "/ref/credit"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const refreviewandsubmit =
    location.pathname === "/ref/refreviewandsubmit"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      console.log(isOpen, "hui");
    }
    console.log(isOpen, "huihui");
  };

  return (
    <>
      <FaBars
        class=" none"
        onClick={() => {
          handleToggle();
        }}
      />

      <FaBars
        class=" block"
        id="topnav-hamburger-icon"
        onClick={() => {
          handleToggle();
        }}
      />
      <div
        className={
          isOpen === true
            ? "col-md-2 ps-0  fixed_side sidebar-nav open sidebarmain"
            : "d-none"
        }
      >
        <div className="px-4 my-3">
          <Link to="#">Dashboard</Link>
          <Progress percent={50} status="actice" />
        </div>
        <div className="refgreyline"></div>
        <Link to={"/ref/mortageinfo"}>
          <div className={mort}>
            <div className="sidecircle">
              {location.pathname === "/ref/mortageinfo" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Mortgage</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/personalinfo"}>
          <div className={pers}>
            <div className="sidecircle">
              {location.pathname === "/ref/personalinfo" ? (
                <>
                  <FaCheckCircle className="checkicon" />
                </>
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Personal Info</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/Co-Borrowers"}>
          <div className={cobo}>
            <div className="sidecircle">
              {location.pathname === "/ref/Co-Borrowers" ? (
                <>
                  <FaCheckCircle className="checkicon" />
                </>
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Co-Borrowers</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/income"}>
          <div className={inc}>
            <div className="sidecircle">
              {location.pathname === "/ref/income" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Income</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/assets"}>
          <div className={ass}>
            <div className="sidecircle">
              {location.pathname === "/ref/assets" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}{" "}
            </div>
            <div className="mort grey_color fw-500">Assets</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/realstate"}>
          <div className={real}>
            <div className="sidecircle">
              {location.pathname === "/ref/realstate" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Real State</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/declaration"}>
          <div className={Decl}>
            <div className="sidecircle">
              {location.pathname === "/ref/declaration" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Declaration</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/demographic"}>
          <div className={demo}>
            <div className="sidecircle">
              {location.pathname === "/ref/demographic" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Demographic</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/credit"}>
          <div className={credit}>
            <div className="sidecircle">
              {location.pathname === "/ref/credit" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Credit</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/ref/refreviewandsubmit"}>
          <div className={refreviewandsubmit}>
            <div className="sidecircle">
              {location.pathname === "/ref/refreviewandsubmit" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Review and Submit</div>
            <div></div>
          </div>
        </Link>
        {/* <Link to={"/review"}>
          <div className={review}>
            <div className="sidecircle">
              {location.pathname === "/review" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Review and Submit</div>
            <div></div>
          </div>
        </Link> */}
      </div>
    </>
  );
};

export default RefSideBar;
