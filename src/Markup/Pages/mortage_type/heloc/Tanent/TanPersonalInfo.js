import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import { AiOutlineArrowRight, AiOutlineDollar } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import Baseurl from "../../../../../Baseurl";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import TanSideBar from "./TanSideBar";
import Swal from "sweetalert2";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

const TanPersonalInfo = () => {
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

  const [id, Setid] = useState();

  const [FirstName, setFirstName] = useState("");
  const [Middle, setMiddleName] = useState("");
  const [Last, setLastName] = useState("");
  const [Suffix, setSuffix] = useState("");
  const [altname, setAltname] = useState(0);
  const [Alt, setAlt] = useState("");
  const [nickname, setNickname] = useState(0);
  const [Nick, setNick] = useState("");
  const [EmailID, setEmailID] = useState("");
  const [Phone, setPhone] = useState("");
  const [WorkPhone, setWorkPhone] = useState("");
  const [Ext, setExt] = useState("");
  const [HomePhone, setHomePhone] = useState("");
  const [address, setaddress] = useState("");
  const [mailing, setMailing] = useState(0);
  const [MailingAddress, setMailingAddress] = useState("");
  const [Company, setCompany] = useState();
  const [LandlordFirstName, setLandlordFirstName] = useState("");
  const [LandlordLastName, setLandlordLastName] = useState("");
  const [LandlordDate, setLandlordDate] = useState("");
  const [LandlordPhone, setLandlordPhone] = useState("");
  const [LandlordContact, setLandlordContact] = useState("");
  const [EmergencyName, setEmergencyName] = useState("");
  const [EmergencyRelation, setEmergencyRelation] = useState("");
  const [EmergencyPhone, setEmergencyPhone] = useState("");
  const [EmergencyDate, setEmergencyDate] = useState("");
  const [Ssn, setSsn] = useState("");
  const [C_ssn, setC_ssn] = useState("");
  const [CreditScore, setCreditScore] = useState("");

  const alternate_names = (e) => {
    if (e.target.checked) {
      setAltname(1);
    } else {
      setAltname(0);
    }
  };
  const nickname_names = (e) => {
    if (e.target.checked) {
      setNickname(1);
    } else {
      setNickname(0);
    }
  };
  const Mailing = (e) => {
    if (e.target.checked) {
      setMailing(1);
    } else {
      setMailing(0);
    }
  };
  console.log(EmergencyDate, "====altname");

  const [ApiData, setApiData] = useState();
  const get = () => {
    setLoader(true);
    let Id = localStorage.getItem("assignId");
    let token = localStorage.getItem("usertoken");

    const Data = new FormData();
    Data.append("application_id", Id);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/get/personal/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config).then((response) => {
      setApiData(response?.data?.data);
      setFirstName(response?.data?.data?.user_profile?.first_name);
      setMiddleName(response?.data?.data?.middle_name);
      setLastName(response?.data?.data?.user_profile?.last_name);
      setSuffix(response?.data?.data?.suffix);
      setAltname(response?.data?.data?.alternate_names);
      setAlt(response?.data?.data?.have_alternate_names);
      setNickname(response?.data?.data?.nick_name);
      setNick(response?.data?.data?.have_nick_name);
      setEmailID(response?.data?.data?.email);
      setPhone(response?.data?.data?.cell_phone);
      setWorkPhone(response?.data?.data?.work_phone);
      setExt(response?.data?.data?.ext);
      setHomePhone(response?.data?.data?.home_phone);
      setaddress(response?.data?.data?.address);
      setMailing(response?.data?.data?.mailing_address);
      setMailingAddress(response?.data?.data?.have_mailing_address);
      setCompany(response?.data?.data?.cheque);
      setEmergencyName(response?.data?.data?.first_name);
      setEmergencyRelation(response?.data?.data?.em_relation);
      setEmergencyPhone(response?.data?.data?.em_phone_no);
      setEmergencyDate(response?.data?.data?.em_phone_no);
      setSsn(response?.data?.data?.ssn);
      setC_ssn(response?.data?.data?.c_ssn);
      setCreditScore(response?.data?.data?.estimated_credit_score);
      setLandlordFirstName(response?.data?.data?.landlord_first_name);
      setLandlordLastName(response?.data?.data?.landlord_last_name);
      setLandlordDate(response?.data?.data?.landlord_date);
      setLandlordPhone(response?.data?.data?.landlord_phone_no);
      Setid(response?.data?.data?.id);
      setLoader(false);
    });
  };

  useEffect(() => {
    get();
  }, []);

  console.log(ApiData, "getdata");
  console.log(Company, "getdata");

  const add = () => {
    setLoader(true);
    let Id = localStorage.getItem("assignId");
    let token = localStorage.getItem("usertoken");

    const Data = new FormData();
    Data.append("application_id", Id);
    Data.append("first_name", FirstName);
    Data.append("middle_name", Middle);
    Data.append("last_name", Last);
    Data.append("suffix", Suffix);
    Data.append("alternate_names", altname == undefined ? 0 : 1);
    Data.append("have_alternate_names", Alt == undefined ? "" : Alt);
    Data.append("nick_name", nickname == undefined ? 0 : 1);
    Data.append("have_nick_name", Nick == undefined ? "" : Nick);
    Data.append("email", EmailID);
    Data.append("cell_phone", Phone);
    Data.append("work_phone", WorkPhone);
    Data.append("ext", Ext);
    Data.append("home_phone", HomePhone);
    Data.append("address", address);
    Data.append("mailing_address", mailing);
    Data.append("have_mailing_address", MailingAddress);
    Data.append("cheque", Company);
    Data.append("landlord_first_name", LandlordFirstName);
    Data.append("landlord_last_name", LandlordLastName);
    Data.append("landlord_phone_no", LandlordPhone);
    Data.append("landlord_date", LandlordDate);
    Data.append(
      "landlord_communication",
      LandlordContact == "0"
        ? 0
        : LandlordContact == "1"
          ? 1
          : LandlordContact == 2
            ? 2
            : 0
    );
    Data.append("em_first_name", EmergencyName);
    Data.append("em_relation", EmergencyRelation);
    Data.append("em_phone_no", EmergencyPhone);
    Data.append("ssn", Ssn);
    Data.append("c_ssn", C_ssn);
    Data.append("estimated_credit_score", CreditScore);
    id && Data.append("id", id);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/personal/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
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
                  ? "col-md-12 open nhi he mt-5 mb-2 ps-lg-5"
                  : ""
            }
          >
            <div className="form-group">
              <div className="row w-100">
                <label className="mb-3 p-md-0 form-label font-bold" id="legal-name-left">Please fill your full, legal name</label>
                <div className="max-width-600 ">
                  <div className="input-group  vertical-on-mobile  ">
                    <div className="col-lg-3 col-md-3 wd8  p-md-0">

                      <input
                        className="form-control rounded-0"
                        id="inputheight1"
                        type="text"
                        placeholder="First Name"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ padding: "12px 10px", marginLeft: "15px" }}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 wd8 p-md-0">
                      <inputv
                        className="form-control rounded-0"
                        id="inputheight1"
                        type="text"
                        placeholder="Middle Name"
                        value={Middle}
                        onChange={(e) => setMiddleName(e.target.value)}
                        style={{ padding: "12px 10px", marginLeft: "15px" }}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 wd8  p-md-0">
                      <input
                        className="form-control rounded-0"
                        id="inputheight1"
                        type="text"
                        placeholder="Last Name"
                        value={Last}
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ padding: "12px 10px" }}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 wd8  p-md-0">
                      <input
                        className="form-control rounded-0"
                        id="inputheight1"
                        type="text"
                        placeholder="Suffix"
                        value={Suffix}
                        onChange={(e) => setSuffix(e.target.value)}
                        style={{ padding: "12px 10px" }}
                      />
                    </div>
                  </div>

                </div>

                <div className="mt-5 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={altname == 1}
                    onChange={alternate_names}
                    value={altname}
                  />
                  <div className=""></div>
                  &nbsp; &nbsp;
                  <label className="alternate">I have alternate names</label>
                  <br />
                </div>
                {altname === 1 ? (
                  <input
                    style={{ padding: "10px 15px" }}
                    type="text"
                    className="form-control my-3 mx-5 "
                    id="inputfont1"
                    placeholder="Enter all names here sperated by commas"
                    value={Alt}
                    onChange={(e) => setAlt(e.target.value)}
                  />
                ) : null}

                <div className="mt-3 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={nickname == 1}
                    value={nickname}
                    onChange={nickname_names}
                  />
                  &nbsp; &nbsp;
                  <label className="alternate">I have a nickname</label>
                </div>

                {nickname === 1 ? (
                  <input
                    style={{ padding: "12px 10px", width: "50%" }}
                    type="text"
                    className="form-control my-3 mx-5"
                    id="inputfont1"
                    placeholder="Enter nickname with no space"
                    value={Nick}
                    onChange={(e) => setNick(e.target.value)}
                  />
                ) : null}

              </div>

              <div className="mt-5 personalinfo_maxwidth">
                <h5 className="form-label font-bold">Please fill your contact information</h5>
                <div className="w-100">
                  <div className="input-group ">
                    <span className="input-group-label contact-info-label ">
                      Email ID
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Required"
                      formcontrolname="email"
                      className="form-control text-lowercase req-color7"
                      value={EmailID}
                      onChange={(e) => setEmailID(e.target.value)}
                    />
                    {bund?.email
                      ? bund?.email.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                  </div>
                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Cell Phone
                    </span>
                    <input
                      type="number"
                      name="phone"
                      formcontrolname="phone"
                      className="form-control text-lowercase req-color7"
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Work Phone
                    </span>
                    <input
                      formcontrolname="workPhoneNumber "
                      name="work_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control req-color7"
                      id="workphone_input"
                      value={WorkPhone}
                      onChange={(e) => setWorkPhone(e.target.value)}
                    />

                    <input
                      placeholder="Ext."
                      formcontrolname="workExt"
                      name="ext"
                      inputmode="decimal"
                      className="form-control max-width-100 req-color7"
                      value={Ext}
                      onChange={(e) => setExt(e.target.value)}
                    />
                  </div>

                  <div className="input-group mt-2">
                    <span className="input-group-label contact-info-label ">
                      Home Phone
                    </span>
                    <input
                      formcontrolname="homePhoneNumber"
                      name="home_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control req-color7"
                      value={HomePhone}
                      onChange={(e) => setHomePhone(e.target.value)}
                    />
                  </div>

                  <div className="font-xs text-dark font-medium mt-gutter-half clrh"
                    style={{
                      color: "#49545c",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >I
                    confirm that I have read and agree to the <a href="javascript:void(0);" class=""> Consent </a> to contact </div>
                  <div className="row mt-5 wid">
                    <h5 className="p-md-0 currently font-bold">Where do you live currently?</h5>
                    <div className="iconss">
                      <input
                        className="form-control max-width-500 pr-3 pac-target-input mr req-color7"
                        type="text"
                        placeholder="  Enter Address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                      />
                      <i className="prefix lg fa fa-search icon-top iconss2 "></i>
                      <i className="suffix lg  fa fa-pencil pencil iconss7"></i>

                    </div>
                    <div className="mt-4 d-flex align-items-baseline mgn font-sm1 ">
                      &nbsp; &nbsp;
                      <input
                        type="checkbox"
                        value={mailing}
                        onChange={Mailing}
                      />
                      {bund?.mailing_address
                        ? bund?.mailing_address.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                      &nbsp; &nbsp;

                      <label className="label font-sm  font-sm1  clr ">
                        My mailing address is the same as my current address
                      </label>

                    </div>

                    <div className="mt-3 mr1">
                      <div className="iconss4">
                        <input
                          className="form-control max-width-500 pr-3 pac-target-input mr req-color7"
                          type="text"
                          placeholder="  Enter Mailing Address"
                          value={MailingAddress}
                          onChange={(e) => setMailingAddress(e.target.value)}
                          disabled={mailing}
                        />
                        <i className="prefix lg fa fa-search icon-top iconss3 "></i>
                      </div>
                    </div>
                  </div>


                </div>

                <div className="mt-5">
                  <h5 className="h6">How far back do i need to go?</h5>
                  <p>
                    Landlords like to see where you have lived for at least the
                    last five years.
                  </p>

                  <p className="h5 text-black mb-4 font-bold">Landlord Contact Info</p>
                  <p className="h6">
                    Is landlord a company or an individual.
                  </p>
                  <p className="h6">To whom you send
                    your cheques to?</p>

                  <span className="mt-3">
                    <input
                      type="radio"
                      name="company"
                      id=""
                      checked={Company == 0}
                      value={0}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    &nbsp; Company
                  </span>
                  <span className="ms-5">
                    <input
                      type="radio"
                      name="company"
                      id=""
                      checked={Company == 1}
                      value={1}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    &nbsp; Indiviual
                  </span>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="row">
                        <div className="col-md-6">
                          <label id="land_fname">First Name</label>
                          <input
                            className="height input-group req-color7"
                            type="text"
                            placeholder="First Name"
                            value={LandlordFirstName}
                            onChange={(e) => setLandlordFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label id="land_fname">Last Name</label>
                          <input
                            className="height input-group req-color7"
                            type="text"
                            placeholder="Last Name"
                            value={LandlordLastName}
                            onChange={(e) => setLandlordLastName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label id="land_fname">Date</label>
                          <input
                            className="height input-group req-color7"
                            type="date"
                            placeholder="Date"
                            value={LandlordDate}
                            onChange={(e) => setLandlordDate(e.target.value)}
                          />
                          {bund?.landlord_date
                            ? bund?.landlord_date.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                        <div class="col-1"></div>
                        <div className="col-md-6">
                          <label id="land_fname">Phone Number</label>
                          <input
                            className="height input-group req-color7"
                            type="number"
                            placeholder="(949) 298-1501"
                            value={LandlordPhone}
                            onChange={(e) => setLandlordPhone(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6 mt-3">
                          <div
                            className="btn-group mt-2"
                            role="group"
                            aria-label="Basic checkbox toggle button group"
                          >
                            <input
                              type="radio"
                              name="home"
                              className="btn-check"
                              id="btncheck1"
                              autocomplete="off"
                              value="0"
                              onChange={(e) => setLandlordContact(e.target.value)}
                              checked={LandlordContact == 0}
                            />
                            <label
                              className="btn btn1 btn-outline-primary py-2 px-4 rounded-0 mydiv_txt"
                              for="btncheck1"
                            >
                              Mobile
                            </label>

                            <input
                              type="radio"
                              name="home"
                              className="btn-check"
                              id="btncheck2"
                              autocomplete="off"
                              value="1"
                              onChange={(e) => setLandlordContact(e.target.value)}
                              checked={LandlordContact == 1}
                            />
                            <label
                              className="btn btn1 btn-outline-primary py-2 px-4 rounded-0 mydiv_txt"
                              for="btncheck2"
                            >
                              Home
                            </label>

                            <input
                              type="radio"
                              name="home"
                              className="btn-check"
                              id="btncheck3"
                              autocomplete="off"
                              value="2"
                              onChange={(e) => setLandlordContact(e.target.value)}
                              checked={LandlordContact == 2}
                            />
                            <label
                              className="btn btn1 btn-outline-primary py-2 px-4 rounded-0 mydiv_txt"
                              for="btncheck3"
                            >
                              Work
                            </label>
                          </div>
                        </div>
                      </div>

                      <br />

                      <hr />

                      <div className="row mt-5">
                        <p className="h5 text-black font-bold">Emergency Contact</p>
                        <div className="col-md-6 mt-2">
                          <label id="land_fname">Full Name</label>
                          <input
                            className="form-control req-color7 height3"
                            type="text"
                            placeholder="Full Name"
                            value={EmergencyName}
                            onChange={(e) => setEmergencyName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label id="land_fname">Relationship</label>
                          <input
                            className="form-control req-color7 height3"
                            type="text"
                            placeholder="Friend"
                            value={EmergencyRelation}
                            onChange={(e) => setEmergencyRelation(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label id="land_fname">Phone Number</label>
                          <input
                            className="form-control req-color7 height3"
                            type="number"
                            placeholder="(949) 298-1501"
                            value={EmergencyPhone}
                            onChange={(e) => setEmergencyPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="col-md-9">
                          <label className="form-label5 font-bold">What is your date of birth?</label>
                          <div className="prefix-suffix width-300">
                            <input
                              className=" form-control  ng-untouched ng-pristine ng-invalid date req-color78"
                              type="date"
                              placeholder="MM/DD/YYYY"
                              value={EmergencyDate}
                              onChange={(e) => setEmergencyDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="form-group ng-star-inserted pl-md-3 widt">
                          <label className="form-label5 font-bold">What is your Social Security Number?</label>
                          <div className="prefix-suffix width-400">
                            <input
                              className="form-control mt-2 req-color7"
                              type="text"
                              placeholder=""
                              value={Ssn}
                              onChange={(e) => setSsn(e.target.value)}
                            />
                          </div>
                        </div>

                        {bund?.ssn
                          ? bund?.ssn.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                          : null}
                        <div className="alternate-name-wrapper mt-gutter width-400 ng-star-inserted">
                          <p className="small-text pl-md-3">
                            <FaLock className="text-success7" />
                            Your application and all personal information are
                            safely stored on secured encrypted servers
                          </p>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-10">
                          <label className="form-label5 font-bold">Confirm Social Security Number</label>
                          <input
                            className="form-control mt-2 req-color7"
                            type="text"
                            value={C_ssn}
                            onChange={(e) => setC_ssn(e.target.value)}
                          />
                          {bund?.cssn
                            ? bund?.cssn.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-10">
                          <label className="form-label5 font-bold">What is your estimated credit score?</label>
                          <select
                            name="estimated_credit_score"
                            formcontrolname="creditRange"
                            className="form-select ng-untouched ng-pristine ng-valid pl-2 py-2"
                            value={CreditScore}
                            onChange={(e) => setCreditScore(e.target.value)}
                          >
                            <option selected disabled>
                              Select Credit Score
                            </option>
                            <option value="780+" className="ng-star-inserted">
                              780+
                            </option>
                            <option
                              value="740 - 779"
                              className="ng-star-inserted"
                            >
                              740 - 779
                            </option>
                            <option
                              value="700 - 739"
                              className="ng-star-inserted"
                            >
                              700 - 739
                            </option>
                            <option
                              value="660 - 699"
                              className="ng-star-inserted"
                            >
                              660 - 699
                            </option>
                            <option
                              value="620 - 659"
                              className="ng-star-inserted"
                            >
                              620 - 659
                            </option>
                            <option
                              value="Below 620"
                              className="ng-star-inserted"
                            >
                              Below 620
                            </option>
                          </select>
                          {bund?.estimated_credit_score
                            ? bund?.estimated_credit_score.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="mt-4">
                  <label className="text-scolor fontsbtn text-center">
                    Next is{" "}
                    <span className="fontsbtncobor">Additional Information</span>
                  </label>
                  <br />
                  <button
                    className="btnn1 btnn-primary7 btn-lg"
                    onClick={add}
                  >
                    Save & Continue  &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>



                {/*  */}
              </div>
            </div>
            {/* <footer class="main-footer"> */}
              <div className="footerimage">
                <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
              </div>

              {/* <div className="footer-right">
              </div> */}
            {/* </footer> */}
          </div>
          <ProfileInfo />

        </div>


      </div>

    </>
  );
};

export default TanPersonalInfo;
