import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineDollar } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import HelSideBar from "../HelSidebar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

const LanPersonalInfo = () => {
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

  const [altname, setAltname] = useState(false);
  const [nickname, setNickname] = useState(false);
  const [rent, setRent] = useState("");
  const [military, setMilitary] = useState(false);
  const [unmarried, setUnMarried] = useState(false);
  const [dependents, setDependents] = useState(false);
  const [mailing, setMailing] = useState(false);

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
          <div
            className={
              isOpen === true
                ? "col-md-8 open he my-5 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he my-5 ps-lg-5"
                : ""
            }
          >
            <div className="row w-96 ">
              <h5 className="mb-3 p-md-0">Please fill your full, legal name</h5>
              <div className="col-lg-3 col-md-6  p-md-0">
                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="First Name"
                  style={{ padding: "12px 10px" }}
                />
              </div>
              <div className="col-lg-3 col-md-6  p-md-0">
                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="Middle Name"
                  style={{ padding: "12px 10px" }}
                />
              </div>
              <div className="col-lg-3 col-md-6  p-md-0">
                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="Last Name"
                  style={{ padding: "12px 10px" }}
                />
              </div>
              <div className="col-lg-3 col-md-6  p-md-0">
                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="Suffix"
                  style={{ padding: "12px 10px" }}
                />
              </div>
              <div className="mt-3 d-flex align-items-baseline">
                &nbsp; &nbsp;
                <input type="checkbox" onChange={() => setAltname(!altname)} />
                &nbsp; &nbsp;
                <label className="h6 text-muted">I have alternate names</label>
                <br />
              </div>
              {altname === true ? (
                <input
                  style={{ padding: "12px 10px", width: "50%" }}
                  type="text"
                  className="form-control my-3 mx-5"
                  placeholder="Enter all names here sperated by commas"
                />
              ) : null}

              <div className="mt-3 d-flex align-items-baseline">
                &nbsp; &nbsp;
                <input
                  type="checkbox"
                  onChange={() => setNickname(!nickname)}
                />
                &nbsp; &nbsp;
                <label className="h6 text-muted">I have a nickname</label>
              </div>

              {nickname === true ? (
                <input
                  style={{ padding: "12px 10px", width: "50%" }}
                  type="text"
                  className="form-control my-3 mx-5"
                  placeholder="Enter all names here sperated by commas"
                />
              ) : null}

              <div className="mt-5 personalinfo_maxwidth">
                <h5>Please fill your contact information</h5>
                <div className="mt-4 contact_max">
                  <div className="input-group ">
                    <span className="input-group-label contact-info-label ">
                      Email ID
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Required"
                      formcontrolname="email"
                      className="form-control text-lowercase "
                    />
                  </div>
                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Cell Phone
                    </span>
                    <input
                      type="number"
                      name="phone"
                      formcontrolname="email"
                      className="form-control text-lowercase "
                    />
                  </div>
                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Work Phone
                    </span>
                    <input
                      formcontrolname="workPhoneNumber"
                      name="work_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control"
                      id="workphone_input"
                    />

                    <input
                      placeholder="Ext."
                      formcontrolname="workExt"
                      name="ext"
                      inputmode="decimal"
                      className="form-control max-width-100  "
                    />
                  </div>

                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Home Phone
                    </span>
                    <input
                      formcontrolname="homePhoneNumber"
                      name="home_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control "
                    />
                  </div>
                  <p
                    className="mt-2"
                    style={{
                      color: "#49545c",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    I confirm that I have read and agree to the Consent to
                    contact
                  </p>
                  <div className="row mt-5">
                    <h5 className="p-md-0">Where do you live currently?</h5>
                    <input
                      className="form-control mt-1"
                      type="email"
                      placeholder="Email Address"
                    />

                    <div className="mt-4 d-flex align-items-baseline">
                      &nbsp; &nbsp;
                      <input
                        type="checkbox"
                        onClick={() => setMailing(!mailing)}
                      />
                      &nbsp; &nbsp;
                      <label className="h6 text-muted">
                        My mailing address is the same as my current address
                      </label>
                    </div>

                    <div className="mt-3">
                      <input
                        className="form-control mt-1"
                        type="text"
                        placeholder="Enter Mailing Address"
                        disabled={mailing}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="radiogroup mt-5"
                  style={{
                    borderLeft: "1px solid rgba(194, 197, 217, 1)",
                    padding: "2rem",
                  }}
                >
                  <h5>Do you own this property or do you rent?</h5>

                  <div className="row">
                    <div className="col-md-2">
                      <div className="personalinfo_property mx-auto">
                        <input
                          label="Own"
                          type="radio"
                          id="male"
                          name="Own"
                          defaultValue="Own"
                          onClick={(e) => setRent(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="personalinfo_property mx-auto">
                        <input
                          label="Rent"
                          type="radio"
                          id="female"
                          name="Own"
                          defaultValue="rent"
                          onClick={(e) => setRent(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="personalinfo_property mx-auto">
                        <input
                          label="Living Rent Free"
                          type="radio"
                          id="other"
                          name="Own"
                          defaultValue="Living Rent Free"
                          onClick={(e) => setRent(e.target.value)}
                        />
                      </div>
                    </div>
                    {rent === "rent" ? (
                      <div className="row">
                        <h5 className="mt-3">What is the monthly rent??</h5>

                        <div className="col-md-8">
                          <div className="input-group mt-2">
                            <span
                              className="input-group-label contact-info-label "
                              style={{ minWidth: 0, width: "max-content" }}
                            >
                              <AiOutlineDollar />
                            </span>
                            <input
                              type="number"
                              autocomplete="nope"
                              className="form-control "
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h5 className="mt-3">How long did you live there?</h5>

                        <div className="row">
                          <div className="col-md-8">
                            <div className="input-group mt-2">
                              <input
                                type="number"
                                autocomplete="nope"
                                className="form-control "
                              />
                              <span
                                className="input-group-label contact-info-label "
                                style={{ minWidth: 0, width: "max-content" }}
                              >
                                Years
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group mt-2">
                              <select
                                autocomplete="nope"
                                className="form-control py-2"
                              >
                                <option selected disabled>
                                  Select Month
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                              </select>

                              <span
                                className="input-group-label contact-info-label "
                                style={{ minWidth: 0, width: "max-content" }}
                              >
                                months
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="stateagent mt-3">
                    <h5 className="mt-3">
                      Are you currently active in the military or a veteran?
                    </h5>
                    <div className="d-flex">
                      <div className="personalinfo_property">
                        <input
                          label="Yes"
                          type="radio"
                          id="male"
                          name="agent"
                          value={"yes"}
                          onClick={() => setMilitary(true)}
                        />
                      </div>
                      <div className="personalinfo_property">
                        <input
                          label="No"
                          type="radio"
                          id="male"
                          name="agent"
                          value={"no"}
                          onClick={() => setMilitary(false)}
                        />
                      </div>
                    </div>

                    {military === true ? (
                      <div className="row">
                        <h5 className="mt-3">
                          What is your current military status?
                        </h5>
                        <select
                          name="current_military_status"
                          className=" form-select col-md-5 mt-3 w-50 py-2"
                        >
                          <option>Select Military Status</option>
                          <option> Active Service </option>
                          <option> Veteran</option>
                          <option> Non Active Reserve National Guard </option>
                        </select>
                      </div>
                    ) : null}

                    <h5 className="mt-4">What's your residency type?</h5>
                    <div className="row mt-3">
                      <div className="d-flex flex-column flex-md-row ">
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="US Citizen"
                              type="radio"
                              id="male"
                              name="type"
                              value="US Citizen"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Permanent Resident Alien"
                              type="radio"
                              id="female"
                              name="type"
                              value="Permanent Resident Alien"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Non Permanent Resident Alien"
                              type="radio"
                              id="other"
                              name="type"
                              value="Non Permanent Resident Alien"
                            />
                          </div>
                        </div>
                      </div>

                      <h5 className="mt-3">What's your marital status?</h5>

                      <div className="d-flex flex-column flex-md-row mt-2">
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Married"
                              type="radio"
                              id="married"
                              name="gender"
                              value="Married"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Unmarried"
                              type="radio"
                              id="unmarried"
                              name="gender"
                              value="Unmarried"
                              onClick={() => setUnMarried(!unmarried)}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Separated"
                              type="radio"
                              id="separated"
                              name="gender"
                              value="Separated"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              label="Do Not Wish To Provide"
                              type="radio"
                              id="Dont wish"
                              name="gender"
                              value="Do Not Wish To Provide"
                            />
                          </div>
                        </div>
                      </div>
                      {unmarried === true ? (
                        <div className="mt-3 d-flex align-items-baseline">
                          &nbsp; &nbsp;
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                          <label className="h6 text-muted">
                            Do you have any unmarried partner with real property
                            rights similar to those of a legal spouse?
                          </label>
                        </div>
                      ) : null}
                    </div>
                    <h5 className="mt-4">Do you have any dependents?</h5>
                    <div className="d-flex mt-3">
                      <div className="personalinfo_property">
                        <input
                          label="Yes"
                          type="radio"
                          id="male"
                          name="agent"
                          onClick={() => setDependents(true)}
                        />
                      </div>
                      <div className="personalinfo_property">
                        <input
                          label="No"
                          type="radio"
                          id="male"
                          name="agent"
                          onClick={() => setDependents(false)}
                        />
                      </div>
                    </div>

                    {dependents === true ? (
                      <div className="mt-3 col-md-10">
                        <h5>How many dependents and what are their ages?</h5>

                        <div className="input-group mt-3 w-100">
                          <input className="form-control " />
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter ages separated by commas"
                            formcontrolname="email"
                            className="form-control"
                          />
                        </div>

                        <p
                          className="mt-2"
                          style={{
                            color: "#49545c",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          If the child is less than 1 year old, enter 1
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3">
                  <label className="text-secondary h6">
                    Next is <span className="text-dark">Co-Borrowers</span>
                  </label>
                  <br />
                  <button className="btn btn-primary rounded-0 mt-2">
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default LanPersonalInfo;
