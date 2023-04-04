import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import Mortageside from "./Mortageside";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Militry from "./Income/Militry";
import Base from "./Income/Base";
import Other from "./Income/Other";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import footer from "../../../../Images/footercity.svg";

function Income() {
  const [allPostData, setAllPostData] = useState();
  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);

  const postData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}application/completion`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAllPostData(response?.data?.data);
        console.log(response?.data?.data, "sidebar response");
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          // history.push('/new_mortage')
          setLoader(false);
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
        // console.log(allGet, "all data");
        console.log(response, "my response");
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setBund(error?.response?.data?.errors);
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
  useEffect(() => {
    postData();
  }, []);
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
    location.pathname === "/Real_state"
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

  const Assign_id = localStorage.getItem("assignId");
  const history = useHistory();

  const [co_Borrower, setCo_Borrower] = useState(false);
  const [loader, setLoader] = useState(false);
  const [getborrower, setGetborrower] = useState("");
  const BorrowerDataGet = new FormData();
  const [bund, setBund] = useState("");
  const [showfirstform, setshowfirstform] = useState(false);

  BorrowerDataGet.append("application_id", Assign_id);

  const [panel, setpanel] = useState("");
  const Get_Income = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/all/incomes`,
      data: BorrowerDataGet,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data);
        setGetborrower(response?.data?.data);
        console.log(getborrower, "getborrower");
        if (response?.data?.status === true) {
          setLoader(false);
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
        setBund(error?.response?.data?.errors);
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
  useEffect(() => {
    Get_Income();
  }, []);
  const Delete_Borrower = (id) => {
    const DelData = new FormData();
    DelData.append("application_id", Assign_id);
    DelData.append("id", id);
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}del/income`,
      data: DelData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setCo_Borrower(response?.data?.message);
        if (response?.data?.status === true) {
          setLoader(false);
          history.push("/Income");
          window.location.reload();
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
        setBund(error?.response?.data?.errors);
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

  const [solo_check, setSolo_check] = useState("");
  const [applyingsolo, setApplyingsolo] = useState(0);

  const Check_ApplyingSolo = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    if (check) {
      setSolo_check([...solo_check, value]);
      setApplyingsolo(1);
    } else {
      setSolo_check(solo_check.filter((e) => e !== value));
      setApplyingsolo(0);
    }
    console.log(applyingsolo);
  };

  const Submit_Borrower = () => {
    const SubmitData = new FormData();
    SubmitData.append("application_id", Assign_id);
    SubmitData.append("not_income", applyingsolo);
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/income`,
      data: SubmitData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setCo_Borrower(response?.data?.message);
        if (response?.data?.status === true) {
          setLoader(false);
          Get_Income();

          history.push("/Income");
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
        setBund(error?.response?.data?.errors);
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
              class=" block"
              id="topnav-hamburger-icon"
              onClick={() => {
                // props.OnHandleToggle();
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
                <Progress percent={allPostData} status="actice" />
              </div>
              <div className="greyline"></div>
              <Link to={"/mortage_info"}>
                <div className={mort}>
                  <div className="sidecircle">
                    {location.pathname === "/mortage_info" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Mortgage</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/personal_info"}>
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
              </Link>
              <Link to={"/Co-Borrowers"}>
                <div className={cobo}>
                  <div className="sidecircle">
                    {location.pathname === "/Co-Borrowers" ? (
                      <>
                        <FaCheckCircle className="checkicon" />
                      </>
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Co-Borrowers</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/Income"}>
                <div className={inc}>
                  <div className="sidecircle">
                    {location.pathname === "/Income" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Income</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"assets"}>
                <div className={ass}>
                  <div className="sidecircle">
                    {location.pathname === "/assets" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}{" "}
                  </div>
                  <div className="mort grey_color fw-500">Assets</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/Real_state"}>
                <div className={real}>
                  <div className="sidecircle">
                    {location.pathname === "Real_state" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Real State</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/declaration"}>
                <div className={Decl}>
                  <div className="sidecircle">
                    {location.pathname === "/declaration" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Declaration</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/demographic"}>
                <div className={demo}>
                  <div className="sidecircle">
                    {location.pathname === "/demographic" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Demographic</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/credit"}>
                <div className={credit}>
                  <div className="sidecircle">
                    {location.pathname === "/credit" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Credit</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/purchase/review"}>
                <div className={review}>
                  <div className="sidecircle">
                    {location.pathname === "/purchase/review" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">
                    Review and Submit
                  </div>
                  <div></div>
                </div>
              </Link>
            </div>
          </>

          {panel === "" ? (
            <>
              <div
                className={
                  isOpen === true
                    ? "col-md-8 open he mb-2 mt-5  ps-lg-5"
                    : isOpen === false
                    ? "col-md-10 open nhi he mb-2 mt-5  ps-lg-5"
                    : ""
                }
              >
                <div className="row mx-3 pb-5">
                  {showfirstform === true ? null : (
                    <>
                    <p className="mb hnhcolor"><span className="fw-bold">Note</span>: Min. 2 years employment <br/> history required for hnh</p>
                    <h5 style={{color:"black"}}>hnh</h5>
                    <p>No income has been added yet</p>
                      {getborrower ? (
                        getborrower?.map((e) => {
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
                                    {e?.start_date
                                      ? e?.start_date
                                      : e?.description}
                                  </h5>
                                  <h5 className="text-muted">
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                    {e?.end_date
                                      ? e?.end_date
                                      : e?.retirement_date}
                                  </h5>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-6 mt-2">
                                      {e?.military_employment_income == 1 ? (
                                        <Link to={`/MilitryEdit/${e?.id}`}>
                                          <FaEdit
                                            className="text-success"
                                            style={{ fontSize: 25 }}
                                          />
                                        </Link>
                                      ) : null}
                                      {e?.base_employment_income == 1 ? (
                                        <Link to={`/BaseEdit/${e?.id}`}>
                                          <FaEdit
                                            className="text-success"
                                            style={{ fontSize: 25 }}
                                          />
                                        </Link>
                                      ) : null}
                                      {e?.other_income == 1 ? (
                                        <Link to={`/OtherEdit/${e?.id}`}>
                                          <FaEdit
                                            className="text-success"
                                            style={{ fontSize: 25 }}
                                          />
                                        </Link>
                                      ) : null}
                                      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                      <FaTrash
                                        onClick={() => Delete_Borrower(e?.id)}
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
                        <p className=" fw-bold">
                          No income has been added yet
                        </p>
                      )}
                      <div className="personalinfo_property mx-auto">
                        <p className="fw-bold mt-3" style={{color:"gray"}}>Total Income</p>
                        <br />
                        {/* <select
                          style={{fontSize:"14px", fontWeight:"bold", width:"40%", background:"transparent"}}
                          class="btn btn-primary dropdown-toggle form-select form-select-lg text-primary mb-3 form-control rounded-0"
                          onChange={(e) => {
                            setpanel(e.target.value);
                          }}
                        > 
                          <option selected style={{fontSize:"14px", fontWeight:"bold"}}>ADD INCOME</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="base">Base Employment</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="militry">Militry Employment</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="other">Other Employment</option>
                        </select> */}
                        <div className="form-group mt-4 col-md-4">
                     <select
                    //  style={{fontSize:"14px", fontWeight:"bold", width:"100%", background:"transparent"}}
                      className="form-select border border-primary fw-bold text-primary border- py-2 text-center"
                      onChange={(e) => {
                        setpanel(e.target.value);
                      }}
                    >
                     <option selected style={{fontSize:"14px", fontWeight:"bold"}}>ADD INCOME</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="base">Base Employment</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="militry">Militry Employment</option>
                          <option style={{fontSize:"14px", fontWeight:"bold"}} value="other">Other Employment</option>
                    </select>
                           </div>

                      </div>
                      <div class="form-check my-3 ms-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                          onClick={Check_ApplyingSolo}
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          No Income
                        </label>
                      </div>
                      <label style={{fontSize:'13px', fontWeight:"500"}} className="text-secondary h6">
                        Next is <span style={{fontSize:'14px', fontWeight:"600", color:"black"}}>Assets</span>
                      </label>{" "}
                      <br />
                      <button
                      style={{fontSize:"15px", fontWeight:"600", borderRadius:"6px"}}
                        className="btn btn-primary btn26 rounded-0 mt-2 col-md-3 fw-bolder py-1 px-3"
                        onClick={() => Submit_Borrower()}
                      >
                        Save & Continue &nbsp;
                        <AiOutlineArrowRight style={{fontSize:"18px", fontWeight:"600"}}/>
                      </button>{" "}
                    </>
                  )}
                  {/* <h2 className="mt-4">INCOME</h2>
              <p className="fw-semibold my-3">No income has been added yet</p> */}
                  {/* <div className="col-md-8 mt-5">
                <p className="fw-semibold">Total Income</p>
                <select className="form-select form-select-lg mb-3 form-control py-2" onChange={(e)=>{setpanel(e.target.value)}}>
                  <option selected>ADD INCOME</option>
                  <option value="base">Base Employment</option>
                  <option value="militry">Militry Employment</option>
                  <option value="other">Other Employment</option>
                </select>

               <div className="mt-5">
               <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
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
              </div> */}
                </div>
                <br />
                <br />
              <div>
              <hr />
              <img src={footer} alt="footer" />
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
                <Base setpanel={setpanel} />
                <div style={{width:"95%"}}>
              <hr />
              <img src={footer} alt="footer" />
            </div>
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
                <Militry setpanel={setpanel} />
                <div style={{width:"95%"}}>
              <hr />
              <img src={footer} alt="footer" />
            </div>
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
                <Other setpanel={setpanel} />
                <div>
              <hr />
              <img src={footer} alt="footer" />
            </div>
              </div>
            </>
          ) : null}
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default Income;