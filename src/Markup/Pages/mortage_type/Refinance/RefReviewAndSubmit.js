import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight, AiOutlineDollar } from "react-icons/ai";
import RefSideBar from "./RefSideBar";
import ProfileInfo from "../Profile/ProfileInfo";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import moneycheck from "../../../../Images/moneycheck.png";
import realstate from "../../../../Images/realstate.png";
import axios from "axios";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
// import ReFooter from "./ReFooter";
import Footerx404 from "../../../../Images/Footerx404.png";


const RefReviewAndSubmit = () => {

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

  const credit1 =
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

  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const Assign_id = localStorage.getItem("assignId");

  const [sourse, setSourse] = useState("");
  const [textField, setTextField] = useState("");
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const [mortgage, setMortgage] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [coBorrower, setCoBorrower] = useState([]);
  const [income, setIncome] = useState([]);
  const [realState, setRealState] = useState([]);
  const [assets, setAssets] = useState([]);
  const [decleration, setDecleration] = useState([]);
  const [demographic, setDemographic] = useState([]);
  const [credit, setCredit] = useState([]);

  const Data = new FormData();
  Data.append("application_id", Assign_id);

  const getRefReviewData = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/review/application`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setLoader(false);
        console.log(response);
        const {
          mortgage_info,
          personal_info,
          co_borrower,
          income,
          asset,
          real_estate,
          declaration,
          demographic,
          credit,
        } = {
          ...response?.data?.data,
        };
        setMortgage([...mortgage_info]);
        setPersonalInfo([...personal_info]);
        setCoBorrower([...co_borrower]);
        setIncome([...income]);
        setAssets([...asset]);
        setRealState([...real_estate]);
        setDecleration([...declaration]);
        setDemographic([...demographic]);
        setCredit([...credit]);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  };

  useEffect(() => {
    getRefReviewData();
  }, []);

  const Data1 = new FormData();
  Data1.append("application_id", Assign_id);
  Data1.append("about_us", sourse);
  Data1.append("financial_note", textField);
  Data1.append("disclosures_consent", checkBox1 === true ? 1 : 0);
  Data1.append("authorization", checkBox2 === true ? 1 : 0);



  const GettingidRef = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/assign/application/id`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
                localStorage.setItem("assignId", response?.data?.data?.id);
localStorage.removeItem("newid");
        if (response.data.status === true) {
          setLoader(false);
          history.push("/ref/mortageinfo");

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
        } else {
          setLoader(false);
          Swal.fire({
            toast: true,
            icon: "error",
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
        }
      })
      .catch(function (error) {
        setLoader(false);
        Swal.fire({
          toast: true,
          icon: "error",
          title: error,
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

  
  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/submit/application`,
      data: Data1,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setLoader(false);
        console.log(response);
        if (response.data.status === true) {
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
          GettingidRef()
        }
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        Swal.fire({
          toast: true,
          icon: "error",
          title: err?.response?.data?.message,
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
                <div className={credit1}>
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
          <div  className={
              isOpen === true
                ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
            }>
            <div className="row w-90 ps-4">
              <h5 className="mb-3 p-md-0">
                Quickly review all the details and you’re ready to submit
              </h5>
              {/* mortgage */}
              <div>
                <div className="row mt-3">
                  {mortgage.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Mortgage</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/mortageinfo")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {mortgage.length > 0 ? (
                    mortgage?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Property Type</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.use_of_property}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">occupy the property</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.use_of_property}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property value</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.comfortable_monthly_ho_payment}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Residency Type</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.down_payment}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Mortgage</h5>
                  )}
                </div>
              </div>
              {/* mortgage end */}
              <hr />
              {/* personal */}
              <div>
                <div className="row mt-3">
                  {personalInfo.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Personal</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/personalinfo")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {personalInfo.length > 0 ? (
                    personalInfo?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Email</label>
                                <div class="">
                                  <p class="text-dark ps-5">{elem?.email}</p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Cell Phone</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.cell_phone}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Work Phone</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.work_phone}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Personal Info</h5>
                  )}
                </div>
              </div>
              {/* personal end */}
              <hr />
              {/* Co Borrower */}
              <div>
                <div className="row mt-3">
                  {coBorrower.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Co-Borrower (s)</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/Co-Borrowers")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {coBorrower.length > 0 ? (
                    coBorrower?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <p>{elem?.cob_first_name}</p>
                              <div class=" d-flex ">
                                <label class="">Email</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.cob_email}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Phone</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.cob_phone}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Co-Borrower</h5>
                  )}
                </div>
              </div>
              {/* Co Borrower end */}
              <hr />
              {/* income */}
              <div>
                <div className="row mt-3">
                  {income.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Income</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/income")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {income.length > 0 ? (
                    income?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Employee Name</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.employee_name}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Year Of Profession</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.year_profession}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Start Date</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.start_date}
                                  </p>
                                </div>
                              </div>
                              {elem?.end_date ? (
                                <div class=" d-flex ">
                                  <label class="">End Date</label>
                                  <div class="">
                                    <p class="text-dark ps-5">
                                      {elem?.end_date}
                                    </p>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Income</h5>
                  )}
                </div>
              </div>
              {/* income end */}
              <hr />
              {/* assets */}
              <div>
                <div className="row mt-3">
                  {assets.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Assets</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/assets")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {assets.length > 0 ? (
                    assets?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="d-flex">
                              <div>
                                <span className="icon_green">
                                  <img src={moneycheck} alt="money" />
                                </span>
                              </div>
                              <div>
                                <p className="ms-3 my-0">{elem?.asset_type}</p>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  $ {elem?.cash_or_market}
                                </span>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  {elem?.financial_inst}
                                </span>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  Account No . {elem?.account_number}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Assets</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* assets end */}
              {/* Real state */}
              <div>
                <div className="row mt-3">
                  {realState.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Real State</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/realstate")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {realState.length > 0 ? (
                    realState?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Address</label>
                                <div class="">
                                  <p class="text-dark ps-5">{elem?.address}</p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property Value</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.property_value}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property Usage</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.property_usage}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Real State</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Real state end */}
              {/* Decleration */}
              <div>
                <div className="row mt-3">
                  {decleration.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Decleration</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/declaration")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {decleration.length > 0 ? (
                    decleration?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <p>Legal Disclosures</p>
                              <div class=" d-flex ">
                                <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.primary_residence === 1
                                      ? "Yes"
                                      : "No"}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">
                                  Affiliation with seller :{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.Purchase_Transaction === 1
                                      ? "Yes"
                                      : "No"}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">
                                  Borrowing for the down payment :
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.mortgage_loan === 1 ? "Yes" : "No"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Decleration</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Decleration end */}
              {/* Demographic */}
              <div>
                <div className="row mt-3">
                  {demographic.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Demographic</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/demographic")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {demographic.length > 0 ? (
                    demographic?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <p>Race</p>
                              <div class=" d-flex ">
                                {/* <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.asian === 1 ? "asian" : null}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                {/* <label class="">Affiliation with seller : </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.other_asian === 1
                                      ? "Other asian"
                                      : null}
                                  </p>
                                </div>
                              </div>
                              <p>Ethnicity</p>
                              <div class=" d-flex ">
                                {/* <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.native_hawaiian === 1
                                      ? "native hawaiian or pacific"
                                      : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.other_pacific_islander === 1
                                      ? "islander"
                                      : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.guamanian_or_chamorro === 1
                                      ? "guamanian or chamorro"
                                      : null}
                                  </p>
                                </div>
                              </div>
                              <p>Gender</p>
                              <div class=" d-flex ">
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "1" ? "Male" : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "2" ? "Female" : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "3"
                                      ? "Do not wish to provide"
                                      : null}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Demogrphic</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Demeographic end */}
              {/* credit */}
              <div>
                <div className="row mt-3">
                  {credit.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 className="lightGray" >Credit</h5>
                      <div>
                        <button
                          className="mx-4 px-4 py-1"
                          onClick={() => history.push("/ref/credit")}
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {credit.length > 0 ? (
                    credit?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Birth Date: </label>
                                <div class="">
                                  <p class="text-dark ps-5">{elem?.dob}</p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Social Security Number: </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.c_social_security_no}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 className="lightGray" >No Credit</h5>
                  )}
                </div>
              </div>
              {/* credit ends */}
              <>
                <hr />
                <p className="mx-2 p-1">How did you hear about us?</p>
                <div class="input-group">
                  {/* <span class="input-group-label contact-info-label ">
                    Source
                  </span> */}
                  <select
                    class="form-control hinpt rounded-0"
                    onChange={(e) => setSourse(e.target.value)}
                  >
                    <option value="" selected disabled>
                      - Select Source -
                    </option>
                    <option value="Televison"> Televison </option>
                    <option value="Radio"> Radio </option>
                    <option value="Newspaper"> Newspaper </option>
                    <option value="SocialMedia">Social Media</option>
                    <option value="SearchEngine"> Search Engine </option>
                    <option value="referralfromFamily/Friend">
                      {" "}
                      Referral - Family/Friend{" "}
                    </option>
                    <option value="referralfromBusinesContact">
                      {" "}
                      Referral - Business contact{" "}
                    </option>
                    <option value="referralfromFinancialAdvisior">
                      {" "}
                      Referral - Financial Advisior{" "}
                    </option>
                    <option value="ReturnClient"> Return Client </option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <p className="mx-2 mt-3 p-2">
                  Anything else we should know about your financial situation?
                </p>
                <div>
                  <textarea
                    className="w-100"
                    rows={6}
                    onChange={(e) => setTextField(e.target.value)}
                  ></textarea>
                </div>
                <div className="mt-3 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={checkBox1}
                    onClick={() => setCheckBox1(!checkBox1)}
                  />
                  &nbsp; &nbsp;
                  <label className="h6 text-muted">
                    I, Hnh Tech, agree to and acknowledge receipt of Disclosures
                    and Consent to Do Business Electronically
                  </label>
                  <br />
                </div>
                <div className="mt-3 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={checkBox2}
                    onClick={() => setCheckBox2(!checkBox2)}
                  />
                  &nbsp; &nbsp;
                  <label className="h6 text-muted">
                    I, Hnh Tech, agree to give Authorization to Order Credit and
                    Verify Financial History
                  </label>
                  <br />
                </div>
              </>
              <div className="w-50">
                <button
                  className="btn btn-primary rounded-0 mt-2"
                  onClick={onSubmit}
                >
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>
              </div>
              <div>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
            </div>
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default RefReviewAndSubmit;
