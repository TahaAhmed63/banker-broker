import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import { FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
import RefSideBar from "./RefSideBar";
import ReParsonalinfo from "../Refinance/RefPersonalInfo"
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import ProfileInfo from "../Profile/ProfileInfo";
import Footerx404 from "../../../../Images/Footerx404.png";
function RefCoBorrower() {

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


  const handlePhoneNumberChange = (event, state) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ''); // remove non-numeric characters
    if (inputPhoneNumber.length > 10) {
      inputPhoneNumber = inputPhoneNumber.slice(0, 10); // truncate to 10 digits
    }
    let formattedPhoneNumber = '';
    if (inputPhoneNumber.length > 3) {
      formattedPhoneNumber = `(${inputPhoneNumber.substring(0, 3)})`;
      if (inputPhoneNumber.length > 6) {
        formattedPhoneNumber += ` ${inputPhoneNumber.substring(3, 6)}-${inputPhoneNumber.substring(6)}`;
      } else {
        formattedPhoneNumber += ` ${inputPhoneNumber.substring(3)}`;
      }
    } else {
      formattedPhoneNumber = inputPhoneNumber;
    }
    state(formattedPhoneNumber);
  }

  const Assign_id = localStorage.getItem("assignId");
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [bund, setBund] = useState("");
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [nadeem1111, setNadeem1111] = useState("");
  const [cob_last_name, setCob_last_name] = useState("");
  const [cob_email, setCob_email] = useState("");
  const [cob_phone, setCob_phone] = useState("");
  const [spouse, setSpouse] = useState(0);
  const [complete_task, setComplete_task] = useState(0);
  const [sp_first_name, setSp_first_name] = useState("");
  const [sp_last_name, setSp_last_name] = useState("");
  const [sp_email, setSp_email] = useState("");
  const [sp_phone, setSp_phone] = useState("");
  const [cob_first_name, setCob_first_name] = useState("");
  const [application_id, setApplication_id] = useState("");
  const [id, setId] = useState("");

  const BorrowerData = new FormData();
  BorrowerData.append("cob_last_name", cob_last_name);
  BorrowerData.append("cob_email", cob_email);
  BorrowerData.append("cob_phone", cob_phone);
  BorrowerData.append("spouse", spouse);
  BorrowerData.append("complete_task", complete_task);
  BorrowerData.append("sp_first_name", sp_first_name);
  BorrowerData.append("sp_last_name", sp_last_name);
  BorrowerData.append("sp_email", sp_email);
  BorrowerData.append("sp_phone", sp_phone);
  BorrowerData.append("cob_first_name", cob_first_name);
  BorrowerData.append("application_id", Assign_id);
  if(id){
    BorrowerData.append("id", id);
  }
   

  const Add_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/invite/co-borrowers/info`,
      data: BorrowerData,
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
          Get_Borrower()
          setshowfirstform(false);
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
  const [complete_check, setComplete_check] = useState("");
  const Check_completetask = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    if (check) {
      setComplete_check([...complete_check, value]);
      setComplete_task(1);
    } else {
      setComplete_check(complete_check.filter((e) => e !== value));
      setComplete_task(0);
    }
    console.log(complete_task);
  };
  const [spouse_check, setSpouse_check] = useState("");
  const Check_Spouse = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    if (check) {
      setComplete_check([...spouse_check, value]);
      setSpouse(1);
    } else {
      setComplete_check(spouse_check.filter((e) => e !== value));
      setSpouse(0);
    }
    console.log(spouse);
  };
  const [showfirstform, setshowfirstform] = useState(false);
  // Getting All Co-Borrowers
  const [getborrower, setGetborrower] = useState("");
  const BorrowerDataGet = new FormData();
  BorrowerDataGet.append("application_id", Assign_id);


  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/get/all/co_borrowers`,
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
    Get_Borrower();
  }, []);
  // Getting All Co-Borrowers End
  //   Deleting Api

  const Delete_Borrower = (id) => {
    const DelData = new FormData();
    DelData.append("application_id", Assign_id);
    DelData.append("id", id);
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/del/co-borrower`,
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
          history.push("/ref/Co-Borrowers");
          Get_Borrower()
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
  //   Deleting Api End
  // Submit Api
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
    SubmitData.append("applying_solely", applyingsolo);
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/store/co-borrowers/info`,
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
          history.push("/ref/income");
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
  // Submit Api End

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
          <div   className={
              isOpen === true
                ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
            }>
            <div className="row pb-5 p-2 ps-4">
              {showfirstform === true ? null : (
                <>
                  <h2 className="mb-3 ps-4">Co-Borrowers</h2>
                  {getborrower ? (
                    getborrower?.map((e) => {
                      return (
                        <>
                          <div className="row">
                            <div className="col-md-3 my-3">
                              <h4 className="text-muted">
                                <FaUserAlt className="text-primary" />
                                &nbsp;&nbsp;
                                {e?.cob_first_name}
                              </h4>
                              <h5 className="text-muted">
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                {e?.cob_last_name}
                              </h5>
                              <h5 className="text-muted">
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                {e?.cob_phone}
                              </h5>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <div className="col-md-6 mt-2">
                                  <Link to={`/ref/Co-Borrowers/edit/${e?.id}`}>
                                    <FaEdit
                                      className="text-success"
                                      style={{ fontSize: 25 }}
                                    />
                                  </Link>
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
                    <p className=" fw-bold p-md-0">
                      No Co-Borrower has been added yet
                    </p>
                  )}
                  <div className="personalinfo_property mx-auto">
                    <input
                      label="Add Co-Borrower"
                      type="radio"
                      id="male"
                      name="gender"
                      defaultValue="Primary Residence"
                      onClick={() => setshowfirstform(true)}
                    />
                  </div>
                  <div className="form-check my-3">
                    <input
                      className="form-check-input ps"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      onClick={Check_ApplyingSolo}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      I am applying solely
                    </label>
                  </div>
                  <label className="text-secondary h6">
                    Next is <span className="text-dark">Income</span>
                  </label>{" "}
                  <br />
                  <button
                    className="btn btn-primary rounded-0 mt-2 col-md-3 fw-bolder maxxx404"
                    onClick={() => Submit_Borrower()}
                  >
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>{" "}
                </>
              )}
              {showfirstform ? (
                <div className="  personalinfo_maxwidth">
                  <>
                    <h5 className="FillContent">Fill Co-Borrower's information</h5>
                    <div className="mt-2 contact_max ContectNext2">
                      <div className="input-group  ">
                        <span className="input-group-label contact-info-labelm SpaceCl">
                          FIRST NAME
                        </span>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Required"
                          className="form-control text-lowercase"
                          onChange={(e) => setCob_first_name(e.target.value)}
                        />
                      </div>

                      {bund?.cob_first_name
                        ? bund?.cob_first_name.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div className="input-group  mt-2">
                        <span className="input-group-label contact-info-label SpaceCl">
                          LAST NAME
                        </span>
                        <input
                          type="text"
                          placeholder="required"
                          className="form-control text-lowercase"
                          onChange={(e) => setCob_last_name(e.target.value)}
                        />
                      </div>

                      {bund?.cob_last_name
                        ? bund?.cob_last_name.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div className="input-group  mt-2">
                        <span className="input-group-label contact-info-label SpaceCl">
                          EMAIL ID
                        </span>
                        <input
                          type="email"
                          className="form-control text-lowercase"
                          placeholder="required "
                          onChange={(e) => setCob_email(e.target.value)}
                        />{" "}
                      </div>

                      {bund?.cob_email
                        ? bund?.cob_email.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div className="input-group  mt-2">
                        <span className="input-group-label contact-info-label SpaceCl">
                          PHONE
                        </span>
                        <input
                          type="tel"
                          className="form-control text-lowercase"
                          placeholder="required "
                          onChange={(e) => handlePhoneNumberChange(e, setCob_phone)}
                          value={cob_phone}
                        />{" "}
                      </div>

                      {bund?.cob_phone
                        ? bund?.cob_phone.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}

                      <div className="form-check my-3 ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onClick={Check_Spouse}
                        />
                        <label className="form-check-label" for="defaultCheck1">
                          This borrower is applying with his/her spouse
                        </label>{" "}
                      </div>

                      {bund?.complete_task
                        ? bund?.complete_task.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    {spouse === 0 ? null : (
                      <>
                        <h5 className="mt-5">
                          Fill his/her spouse's information
                        </h5>
                        <div className="mt-4 contact_max">
                          <div className="input-group SpaceCl ">
                            <span className="input-group-label contact-info-label ">
                              FIRST NAME
                            </span>
                            <input
                              type="text"
                              name="fname"
                              placeholder="Required"
                              className="form-control text-lowercase"
                              onChange={(e) => setSp_first_name(e.target.value)}
                            />{" "}
                          </div>

                          {bund?.sp_first_name
                            ? bund?.sp_first_name.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                          <div className="input-group SpaceCl mt-2">
                            <span className="input-group-label contact-info-label ">
                              LAST NAME
                            </span>
                            <input
                              type="text"
                              name="text"
                              formcontrolname="email"
                              placeholder="required"
                              className="form-control text-lowercase"
                              onChange={(e) => setSp_last_name(e.target.value)}
                            />
                          </div>

                          {bund?.sp_last_name
                            ? bund?.sp_last_name.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                          <div className="input-group SpaceCl mt-2">
                            <span className="input-group-label contact-info-label ">
                              EMAIL ID
                            </span>
                            <input
                              formcontrolname="workPhoneNumber"
                              className="form-control text-lowercase"
                              type="email"
                              placeholder="required"
                              onChange={(e) => setSp_email(e.target.value)}
                            />
                          </div>

                          {bund?.sp_email
                            ? bund?.sp_email.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                          <div className="input-group SpaceCl mt-2">
                            <span className="input-group-label contact-info-label ">
                              PHONE
                            </span>
                            <input
                              type="tel"
                              class="form-control rounded-0 input26clr"
                              placeholder="required"
                              onChange={(e) => handlePhoneNumberChange(e, setSp_phone)}
                              value={sp_phone}
                            />{" "}
                          </div>

                          {bund?.sp_phone
                            ? bund?.sp_phone.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}

                          <div className="form-check my-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck2"
                              onClick={Check_completetask}
                            />
                            <label className="form-check-label" for="defaultCheck2">
                              This borrower's spouse can complete tasks on
                              his/her behalf Invite
                            </label>
                          </div>

                          {bund?.spouse
                            ? bund?.spouse.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                        </div>
                      </>
                    )}
                    <div className="d-flex mt-4">
                      <button
                        className="btn btn-primary mx-2 px-md-2  rounded-0 w-5"
                        onClick={() => Add_Borrower()}
                      >
                        INVITE
                      </button>
                      <button
                        className="btn btn-light mx-2 px-md-2 border rounded-0 w-5"
                        onClick={() => setshowfirstform(false)}
                      >
                        CANCEL
                      </button>
                    </div>
                  </>
                </div>
              ) : null}
            </div>
            <div className="footerx4020" style={{marginTop:"245px"}}>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
            </div>
          </div>
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default RefCoBorrower;
