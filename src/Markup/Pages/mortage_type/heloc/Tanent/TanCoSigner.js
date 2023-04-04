import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../../Baseurl";
import { FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
import TanSideBar from "./TanSideBar";
import ProfileInfo from "../../Profile/ProfileInfo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function TanCoSigner() {

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
  // BorrowerData.append("id", id);
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
  const [spouse_check, setSpouse_check] = useState([]);
  const Check_Spouse = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    if (check) {
      setSpouse_check([...spouse_check, value]);
      setSpouse(1);
    } else {
      setSpouse_check(spouse_check?.filter((e) => e !== value));
      setSpouse(0);
    }
  };
  console.log(spouse, "SPOUSE");
  const [showfirstform, setshowfirstform] = useState(false);
  // Getting All Co-Borrowers
  const [getborrower, setGetborrower] = useState("");
  const BorrowerDataGet = new FormData();
  BorrowerDataGet.append("application_id", Assign_id);
  const Get_Borrower = () => {
    // alert();
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/get/all/signers`,
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
      url: `${Baseurl.baseurl}real-estate/rent/tenant/del/co-signer`,
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
          // history.push("/Co-Borrowers");
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
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/co-signers/info`,
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
          history.push("/heloc/tanent/income");
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

  const Add_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/invite/co-signers/info`,
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
          Get_Borrower();
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
          <div
            className={
              isOpen === true
                ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
            }
          >
            <div className="row">
              {showfirstform === true ? null : (
                <>
                  <h3 className="mb-3 p-md-0 fw-bold" id="co-singers-h">Co-Singers</h3>
                  <p class="ng-tns-c159-5  fontforsub fw-bold" id="coborrowerstatus">No Co-Signer has been added
                                yet</p>
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
                                  <Link to={`/Tan/Co-Signers/edit/${e?.id}`}>
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
                      No Co-Singer has been added yet
                    </p>
                  )}
                  <div className="personalinfo_property" >
                    <input
                      label="Add Co-Signers"
                      type="radio"
                      id="buttonadd1"
                      className="btnn"
                      // id="male"
                      name="gender"
                      defaultValue="Primary Residence"
                      onClick={() => setshowfirstform(true)}
                    />
                  </div>
                  <div class="form-check my-3 solely-left1">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      onClick={Check_ApplyingSolo}
                    />
                    <label class="form-check-label" id="checkhover1" for="defaultCheck1">
                      I am applying solely
                    </label>
                  </div>
                  <label className="fontsbtn">
                    Next is <span className="fontsbtncobor">Income</span>
                  </label>{" "}
                  <br />
                  <button
                    className="btn btn-primary rounded-0 mt-2 col-md-3 button-fw1"
                    onClick={() => Submit_Borrower()}
                  >
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>{" "}
                </>
              )}
              {showfirstform ? (
                <div className="mt-3 personalinfo_maxwidth">
                  <>
                    <label className="form-label  " id="information-h">Fill Co-Singer's information</label>
                    <div className="mt-4 contact_max">
                      <div class="input-group ">
                        <span class="input-group-label contact-info-label " id="first-name-width1">
                        First Name
                        </span>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Required"
                          id="f-width1"
                          class="form-control text-lowercase"
                          onChange={(e) => setCob_first_name(e.target.value)}
                        />
                      </div>

                      {bund?.cob_first_name
                        ? bund?.cob_first_name.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div class="input-group mt-2">
                        <span class="input-group-label contact-info-label " id="first-name-width1">
                        Last Name
                        </span>
                        <input
                          type="text"
                          placeholder="required"
                          id="f-width1"
                          class="form-control text-lowercase"
                          onChange={(e) => setCob_last_name(e.target.value)}
                        />
                      </div>

                      {bund?.cob_last_name
                        ? bund?.cob_last_name.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div class="input-group mt-2">
                        <span class="input-group-label contact-info-label " id="first-name-width1">
                        Email ID
                        </span>
                        <input
                          type="email"
                          id="f-width1"
                          class="form-control"
                          placeholder="required"
                          onChange={(e) => setCob_email(e.target.value)}
                        />{" "}
                      </div>

                      {bund?.cob_email
                        ? bund?.cob_email.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                      <div class="input-group mt-2">
                        <span class="input-group-label contact-info-label " id="first-name-width1">
                        Phone
                        </span>
                        <input
                          type="number"
                          id="f-width1"
                          class="form-control "
                          placeholder="required"
                          onChange={(e) => setCob_phone(e.target.value)}
                        />{" "}
                      </div>

                      {bund?.cob_phone
                        ? bund?.cob_phone.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}

                      <div class="form-check my-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onClick={(e) => Check_Spouse(e)}
                        />
                        <span className="label font-sm1" id="complete-fs1" for="defaultCheck1">
                          This Singer is applying with his/her spouse
                        </span>{" "}
                      </div>

                      {bund?.complete_task
                        ? bund?.complete_task.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    {spouse == 1 ? (
                      <>
                        <label className="form-label" id="information-h">
                          Fill his/her spouse's information
                        </label>
                        <div className="mt-4 contact_max">
                          <div class="input-group ">
                            <span class="input-group-label contact-info-label " id="first-name-width1">
                            First Name
                            </span>
                            <input
                              type="text"
                              name="fname"
                              placeholder="Required"
                              id="f-width1"
                              class="form-control text-lowercase"
                              onChange={(e) => setSp_first_name(e.target.value)}
                            />{" "}
                          </div>

                          {bund?.sp_first_name
                            ? bund?.sp_first_name.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                          <div class="input-group mt-2">
                            <span class="input-group-label contact-info-label " id="first-name-width1">
                            Last Name
                            </span>
                            <input
                              type="text"
                              name="text"
                              formcontrolname="email"
                              placeholder="required"
                              id="f-width1"
                              class="form-control text-lowercase"
                              onChange={(e) => setSp_last_name(e.target.value)}
                            />
                          </div>

                          {bund?.sp_last_name
                            ? bund?.sp_last_name.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                          <div class="input-group mt-2">
                            <span class="input-group-label contact-info-label " id="first-name-width1">
                            Email ID
                            </span>
                            <input
                              formcontrolname="workPhoneNumber"
                              id="f-width1"
                              class="form-control"
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
                          <div class="input-group mt-2">
                            <span class="input-group-label contact-info-label " id="first-name-width1">
                            Phone
                            </span>
                            <input
                              type="number"
                              id="f-width1"
                              class="form-control "
                              placeholder="required"
                              onChange={(e) => setSp_phone(e.target.value)}
                            />{" "}
                          </div>

                          {bund?.sp_phone
                            ? bund?.sp_phone.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}

                          <div class="form-check my-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck2"
                              onClick={Check_completetask}
                            />
                            <span className="label font-sm1" id="complete-fs1" for="defaultCheck2">
                              This Singer's spouse can complete tasks on his/her
                              behalf Invite
                            </span>
                          </div>

                          {bund?.spouse
                            ? bund?.spouse.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                        </div>
                      </>
                    ) : null}
                    <div className="d-flex mt-4">
                      <button
                        className=" mr-4"
                        id="invitebtn1"
                        onClick={() => Add_Borrower()}
                      >
                        INVITE
                      </button>
                      <button
                        className="font-medium"
                        id="cancel-btn1"
                        onClick={() => setshowfirstform(false)}
                      >
                        CANCEL
                      </button>
                    </div>
                  </>
                </div>
              ) : null}
            </div>
          </div>
          <ProfileInfo />
          <div className="footerimage3">
                <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
              </div>
        </div>
        
      </div>
    </>
  );
}

export default TanCoSigner;
