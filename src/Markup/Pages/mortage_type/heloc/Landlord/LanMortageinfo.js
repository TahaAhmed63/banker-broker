/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import HelSideBar from "../HelSidebar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";


const LanMortageinfo = () => {

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
                class={
                isOpen === true
                ?" none" :"block"}
                style={{paddingRight:"1149px"}}
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

<FaBars
                class=" block"
                style={{ marginLeft: "153px", marginTop: "13px" }}
                id="topnav-hamburger-icon"
                onClick={() => {
                  handleToggle();
                }}
              />

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
              <div className="col-md-12">
                <div className=" form-label">
                  <h5>What type of property are you seeking to refinance?</h5>
                </div>
              </div>
              <div className="form-group mt-4 col-md-6">
                <select className="form-select py-2">
                  <option selected disabled>
                    Select Property Type
                  </option>
                  <option> Other </option>
                  <option> Manufactured Home </option>
                  <option> Cooperative </option>
                  <option> Condominium </option>
                  <option> 4 Unit </option>
                  <option> 3 Unit</option>
                  <option> 2 Unit </option>
                  <option> Single Family </option>
                </select>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className=" form-label">
                  <h5>How do you occupy the property?</h5>
                </div>
              </div>
              <div className="form-group mt-4 col-md-8">
                <div className="d-flex flex-wrap">
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input
                        label="Primary Residence"
                        type="radio"
                        id="male"
                        name="gender"
                        defaultValue="Primary Residence"
                      />
                    </div>
                  </div>
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input
                        label="Investment"
                        type="radio"
                        id="female"
                        name="gender"
                        defaultValue="Investment"
                      />
                    </div>
                  </div>
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input
                        label="Second Home"
                        type="radio"
                        id="other"
                        name="gender"
                        defaultValue="Second Home"
                      />
                    </div>
                  </div>

                  <div className="mt-3 d-flex align-items-baseline">
                    &nbsp; &nbsp;
                    <input type="checkbox" />
                    &nbsp; &nbsp;
                    <label className="h6 text-muted">
                      I might also operate my business here
                    </label>
                  </div>
                </div>

                <div className="row">
                  <h5 className="mt-4">
                    What is a comfortable monthly housing payment?
                  </h5>
                  <input
                    className="form-control mt-4 dollar_input w-75"
                    type="number"
                    name=""
                    id=""
                  />
                </div>

                <div className="row">
                  <h5 className="mt-4">
                    What is your goal for refinancing your current mortgage?
                  </h5>

                  <select
                    name="refinancing_goal"
                    className="form-select mt-3 w-75 py-2"
                  >
                    <option selected disabled>
                      -Select Refinance Goal-
                    </option>
                    <option> Debt Consolidation </option>
                    <option> Student Loan </option>
                    <option> Home Improvement </option>
                    <option> Rate and Term Change </option>
                    <option> Other</option>
                  </select>
                </div>

                <div className="row mt-5">
                  <h5>Where is the refinance property located?</h5>
                  <input
                    className="form-control mt-3 w-75 mx-auto mx-lg-0"
                    type="number"
                    inputMode="decimal"
                    id=""
                    placeholder="Enter a location"
                  />
                </div>

                <div className="row mt-5 ">
                  <h5>
                    What is the current value of your property? Estimates are
                    fine.
                  </h5>
                  <input
                    className="form-control mt-2 w-75"
                    type="number"
                    name=""
                    id=""
                  />
                </div>

                <div className="row mt-5 ">
                  <h5>What is the current balance of your mortgage?</h5>
                  <input
                    className="form-control mt-2 w-75"
                    type="number"
                    name=""
                    id=""
                    placeholder="0"
                  />
                </div>

                <div className="row mt-4">
                  <label className="text-secondary h6">
                    Next is <span className="text-dark">Personal Info</span>
                  </label>
                </div>
                <button className="btn btn-primary rounded-0">
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default LanMortageinfo;
