import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Militry from "./Income/Militry";
import Base from "./Income/Base";
import Other from "./Income/Other";
import Header from "../../../../Layout/Header";
import HelSideBar from "../HelSidebar";
import ProfileInfo from "../../Profile/ProfileInfo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function LanIncome() {
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

  const [panel, setpanel] = useState("");
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
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

          {panel === "" ? (
            <>
              <div
                className={
                  isOpen === true
                    ? "col-md-8 open he my-5 ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he my-5 ps-lg-5"
                    : ""
                }
              >
                <div className="row">
                  <h2 className="mt-4">INCOME</h2>
                  <p className="fw-semibold my-3">
                    No income has been added yet
                  </p>
                  <div className="col-md-8 mt-5">
                    <p className="fw-semibold">Total Income</p>
                    <select
                      className="form-select form-select-lg mb-3 form-control py-2"
                      onChange={(e) => {
                        setpanel(e.target.value);
                      }}
                    >
                      <option selected>ADD INCOME</option>
                      <option value="base">I am currently Employed</option>
                      <option value="militry">I receive Military Income</option>
                      <option value="other">I have other income sources</option>
                    </select>

                    <div className="mt-5">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          No income
                        </label>
                      </div>
                      <label className="text-secondary h6 mt-4">
                        Next is <span className="text-dark">Assets</span>
                      </label>{" "}
                      <br />
                      <button className="btn btn-primary rounded-0 mt-2">
                        Save And Continue &nbsp;
                        <AiOutlineArrowRight />
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {panel === "base" ? (
            <>
              <div
                className={
                  isOpen === true
                    ? "col-md-8 open he my-5 ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he my-5 ps-lg-5"
                    : ""
                }
              >
                <Base />
              </div>
            </>
          ) : null}
          {panel === "militry" ? (
            <>
              <div
                className={
                  isOpen === true
                    ? "col-md-8 open he my-5 ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he my-5 ps-lg-5"
                    : ""
                }
              >
                <Militry />
              </div>
            </>
          ) : null}
          {panel === "other" ? (
            <>
              <div
                className={
                  isOpen === true
                    ? "col-md-8 open he my-5 ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he my-5 ps-lg-5"
                    : ""
                }
              >
                <Other />
              </div>
            </>
          ) : null}
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default LanIncome;
