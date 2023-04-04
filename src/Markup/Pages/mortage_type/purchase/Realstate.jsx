import React, { useState, useEffect } from "react";
import Header from "../../../Layout/Header";
import { Button, Modal } from "antd";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import {FaSearch, FaBars, FaCheckCircle } from "react-icons/fa";
import {AiOutlineArrowRight, AiTwotoneEdit} from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import footer from "../../../../Images/footercity.svg";


 

import ProfileInfo from "../Profile/ProfileInfo";

function Realstate() {

  const history = useHistory();
  
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

  const [showform, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setdata] = useState();
  const [data1, setdata1] = useState();
  const [data2, setdata2] = useState();
  const [data3, setdata3] = useState();
  const [data4, setdata4] = useState();
  const [data5, setdata5] = useState();
  const [getborrower, setGetborrower] = useState("");

  const [pass, setpass] = useState();
  const [no_real_estate, setno_real_estate] = useState(0);
  const [array, SetArray] = useState([
    {
      address: "",
      property_value: "",
      monthly_expenses: "",
      property_usage: "",
      property_status: "",
      property_type: "",
    },
  ]);
  const [loader, setLoader] = useState(false);
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [bund, setBund] = useState("");
  const [bund2, setBund2] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(data, "data");
  const adddata = () => {
    setpass([data, data1, data2, data3, data4, data5]);
    handleOk();
  };
  const handleFormChange = (event, i) => {
    console.log(event.target.value, "event");
    console.log(i, "i");
    let data = [...array];
    data[i][event.target.name] = event.target.value ;
    SetArray(data);
  };
  console.log(array);
  const add = () => {
    const newForm = {
      address: "",
      property_value: "",
      monthly_expenses: "",
      property_usage: "",
      property_status: "",
      property_type: "",
    };

    SetArray([...array, newForm]);
    console.log(array);
  };

  const BorrowerData = new FormData();
  const BorrowerData2 = new FormData();
  BorrowerData.append("application_id", Assign_id);
  BorrowerData2.append("application_id", Assign_id);
  {
    Array.isArray(array) &&
      array?.map((e, i) => {
        BorrowerData.append(`address[${i}]`, e?.address);
        BorrowerData.append(`monthly_expenses[${i}]`, e?.monthly_expenses);
        BorrowerData.append(`property_value[${i}]`, e?.property_value);
        BorrowerData.append(`property_status[${i}]`, e?.property_status);
        BorrowerData.append(`property_usage[${i}]`, e?.property_usage);
        BorrowerData.append(`property_type[${i}]`, e?.property_type);
      });
  }
  BorrowerData.append("no_real_estate", no_real_estate);

    const Get_Borrower = () => {
      setLoader(true);
      // console.log(bund2?.map((e)=>e),"bund2")
      let token = localStorage.getItem("usertoken");
      var config = {
        method: "post",
        url: `${Baseurl.baseurl}get/all/real/estate`,
        data: BorrowerData2,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then(function (response) {
          SetArray(
            response?.data?.data?.length == 0
              ? [
                  {
                    address: "",
                    property_value: "",
                    monthly_expenses: "",
                    property_usage: "",
                    property_status: "",
                    property_type: "",
                  },
                ]
              : response?.data?.data
          );
          console.log(response?.data?.data, "get");
          setno_real_estate(
            response?.data?.data?.no_real_estate
              ? response?.data?.data?.no_real_estate
              : 0
          );
          console.log(response?.data?.data, "res");
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
          console.log(error, "error");

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

  // console.log(bund?.address?.map((e,i)=>i),"bund")
  useEffect(() => {
    Get_Borrower();
  }, []);
  console.log(bund?.address, "array");
  const AddBaseIncome = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}add/real/estate`,
      data: BorrowerData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        SetArray(response?.data?.message);
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          setLoader(false);
          Get_Borrower();
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
        // // const keys = Object.keys(error?.response?.data?.errors);
        // // keys.forEach((element, i) => {
        // //   console.log(error?.response?.data?.errors[element][0]);
        // });
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
  const delete1 = (i) => {
    setLoader(true);

    const rows = [...array];
    // console.log(rows.splice(i, 1));
    rows.splice(i, 1);
    SetArray(rows);
    setLoader(false);
  };
  // console.log(array.property_type, "property_type");
  // console.log(array[0],"new console")
const handleSubmit = (e)=>{
e.preventDefault()
} 
  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <Header />
      {
        <form onSubmit={handleSubmit}>

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

            <div className={
              isOpen === true
                ? "col-md-8 open he mb-2 mt-5  ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mb-2 mt-5  ps-lg-5"
                : ""
            }>
              <div className="row mx-3 pb-3" style={{width:"98%"}}>
                <div className="col-lg-9">
                  <h2 className="mt-1">Real State</h2>
                </div>

                <p className="fontSW29  mt-4">
                  Do you own any real estate?
                </p>
                <div className="row">
                  <div className="col-3 col-md-2 col-lg-1 my-3">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="YES"
                      autocomplete="off"
                      checked={no_real_estate == 0}
                      onChange={() => {
                        setno_real_estate(0);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1 my-3">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="NO"
                      autocomplete="off"
                      onChange={() => {
                        setno_real_estate(1);
                      }}
                    />
                    <label
                    style={{marginLeft:"30px"}}
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="NO"
                    >
                      No
                    </label>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-9 col-md-10 col-sm-11">
                    {no_real_estate == 0
                      ? Array.isArray(array) &&
                        array?.map((e, i) => {
                          return (
                            <>
                              <label className="fontSW29 mb-3">Fill real estate address and other details</label>
                              <div class="input-group position-relative">
                                  <FaSearch style={{fontSize:"17px", position:"absolute", left:"10", top:"13px", zIndex:"123"}}/>
                               <input 
                               style={{fontSize:"12px", fontWeight:"500"}}
                                  type="email"
                                  name="address"
                                  placeholder="Email Address"
                                  aria-label="First name"
                                  class="form-control fontSW28 rounded-0 ps-5"
                                  value={e?.address}
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                  required/>
                                {bund?.address
                                  ? bund?.address.map((e) => (
                                      <p className="text-danger">{e}</p>
                                    ))
                                  : null}
                                  <AiTwotoneEdit className="text-primary" style={{fontSize:"20px", position:"absolute", right:"10", top:"13px", zIndex:"123"}}/>
                              </div>

                              <div class="input-group mt-3 ">
                                <span style={{fontSize:"12px",color:"gray", fontWeight:"600", maxWidth:"40%", justifyContent:"center", alignItems:"center"}} class="input-group-text">
                                  Property Value
                                </span>
                                 <input style={{fontSize:"13px",color:"black", fontWeight:"400"}}
                                  type="Number"
                                  name="property_value"
                                  id="validationCustom01"
                                  placeholder="0"
                                  aria-label="First name"
                                  class="form-control ps-3 fontSW28 rounded-0"
                                  value={e?.property_value}
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                  required/>
                                {bund?.property_value
                                  ? bund?.property_value.map((e) => (
                                      <p className="text-danger">{e}</p>
                                    ))
                                  : null}
                              </div>
                              <div class="input-group mt-2 position-relative">
                                <span style={{fontSize:"12px", fontWeight:"600",color:"gray",maxWidth:"40%", justifyContent:"center", alignItems:"center"}} class="input-group-text">
                                  Property Usage
                                </span>
                                <RiArrowDropDownLine style={{fontSize:"33px",right:"0px", top:"5px", position:"absolute", zIndex:"123"}} />
                                <select
                                style={{fontSize:"13px",color:"black", fontWeight:"400"}}
                                  class="form-control pe-5  fw-bold fontSW28 rounded-0"
                                  id="inputGroupSelect01"
                                  name="property_usage"
                                  value={e?.property_usage}
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                >
                                  <option selected disabled>
                                    Select Property Usage
                                  </option>
                                  <option value="Primary Residence">
                                    Primary Residence
                                  </option>
                                  <option value="Investment">Investment</option>
                                  <option value="Second Home">
                                    Second Home
                                  </option>
                                </select>
                              </div>
                              {bund?.property_usage
                                ? bund?.property_usage.map((e) => (
                                    <p className="text-danger">{e}</p>
                                  ))
                                : null}
                              <div class="input-group mt-2 position-relative">
                                <span style={{fontSize:"12px", fontWeight:"600",color:"gray", maxWidth:"40%", justifyContent:"center", alignItems:"center"}} class="input-group-text">
                                  Property Status
                                </span>
                                <RiArrowDropDownLine style={{fontSize:"33px",right:"0px", top:"5px", position:"absolute", zIndex:"123"}} />
                                <select
                                style={{fontSize:"13px",color:"black", fontWeight:"400"}}
                                  class="form-control pe-5 fw-bold fontSW28 rounded-0"
                                  id="validationCustom01"
                                  name="property_status"
                                  value={e?.property_status}
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                >
                                  <option selected >
                                    Select Property Status
                                  </option>
                                  <option value="Pending Sale">
                                    Pending Sale
                                  </option>
                                  <option value="Retain">Retain</option>
                                  <option value="Sold">Sold</option>
                                </select>
                              </div>
                              <div class="input-group mt-2 position-relative">
                                <span style={{fontSize:"12px", fontWeight:"bold",color:"gray", maxWidth:"40%", justifyContent:"center", alignItems:"center"}} class="input-group-text">
                                  Property Type
                                </span>
                                <RiArrowDropDownLine style={{fontSize:"33px",right:"0px", top:"5px", position:"absolute", zIndex:"123"}} />
                                <select
                               style={{fontSize:"13px",color:"black", fontWeight:"400"}}
                                  class="form-control pe-5 fw-bold fontSW28 rounded-0"
                                  id="inputGroupSelect01"
                                  name="property_type"
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                  value={e?.property_type}
                                >
                                  <option selected disabled>
                                    Select Property Type
                                  </option>
                                  <option value="Single Family">
                                    Single Family
                                  </option>
                                  <option value="Condominium">
                                    Condominium
                                  </option>
                                  <option value="Cooperative">
                                    Cooperative
                                  </option>
                                  <option value="Manufactured Home">
                                    Manufactured Home
                                  </option>
                                  <option value="Two to Four Family">
                                    Two to Four Family
                                  </option>
                                  <option value="Other">Other</option>
                                  <option value="Commerical">Commerical</option>
                                  <option value="Farm">Farm</option>
                                  <option value="Land">Land</option>
                                  <option value="Mixed Use">Mixed Use</option>
                                  <option value="Mobile Home">
                                    Mobile Home
                                  </option>
                                  <option value="Multi Family +4">
                                    Multi Family +4
                                  </option>
                                  <option value="Townhouse">Townhouse</option>
                                </select>
                              </div>
                              {bund?.property_status
                                ? bund?.property_status.map((e) => (
                                    <p className="text-danger">{e}</p>
                                  ))
                                : null}
                              {/* <div class="input-group mt-3">
                          <span class="input-group-text">Property Type</span>
                          <select class="form-select" id="inputGroupSelect01" name="property_type" value={e?.property_usage} onChange={(event)=>handleFormChange(event,i)}>
                            <option selected disabled>
                              Select Property Type
                            </option>
                            <option value="Single Family">Single Family</option>
                            <option value="Condominium">Condominium</option>
                            <option value="Cooperative">Cooperative</option>
                            <option value="Manufactured Home">
                              Manufactured Home
                            </option>
                            <option value="Two to Four Family">
                              Two to Four Family
                            </option>
                            <option value="Other">Other</option>
                            <option value="Commerical">Commerical</option>
                            <option value="Farm">Farm</option>
                            <option value="Land">Land</option>
                            <option value="Mixed Use">Mixed Use</option>
                            <option value="Mobile Home">Mobile Home</option>
                            <option value="Multi Family +4">
                              Multi Family +4
                            </option>
                            <option value="Townhouse">Townhouse</option>
                          </select>
                        </div> */}

                              <div class="input-group mt-2">
                                <span style={{fontSize:"12px",color:"gray", padding:"0 60px", fontWeight:"600", maxWidth:"40%", justifyContent:"center", alignItems:"center"}} class="input-group-text">
                                  Monthly Expenses
                                </span>
                                <input
                                style={{fontSize:"13px",color:"black", fontWeight:"400"}}
                                  type="Number"
                                  name="monthly_expenses"
                                  placeholder="Ins, Maint, Taxes, etc"
                                  aria-label="First name"
                                  class="form-control px-3  fw-bold fontSW28 rounded-0"
                                  min="2"
                                  value={e?.monthly_expenses}
                                  onChange={(event) =>
                                    handleFormChange(event, i)
                                  }
                                  required
                                />
                                {bund?.monthly_expenses 
                                  ? bund?.monthly_expenses.map((e) => (
                                      <p className="text-danger">{e}</p>
                                    ))
                                  : null}
                              </div>
                              {i == 0 ? (
                                ""
                              ) : (
                                <button
                                  className="btn btn-danger mt-2"
                                  onClick={() => delete1(i)}
                                >
                                  Delete
                                </button>
                              )}
                            </>
                          );
                        })
                      : ""}
                  </div>
                </div>
                <div className="row ms-2 px-1">
                  <div className=".col-md-6 p-0 col-lg-6">
                    <label  className="text-secondary p-0 mt-4 w-100">
                      <div style={{cursor:"pointer", fontSize:"15px", fontWeight:"600"}} className="text-secondary  mt-5" onClick={add}>Add another real estate property</div>{" "}
                      Next is <span style={{fontSize:"14px", fontWeight:"600", color:"black"}}>Declarations</span>
                    </label>
                  
                    <button
                      className="btn btn-primary rounded-0 mt-2"
                      onClick={AddBaseIncome}
                    >
                      Save And Continue &nbsp;
                      <AiOutlineArrowRight />
                    </button>
                    {/* <button className="btn btn-primary ms-2 mt-2" onClick={add}>
                      Add
                    </button> */}
                  </div>
                </div>
               
              </div>
              <br />
              <div >
                <hr />
                <img className="pb-1" src={footer} alt="footer"/>
              </div>
            </div>
            <ProfileInfo />
          </div>
        </div>
        </form>
      }

      <Modal
        title="Update Address"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={adddata}>
            Save Changes
          </Button>,
        ]}
      >
        <div className="row">
          <div className="col-lg-9">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
                onChange={(e) => {
                  setdata(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Unit/Apt</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Unit/Apt"
                onChange={(e) => {
                  setdata1(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">City</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
                onChange={(e) => {
                  setdata2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">State</label>
              <select
                class="form-select"
                onChange={(e) => {
                  setdata3(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option value="">--</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Guam">Guam</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virgin Islands">Virgin Islands</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
                onChange={(e) => {
                  setdata4(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Country Name</label>
              <select
                class="form-select"
                onChange={(e) => {
                  setdata5(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option selected disabled>
                  --
                </option>
                <option value="ALACHUA">ALACHUA</option>
                <option value="BAKER">BAKER</option>
                <option value="BAY">BAY</option>
                <option value="BRADFORD">BRADFORD</option>
                <option value="BREVARD">BREVARD</option>
                <option value="BROWARD">BROWARD</option>
                <option value="CALHOUN">CALHOUN</option>
                <option value="CHARLOTTE">CHARLOTTE</option>
                <option value="CITRUS">CITRUS</option>
                <option value="CLAY">CLAY</option>
                <option value="COLLIER">COLLIER</option>
                <option value="COLUMBIA">COLUMBIA</option>
                <option value="DESOTO">DESOTO</option>
                <option value="DIXIE">DIXIE</option>
                <option value="DUVAL">DUVAL</option>
                <option value="ESCAMBIA">ESCAMBIA</option>
                <option value="FLAGLER">FLAGLER</option>
                <option value="FRANKLIN">FRANKLIN</option>
                <option value="GADSDEN">GADSDEN</option>
                <option value="GILCHRIST">GILCHRIST</option>
                <option value="GLADES">GLADES</option>
                <option value="GULF">GULF</option>
                <option value="HAMILTON">HAMILTON</option>
                <option value="HARDEE">HARDEE</option>
                <option value="HENDRY">HENDRY</option>
                <option value="HERNANDO">HERNANDO</option>
                <option value="HIGHLANDS">HIGHLANDS</option>
                <option value="HILLSBOROUGH">HILLSBOROUGH</option>
                <option value="HOLMES">HOLMES</option>
                <option value="INDIAN RIVER">INDIAN RIVER</option>
                <option value="JACKSON">JACKSON</option>
                <option value="JEFFERSON">JEFFERSON</option>
                <option value="LAFAYETTE">LAFAYETTE</option>
                <option value="LAKE">LAKE</option>
                <option value="LEE">LEE</option>
                <option value="LEON">LEON</option>
                <option value="LEVY">LEVY</option>
                <option value="LIBERTY">LIBERTY</option>
                <option value="MADISON">MADISON</option>
                <option value="MANATEE">MANATEE</option>
                <option value="MARION">MARION</option>
                <option value="MARTIN">MARTIN</option>
                <option value="MIAMI-DADE">MIAMI-DADE</option>
                <option value="MONROE">MONROE</option>
                <option value="NASSAU">NASSAU</option>
                <option value="OKALOOSA">OKALOOSA</option>
                <option value="OKEECHOBEE">OKEECHOBEE</option>
                <option value="ORANGE">ORANGE</option>
                <option value="OSCEOLA">OSCEOLA</option>
                <option value="PALM BEACH">PALM BEACH</option>
                <option value="PASCO">PASCO</option>
                <option value="PINELLAS">PINELLAS</option>
                <option value="POLK">POLK</option>
                <option value="PUTNAM">PUTNAM</option>
                <option value="SANTA ROSA">SANTA ROSA</option>
                <option value="SARASOTA">SARASOTA</option>
                <option value="SEMINOLE">SEMINOLE</option>
                <option value="ST JOHNS">ST JOHNS</option>
                <option value="ST LUCIE">ST LUCIE</option>
                <option value="SUMTER">SUMTER</option>
                <option value="SUWANNEE">SUWANNEE</option>
                <option value="TAYLOR">TAYLOR</option>
                <option value="UNION">UNION</option>
                <option value="VOLUSIA">VOLUSIA</option>
                <option value="WAKULLA">WAKULLA</option>
                <option value="WALTON">WALTON</option>
                <option value="WASHINGTON">WASHINGTON</option>
                <button onClick={add}>Add</button>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Realstate;
