import React, {useState} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function LanCredit() {
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

          <div className={
              isOpen === true
                ? "col-md-8 open he my-5 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he my-5 ps-lg-5"
                : ""
            }>
            <div className="row">
              <div className="col-lg-9">
                <h2 className="mt-4">CREDIT</h2>
                <div className="input-group mt-5 mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    What is your date of birth?
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    What is your Social Security Number?
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <p className="h6 my-2">
                  🔒 Your application and all personal information are safely
                  stored on secured encrypted servers
                </p>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    Confirm Social Security Number
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <p className="fw-semibold">
                  What is your estimated credit score?
                </p>
                <select className="form-select form-select mb-4 py-2">
                  <option selected>SELECT CREDIT SCORE</option>
                  <option value="780+">780+</option>
                  <option value="740-799">740 - 799</option>
                  <option value="700-739">700 - 739</option>
                  <option value="600-699">600 - 699</option>
                  <option value="620-659">620 - 659</option>
                  <option value="Below 620">Below 620</option>
                </select>
                <label className="text-secondary h6 mt-4">
                  Next is <span className="text-dark">Review and Submit</span>
                </label>{" "}
                <br />
                <button className="btn btn-primary rounded-0 mt-2">
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>{" "}
              </div>
            </div>
          </div>
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default LanCredit;
