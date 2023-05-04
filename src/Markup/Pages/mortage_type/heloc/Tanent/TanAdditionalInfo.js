import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import TanSideBar from "./TanSideBar";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../../Baseurl";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

const TanAdditionalInfo = () => {
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
  const [showfirstform, setshowfirstform] = useState(false);
  const [data, setdata] = useState("");
  const [getData, setGetData] = useState("");

  const [property, setProperty] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [pet_living, setpet_living] = useState(0);
  const [smoke, setsmoke] = useState("");
  const [type, settype] = useState("");
  const [breed, setbreed] = useState("");
  const [weight, setweight] = useState("");
  const [age, setage] = useState();
  const [make, setmake] = useState("");
  const [model, setmodel] = useState();
  const [year, setyear] = useState();
  const [color, setcolor] = useState();
  const [id, Setid] = useState();

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("pet_living", pet_living);
  Data.append("vehicle", vehicle);
  Data.append("smoke", smoke);
  Data.append("type", type);
  Data.append("breed", breed);
  Data.append("weight", weight);
  Data.append("age", age);
  Data.append("make", make);
  Data.append("model", model);
  Data.append("year", year);
  Data.append("color", color);
  id && Data.append("id", id);

  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/get/additional/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data);
        setGetData(response?.data?.data);

        if (response?.data?.status === true) {
          setpet_living(
            response?.data?.data?.pet_living == null
              ? 0
              : response?.data?.data?.pet_living
          );
          setVehicle(
            response?.data?.data?.vehicle == null
              ? 0
              : response?.data?.data?.vehicle
          );
          setsmoke(response?.data?.data?.smoke);
          settype(response?.data?.data?.type);
          setbreed(response?.data?.data?.breed);
          setweight(response?.data?.data?.weight);
          setage(response?.data?.data?.age);
          setmake(response?.data?.data?.make);
          setmodel(response?.data?.data?.model);
          setyear(response?.data?.data?.year);
          setcolor(response?.data?.data?.color);
          setweight(response?.data?.data?.weight);
          setweight(response?.data?.data?.weight);
          Setid(response?.data?.data?.id);
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
  const AddAdditionalInfo = () => {
    setLoader(true);
    // alert();
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/additional/info`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setdata(response?.data?.message);
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          setshowfirstform(false);
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
  console.log(getData, "getData");
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      {!loader ? (
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
                    <div className="mort grey_color fw-500">
                      Additional Info
                    </div>
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
                  ? "col-md-8 open he my-5 ps-lg-5"
                  : isOpen === false
                  ? "col-md-10 open nhi he my-5 ps-lg-5"
                  : ""
              }
            >
              <div className="row">
                <h3 className="text-dark3">We have a few more questions for you. Almost done!</h3>
                <h5 className="text-dark">General Information</h5>

                <div className="row mt-2">
                  <h5 className="form-label ">
                    1) Will you have a pet living with you at this property?
                  </h5>
                  <div className="col-3 col-md-2 col-lg-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q1"
                      id="YES"
                      autocomplete="off"
                      checked={pet_living == 1}
                      onChange={() => setpet_living(1)}
                    />
                    <label
                      className="btn btn-link yes px-3 py-2"
                      for="YES"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1 mt-2">
                    {/* <input
                    type="radio"
                    className="btn-check"
                    name="q1"
                    id="No"
                    autocomplete="off"
                    checked={pet_living == 0}
                    onChange={() => setpet_living(0)}
                  /> */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="q1"
                      id="No"
                      autocomplete="off"
                      defaultChecked={pet_living == 0}
                      onChange={() => setpet_living(0)}
                    />
                    <label
                      className="btn btn-link no px-3 py-2"
                      for="No"
                    >
                      No
                    </label>
                  </div>

                  {pet_living == 1 ? (
                    <>
                      <div className="row mt-3 mb-4">
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>
                            Type (DOG, CAT, ETC.)
                          </label>
                          <input
                            className="w-60 add_input"
                            type="text"
                            name="type"
                            defaultValue={type}
                            onChange={(e) => settype(e.target.value)}
                          />
                          <small
                            className="text-danger fpr"
                            id="type_error"
                          ></small>
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Breed</label>
                          <input
                            className="w-60 add_input "
                            name="breed"
                            type="text"
                            defaultValue={breed}
                            onChange={(e) => {
                              setbreed(e.target.value);
                            }}
                          />
                          <small
                            className="text-danger fpr"
                            id="breed_error"
                          ></small>
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>
                            Weigth (LBS)
                          </label>
                          <input
                            className="w-60 add_input "
                            name="weight"
                            step="any"
                            type="number"
                            defaultValue={weight}
                            onChange={(e) => setweight(e.target.value)}
                          />
                          <small
                            className="text-danger fpr"
                            id="weight_error"
                          ></small>
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Age</label>
                          <input
                            className="w-60 add_input "
                            name="age"
                            step="any"
                            type="number"
                            defaultValue={age}
                            onChange={(e) => setage(e.target.value)}
                          />
                          <small
                            className="text-danger fpr"
                            id="age_error"
                          ></small>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="row mt-3">
                  <p className="h5">
                    2) Will you have a vehicle at this property?
                  </p>
                  <div className="col-3 col-md-2 col-lg-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q2"
                      id="YESs"
                      autocomplete="off"
                      defaultChecked={vehicle == 1}
                      onChange={() => setVehicle(1)}
                    />
                    <label
                      className="btn btn-link yes px-3 py-2"
                      for="YESs"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q2"
                      id="Noo"
                      autocomplete="off"
                      defaultChecked={vehicle == 0}
                      onChange={() => setVehicle(0)}
                    />
                    <label
                      className="btn btn-link no px-3 py-2"
                      for="Noo"
                    >
                      No
                    </label>
                  </div>

                  {vehicle == 1 ? (
                    <>
                      <div className="row mt-2 mb-4">
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Make</label>
                          <input
                            className="w-60 add_input "
                            type="text"
                            name="make"
                            defaultValue={make}
                            onChange={(e) => {
                              setmake(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Model</label>
                          <input
                            className="w-60 add_input "
                            type="number"
                            name="model"
                            defaultValue={model}
                            onChange={(e) => setmodel(e.target.value)}
                          />
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Color</label>
                          <input
                            className="w-60 add_input "
                            type="text"
                            name="color"
                            defaultValue={color}
                            onChange={(e) => setcolor(e.target.value)}
                          />
                        </div>
                        <div className="col-md-3 p-md-0">
                          <label className="d-block mt-2 mt-lg-1" style= {{fontSize: "11px"}}>Year</label>
                          <input
                            className="w-60 add_input "
                            type="number"
                            name="year"
                            defaultValue={year}
                            onChange={(e) => setyear(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="row mt-3">
                  <p className="h5">3) Do you smoke?</p>
                  <div className="d-flex flex-wrap">
                    <div className="me-3 mt-2">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q22"
                        id="yes12"
                        autocomplete="off"
                        value="yes"
                        checked={smoke == "yes"}
                        onChange={(e) => setsmoke(e.target.value)}
                      />
                      <label
                        className="btn btn-link px-3 py-2 yes"
                        for="yes"
                      >
                        Yes
                      </label>
                    </div>
                    <label className="me-3 mt-2 usm">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q22"
                        autocomplete="off"
                        value="Outdoor Only"
                        checked={smoke == "Outdoor Only"}
                        onChange={(e) => setsmoke(e.target.value)}
                      />
                      <span
                        className="btn btn btn-link yes2 px-3 py-2"
                        id="outdoorbtn12"
                        for="out"
                      >
                        Outdoor Only
                      </span>
                    </label>
                    <div className="me-3 mt-2">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q22"
                        id="Occasionally"
                        checked={smoke == "Occasionally"}
                        autocomplete="off"
                        onChange={(e) => setsmoke(e.target.value)}
                        value=" Occasionally"
                      />
                      <label
                        className="btn btn-link no1 px-3 py-2"
                        id="out"
                        for="Occasionally"
                      >
                        Occasionally
                      </label>
                    </div>
                    <div className="me-3 mt-2">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q22"
                        id="no"
                        autocomplete="off"
                        value="No"
                        checked={smoke == "No"}
                        onClick={(e) => setsmoke(e.target.value)}
                      />
                      <label
                        className="btn btn-link yes1 px-3 py-2"
                        id="out2"
                        for="no"
                      >
                        No
                      </label>
                    </div>
                  </div>  
                </div>

                <div className="mt-5">
                  <label className="text-scolor fontsbtn text-center">
                    Next is <span className="fontsbtncobor">Co-Signers</span>
                  </label>
                  <br />
                  <button
                  id="btn-save"
                    className="btn btn-primary rounded mt-2 btnn-us1 font-bold"
                    onClick={AddAdditionalInfo}
                  >
                    Save & Continue  &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <ProfileInfo />
            <div className="footerimage3">
                <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
              </div>
          </div>
          
        </div>
      ) : null}
    </>
  );
};

export default TanAdditionalInfo;
