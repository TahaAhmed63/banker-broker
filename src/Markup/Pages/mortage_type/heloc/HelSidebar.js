import React, { useState } from "react";
import "./HelSideBar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

const HelSideBar = () => {
  const location = useLocation();
  const mort =
    location.pathname === "/mortage_info"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100 ";
  const pers =
    location.pathname === "/personal_info"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const cobo =
    location.pathname === "/Co-Borrowers"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const inc =
    location.pathname === "/Income"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const ass =
    location.pathname === "/assets"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const real =
    location.pathname === "/realstate"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const Decl =
    location.pathname === "/declaration"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const demo =
    location.pathname === "/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const credit =
    location.pathname === "/credit"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const review =
    location.pathname === "/review"
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
            ? "col-md-2 ps-0 sidebarmain fixed_side sidebar-nav open "
            : "d-none"
        }
      >
        <div className="px-4 my-3">
          <Link to="#">Dashboard</Link>
          <Progress percent={50} status="actice" />
        </div>
        <div className="helgreyline"></div>
        <div className={mort}>
          <div className="sidecircle">
            {location.pathname === "/mortage_info" ? (
              <FaCheckCircle className="checkicon" />
            ) : null}
          </div>
          <div className="mort grey_color fw-500">Mortgage</div>
          <div></div>
        </div>

        <div className={pers}>
          <div className="sidecircle">
            {location.pathname === "/personal_info" ? (
              <>
                <FaCheckCircle className="checkicon" />
              </>
            ) : null}
          </div>
          <div className="mort grey_color fw-500">Personal Info</div>
          <div></div>
        </div>

        <div className={cobo}>
          <div className="sidecircle">
            <FaCheckCircle className="checkicon" />
          </div>
          <div className="mort grey_color fw-500">Co-Borrowers</div>
          <div></div>
        </div>

        <div className={inc}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Income</div>
          <div></div>
        </div>

        <div className={ass}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Assets</div>
          <div></div>
        </div>

        <div className={real}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Real State</div>
          <div></div>
        </div>

        <div className={Decl}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Declaration</div>
          <div></div>
        </div>

        <div className={demo}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Demographic</div>
          <div></div>
        </div>

        <div className={credit}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Credit</div>
          <div></div>
        </div>

        <div className={review}>
          <div className="sidecircle">
            {/* <FaCheckCircle className="checkicon" /> */}
          </div>
          <div className="mort grey_color fw-500">Review and Submit</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HelSideBar;
