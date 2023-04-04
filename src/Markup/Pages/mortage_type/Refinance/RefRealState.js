import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import RefSideBar from "./RefSideBar";
import ProfileInfo from "../Profile/ProfileInfo";
import Baseurl from "../../../../Baseurl";
import axios from "axios";
import Swal from "sweetalert2";
import { FaBars, FaCheckCircle, FaPen, FaSearch } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { color } from "@mui/system";
// import ReFooter from "./ReFooter";
import Footerx404 from "../../../../Images/Footerx404.png";


function RefRealState() {
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

  const history = useHistory();
  const Assign_id = localStorage.getItem("assignId");

  const [showform, setShowForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fieldError, setFieldError] = useState("");

  // const [email, setEmail] = useState("");
  // const [propertyValue, setPropertyValue] = useState("");
  // const [propertyUsage, setPropertyUsage] = useState("");
  // const [propertyStatus, setPropertyStatus] = useState("");
  // const [propertyType, setPropertyType] = useState("");
  // const [monthlyExpenses, setMonthlyExpenses] = useState("");

  const [anotherProperty, setAnotherProperty] = useState([
    {
      address: "",
      property_value: "",
      property_usage: "",
      property_status: "",
      property_type: "",
      monthly_expenses: "",
    },
  ]);

  const Data1 = new FormData();
  Data1.append("application_id", Assign_id);

  const getRealStateData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/get/all/real/estate`,
      data: Data1,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data, "res");
        console.log(response?.data?.data, "res");
        if (response?.data?.data.length > 0) {
          setShowForm(true);
          setAnotherProperty(response?.data?.data);
        }
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
        setFieldError(error?.response?.data?.errors);
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
    getRealStateData();
  }, []);

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("no_real_estate", 0);
  {
    anotherProperty?.map((e, i) => {
      Data.append(`address[${i}]`, e?.address);
      Data.append(`monthly_expenses[${i}]`, e?.monthly_expenses);
      Data.append(`property_value[${i}]`, e?.property_value);
      Data.append(`property_status[${i}]`, e?.property_status);
      Data.append(`property_usage[${i}]`, e?.property_usage);
      Data.append(`property_type[${i}]`, e?.property_type);
    });
  }

  const addRealState = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/add/real/estate`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          history.push("/ref/declaration");
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
        setFieldError(error?.response?.data?.errors);
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

  const handelChange = (e, ind) => {
    const { name, value } = e.target;
    const data = [...anotherProperty];
    data[ind][name] = value;
    setAnotherProperty(data);
  };

  const onAdd = () => {
    setAnotherProperty((perv) => [
      ...perv,
      {
        address: "",
        property_value: "",
        property_usage: "",
        property_status: "",
        property_type: "",
        monthly_expenses: "",
      },
    ]);
  };

  console.log(anotherProperty);
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
                <Link to="#">RealState</Link>
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

          <div style={{position:"relative"}}
            className={
              isOpen === true
                ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
            }
          >
            <div className="row ps-5 Realxmain4">
              {/* <div className="col-lg-9">
                <h2 className="mt-1">Real State</h2>
              </div> */}

              <p className="h5 fw-semibold mt-4">Do you own any real estate?</p>
              <div className="row">
                <div className="col-2 col-md-2 col-lg-2 my-3" style={{width:"100px"}}>
                  <input
                    type="radio"
                    className="btn-check rounded-0"
                    name="options"
                    id="YES"
                    autocomplete="off"
                    onChange={() => {
                      setShowForm(true);
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
                      setShowForm(false);
                    }}
                  />
                  <label className="btn btn-link px-3 py-2 btnx404 rounded-0" for="NO">
                    No
                  </label>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  {showform ? (
                    <>
                      <p className="h5 fw-semibold mt-4">
                        Fill real estate address and other details
                      </p>
                      {anotherProperty.length > 0
                        ? anotherProperty.map((el, ind) => (
                            <AddAnotherRealStateProperty
                              handelChange={handelChange}
                              ind={ind}
                              onAdd={onAdd}
                              fieldError={fieldError}
                              el={el}
                            />
                          ))
                        : null}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row ">
                <div className=".col-md-6 col-lg-4  wxwith pb-4">
                  <label className="text-secondary h6 mt-4">
                    Next is <span className="text-dark">Declarations</span>
                  </label>
                  <br />
                  <button
                    className="btn btn-primary rounded-0 mt-2 "
                    onClick={addRealState}
                  >
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
            {/* <div id="naimImages4040" style={{width:"80%", paddingTop:"15px", position:"absolute",bottom:"0px"}}><img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" alt="" /> </div> */}
            <div className="Reals4040" style={{marginTop:"220px"}}>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default RefRealState;

export const AddAnotherRealStateProperty = ({
  handelChange,
  ind,
  onAdd,
  fieldError,
  el,
}) => {
  console.log(el);
  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="input-group mt-5 position-relative">
           
              <FaSearch style={{position:"absolute",left:"6px",top:"13px",fontSize:"16px", color:"gray"}}/>
            
            <input
              type="email"
              placeholder="Address"
              aria-label="First name"
              className="form-control  rounded-0 " style={{backgroundColor:" #0000ff00",paddingLeft:"30px"}}
              name="address"
              value={el?.address}
              onChange={(e) => handelChange(e, ind)}
            />
              <FaPen style={{position:"absolute", right:"10px", top:"14px",color:"#0d6efd"}} />
          </div>
          {fieldError?.address
            ? fieldError?.address.map((e) => <p className="text-danger">{e}</p>)
            : null}

          <div className="input-group mt-3">
            <span className="input-group-text mcx4044  rounded-0 w-25">Property Value</span>
            <input
              type="Number"
              placeholder="0"
              aria-label="First name"
              className="form-control  rounded-0" style={{backgroundColor:" #0000ff00"}}
 
              name="property_value"
              value={el?.property_value}
              onChange={(e) => handelChange(e, ind)}
            />
          </div>
          {fieldError?.property_value
            ? fieldError?.property_value.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div className="input-group mt-3">
            <span className="input-group-text mcx4044  rounded-0 w-25">Property Usage</span>
            <select
              className="form-select py-2  rounded-0"
              id="inputGroupSelect01"
              name="property_usage"
              value={el?.property_usage}
              onChange={(e) => handelChange(e, ind)}
            >
              <option selected>
                --Select Property Usage--
              </option>
              <option value="Primary Residence">Primary Residence</option>
              <option value="Investment">Investment</option>
              <option value="Second Home">Second Home</option>
            </select>
          </div>
          {fieldError?.property_usage
            ? fieldError?.property_usage.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div className="input-group mt-3">
            <span className="input-group-text mcx4044  rounded-0 w-25">Property Status</span>
            <select
              className="form-select py-2  rounded-0"
              id="inputGroupSelect01"
              name="property_status"
              value={el?.property_status}
              onChange={(e) => handelChange(e, ind)}
            >
              <option selected >
                --Select Property Status--
              </option>
              <option value="Pending Sale">Pending Sale</option>
              <option value="Retain">Retain</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
          {fieldError?.property_status
            ? fieldError?.property_status.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div className="input-group mt-3">
            <span className="input-group-text mcx4044  rounded-0 w-25">Property Type</span>
            <select
              className="form-select py-2  rounded-0"
              id="inputGroupSelect01"
              name="property_type"
              value={el?.property_type}
              onChange={(e) => handelChange(e, ind)}
            >
              <option selected>
                --Select Property Type--
              </option>
              <option value="Single Family">Single Family</option>
              <option value="Condominium">Condominium</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Manufactured Home">Manufactured Home</option>
              <option value="Two to Four Family">Two to Four Family</option>
              <option value="Other">Other</option>
              <option value="Commerical">Commerical</option>
              <option value="Farm">Farm</option>
              <option value="Land">Land</option>
              <option value="Mixed Use">Mixed Use</option>
              <option value="Mobile Home">Mobile Home</option>
              <option value="Multi Family +4">Multi Family +4</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>
          {fieldError?.property_type
            ? fieldError?.property_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}

          <div className="input-group mt-3">
            <span className="input-group-text mcx4044  rounded-0 w-25">Monthly Expenses</span>
            <input
              type="Number"
              placeholder="Ins, Maint, Taxes, etc"
              aria-label="First name"
              className="form-control  rounded-0" style={{backgroundColor:" #0000ff00"}}

              name="monthly_expenses"
              value={el?.monthly_expenses}
              onChange={(e) => handelChange(e, ind)}
            />
          </div>
          {fieldError?.monthly_expenses
            ? fieldError?.monthly_expenses.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div className="mt-5" onClick={onAdd} style={{ cursor: "pointer" }}>
            <h6>Add Another Real State Property</h6>
          </div>
        </div>
      </div>
      {/* <div className="footerx4020" style={{marginTop:"245px"}}>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
            </div> */}
    </>
  );
};
