import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight } from "react-icons/ai";

import { BiDollar } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
// import RefSideBar from "./RefSideBar";
import ProfileInfo from "../Profile/ProfileInfo";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import axios from "axios";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import footer from "../../../../Images/footercity.svg";

const Mortageinfo = () => {

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

  // other neccessay state and methods

  const history = useHistory();
  const [fieldsError, setFieldsError] = useState();
  const [loader, setLoader] = useState(false);
  const [allPostData, setAllPostData] = useState();


  // 
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
        // setBund(error?.response?.data?.errors);
      
      });
  };
  useEffect(() => {
    postData();
  }, []);



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

  // form Field State


  const [id, setId] = useState(null);
  const Assign_id = localStorage.getItem("assignId");
  const [firstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [alternateName, setAlternateName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [extension, setExtension] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [address, setAddress] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [ownOrRent, setOwnOrRent] = useState("");
  const [monthlyRent, setMonthlyRent] = useState(null);
  const [durationOfLivingYear, setDurationOfLivingYear] = useState("");
  const [durationOfLivingMonth, setDurationOfLivingMonth] = useState("");
  const [numberOfDepends, setNumberOfDepends] = useState("");
  const [dependentsAges, setDependentsAges] = useState("");
  const [maritialStatus, setMaritialStatus] = useState("");
  const [militaryStatus, setMilitaryStatus] = useState("");
  const [residenceType, setResidenceType] = useState("");
  // const [haveMilitaryAddress , setHaveMilitaryAddress] = useState("")

  //  for dynamic fields

  const [altname, setAltname] = useState(false);
  const [nicName, setNicName] = useState(false);
  const [rent, setRent] = useState(false);
  const [military, setMilitary] = useState(false);
  const [unmarried, setUnMarried] = useState(false);
  const [mailing, setMailing] = useState(false);
  const [depend, setDepend] = useState(false);
  const reviewData = new FormData();
  reviewData.append("application_id", Assign_id);

  const getRefPersonalInfo = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/personal/info`,
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
          ages,
          address,
          application_id,
          alternate_names,
          cell_phone,
          current_military_status,
          dependents_ages,
          ext,
          email,
          first_name,
          home_phone,
          have_nick_name,
          have_any_dependent,
          have_alternate_names,
          have_mailing_address,
          how_long_live_m_there,
          how_long_live_y_there,
          id,
          is_draft,
          last_name,
          mailing_address,
          marital_status,
          middle_name,
          military_or_veteran,
          nick_name,
          own_or_rent,
          residency_type,
          suffix,
          unmarried_partner,
          user_id,
          whats_monthly_rent,
          work_phone,
          user_profile,
        } = response?.data?.data;
        console.log(response.data.data, "response");
        console.log(typeof (military_or_veteran), "military_or_veteran")
        setId(id);
        setFirstName(user_profile?.first_name);
        setMiddleName(middle_name);
        setLastName(user_profile?.last_name);
        setSuffix(suffix);
        setEmail(email);
        setPhoneNumber(cell_phone);
        setWorkPhone(work_phone);
        setExtension(ext);
        setHomePhone(home_phone);
        setAddress(address);
        setMailingAddress(have_mailing_address);
        setMailing(mailing_address === 1 ? true : false)
        setOwnOrRent(own_or_rent);
        setMonthlyRent(whats_monthly_rent);
        setDurationOfLivingYear(how_long_live_y_there);
        setDurationOfLivingMonth(how_long_live_m_there);
        setMilitaryStatus(current_military_status);
        setResidenceType(residency_type);
        setMaritialStatus(marital_status);
        setNumberOfDepends(dependents_ages);
        setDependentsAges(ages);
        setAlternateName(have_alternate_names);
        setNickName(have_nick_name);
        setMilitary(military_or_veteran === "1" ? true : false);
        setDepend(have_any_dependent === "1" ? true : false);
        setNicName(nick_name === 1 ? true : false);
        setAltname(alternate_names === 1 ? true : false);
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
    getRefPersonalInfo();
  }, []);

  // Form Data for add and update

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("first_name", firstName);
  Data.append("middle_name", MiddleName);
  Data.append("last_name", lastName);
  Data.append("suffix", suffix);
  Data.append("alternate_names", altname === true ? 1 : 0);
  if (altname) {
    Data.append("have_alternate_names", alternateName);
  }
  Data.append("nick_name", nicName === true ? 1 : 0);
  if (nicName) {
    Data.append("have_nick_name", nickName);
  }
  Data.append("email", email);
  Data.append("cell_phone", phoneNumber);
  Data.append("work_phone", workPhone);
  Data.append("ext", extension);
  Data.append("home_phone", homePhone);
  Data.append("address", address);
  Data.append("mailing_address", mailing === true ? "1" : "0");
  if (!mailing) {
    Data.append("have_mailing_address", mailingAddress);
  }
  Data.append("own_or_rent", ownOrRent);
  if (ownOrRent === "rent") {
    Data.append("whats_monthly_rent", monthlyRent);
  }
  Data.append("how_long_live_y_there", durationOfLivingYear);
  Data.append("how_long_live_m_there", durationOfLivingMonth);
  Data.append("military_or_veteran", military === true ? "1" : "0");
  if (military) {
    Data.append("current_military_status", militaryStatus);
  }
  Data.append("residency_type", residenceType);
  Data.append("marital_status", maritialStatus);
  Data.append("have_any_dependent", depend === true ? "1" : "0");
  if (depend) {
    Data.append("dependents_ages", numberOfDepends);
    Data.append("ages", dependentsAges);
  }
  if (id) {
    Data.append("id", id);
  }

  // on Submit for add and update

  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/personal/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setLoader(true);

        console.log(response);
        // setMortage_info(response?.data);
        console.log(response?.data?.data);
        console.log("title:", response?.data?.data?.message);
        if (response.data.status === true) {
          setLoader(false);

          history.push("/Co-Borrowers");
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
      .catch((error) => {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setFieldsError(error?.response?.data?.errors);
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
        console.log(error);
      });

    for (var pair of Data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };


  // const [mailingaddress_check, setMailingadress_check] = useState("");
  // // const Check_altname = (e) => {
  //   const value = e.target.value;
  //   const check = e.target.checked;

  //   if (check) {
  //     setMailingadress_check([...mailingaddress_check, value]);
  //     setAltname(1);
  //   } else {
  //     setMailingadress_check(mailingaddress_check.filter((e) => e !== value));
  //     setAltname(0);
  //   }
  //   console.log(altname, "Checking Aly anme");
  // };


  console.log(military, "military_or_veteran")
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />

      <div className="container-fluid">
        <div className="row p-0">
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
              }} z
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
              ? "col-md-8 open he my-2 mt-5 ps-lg-5"
              : isOpen === false
                ? "col-md-10 open nhi he my-2 mt-5 ps-lg-5"
                : ""
          }
          >
            <div style={{ width: "95%" }} className="row mx-4">
              <h5 className="font26 mb-3 p-md-0" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>Please fill your full, legal name</h5>
              <div className="col-lg-3 col-md-5  p-md-0">
                <input
                  className="form-control rounded-0 inputFont26"
                  type="text"
                  placeholder="First Name"
                  style={{ padding: "12px 10px", fontSize: "14px" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-md-5  p-md-0">
                <input
                  className="form-control rounded-0 inputFont26"
                  type="text"
                  placeholder="Middle Name"
                  style={{ padding: "12px 10px" }}
                  value={MiddleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-md-5  p-md-0">
                <input
                  className="form-control rounded-0 inputFont26"
                  type="text"
                  placeholder="Last Name"
                  style={{ padding: "12px 10px" }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-md-5  p-md-0">
                <input
                  className="form-control rounded-0 inputFont26"
                  type="text"
                  placeholder="Suffix"
                  style={{ padding: "12px 10px" }}
                  value={suffix}
                  onChange={(e) => setSuffix(e.target.value)}
                />
              </div>


              {fieldsError?.first_name
                ? fieldsError?.first_name.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
                : null}
              {fieldsError?.middle_name
                ? fieldsError?.middle_name.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
                : null}
              {fieldsError?.last_name
                ? fieldsError?.last_name.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
                : null}
              {fieldsError?.suffix
                ? fieldsError?.suffix.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
                : null}

              <div style={{ margin: "0 10px" }} className=" mt-5 d-flex align-items-baseline p-0">
                {/* &nbsp; &nbsp; */}
                <input
                  type="checkbox"
                  checked={altname}
                  onChange={() => setAltname(!altname)}
                />
                &nbsp; &nbsp;
                <label style={{ fontSize: "13px", fontWeight: "500" }} className="text-muted">
                  I have alternate names
                </label>
                <br />
              </div>

              {altname === true ? (
                <input
                  style={{ padding: "12px 10px", width: "50%" }}
                  type="text"
                  className="form-control rounded-0 m-3  input26clr"
                  placeholder="Enter all names here sperated by commas"
                  value={alternateName}
                  onChange={(e) => setAlternateName(e.target.value)}
                />
              ) : null}

              <div style={{ margin: "0 10px" }} className="mt-3 d-flex align-items-baseline p-0">
                {/* &nbsp; &nbsp; */}
                <input
                  type="checkbox"
                  checked={nicName}
                  onChange={() => setNicName(!nicName)}
                />
                &nbsp; &nbsp;
                <label style={{ fontSize: "13px", fontWeight: "500" }} className="text-muted">I have a nickname</label>
              </div>

              {nicName === true ? (
                <input
                  style={{ padding: "12px 10px", width: "50%" }}
                  type="text"
                  className="form-control rounded-0 m-3  input26clr"
                  placeholder="Enter all names here sperated by commas"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                />
              ) : null}

              <div className="mt-5 personalinfo_maxwidth">
                <h5 className="font26" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>Please fill your contact information</h5>
                <div className="mt-4 contact_max">
                  <div className="input-group ">
                    <span className="form-control123 fm-control123 input-group-label contact-info-label ">
                      Email ID
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Required"
                      formcontrolname="email"
                      class="form-control123 text-lowercase input26clr ps-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {fieldsError?.email
                    ? fieldsError?.email.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                  <div class="input-group mt-2">
                    <span class="form-control123 input-group-label contact-info-label ">
                      Cell Phone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      formcontrolname="email"
                      class="form-control123 text-lowercase input26clr"
                      value={phoneNumber}
                      onChange={(e) => handlePhoneNumberChange(e, setPhoneNumber)}
                    />

                  </div>
                  {fieldsError?.cell_phone
                    ? fieldsError?.cell_phone.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                  <div class="input-group mt-2">
                    <span class="form-control123 input-group-label contact-info-label ">
                      Work Phone
                    </span>
                    {/* <input
                      formcontrolname="workPhoneNumber"
                      name="work_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control123 input26clr"
                      id="workphone_input"
                      value={workPhone}
                      onChange={(e) => setWorkPhone(e.target.value)}
                      
                      
                    /> */}
                    <input
                      type="tel"
                      formcontrolname="workPhoneNumber"
                      name="work_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      className="form-control123 input26clr"
                      id="workphone_input"
                      onChange={(e) => handlePhoneNumberChange(e, setWorkPhone)}
                      value={workPhone}
                    />{" "}

                    <input
                      placeholder="Ext."
                      formcontrolname="workExt"
                      name="ext"
                      inputmode="decimal"
                      class="form-control123 max-width-100 input26clr ps-2"
                      value={extension}
                      onChange={(e) => setExtension(e.target.value)}
                    />
                  </div>
                  {fieldsError?.work_phone
                    ? fieldsError?.work_phone.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                  {fieldsError?.ext
                    ? fieldsError?.ext.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}

                  <div className="input-group mt-2">
                    <span className="form-control123 input-group-label contact-info-label ">
                      Home Phone
                    </span>
                    <input
                      type="tel"
                      formcontrolname="homePhoneNumber"
                      name="home_phone"
                      inputmode="decimal"
                      autocomplete="nope"
                      class="form-control123 input26clr"
                      value={homePhone}
                      onChange={(e) => handlePhoneNumberChange(e, setHomePhone)}
                    />
                  </div>
                  {fieldsError?.home_phone
                    ? fieldsError?.home_phone.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}

                  <p
                    className="mt-2"
                    style={{
                      color: "#49545c",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    I confirm that I have read and agree to the Consent to
                    contact
                  </p>
                  <div className="row mt-5 ">
                    <h5 style={{ fontWeight: "500", color: "black" }} className="p-md-0 ">Where do you live currently?</h5>
                    <div className="position-relative p-0">
                      <input
                        style={{ fontSize: "13px", fontWeight: "500", padding: "0 28px" }}
                        className="form-control123 rounded-0 mt-1 input26clr"
                        type="email"
                        placeholder="Email Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <FaSearch style={{ fontSize: "13px", fontWeight: "600", position: "absolute", top: "15px", left: "9px" }} />
                      <MdModeEditOutline className="text-primary" style={{ fontSize: "16px", fontWeight: "bold", position: "absolute", top: "14px", right: "15px" }} />
                    </div>
                    {fieldsError?.address
                      ? fieldsError?.address.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                    <div className="mt-4 d-flex align-items-baseline p-0">
                      <input
                        type="checkbox"
                        checked={mailing}
                        onClick={() => setMailing(!mailing)}
                      />
                      &nbsp; &nbsp;
                      <label style={{ fontSize: "13px", fontWeight: "600", color: "black" }} className="h6 text-muted">
                        My mailing address is the same as my current address
                      </label>
                    </div>

                    <div className="mt-3 mx-0 p-0">
                      <div className="position-relative p-0">
                        <input
                          style={{ fontSize: "13px", fontWeight: "500", padding: "0 28px" }}
                          className="form-control123 rounded-0 mt-1 input26clr"
                          type="text"
                          placeholder="Enter Mailing Address "
                          disabled={mailing}
                          value={mailingAddress}
                          onChange={(e) => setMailingAddress(e.target.value)}
                        />
                        <FaSearch style={{ fontSize: "13px", fontWeight: "600", position: "absolute", top: "10px", left: "9px" }} />
                      </div>
                      {fieldsError?.have_mailing_address
                        ? fieldsError?.have_mailing_address.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                    </div>
                  </div>
                </div>
                <div
                  className="radiogroup mt-5"
                  style={{
                    borderLeft: "1px solid rgba(194, 197, 217, 1)",
                    padding: "2rem",
                  }}
                >
                  <h6>Do you own this property or do you rent?</h6>

                  <div className="row">
                    <div className="col-md-3">
                      <div className="personalinfo_property mx-auto">
                        <input
                          className="btn2 personalinfo_property61"
                          label="Own"
                          type="radio"
                          id="male"
                          name="Own"
                          defaultValue="Own"
                          checked={ownOrRent === "Own" ? true : false}
                          onClick={(e) => setRent(e.target.value)}
                          onChange={(e) => setOwnOrRent(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="personalinfo_property mx-auto">
                        <input
                          className="btn2 personalinfo_property61"
                          label="Rent"
                          type="radio"
                          id="female"
                          name="Own"
                          defaultValue="rent"
                          checked={ownOrRent === "rent" ? true : false}
                          onClick={(e) => setRent(e.target.value)}
                          onChange={(e) => setOwnOrRent(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="personalinfo_property mx-auto">
                        <input
                          className="btn262"
                          label="Living Rent Free"
                          type="radio"
                          id="other"
                          name="Own"
                          defaultValue="Living Rent Free"
                          checked={
                            ownOrRent === "Living Rent Free" ? true : false
                          }
                          onClick={(e) => setRent(e.target.value)}
                          onChange={(e) => setOwnOrRent(e.target.value)}
                        />
                      </div>
                    </div>
                    {fieldsError?.own_or_rent
                      ? fieldsError?.own_or_rent.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                      : null}
                    {rent === "rent" ? (
                      <div className="row">
                        <h5 style={{ fontSize: "1px", fontWeight: "500" }} className="mt-3">What is the monthly rent??</h5>
                        <div className="col-md-8">
                          <div className="input-group mt-2">
                            <BiDollar style={{ fontSize: "18px", fontWeight: "bold", position: "absolute", left: "5px", bottom: "12px", color: "black", zIndex: "123" }} />
                            <input
                              type="number"
                              autocomplete="nope"
                              class="form-control bg-light rounded-0 ps-4"
                              value={monthlyRent}
                              onChange={(e) => setMonthlyRent(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h5 style={{ fontWeight: "500", color: "black" }} className="mt-3">How long did you live there?</h5>

                        <div className="row ">
                          <div className="col-md-8">
                            <div className="input-group mt-2">
                              <input
                                type="number"
                                autocomplete="nope"
                                class="form-control input26clr"
                                value={durationOfLivingYear}
                                onChange={(e) =>
                                  setDurationOfLivingYear(e.target.value)
                                }
                              />
                              <span
                                className="input-group-label contact-info-label"
                                style={{ minWidth: 0, width: "max-content" }}
                              >
                                Years
                              </span>
                            </div>
                            {fieldsError?.how_long_live_y_there
                              ? fieldsError?.how_long_live_y_there.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                              : null}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="input-group mt-2">
                              <div className="position-relative ">
                                {/* <RiArrowDropDownLine style={{ fontSize: "30px", fontWeight: "600", position: "absolute", top: "2px", right: "6px" }} /> */}
                                <select
                                  style={{ padding: "20px" }}
                                  autocomplete="nope"
                                  // className="form-control  input26clr text-muted"
                                  class="form-select w-100 p-2" aria-label="Default select example"
                                  value={durationOfLivingMonth}
                                  onChange={(e) =>
                                    setDurationOfLivingMonth(e.target.value)
                                  }
                                >

                                  <option selected disabled>
                                    Select Month
                                  </option>
                                  <option >1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                </select>
                              </div>

                              <span
                                className="input-group-label contact-info-label "
                                style={{ minWidth: 0, width: "max-content" }}
                              >
                                months
                              </span>
                            </div>
                          </div>
                          {fieldsError?.how_long_live_m_there
                            ? fieldsError?.how_long_live_m_there.map((e) => (
                              <p className="text-danger">{e}</p>
                            ))
                            : null}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="stateagent  mt-3">
                    <h6 className="mt-3">
                      Are you currently active in the military or a veteran?
                    </h6>
                    <div className="d-flex">
                      <div className="personalinfo_property">
                        <input
                          style={{ marginRight: "20px" }}
                          className="btn2 btn-link personalinfo_property61"
                          label="Yes"
                          type="radio"
                          id="male"
                          name="agent"
                          value={"yes"}
                          checked={military === true ? true : false}
                          onClick={() => setMilitary(true)}
                        />
                      </div>
                      <div className="personalinfo_property">
                        <input
                          className="btn-link personalinfo_property61"
                          label="No"
                          type="radio"
                          id="male"
                          name="agent"
                          value={"no"}
                          checked={military === false ? true : false}
                          onClick={() => setMilitary(false)}
                        />
                      </div>
                    </div>

                    {military === true ? (
                      <div className="row ">
                        <h5 style={{ fontSize: "15px", fontWeight: "600", color: "black" }} className="mt-3">
                          What is your current military status?
                        </h5>
                        <select
                          name="current_military_status"
                          className=" form-select rounded-0 col-md-5 ms-3 mt-3 w-50"
                          value={militaryStatus}
                          onChange={(e) => setMilitaryStatus(e.target.value)}
                        >
                          <option>Select Military Status</option>
                          <option> Active Service </option>
                          <option> Veteran</option>
                          <option> Non Active Reserve National Guard </option>
                        </select>
                      </div>
                    ) : null}

                    <h5 style={{ fontWeight: "500", color: "black" }} className="mt-4">What's your residency type?</h5>
                    <div className="row mt-3">
                      <div className=" maindiv26 ">
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn263"
                              label="US Citizen"
                              type="radio"
                              id="male"
                              name="type"
                              value="US Citizen"
                              checked={
                                residenceType === "US Citizen" ? true : false
                              }
                              onChange={(e) => setResidenceType(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn264"
                              label="Permanent Resident Alien"
                              type="radio"
                              id="female"
                              name="type"
                              value="Permanent Resident Alien"
                              checked={
                                residenceType === "Permanent Resident Alien"
                                  ? true
                                  : false
                              }
                              onChange={(e) => setResidenceType(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property  mx-2">
                            <input
                              className="btn265"
                              label="Non Permanent Resident Alien"
                              type="radio"
                              id="other"
                              name="type"
                              value="Non Permanent Resident Alien"
                              checked={
                                residenceType === "Non Permanent Resident Alien"
                                  ? true
                                  : false
                              }
                              onChange={(e) => setResidenceType(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      {fieldsError?.residency_type
                        ? fieldsError?.residency_type.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}

                      <h5 style={{ fontWeight: "500", color: "black" }} className="mt-3">What's your marital status?</h5>

                      <div className="maindiv26 mt-2">
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn263"
                              label="Married"
                              type="radio"
                              id="married"
                              name="gender"
                              value="Married"
                              checked={
                                maritialStatus === "Married" ? true : false
                              }
                              onChange={(e) =>
                                setMaritialStatus(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn263"
                              label="Unmarried"
                              type="radio"
                              id="unmarried"
                              name="gender"
                              value="Unmarried"
                              checked={
                                maritialStatus === "Unmarried" ? true : false
                              }
                              onChange={(e) =>
                                setMaritialStatus(e.target.value)
                              }
                              onClick={() => setUnMarried(!unmarried)}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn263"
                              label="Separated"
                              type="radio"
                              id="separated"
                              name="gender"
                              value="Separated"
                              checked={
                                maritialStatus === "Separated" ? true : false
                              }
                              onChange={(e) =>
                                setMaritialStatus(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <div className="personalinfo_property mx-2">
                            <input
                              className="btn265"
                              label="Do Not Wish To Provide"
                              type="radio"
                              id="Dont wish"
                              name="gender"
                              value="Do Not Wish To Provide"
                              checked={
                                maritialStatus === "Do Not Wish To Provide"
                                  ? true
                                  : false
                              }
                              onChange={(e) =>
                                setMaritialStatus(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {fieldsError?.marital_status
                        ? fieldsError?.marital_status.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                        : null}
                      {unmarried === true ? (
                        <div className="mt-3 d-flex align-items-baseline">
                          &nbsp; &nbsp;
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                          <label className="h6 text-muted">
                            Do you have any unmarried partner with real property
                            rights similar to those of a legal spouse?
                          </label>
                        </div>
                      ) : null}
                    </div>
                    <h5 style={{ fontWeight: "500", color: "black" }} className="mt-4">Do you have any dependents?</h5>
                    <div className="d-flex mt-3">
                      <div className="personalinfo_property">
                        <input
                          style={{ marginRight: "20px" }}
                          // className="btn261"
                          className="btn2 btn-link personalinfo_property61"
                          label="Yes"
                          type="radio"
                          id="male1"
                          name="agent1"
                          checked={depend === true ? true : false}
                          onClick={() => setDepend(true)}
                        />
                      </div>
                      <div className="personalinfo_property">
                        <input
                          // className="btn261"
                          className="btn2 btn-link personalinfo_property61"
                          label="No"
                          type="radio"
                          id="male1"
                          name="agent1"
                          checked={depend === false ? true : false}
                          onClick={() => setDepend(false)}
                        />
                      </div>
                    </div>

                    {depend === true ? (
                      <div className="mt-3 col-md-10">
                        <h5 style={{ fontWeight: "500", color: "black" }}>How many dependents and what are their ages?</h5>

                        <div class="input-group mt-3" style={{ width: "400px" }}>
                          <input
                            className="form-control input26clr"
                            value={numberOfDepends}
                            onChange={(e) => setNumberOfDepends(e.target.value)}
                          />
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter ages separated by commas"
                            formcontrolname="email"
                            class="form-control rounded-0 input26clr"
                            value={dependentsAges}
                            onChange={(e) => setDependentsAges(e.target.value)}
                          />
                        </div>

                        <p
                          className="mt-2"
                          style={{
                            color: "#49545c",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          If the child is less than 1 year old, enter 1
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3">
                  <label className="text-secondary h6">
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Next is </span><small style={{ fontSize: "14px", fontWeight: "600", color: "black" }}>Co-Borrowers</small>
                  </label>
                  <br />
                  <button style={{ fontSize: "15px", fontWeight: "600", borderRadius: "6px" }} className="btn btn-primary  mt-2"
                    onClick={onSubmit}>
                    Save & Continue &nbsp;
                    <AiOutlineArrowRight style={{ fontSize: "15px", fontWeight: "600" }} />
                  </button>
                </div>

                {/*  */}
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="border-bottom" ></div>
            <img src={footer} alt="img" />
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default Mortageinfo;
