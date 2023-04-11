/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import Mortageside from "./Mortageside";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { Progress } from "antd";
import footer from "../../../../Images/footercity.svg";

const Mortageinfo = () => {
  const [allPostData, setAllPostData] = useState();
  const [id, Setid] = useState();

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
  const [loader, setLoader] = useState(false);
  const [bund, setBund] = useState();
  let store = localStorage.getItem("userDetails");
  store = JSON.parse(store);
  const Assign_id = localStorage.getItem("assignId");
  const history = useHistory();
  const [agent, setAgent] = useState("");
  const [mortage_info, setMortage_info] = useState("");
  // Getting Values
  const [purchase_process, setPurchase_process] = useState("");
  const [property_type, setProperty_type] = useState("");
  const [down_percent, setDown_percent] = useState("");
  const [comfortable_monthly, setComfortable_monthly] = useState();
  const [real_estate_agent, setReal_estate_agent] = useState(0);
  const [use_of_property, setUse_of_property] = useState("");
  const [price_of_property, setPrice_of_property] = useState("");
  const [down_payment, setDown_Payment] = useState("");
  const [down_payment_sources, setDown_Payment_sources] = useState("");
  const [down_payment_sources_amount, setDown_Payment_sources_amount] =
    useState("");
  const [operate_business, setOperate_business] = useState(0);
  const [agent_email_id, setAgent_email_id] = useState("");
  const [agent_full_name, setAgent_full_name] = useState("");
  const [agent_cell, setAgent_cell] = useState("");
  const [agent_company, setAgent_company] = useState("");
  const [down_payment_sources_extra, setDown_payment_sources_extra] =
    useState("");
  const [
    down_payment_sources_amount_extra,
    setDown_payment_sources_amount_extra,
  ] = useState("");
  // Getting Values End
  console.log(real_estate_agent, "real_estate_agent")
  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("purchase_process", purchase_process);
  Data.append("property_type", property_type);
  Data.append("use_of_property", use_of_property);
  Data.append("comfortable_monthly_ho_payment", comfortable_monthly);
  Data.append("real_estate_agent", real_estate_agent);
  Data.append("price_of_property", price_of_property);
  Data.append("down_payment", down_payment);
  Data.append("down_percent", down_percent);
  Data.append("down_payment_sources", down_payment_sources);
  Data.append("down_payment_sources_amount", down_payment_sources_amount);
  Data.append("operate_business", operate_business);
  Data.append("agent_email_id", agent_email_id);
  Data.append("agent_full_name", agent_full_name);
  Data.append("agent_cell", agent_cell);
  Data.append("agent_company", agent_company);
  Data.append("down_payment_sources_extra", down_payment_sources_extra);
  Data.append(
    "down_payment_sources_amount_extra",
    down_payment_sources_amount_extra
  );
  id && Data.append("id", id);


  const Get_Borrower = () => {
    setLoader(true);
    // console.log(bund2?.map((e)=>e),"bund2")
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/mortgage/info`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {

        console.log(response?.data?.data, "get");

        console.log(response?.data?.data, "res");
        if (response?.data?.status === true) {
          setLoader(false);
          setPurchase_process(response?.data?.data?.purchase_process)
          setProperty_type(response?.data?.data?.property_type)
          setDown_percent(response?.data?.data?.down_percent)
          setComfortable_monthly(response?.data?.data?.comfortable_monthly_ho_payment)
          setReal_estate_agent(response?.data?.data?.real_estate_agent)
          setUse_of_property(response?.data?.data?.use_of_property)
          setPrice_of_property(response?.data?.data?.price_of_property)
          setDown_Payment(response?.data?.data?.down_payment)
          setDown_Payment_sources(response?.data?.data?.down_payment_sources)
          setDown_Payment_sources_amount(response?.data?.data?.down_payment_sources_amount)
          setOperate_business(response?.data?.data?.operate_business)
          setAgent_email_id(response?.data?.data?.agent_email_id)
          setAgent_full_name(response?.data?.data?.agent_full_name)
          setAgent_cell(response?.data?.data?.agent_cell)
          setAgent_company(response?.data?.data?.agent_company)
          setDown_payment_sources_extra(response?.data?.data?.down_payment_sources_extra)
          down_payment_sources_amount_extra(response?.data?.data?.down_payment_sources_amount_extra)
          Setid(response?.data?.data?.id);

          // setPurchase_process(response?.data?.data?.)
          // setPurchase_process(response?.data?.data?.)
          // setPurchase_process(response?.data?.data?.)
          // setPurchase_process(response?.data?.data?.)



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
  const [editing,steediting] = useState(true)
  const [editing2,steediting2] = useState(true)
  console.log(editing,"editing")

  // console.log(bund?.address?.map((e,i)=>i),"bund")
  useEffect(() => {
    Get_Borrower();
  }, []);
  const [showExp, setShowExp] = useState(0)
  function handleChange(event,state,type) {
    if(type === "price_of_property"){
      steediting2(false)
    }
    else{
      steediting(false)
    }
    const inputValue = event.target.value;
    // Remove all non-numeric characters from the input value
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    // Format the numeric value using toLocaleString
    const formattedValue = Number(numericValue).toLocaleString();
    state(formattedValue);

    // alert()

    // if (event === "") {
    //   return setComfortable_monthly(0)
    // }

    // let syntizievalue = event?.replace(/[$,]/g, "")


    // console.log("syntizievalue", Number(syntizievalue))

    // const formattedValue = `$${parseFloat(syntizievalue).toFixed(2)}`;
    // const converted = parseFloat(syntizievalue).toLocaleString("en-US", {
    //   style: "currency",
    //   currency: "USD",
    //   minimumFractionDigits: 2,
    //   maximumFractionDigits: 2,
    // });
    // setComfortable_monthly(converted);


  }
console.log(price_of_property,"price_of_property")


  // Data.append("password");





  const Info = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/mortgage/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        setMortage_info(response?.data);
        console.log(response?.data?.data);
        console.log("title:", response?.data?.data?.message);
        if (response.data.status === true) {
          setLoader(false);

          history.push("/personal_info");
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
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          Swal.fire({
            toast: true,
            icon: "error",
            title: response?.data?.error.map((e) => e),
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
  const [checked, setChecked] = useState("");
  const IsChecked = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    if (check) {
      setChecked([...checked, value]);
      setOperate_business(1);
    } else {
      setChecked(checked.filter((e) => e !== value));
      setOperate_business(0);
    }
    console.log(operate_business);
  };
  const [hide, setHide] = useState(false);
  const isHide = () => {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
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

  console.log(typeof currencyValue, "currencyValue");
  console.log((down_percent / 100) / price_of_property, "down_percent");

  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <Header />
      <form>
        <div className="container-fluid">
          <div className="row">
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
                  <div className="mort grey_color fw-500">Review and Submit</div>
                  <div></div>
                </div>
              </Link>
            </div>
            <div
              className={
                isOpen === true
                  ? "col-md-8 open he my-5 ps-lg-5"
                  : isOpen === false
                    ? "col-md-10 open nhi he my-5 ps-lg-5"
                    : ""
              }
            >
              <div className="row">
                <div className="form-group col-md-8">
                  <div className="row">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>Where are you in the purchase process?</h5>
                    <div className="input-group126  my-2">
                      <select
                        className="form-select py-2 text-primary"
                        onChange={(e) => setPurchase_process(e.target.value)}
                        value={purchase_process}
                      >
                        <option selected="" disabled="">
                          Select
                        </option>
                        <option>Just Getting Started</option>
                        <option>Making Offers</option>
                        <option>Found a House / Offer Pending</option>
                        <option>Under Contract</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-4">
                  <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>What type of property are you looking?</h5>
                  <div className="input-group126 position-relative my-2">
                    <select
                      className="form-select py-2 text-primary"
                      onChange={(e) => setProperty_type(e.target.value)}
                      value={property_type}
                    >
                      <option selected="" disabled="">
                        Select Property Type
                      </option>
                      <option> Other </option>
                      <option> Manufactured Home </option>
                      <option> Cooperative </option>
                      <option> Condominium </option>
                      <option> 4 Unit </option>
                      <option> 3 Unit</option>
                      <option> 2 Unit </option>
                      <option> Single Family </option>
                    </select>
                    {bund?.property_type
                      ? bund?.property_type.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                  </div>
                  </div>
                     <div className="row mt-4">
                     <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>How will you be using this property?</h5>
                      <div className="d-flex flex-wrap">
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Primary Residence"
                            type="radio"
                            id="male"
                            name="gender"
                            defaultValue="Primary Residence"
                            className="btnColorhv266"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Investment"
                            type="radio"
                            id="female"
                            name="gender"
                            className="btnColorhv266"
                            defaultValue="Investment"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Second Home"
                            type="radio"
                            id="other"
                            name="gender"
                            className="btnColorhv266"
                            defaultValue="Second Home"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      {bund?.use_of_property
                        ? bund?.use_of_property.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}

                      <div className="mt-3 d-flex align-items-baseline">
                        &nbsp; &nbsp;
                        <input type="checkbox" onChange={IsChecked} />
                        &nbsp; &nbsp;
                        <label className="h6 text-muted">
                          I might also operate my business here
                        </label>
                        {bund?.operate_business
                          ? bund?.operate_business.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                      </div>
                      </div>
                     </div>
                  <div className="row my-4">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                      What is a comfortable monthly housing payment?
                    </h5>
                    <div class="input-group126 position-relative my-2">
                      <BiDollar className="textHover126" style={{ fontSize: "16px", fontWeight: "bold", position: "absolute", left: "18px", top: "12px", zIndex: "123" }} />
                      {/* <input
                        onChange={(e) => setComfortable_monthly(e.target.value)}
                        className="form-control123 m-0 ps-4"
                        type="number"
                        name=""
                        id=""
                        value={comfortable_monthly}
                      /> */}
                      <input
                        onChange={(e) => {handleChange(e,setComfortable_monthly,"comfortable_monthly")}}
                        className="form-control123 m-0 ps-4"
                        type="tel"
                        step="0.1"
                        // min='0'
                        // max='20'
                        onBlur={()=>steediting(true)}
                        onFocus={()=>steediting(false)}
                        value={ `${ comfortable_monthly === undefined ? 0 :comfortable_monthly}${editing === true ? ".00" : ""}`}
                        pattern="^[\d,]+$"

                        name=""
                        id=""
                      />
                      {bund?.comfortable_monthly_ho_payment
                        ? bund?.comfortable_monthly_ho_payment.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div>

                  </div>

                  <div className="row">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                      Are you currently working with a real estate agent?
                    </h5>

                    <div className="stateagent mt-2">
                      <div className="d-flex">
                        <div className="property_radio">
                          <input
                            label="Yes"
                            type="radio"
                            id="male"
                            name="agent"
                            value={"yes"}
                            defaultChecked={real_estate_agent == 1}
                            onChange={() => setReal_estate_agent(1)}
                          />
                        </div>
                        <div className="property_radio">
                          <input
                            label="No"
                            type="radio"
                            id="male"
                            name="agent"
                            value={"no"}

                            onChange={() => setReal_estate_agent(0)}
                            defaultChecked={real_estate_agent == 0}
                          />
                          {bund?.real_estate_agent
                            ? bund?.real_estate_agent.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                      </div>
                    </div>

                    {real_estate_agent == 1 ? (
                      <div className="agent_details col-md-10">
                        <label className="h6 text-muted mt-3 mb-1">
                          Please provide agent details
                        </label>

                        <div className="input-group mt-2">
                          <span className="input-group-label width-135">
                            Email ID
                          </span>
                          <input
                            type="email"
                            name="agent_email_id"
                            id="agent_email_id"
                            placeholder="Required"
                            className="form-control text-lowercase col-md-8"
                            value={agent_email_id}
                            onChange={(e) => setAgent_email_id(e.target.value)}
                          />
                        </div>
                        {bund?.agent_email_id
                          ? bund?.agent_email_id.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                        <div className="input-group mt-2">
                          <span className="input-group-label width-135">
                            Full Name
                          </span>
                          <input
                            type="text"
                            placeholder="Required"
                            className="form-control text-lowercase col-md-6"
                            onChange={(e) => setAgent_full_name(e.target.value)}
                            value={agent_full_name}
                          />
                        </div>
                        {bund?.agent_full_name
                          ? bund?.agent_full_name.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                        <div className="input-group mt-2">
                          <span className="input-group-label width-135">
                            Cell Phone
                          </span>
                          <input
                            type="number"
                            placeholder="Required"
                            className="form-control text-lowercase col-md-6"
                            onChange={(e) => setAgent_cell(e.target.value)}
                            value={agent_cell}

                          />
                        </div>
                        {bund?.agent_cell
                          ? bund?.agent_cell.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                        <div className="input-group mt-2">
                          <span className="input-group-label width-135">
                            Company
                          </span>
                          <input
                            type="text"
                            onChange={(e) => setAgent_company(e.target.value)}
                            placeholder="Required"
                            className="form-control text-lowercase col-md-6"
                          />
                        </div>
                        {bund?.agent_company
                          ? bund?.agent_company.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="row mt-4">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                      What is the approximate price of the property <br /> you are
                      looking at?
                    </h5>
                    <div class="input-group126 position-relative my-2">
                      <BiDollar style={{ fontSize: "16px", fontWeight: "bold", position: "absolute", left: "18px", top: "12px", zIndex: "123" }} />
                      {/* <input
                        onChange={(e) => setPrice_of_property(e.target.value)}
                        className="form-control123 m-0 ps-4"
                        type="number"
                        step="0.1"
                        // min='0'
                        // max='20'
                        value={price_of_property}
                        pattern="^[\d,]+$"

                        name=""
                        id=""
                      /> */}
                      <input
                        onChange={(e) => handleChange(e,setPrice_of_property,"price_of_property")}
                        className="form-control123 m-0 ps-4"
                        type="text"
                        // step="0.1"
                        // min='0'
                        // max='20'
                        onBlur={()=>steediting2(true)}
                        onFocus={()=>steediting2(false)}
                        value={ `${ price_of_property === undefined ? 0 : price_of_property}${editing2 === true ? ".00" : ""}`}
                        // pattern="^[\d,]+$"

                        name=""
                        id=""
                      />
                      {bund?.price_of_property
                        ? bund?.price_of_property.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div>
                  </div>
                  {/* shahbaz */}
                  {/* <div className="row mt-4">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>How much is your down payment?</h5>

                    <input
                      className="form-control123 mt-2 w-50"
                      type="number"
                      name=""
                      id=""
                      onChange={(e) => setDown_Payment(e.target.value)}
                    defaultValue={down_percent *price_of_property }
                    />

                  
                    {bund?.down_payment
                      ? bund?.down_payment.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                    {bund?.down_percent
                      ? bund?.down_percent.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                  </div> */}
                  {/* shahbaz */}

                  {/* shahbaz */}
                  {/* <div className="row mt-4 ms-0">
                    <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>Down payment source(s) and amount</h5>
                    <div className="input-group126 position-relative my-2"></div>
                    <select
                      className="form-select py-2"
                      onChange={(e) => setPurchase_process(e.target.value)}
                      value={purchase_process}
                    >
                      <option selected disabled>
                        Select
                      </option>
                      <option> Just Getting Started</option>
                      <option> Making Offers </option>
                      <option> Found a House / Offer Pending</option>
                      <option> Under Contract </option>
                    </select>
                    {bund?.purchase_process
                      ? bund?.purchase_process.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                  </div> */}
                  {/* shahbaz */}

                </div>
                
                <div className="row mt-4">
                  {/* <div className="col-md-12">
                    <div className="form-label">
                      <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>How will you be using this property?</h5>
                    </div>
                  </div> */}
                  <div className="form-group  col-md-8">
                    {/* <div className="d-flex flex-wrap">
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Primary Residence"
                            type="radio"
                            id="male"
                            name="gender"
                            defaultValue="Primary Residence"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Investment"
                            type="radio"
                            id="female"
                            name="gender"
                            defaultValue="Investment"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="me-0 me-md-3">
                        <div className="property_radio mx-auto">
                          <input
                            label="Second Home"
                            type="radio"
                            id="other"
                            name="gender"
                            defaultValue="Second Home"
                            onChange={(e) => setUse_of_property(e.target.value)}
                          />
                        </div>
                      </div>
                      {bund?.use_of_property
                        ? bund?.use_of_property.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}

                      <div className="mt-3 d-flex align-items-baseline">
                        &nbsp; &nbsp;
                        <input type="checkbox" onChange={IsChecked} />
                        &nbsp; &nbsp;
                        <label className="h6 text-muted">
                          I might also operate my business here
                        </label>
                        {bund?.operate_business
                          ? bund?.operate_business.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                      </div>
                    </div> */}
                    {/* shahbaz */}
                    {/* <div className="row">
                      <h5 className="mt-4">
                        What is a comfortable monthly housing payment?
                      </h5>
                      <input
                        onChange={(e) => handleChange(e.target.value)}
                        className="form-control mt-2 inputWidth266"
                        type="text"
                        step="0.1"
                        value={comfortable_monthly}
                        pattern="^[\d,]+$"
                        name=""
                        id=""
                      />
                      {bund?.comfortable_monthly_ho_payment
                        ? bund?.comfortable_monthly_ho_payment.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div> */}
                    {/* shahbaz */}

                    {/* shahbaz */}
                    {/* <div className="row">
                      <h5 className="mt-5">
                        Are you currently working with a real estate agent?
                      </h5>

                      <div className="stateagent mt-2">
                        <div className="d-flex">
                          <div className="property_radio">
                            <input
                              label="Yes"
                              type="radio"
                              id="male"
                              name="agent"
                              value={"yes"}
                              onChange={() => setReal_estate_agent(1)}
                            />
                          </div>
                          <div className="property_radio">
                            <input
                              label="No"
                              type="radio"
                              id="male"
                              name="agent"
                              value={"no"}
                              onChange={() => setReal_estate_agent(0)}
                              defaultChecked
                            />
                            {bund?.real_estate_agent
                              ? bund?.real_estate_agent.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                              : null}
                          </div>
                        </div>
                      </div>

                      {real_estate_agent === 1 ? (
                        <div className="agent_details col-md-10">
                          <label className="h6 text-muted mt-3 mb-1">
                            Please provide agent details
                          </label>

                          <div className="input-group mt-2">
                            <span className="input-group-label width-135">
                              Email ID
                            </span>
                            <input
                              type="email"
                              name="agent_email_id"
                              id="agent_email_id"
                              placeholder="Required"
                              className="form-control text-lowercase col-md-6"
                              onChange={(e) => setAgent_email_id(e.target.value)}
                            />
                          </div>
                          {bund?.agent_email_id
                            ? bund?.agent_email_id.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                          <div className="input-group mt-2">
                            <span className="input-group-label width-135">
                              Full Name
                            </span>
                            <input
                              type="text"
                              placeholder="Required"
                              className="form-control text-lowercase col-md-6"
                              onChange={(e) => setAgent_full_name(e.target.value)}
                            />
                          </div>
                          {bund?.agent_full_name
                            ? bund?.agent_full_name.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                          <div className="input-group mt-2">
                            <span className="input-group-label width-135">
                              Cell Phone
                            </span>
                            <input
                              type="number"
                              placeholder="Required"
                              className="form-control text-lowercase col-md-6"
                              onChange={(e) => setAgent_cell(e.target.value)}
                            />
                          </div>
                          {bund?.agent_cell
                            ? bund?.agent_cell.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                          <div className="input-group mt-2">
                            <span className="input-group-label width-135">
                              Company
                            </span>
                            <input
                              type="text"
                              onChange={(e) => setAgent_company(e.target.value)}
                              placeholder="Required"
                              className="form-control text-lowercase col-md-6"
                            />
                          </div>
                          {bund?.agent_company
                            ? bund?.agent_company.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                      ) : null}
                    </div> */}
                    {/* shahbaz */}

                    {/* shahbaz */}
                    {/* <div className="row mt-5">
                      <h5>
                        What is the approximate price of the property <br /> you are
                        looking at?
                      </h5>
                      <input
                        className="form-control mt-2 ms-2 w-75"
                        type="number"
                        inputMode="decimal"
                        id=""
                        value={Number(price_of_property)}
                        onChange={(e) => setPrice_of_property(e.target.value)}
                      />
                      {bund?.price_of_property
                        ? bund?.price_of_property.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div> */}
                    {/* shahbaz */}


                    <div className="row mt-4 align-items-baseline">
                      <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>How much is your down payment?</h5>
                      <div className="d-flex align-items-center ">
                        <div className="input-group126 position-relative">
                          <BiDollar style={{ fontSize: "16px", fontWeight: "600", position: "absolute", left: "1px", bottom: "11px", zIndex: "123" }} />
                          <input
                            className="form-control123 mt-2 ps-3"
                            type="number"
                            name=""
                            id=""
                            value={down_payment}
                            onChange={(e) => {
                              setDown_percent(Number(e.target.value) / Number(price_of_property.replaceAll(",","")) * 100)
                              setDown_Payment(e.target.value)
                              console.log(Number((e.target.value / 100)) * Number(price_of_property.replaceAll(",","")))

                            }}
                          />
                        </div>
                        <div className="position-relative">
                          <input
                            className="form-control mt-2 w-50 ps-3"
                            type="text"
                            name=""
                            id=""
                            value={down_percent}
                            // defaultValue={ Number(price_of_property ) / Number(down_payment ) }
                            onChange={(e) => {
                              setDown_Payment(Number((e.target.value / 100)) * Number(price_of_property.replaceAll(",","")));
                              // console.log(Number((e.target.value / 100)) * Number(price_of_property.replaceAll(",","")))

                              setDown_percent(e.target.value)
                            }}
                          />
                          <span style={{ fontSize: "15px", fontWeight: "600", position: "absolute", left: "4px", bottom: "8px" }}>%</span>
                        </div>
                      </div>

                      {bund?.down_payment
                        ? bund?.down_payment.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                      {bund?.down_percent
                        ? bund?.down_percent.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div>

                    <div className="row mt-4">
                      <h5 className="font266" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>Down payment source(s) and amount</h5>
                      <div className="d-flex align-items-center">
                        <div class="input-group126 position-relative">
                          <select
                            formcontrolname="FundsType"
                            name="donpaymentsources"
                            className="form-control123 mt-2 ps-3 "
                            style={{ fontSize: "16px", fontWeight: "bold", height: "37px", marginTop: "24px" }}
                            onChange={(e) => setDown_Payment_sources(e.target.value)}
                          >
                            <option
                              selected=""
                              disabled=""
                              className="ng-tns-c161-6 ng-star-inserted"
                            >
                              Select
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CheckingSavings"
                            >
                              Checking/Savings
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="GiftFunds"
                            >
                              Gift
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="StocksAndBonds"
                            >
                              Stocks and Bonds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnSoldProperty"
                            >
                              Equity On Sold Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnPendingSale"
                            >
                              Equity from Pending Sale of Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnSubjectProperty"
                            >
                              Equity from Subject Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Other"
                            >
                              Other funds source
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="BridgeLoan"
                            >
                              Bridge Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CashOnHand"
                            >
                              Cash On Hand
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CashOrOtherEquity"
                            >
                              Cash Or Other Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Contribution"
                            >
                              Contribution
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CreditCard"
                            >
                              Credit Card
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="DepositOnSalesContract"
                            >
                              Deposit On Sales Contract
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="ExcessDeposit"
                            >
                              Excess Deposit
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="ForgivableSecuredLoan"
                            >
                              Forgivable Secured Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Grant"
                            >
                              Grant
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="HousingRelocation"
                            >
                              Housing Relocation
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="LifeInsuranceCashValue"
                            >
                              Life Insurance Cash Value
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="LotEquity"
                            >
                              LotEquity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="19: MortgageCreditCertificates"
                            >
                              Mortgage Credit Certificates
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="MortgageRevenueBond"
                            >
                              Mortgage Revenue Bond
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="OtherEquity"
                            >
                              Other Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="PledgedCollateral"
                            >
                              Pledged Collateral
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="PremiumFunds"
                            >
                              Premium Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="RentWithOptionToPurchase"
                            >
                              Rent With Option To Purchase
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="RetirementFunds"
                            >
                              Retirement Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SaleOfChattel"
                            >
                              Sale Of Chattel
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SalesPriceAdjustment"
                            >
                              Sales Price Adjustment
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SecondaryFinancing"
                            >
                              Secondary Financing
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SecuredLoan"
                            >
                              Secured Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="30: SweatEquity"
                            >
                              Sweat Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="TradeEquity"
                            >
                              Trade Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="TrustFunds"
                            >
                              Trust Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="UnsecuredBorrowedFunds"
                            >
                              Unsecured Borrowed Funds
                            </option>
                          </select>
                        </div>
                        <div className="position-relative">
                          <input
                            className="form-control123 mt-2 w-25 ps-3"
                            type="number"
                            name=""
                            id=""
                            onChange={(e) =>
                              setDown_Payment_sources_amount(e.target.value)
                            }
                            value={down_payment}
                          />
                          <BiDollar style={{ fontSize: "16px", fontWeight: "bold", position: "absolute", left: "2px", bottom: "12px", zIndex: "123" }} />
                        </div>
                      </div>
                      {bund?.down_payment_sources
                        ? bund?.down_payment_sources.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                      {bund?.down_payment_sources_amount
                        ? bund?.down_payment_sources_amount.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div>

                    <div className="row mt-2">
                      {hide ? (
                        <>
                       <div className="d-flex align-items-center">
                        <div class="input-group126 position-relative">
                          <select
                            formcontrolname="FundsType"
                            name="donpaymentsources"
                            className="form-control mt-2 ps-3"
                            style={{ fontSize: "16px", fontWeight: "bold", height: "37px", marginTop: "24px" }}
                            onChange={(e) =>setDown_payment_sources_extra(e.target.value)}
                          >
                            <option
                              selected=""
                              disabled=""
                              className="ng-tns-c161-6 ng-star-inserted"
                            >
                              Select
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CheckingSavings"
                            >
                              Checking/Savings
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="GiftFunds"
                            >
                              Gift
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="StocksAndBonds"
                            >
                              Stocks and Bonds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnSoldProperty"
                            >
                              Equity On Sold Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnPendingSale"
                            >
                              Equity from Pending Sale of Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="EquityOnSubjectProperty"
                            >
                              Equity from Subject Property
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Other"
                            >
                              Other funds source
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="BridgeLoan"
                            >
                              Bridge Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CashOnHand"
                            >
                              Cash On Hand
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CashOrOtherEquity"
                            >
                              Cash Or Other Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Contribution"
                            >
                              Contribution
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="CreditCard"
                            >
                              Credit Card
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="DepositOnSalesContract"
                            >
                              Deposit On Sales Contract
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="ExcessDeposit"
                            >
                              Excess Deposit
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="ForgivableSecuredLoan"
                            >
                              Forgivable Secured Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="Grant"
                            >
                              Grant
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="HousingRelocation"
                            >
                              Housing Relocation
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="LifeInsuranceCashValue"
                            >
                              Life Insurance Cash Value
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="LotEquity"
                            >
                              LotEquity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="19: MortgageCreditCertificates"
                            >
                              Mortgage Credit Certificates
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="MortgageRevenueBond"
                            >
                              Mortgage Revenue Bond
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="OtherEquity"
                            >
                              Other Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="PledgedCollateral"
                            >
                              Pledged Collateral
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="PremiumFunds"
                            >
                              Premium Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="RentWithOptionToPurchase"
                            >
                              Rent With Option To Purchase
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="RetirementFunds"
                            >
                              Retirement Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SaleOfChattel"
                            >
                              Sale Of Chattel
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SalesPriceAdjustment"
                            >
                              Sales Price Adjustment
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SecondaryFinancing"
                            >
                              Secondary Financing
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="SecuredLoan"
                            >
                              Secured Loan
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="30: SweatEquity"
                            >
                              Sweat Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="TradeEquity"
                            >
                              Trade Equity
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="TrustFunds"
                            >
                              Trust Funds
                            </option>

                            <option
                              className="ng-tns-c161-6 ng-star-inserted"
                              value="UnsecuredBorrowedFunds"
                            >
                              Unsecured Borrowed Funds
                            </option>
                          </select>
                        </div>
                        <div className="position-relative">
                          <input
                            className="form-control mt-2 w-25 ps-3"
                            type="number"
                            name=""
                            id=""
                            onChange={(e) =>
                              setDown_payment_sources_amount_extra(e.target.value)
                            }
                          />
                          <BiDollar style={{ fontSize: "16px", fontWeight: "bold", position: "absolute", left: "2px", bottom: "12px", zIndex: "123" }} />
                        </div>
                      </div>

                          {/* <input
                            className="form-control mt-4 w-50"
                            type="number"
                            name=""
                            id=""
                            onChange={(e) =>
                              setDown_payment_sources_extra(e.target.value)
                            }
                          />

                          <input
                            className="form-control mt-4 w-25"
                            type="number"
                            name=""
                            id=""
                            onChange={(e) =>
                              setDown_payment_sources_amount_extra(e.target.value)
                          />
                            } */}
                          {bund?.down_payment_sources_extra
                            ? bund?.down_payment_sources_extra.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                          {bund?.down_payment_sources_amount_extra
                            ? bund?.down_payment_sources_amount_extra.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </>
                      ) : null}
                      <label
                        className="h6 text-primary mt-2"
                        style={{ cursor: "pointer" }}
                        onClick={isHide}
                      >
                        Add down payment source
                      </label>
                    </div>
                    <div className="row mt-4">
                      <label className="h6 text-primary mt-2">
                        Your loan amount will be
                      </label>
                      <h2 className="text-primary bold">{ Number(price_of_property?.replaceAll(",","")) - Number(down_payment)}</h2>

                      <label className="text-secondary h6">
                        Next is <span className="text-dark">Personal Info</span>
                      </label>
                    </div>
                    <button
                      className="btn btn-primary rounded"
                      onClick={() => Info()}
                    >
                      Save And Continue &nbsp;
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-bottom" ></div>
              <img src={footer} alt="img" width="96%" />
            </div>
            <ProfileInfo />
          </div>
        </div>
      </form>
    </>
  );
};

export default Mortageinfo;
