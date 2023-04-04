import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import HelSideBar from "../HelSidebar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function LanDeclaration() {

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

  const [firstQ, setfirstQ] = useState(false);
  const [firstQ1, setfirstQ1] = useState(false);
  const [secondQ, setsecondQ] = useState(false);
  const [thirdQ, setthirdQ] = useState(false);
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
              <h2 className="mt-1 mb-5">Declaration</h2>
              <div className="row">
                <p className="h5">
                  Will you occupy the property as your primary residence?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="q1"
                    id="YES"
                    autocomplete="off"
                    onChange={() => {
                      setfirstQ(true);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="q1"
                    id="No"
                    autocomplete="off"
                    defaultChecked
                    onChange={() => {
                      setfirstQ(false);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No">
                    No
                  </label>
                </div>
                {firstQ ? (
                  <>
                    <p className="h5 mt-4">
                      Have you had an ownership interest in another property in
                      the last three years?
                    </p>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="YES1"
                        autocomplete="off"
                        onChange={() => {
                          setfirstQ1(true);
                        }}
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="YES1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="No1"
                        autocomplete="off"
                        onChange={() => {
                          setfirstQ1(false);
                        }}
                        
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="No1"
                      >
                        No
                      </label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {firstQ1 ? (
                  <>
                    <p className="h5 mt-4">
                    What type of property did you own?
                    </p>
                    <div className="d-flex flex-wrap">
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="Investment"
                        id="Primary Residence"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="Primary Residence"
                      >
                        Primary Residence
                      </label>
                    </div>
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="Investment" 
                        id="Investment"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="Investment"
                      >
                        Investment
                      </label>
                    </div>
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="Investment"
                        id=" Second Home"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for=" Second Home"
                      >
                        Second Home
                      </label>
                    </div>
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="Investment"
                        id="FHA Secondary Residence"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="FHA Secondary Residence"
                      >
                       FHA Secondary Residence
                      </label>
                    </div></div>







                    <p className="h5 mt-4">
                    How did you hold title to the property?
                    </p>
                    <div className="d-flex flex-wrap">
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.111"
                        id="Sole"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="Sole"
                      >
                        Sole
                      </label>
                    </div>
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.111"
                        id=" Joint With Spouse"
                        autocomplete="off"

                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for=" Joint With Spouse"
                      >
                        Joint With Spouse
                      </label>
                    </div>
                    <div className="m-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.111"
                        id="Joint With Other Person"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary px-3 py-2"
                        for="Joint With Other Person"
                      >
                        Joint With Other Person
                      </label>
                    </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="row my-4 mt-5">
                <p className="h5">
                  If this is a Purchase Transaction: Do you have a family
                  relationship or business affiliation with the seller of the
                  property?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3"
                    id="YES2"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES2">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3"
                    id="No2"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No2">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Are you borrowing any money for this real estate transaction
                  (e.g., money for your closing costs or down payment) or
                  obtaining any money from another party, such as the seller or
                  realtor, that you have not disclosed on this loan application?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="q4"
                    id="YES3"
                    autocomplete="off"
                    onChange={() => {
                      setsecondQ(true);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES3">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="q4"
                    id="No3"
                    autocomplete="off"
                    defaultChecked
                    onChange={() => {
                      setsecondQ(false);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No3">
                    No
                  </label>
                </div>
                {secondQ ? (
                  <>
                    <p className="h5 mt-4">What is the amount of this money?</p>
                    <div className="col-md-6">
                      <div className="input-group mb-3 mt-1">
                        <span className="input-group-text">$</span>
                        <input
                          type="Number"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="row my-4">
                <p className="h5">
                  Have you or will you be applying for a mortgage loan on
                  another property(not the property securing this loan)on or
                  before closing this transaction that is not disclosed on this
                  loan application?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3.3"
                    id="YES44"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES44">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3.3"
                    id="No44"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No44">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Will this property be subject to a lien that could take
                  priority over the first mortgage lien, such as a clean energy
                  lien paid through your property taxes (e.g., the Property
                  Assessed Clean Energy Program)?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q5"
                    id="YES5"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES5">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q5"
                    id="No5"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No5">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Are you a co-signer or guarantor on any debt or loan that is
                  not disclosed on this application?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q6"
                    id="YES6"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES6">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q6"
                    id="No6"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No6">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Are there any outstanding judgements against you?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q7"
                    id="YES7"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES7">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q7"
                    id="No7"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No7">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Are you currently delinquent or in default on a Federal debt?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q8"
                    id="YES8"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES8">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q8"
                    id="No8"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No8">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Are you a party to a lawsuit in which you potentially have any
                  personal financial liability?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q9"
                    id="YES9"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES9">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q9"
                    id="No9"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No9">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Have you conveyed title to any property in lieu of foreclosure
                  in the past 7 years?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q10"
                    id="YES10"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES10">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q10"
                    id="No10"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No10">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Within the past 7 years, have you completed a pre-foreclosure
                  sale or short sale, whereby the property was sold to a third
                  party and the Lender agreed to accept less than the
                  outstanding mortgage balance due?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q11"
                    id="YES11"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES11">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q11"
                    id="No11"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No11">
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5">
                  Have you had property foreclosed upon in the last 7 years?
                </p>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q12"
                    id="YES12"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES12">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q12"
                    id="No12"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No12">
                    No
                  </label>
                </div>
              </div>

              <div className="row mt-4">
                <p className="h5">
                  Have you declared bankruptcy within the past 7 years?
                </p>
                
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q13"
                    id="YES13"
                    autocomplete="off"
                    onChange={() => setthirdQ(true)}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES13">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q13"
                    id="No13"
                    autocomplete="off"
                    defaultChecked
                    onChange={() => setthirdQ(false)}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="No13">
                    No
                  </label>
                </div>

                {thirdQ ? (
                  <>
                    <p className="h6 text-secondary mt-4">
                      Identify the type(s) of bankruptcy:
                    </p>
                    <div
                      className="btn-group mt-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck1"
                        autocomplete="off"
                      />
                      <label className="btn btn-outline-primary" for="btncheck1">
                        Chapter 7
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck2"
                        autocomplete="off"
                      />
                      <label className="btn btn-outline-primary mx-md-1" for="btncheck2">
                        Chapter 11
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck3"
                        autocomplete="off"
                      />
                      <label className="btn btn-outline-primary me-md-1" for="btncheck3">
                        Chapter 12
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck4"
                        autocomplete="off"
                      />
                      <label className="btn btn-outline-primary" for="btncheck4">
                        Chapter 13
                      </label>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="col-md-8 mt-5">
                <div className="mt-5">
                  <label className="text-secondary h6 mt-4">
                    Next is <span className="text-dark">Demographic</span>
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
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default LanDeclaration;
