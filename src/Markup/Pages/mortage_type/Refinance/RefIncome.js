import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import RefSidebar from "./RefSideBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Militry from "./Income/Militry";
import Base from "./Income/Base";
import Other from "./Income/Other";
import ProfileInfo from "../Profile/ProfileInfo";
import axios from "axios";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import { FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
// import ReFooter from "./ReFooter";
import Footerx404 from "../../../../Images/Footerx404.png";


function RefIncome() {
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

  const [id, setId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();
  const [allIncome, setAllIncome] = useState([]);

  const [panel, setpanel] = useState("");
  const Assign_id = localStorage.getItem("assignId");
  const history = useHistory();

  const [noIncomeCheck, setNoIncomeCheck] = useState(false);

  const getIncome = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/get/all/incomes`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data);
        if (response?.data?.status === true) {
          setLoader(false);
          console.log(response?.data?.data.length);
          setAllIncome(response?.data?.data);
       
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setFieldsError(error?.response?.data?.errors);
       
      });
  };

  useEffect(() => {
    getIncome();
  }, []);

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("not_income", noIncomeCheck === true ? 1 : 0);

  const onSave = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/store/income`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        if (response?.data?.status === true) {
          setLoader(false);
          history.push("/ref/assets");
          Swal.fire({
            toast: true,
            icon: "success",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        fieldsError(error?.response?.data?.errors);
        Swal.fire({
          toast: true,
          icon: "error",
          title: error?.response?.data?.message,
          animation: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      });
  };

  const DeleteIncome = (id) => {
    setLoader(true);
    const DelData = new FormData();
    DelData.append("application_id", Assign_id);
    DelData.append("id", id);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/del/income`,
      data: DelData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        if (response?.data?.status === true) {
          setLoader(false);
          getIncome();
          Swal.fire({
            toast: true,
            icon: "success",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        fieldsError(error?.response?.data?.errors);
        Swal.fire({
          toast: true,
          icon: "error",
          title: error?.response?.data?.message,
          animation: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      });
  };

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <>
            <FaBars
              class=" none"
              onClick={() => {
                // props.OnHandleToggle();
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
                  <div className="mort grey_color fw-500">
                    Review and Submit
                  </div>
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

          {panel === "" ? (
            <>
              <div style={{position:"relative"}}
                className={
                  isOpen === true
                    ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                    : ""
                }
              >
                <div className="row ps-3">
                <p style={{color:"rgb(240 41 41 / 75%)", fontSize:"12px",}}><span className="fw-bold">Note</span>: Min. 2 years employment <br/> history required for hnh</p>
                <br/>
                <br/>
                <br/>
                <br/>
                 

                    <h5 style={{color:"black"}}>hnh</h5>
                    <p style={ {fontSize:"12px", color:"gray"}}>No income has been added yet</p>
                  {allIncome ? (
                    allIncome?.map((e) => {
                      return (
                        <>
                          <div className="row">
                            <div className="col-md-3 my-3">
                              <h4 className="text-muted">
                                <FaUserAlt className="text-primary" />
                                &nbsp;&nbsp;
                                {e?.employee_name
                                  ? e?.employee_name
                                  : e?.other_type_income}
                              </h4>
                              <h5 className="text-muted">
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                {e?.start_date ? e?.start_date : e?.description}
                              </h5>
                              <h5 className="text-muted">
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                {e?.end_date ? e?.end_date : e?.retirement_date}
                              </h5>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <div className="col-md-6 mt-2">
                                  {e?.military_employment_income === 1 ? (
                                    <Link to={`/ref/editmilitary/${e?.id}`}>
                                      <FaEdit
                                        className="text-success"
                                        style={{ fontSize: 25 }}
                                      />
                                    </Link>
                                  ) : null}
                                  {e?.base_employment_income === 1 ? (
                                    <Link to={`/ref/editbase/${e?.id}`}>
                                      <FaEdit
                                        className="text-success"
                                        style={{ fontSize: 25 }}
                                      />
                                    </Link>
                                  ) : null}
                                  {e?.other_income === 1 ? (
                                    <Link to={`/ref/editother/${e?.id}`}>
                                      <FaEdit
                                        className="text-success"
                                        style={{ fontSize: 25 }}
                                      />
                                    </Link>
                                  ) : null}
                                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                  <FaTrash
                                    onClick={() => DeleteIncome(e?.id)}
                                    className="text-danger"
                                    style={{ fontSize: 25 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <p className=" fw-bold p-md-0">
                      No income has been added yet
                    </p>
                  )}
                  <div className="col-md-8 mt-3"  style={{color:"gray"}}>
                    <p className="fw-semibold SamiText02">Total Income</p>
                    <select
                      className="form-select  form-select-lg mb-3 text-center  form-control py-2 rounded-0  SlectT02 w-50"
                      onChange={(e) => {
                        setpanel(e.target.value);
                      }}
                    >
                      <option selected className="optionW022">ADD INCOME</option>
                      <option value="base"  className="optionW02">I am currently Employed</option>
                      <option value="militry"  className="optionW02">I receive Military Income</option>
                      <option value="other"  className="optionW02">I have other income sources</option>
                    </select>

                    <div className="mt-5">
                      <div className="form-check">
                        <input
                          className="form-check-input ps"
                          type="checkbox"
                          value={noIncomeCheck}
                          id="flexCheckDefault"
                          onClick={() => setNoIncomeCheck(!noIncomeCheck)}
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
                      <button
                        className="btn btn-primary rounded-0 mt-2"
                        onClick={onSave}
                      >
                        Save And Continue &nbsp;
                        <AiOutlineArrowRight />
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="iCOME404" style={{marginTop:"90px"}}>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
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
                <Base setpanel={setpanel} getIncome={getIncome} />
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
                <Militry setpanel={setpanel} getIncome={getIncome} />
              </div>
            </>
          ) : null}
          {panel === "other" ? (
            <>
              <div className={ isOpen === true ? "col-md-8 open he my-5 ps-lg-5" : isOpen === false  ? "col-md-10 open nhi he my-5 ps-lg-5" : ""}>
                <Other setpanel={setpanel} getIncome={getIncome} />
              </div>
              
            </>
          ) : null}
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default RefIncome;
