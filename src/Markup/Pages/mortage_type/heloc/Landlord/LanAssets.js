import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import HelSideBar from "../HelSidebar";
import Financial from "./Assets/Financial";
import Funds from "./Assets/Funds";
import NumberShares from "./Assets/NumberShares";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function LanAssets() {
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

  const [asset, setAsset] = useState("");
  const [addAsset, setAddAsset] = useState(false);

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
              <div className="w-70 mt-5">
              {addAsset === false ?  (
              <>
              <h6>Total Assets</h6>
              <button className="btn btn-outline-primary" onClick={()=>setAddAsset(true)}>
                Add Asset
              </button> 
              <br />
              <br />
              <input type="checkbox" />&nbsp;<span>Don't have any asset</span>
              <div className="row mt-3">
                <div className=".col-md-6 col-lg-4">
                  <label className="text-secondary h6 mt-4">
                    Next is <span className="text-dark">Real State</span>
                  </label>
                  <br />
                  <button className="btn btn-primary rounded-0 mt-2">
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
              </>
              )
                :
                (
                  <>
                
                <h2 className="mt-4">Fill Asset detail</h2>
                <div className="input-group mt-3">
                  <span className="input-group-label contact-info-label ">
                    Asset Type
                  </span>
                  <select
                    className="form-control py-2"
                    onChange={(e) => {
                      setAsset(e.target.value);
                    }}
                  >
                    <option value="" selected disabled>
                      - Asset Type -
                    </option>
                    <option value="Checking"> Checking </option>
                    <option value="Savings"> Savings </option>
                    <option value="MoneyMarket"> Money Market </option>
                    <option value="CertificateOfDeposit">
                      Certificate Of Deposit
                    </option>
                    <option value="MutualFund"> Mutual Fund </option>
                    <option value="Stocks"> Stocks </option>
                    <option value="Bonds"> Bonds </option>
                    <option value="Retirement"> Retirement </option>
                    <option value="BridgeLoanProceeds">
                      Bridge Loan Proceeds
                    </option>
                    <option value="IndividualDevelopmentAccount">
                      Individual Development Account
                    </option>
                    <option value="TrustAccount"> Trust Account </option>
                    <option value="LifeInsurance"> Life Insurance </option>
                    <option value="TrustAccount"> Trust Account </option>
                    <option value="Grant"> Grant </option>
                    <option value="GiftCash"> Gift Cash </option>
                    <option value="GiftOfEquity"> Gift Of Equity </option>
                    <option value="ProceedsFromPropertySale">
                      Proceeds From Property Sale
                    </option>
                    <option value="ProceedsFromNonPropertySale">
                      Proceeds From Non Property Sale
                    </option>
                    <option value="SecuredBorrowedFunds">
                      Secured Borrowed Funds
                    </option>
                    <option value="UnsecuredBorrowedFunds">
                      Unsecured Borrowed Funds
                    </option>
                    <option value="checkingCashOnHand"> Cash On Hand </option>
                    <option value="OtherAsset">Other Asset </option>
                  </select>
                </div>
                <div className="input-group mt-2">
                  <span className="input-group-label contact-info-label ">
                    Cash or Market Value
                  </span>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Required"
                  />
                </div>

                {asset === "Checking" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "Savings" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "MoneyMarket" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "CertificateOfDeposit" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "MutualFund" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "Stocks" ? (
                  <>
                    <Financial />
                    <NumberShares />
                  </>
                ) : asset === "Bonds" ? (
                  <>
                    <Financial />
                    <NumberShares />
                  </>
                ) : asset === "Retirement" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "BridgeLoanProceeds" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "IndividualDevelopmentAccount" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "TrustAccount" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "LifeInsurance" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "TrustAccount" ? (
                  <>
                    <Financial />
                  </>
                ) : asset === "Grant" ? (
                  <>
                    <Funds />
                  </>
                ) : asset === "GiftCash" ? (
                  <>
                    <Funds />
                  </>
                ) : asset === "GiftOfEquity" ? (
                  <>
                    <Funds />
                  </>
                ) : null}
                


                <div className="mt-4">
                  <button className="btn btn-light text-dark w-40 border" onClick={()=>setAddAsset(false)}>
                    Back
                  </button>
                  <button className="btn btn-primary w-40 ms-2">Add</button>
                </div>

         
                </>
                )
                }

               
              </div>
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default LanAssets;
