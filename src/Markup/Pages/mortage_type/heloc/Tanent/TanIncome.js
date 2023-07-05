import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Militry from "./Income/Militry";
import Base from "./Income/Base";
import Other from "./Income/Other";
import Header from "../../../../Layout/Header";
import TanSideBar from "./TanSideBar";
import ProfileInfo from "../../Profile/ProfileInfo";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../../Baseurl";
import {
  FaEdit,
  FaTrash,
  FaUserAlt,
  FaCheckCircle,
  FaBars,
} from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Progress } from "antd";
import { Background } from "reactflow";

function TanIncome() {
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const [allPostData, setAllPostData] = useState();
  const [bund, setBund] = useState("");
 

  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);

  const location = useLocation();
  const pers =
    location.pathname === "/heloc/tanent/personalinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100 ";
  const addit =
    location.pathname === "/heloc/tanent/additionalinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const cosi =
    location.pathname === "/heloc/tanent/Co-Borrowers"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const inc =
    location.pathname === "/heloc/tanent/Income"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const back =
    location.pathname === "/heloc/tanent/background"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const demo =
    location.pathname === "/heloc/tanent/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const docu =
    location.pathname === "/heloc/tanent/declaration"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const review =
    location.pathname === "/heloc/tanent/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const postData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/progress`,
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

  const [co_Borrower, setCo_Borrower] = useState(false);
  const [getborrower, setGetborrower] = useState("");
  const BorrowerDataGet = new FormData();
  const [showfirstform, setshowfirstform] = useState(false);

  BorrowerDataGet.append("application_id", Assign_id);

  const [panel, setpanel] = useState("");
  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/get/all/incomes`,
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
     
      });
  };
  useEffect(() => {
    Get_Borrower();
  }, []);
  const Delete_Borrower = (id) => {
    const DelData = new FormData();
    DelData.append("application_id", Assign_id);
    DelData.append("id", id);
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/del/income`,
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
          // history.push("/heloc/tanent/income");
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
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/income`,
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
          Get_Borrower();

          history.push("/heloc/tanent/background");
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
                style={{width: isOpen ? "210px" : "143px",height:"auto" , marginTop: "-8px"}}
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
                <br />
                <span>Tanent</span>
                <Progress percent={allPostData} status="actice" />
              </div>
              <div className="tangreyline"></div>'
              <Link to="/heloc/tanent/personalinfo">
                <div className={pers}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/personalinfo" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Personal Info</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/additionalinfo"}>
                <div className={addit}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/additionalinfo" ? (
                      <>
                        <FaCheckCircle className="checkicon" />
                      </>
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Additional Info</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/cosigner"}>
                <div className={cosi}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/cosigner" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Co Singers</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/Income"}>
                <div className={inc}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/Income" ? (
                      <>
                        <FaCheckCircle className="checkicon" />
                      </>
                    ) : null}
                  </div>

                  <div className="mort grey_color fw-500">Income</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/background"}>
                <div className={back}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/background" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Background</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/demographic"}>
                <div className={demo}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/demographic" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Demographic</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/document"}>
                <div className={docu}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/document" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Document</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/review"}>
                <div className={review}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/review" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">
                    Review And Submit
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
                    ? "col-md-8 open he my-5 ps-lg-5"
                    : isOpen === false
                      ? "col-md-10 open nhi he my-5 ps-lg-5"
                      : ""
                }
              >
                <div className="container">
                  <div className="row">
                    {showfirstform === true ? null : (
                      <>
                        <div class="col-md-4 mt-4">
                          <p id="note-hd1"><b>Note:</b> Min.
                            2
                            years
                            employment history required for <span>hnh</span></p>
                        </div>
                        <div className="mb-3 p-0 ">
                          <h5 className="income-hc1">hnh</h5>
                        </div>
                        <div class="col-md-4 mt-4">
                          <p id="added-p12">No income has been added yet</p>
                        </div>
                        <br />
                        {getborrower ? (
                          getborrower?.map((e) => {
                            return (
                              <>
                                <div className="container"></div>
                                <div className="row">
                                  <div className="col-md-3 my-3">
                                    <h5 className="text-muted">
                                      <FaUserAlt className="text-primary" />
                                      &nbsp;&nbsp;
                                      {e?.employee_name
                                        ? e?.employee_name
                                        : e?.other_type_income}
                                    </h5>
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
                                          <Link
                                            to={`/heloc/tanent/MilitryEdit/${e?.id}`}
                                          >
                                            <FaEdit
                                              className="text-success"
                                              style={{ fontSize: 25 }}
                                            />
                                          </Link>
                                        ) : null}
                                        {e?.base_employment_income == 1 ? (
                                          <Link
                                            to={`/heloc/tanent/BaseEdit/${e?.id}`}
                                          >
                                            <FaEdit
                                              className="text-success"
                                              style={{ fontSize: 25 }}
                                            />
                                          </Link>
                                        ) : null}
                                        {e?.other_income == 1 ? (
                                          <Link
                                            to={`/heloc/tanent/income/OtherEdit/${e?.id}`}
                                          >
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
                          <p className=" fw-bold p-0">
                            No income has been added yet
                          </p>
                        )}
                        <div className="personalinfo_property mx-auto">
                          <p className="fw-semibold total-fnt1">Total Income</p>
                          <select 
                            className="btns btn-outline-primary dropdown-toggle income-select col-lg-4"
                            id="add-income-slt1"
                            
                            onChange={(e) => {
                              setpanel(e.target.value);
                            }}
                          >
                            <option selected>ADD INCOME</option>
                            <option className="base-sdw3"  value="base">usama I am currently Employed</option>
                            <option className="base-sdw3 " value="militry">I receive Military Income</option>
                            <option className="base-sdw3 " value="other">I have other income sources</option>
                          </select>
                        </div>
                        
                        
                        <hr className="divider" />
                        <div class="form-check my-5 ">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                            onClick={Check_ApplyingSolo}
                          />
                          <label class="form-check-label any-hvr5" for="defaultCheck1">
                            I do not earn any Income
                          </label>
                        </div>
                        <label className="text-scolor fontsbtn">
                          Next is <span className="fontsbtncobor">Background</span>
                        </label>{" "}
                        <br />
                        <button
                          className="btn btn-primary rounded-0 mt-2 col-md-3 fw-bolder continue-fnt12"
                          onClick={() => Submit_Borrower()}
                        >
                          Save And Continue &nbsp;
                          <AiOutlineArrowRight />
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
              </div>
            </>
          ) : null}
          <ProfileInfo />
          <div className="footerimage3">
            <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
          </div>

        </div>
      </div>
    </>
  );
}

export default TanIncome;
