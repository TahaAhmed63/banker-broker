/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
// import RefSideBar from "./RefSideBar";
import ProfileInfo from "../Profile/ProfileInfo";
import axios from "axios";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import Footerx404 from "../../../../Images/Footerx404.png";
// import Footer from "../../../../Images/footercity.svg"

const RefMortageinfo = () => {
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

  const { pathname } = location;
  const [edit, setEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();
  const history = useHistory();
  // const [id, setId] = useState(null);

  // states for form inputs
  // const token = localStorage.getItem("usertoken");
  const Assign_id = localStorage.getItem("assignId"); // also on condition for add and update
  const [id, setId] = useState(null);
  const [typeOfProperty, setTypeOfProperty] = useState("");
  const [occupyProperty, setOccupyProperty] = useState("");
  const [operate_business, setOperate_business] = useState(0);
  // const [checkForOperateBussniess,setCheckForOperateBussniess] = useState(0)
  const [comfortable_monthly, setComfortable_monthly] = useState("");
  const [goalForRefinancing, setGoalForRefinancing] = useState("");
  const [locationRefinanceProperty, setLocationRefinanceProperty] =
    useState("");
  const [valueOfYourProperty, setValueOfYourProperty] = useState("");
  const [currentBalOfMortgage, setCurrentBalOfMortgage] = useState("");

  if (pathname.includes("edit")) {
    setEdit(true);
    console.log("success");
  }

  const getRefMortgageInfo = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/get/mortgage/info`,
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
          id,
          comfortable_monthly_ho_payment,
          down_payment,
          operate_business,
          price_of_property,
          property_location,
          property_type,
          refinancing_goal,
          use_of_property,
          user_id,
        } = response?.data?.data;
        console.log(response.data.data, "response");
        setId(id);
        setComfortable_monthly(comfortable_monthly_ho_payment);
        setTypeOfProperty(property_type);
        setLocationRefinanceProperty(property_location);
        setValueOfYourProperty(price_of_property);
        setCurrentBalOfMortgage(down_payment);
        setGoalForRefinancing(refinancing_goal);
        setOperate_business(operate_business); //for check box
        setOccupyProperty(use_of_property); // redio button
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
    getRefMortgageInfo();
  }, []);





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

  const Data = new FormData();
  Data.append("property_type", typeOfProperty);
  Data.append("comfortable_monthly_ho_payment", comfortable_monthly);
  Data.append("use_of_property", occupyProperty);
  Data.append("refinancing_goal", goalForRefinancing);
  Data.append("price_of_property", valueOfYourProperty);
  Data.append("property_location", locationRefinanceProperty);
  Data.append("down_payment", currentBalOfMortgage); //down payment == values of property estimated
  Data.append("operate_business", operate_business);
  Data.append("application_id", Assign_id);
  if (id) {
    Data.append("id", id);
  }
  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/store/mortgage/info`,
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

          history.push("/ref/personalinfo");
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

    // for (var pair of Data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  console.log(fieldsError, "fieldsError");
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
          <div
            className={
              isOpen === true
                ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                : isOpen === false
                  ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5 "
                  : ""
            }
          >
            <div className="row ps-4">
              <div className="col-md-12">
                <div className=" form-label">
                  <h5>What type of property are you seeking to refinance?</h5>
                </div>
              </div>
              <div className="form-group mt-4 col-md-5 ">
                <select
                  className="form-select rounded-0 p-2"
                  value={typeOfProperty}
                  onChange={(e) => setTypeOfProperty(e.target.value)}
                >
                  <option selected disabled>
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
                {fieldsError?.property_type
                  ? fieldsError?.property_type.map((e) => (
                    <p className="text-danger">{e}</p>
                  ))
                  : null}
              </div>
            </div>

            <div className="row mt-5 pb-0 ">
              <div className="col-md-12">
                <div className=" form-label">
                  <h5>How do you occupy the property?</h5>
                </div>
              </div>
              <div className="form-group mt-4 col-md-8">
                <div className="d-flex flex-wrap">
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input className="btn"
                        label="Primary Residence"
                        type="radio"
                        id="male"
                        name="gender"
                        checked={
                          occupyProperty === "Primary Residence" ? true : false
                        }
                        defaultValue="Primary Residence"
                        onChange={(e) => setOccupyProperty(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input className="btn"
                        label="Investment"
                        type="radio"
                        id="female"
                        name="gender"
                        checked={occupyProperty === "Investment" ? true : false}
                        defaultValue="Investment"
                        onChange={(e) => setOccupyProperty(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="me-0 me-md-3">
                    <div className="property_radio mx-auto">
                      <input className="btn"
                        label="Second Home"
                        type="radio"
                        id="other"
                        name="gender"
                        checked={
                          occupyProperty === "Second Home" ? true : false
                        }
                        defaultValue="Second Home"
                        onChange={(e) => setOccupyProperty(e.target.value)}
                      />
                    </div>
                  </div>
                  {fieldsError?.use_of_property
                    ? fieldsError?.use_of_property.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                  {operate_business === "1" ? (
                    <div className="mt-3 d-flex align-items-baseline">
                      &nbsp; &nbsp;
                      <input type="checkbox" checked />
                      &nbsp; &nbsp;
                      <label className="h6 text-muted">
                        I might also operate my business here
                      </label>
                    </div>
                  ) : (
                    <div className="mt-3 d-flex align-items-baseline">
                      &nbsp; &nbsp;
                      <input type="checkbox" onChange={IsChecked} />
                      &nbsp; &nbsp;
                      <label className="h6 text-muted">
                        I might also operate my business here
                      </label>
                    </div>
                  )}
                </div>

                <div className="row">
                  <h5 className="mt-4">
                    What is a comfortable monthly housing payment?
                  </h5>
                  <input
                    className="form-control m-4 p-3 dollar_input w-75 rounded-2 hinpt"
                    name=""
                    id=""
                    type="number"
                    placeholder="$"
                    value={comfortable_monthly}
                    onChange={(e) => setComfortable_monthly(e.target.value)}
                  />
                </div>
                {fieldsError?.comfortable_monthly_ho_payment
                  ? fieldsError?.comfortable_monthly_ho_payment.map((e) => (
                    <p className="text-danger">{e}</p>
                  ))
                  : null}

                <div className="row">
                  <h5 className="mt-4">
                    What is your goal for refinancing your current mortgage?
                  </h5>

                  <select
                    name="refinancing_goal"
                    className="form-select m-4 w-75 hinpt"
                    value={goalForRefinancing}
                    onChange={(e) => setGoalForRefinancing(e.target.value)}
                  >
                    <option selected disabled>
                      -Select Refinance Goal-
                    </option>
                    <option> Debt Consolidation </option>
                    <option> Student Loan </option>
                    <option> Home Improvement </option>
                    <option> Rate and Term Change </option>
                    <option> Other</option>
                  </select>
                  {fieldsError?.refinancing_goal
                    ? fieldsError?.refinancing_goal.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                </div>

                <div className="row mt-5 InputTxt123 ">
                  <h5>Where is the refinance property located?</h5>

                  {/* <div className="SearcIcon p-0"><CiSearch /></div> */}
                  <div className="posi_rela">
                    <input
                      className="form-control mt-3 w-75 ps-4 mx-lg-4 hinpt"
                      type="text"
                      // inputMode="decimal"
                      value={locationRefinanceProperty}
                      id=""

                      placeholder=" Enter a location"
                      onChange={(e) =>
                        setLocationRefinanceProperty(e.target.value)
                      }

                    />
                    <CiSearch className="search_svg" />
                  </div>
                </div>
                {fieldsError?.property_location
                  ? fieldsError?.property_location.map((e) => (
                    <p className="text-danger">{e}</p>
                  ))
                  : null}

                <div className="row mt-5 ">
                  <h5>
                    What is the current value of your property? Estimates are
                    fine.
                  </h5>
                  <input
                    className="form-control m-4 w-75 hinpt"
                    type="number"
                    name=""
                    id=""
                    value={valueOfYourProperty}
                    placeholder="Enter current value of your property "
                    onChange={(e) => setValueOfYourProperty(e.target.value)}
                  />
                  {fieldsError?.price_of_property
                    ? fieldsError?.price_of_property.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                </div>

                <div className="row mt-5 ">
                  <h5>What is the current balance of your mortgage?</h5>
                  <input
                    className="form-control m-4 w-75 hinpt"
                    type="number"
                    name=""
                    id=""
                    value={currentBalOfMortgage}
                    placeholder="$0"
                    onChange={(e) => setCurrentBalOfMortgage(e.target.value)}
                  />
                  {fieldsError?.down_payment
                    ? fieldsError?.down_payment.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                    : null}
                </div>

                <div className="row mt-4">
                  <label className="text-secondary h6">
                    Next is <span className="text-dark">Personal Info</span>
                  </label>
                </div>
                <button
                  className="btn btn-primary rounded-0 "
                  onClick={onSubmit}
                >
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>
              </div>
          {/* <div style={{width:"88%", height:"40px", paddingTop:"15px"}}><img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" className="Images2x" alt="" /> </div> */}
            {/* <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg"  alt="" /> */}
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

export default RefMortageinfo;