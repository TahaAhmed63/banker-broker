import React, {useState} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import HelSideBar from "../HelSidebar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function LanDemographic() {

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
                <h2 className="mt-4">Demographic</h2>
                <p className="h5 fw-bold mt-5">
                  Fill your Race, Ethnicity and Gender Information
                </p>
                <p className="h6 lh-base mt-1">
                  The purpose of collecting this information is to help ensure
                  that all applicants are treated fairly and that the housing
                  needs of communities and neighborhoods are being fulfilled.
                  For residential mortgage lending, Federal law requires that we
                  ask applicants for their demographic information (ethnicity,
                  sex, and race) in order to monitor our compliance with equal
                  credit opportunity, fair housing, and home mortgage disclosure
                  laws. You are not required to provide this information, but
                  are encouraged to do so. You may select one or more
                  designations for "Ethnicity" and one or more designations for
                  "Race." The law provides that we may not discriminate on the
                  basis of this information, or on whether you choose to provide
                  it. However, if you choose not to provide the information and
                  you have made this application in person, Federal regulations
                  require us to note your ethnicity, sex, and race on the basis
                  of visual observation or surname. The law also provides that
                  we may not discriminate on the basis of age or marital status
                  information you provide in this application. If you do not
                  wish to provide some or all of this information, please check
                  below.
                </p>
                <p className="h5 fw-bold mt-5">Race</p>
                <div className="row my-3 align-items-center">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="American Indian / Alaska Native"
                    />
                    <label
                      className="form-check-label"
                      for="American Indian / Alaska Native"
                    >
                      American Indian / Alaska Native
                    </label>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="Enter enrolled or principal tribe"
                  />

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Asian"
                      />
                      <label className="form-check-label" for="Asian">
                        Asian
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Asian Indian"
                      />
                      <label className="form-check-label" for="Asian Indian">
                        Asian Indian
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Filipino"
                      />
                      <label className="form-check-label" for="Filipino">
                        Filipino
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Korean"
                      />
                      <label className="form-check-label" for="Korean">
                        Korean
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Other Asian"
                      />
                      <label className="form-check-label" for="Other Asian">
                        Other Asian{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Chinese"
                      />
                      <label className="form-check-label" for="Chinese">
                        Chinese
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Japanese"
                      />
                      <label className="form-check-label" for="Japanese">
                        Japanese
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Vietnamese"
                      />
                      <label className="form-check-label" for="Vietnamese">
                        Vietnamese
                      </label>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="If other, then please specify"
                  />

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Black Or African American"
                      />
                      <label
                        className="form-check-label"
                        for="Black Or African American"
                      >
                        Black Or African American
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Native Hawaiian / Pacific Islander"
                      />
                      <label
                        className="form-check-label"
                        for="Native Hawaiian / Pacific Islander"
                      >
                        Native Hawaiian / Pacific Islander
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Native Hawaiian"
                      />
                      <label className="form-check-label" for="Native Hawaiian">
                        Native Hawaiian
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Guamanian Or Chamorro"
                      />
                      <label
                        className="form-check-label"
                        for="Guamanian Or Chamorro"
                      >
                        Guamanian Or Chamorro{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Samoan"
                      />
                      <label className="form-check-label" for="Samoan">
                        Samoan
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Other Pacific Islander"
                      />
                      <label
                        className="form-check-label"
                        for="Other Pacific Islander"
                      >
                        Other Pacific Islander
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="If other, then please specify"
                  />

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="White"
                      />
                      <label className="form-check-label" for="White">
                        White
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Do not wish to provide"
                      />
                      <label
                        className="form-check-label"
                        for="Do not wish to provide"
                      >
                        Do not wish to provide
                      </label>
                    </div>
                  </div>

                  <p className="h5 fw-bold mb-2 mt-3">Ethnicity</p>

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Hispanic/Latino"
                      />
                      <label className="form-check-label" for="Hispanic/Latino">
                        Hispanic/Latino
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Cuban"
                      />
                      <label className="form-check-label" for="Cuban">
                        Cuban
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Puerto Rican"
                      />
                      <label className="form-check-label" for="Puerto Rican">
                        Puerto Rican
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Mexican"
                      />
                      <label className="form-check-label" for="Mexican">
                        Mexican
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Other"
                      />
                      <label className="form-check-label" for="Other">
                        Other
                      </label>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="If other, then please specify"
                  />

                  <div className="col-lg-6 my-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Not Hispanic/Latino"
                      />
                      <label className="form-check-label" for="Not Hispanic/Latino">
                        Not Hispanic/Latino
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Do not wish to provide"
                      />
                      <label
                        className="form-check-label"
                        for="Do not wish to provide"
                      >
                        Do not wish to provide
                      </label>
                    </div>
                  </div>

                  <p className="h5 fw-bold mb-2 mt-3">Gender</p>

                  <div className="col-lg-6 my-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="Male"
                      />
                      <label className="form-check-label" for="Male">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="Female"
                      />
                      <label className="form-check-label" for="Female">
                        Female
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="Do not wish to provide_g"
                      />
                      <label
                        className="form-check-label"
                        for="Do not wish to provide_g"
                      >
                        Do not wish to provide
                      </label>
                    </div>
                  </div>
                </div>
                <label className="text-secondary h6 mt-4">
                  Next is <span className="text-dark">Credit</span>
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

export default LanDemographic;
