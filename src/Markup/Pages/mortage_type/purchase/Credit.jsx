// import React from "react";
// import Header from "../../../Layout/Header";
// import Mortageside from "./Mortageside";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Baseurl from "../../../../Baseurl";

// function Credit() {
//   const [co_Borrower, setCo_Borrower] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const [showfirstform, setshowfirstform] = useState(false);
//   const [bund, setBund] = useState("");
//   const [dob, setdob] = useState();
//   const [ssn, setssn] = useState();
//   const [cssn, setcssn] = useState();
//   const [estimated_credit_score, setestimated_credit_score] = useState();
//   const Assign_id = localStorage.getItem("assignId");
//   const BorrowerData = new FormData();
//   BorrowerData.append("application_id", Assign_id);
//   BorrowerData.append("dob", dob);
//   BorrowerData.append("ssn", ssn);
//   BorrowerData.append("cssn", cssn);
//   BorrowerData.append("estimated_credit_score", estimated_credit_score);



//   const AddCredits = () => {
//     alert();
//     let token = localStorage.getItem("usertoken");
//     var config = {
//       method: "post",
//       url: `${Baseurl.baseurl}store/credit`,
//       data: BorrowerData,
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     axios(config)
//       .then(function (response) {
//         console.log(response);
//         setCo_Borrower(response?.data?.message);
//         if (response?.data?.status === true) {
//           console.log(response?.data?.message, "response?.data?.message");
//           setLoader(false);
//           setshowfirstform(false);
//           Swal.fire({
//             toast: true,
//             icon: "success",
//             title: response?.data?.message,
//             animation: true,
//             position: "top-right",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener("mouseenter", Swal.stopTimer);
//               toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//           });
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           });
//         } else {
//           setLoader(false);
//         }
//       })
//       .catch(function (error) {
//         setLoader(false);
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//         setBund(error?.response?.data?.errors);
//         Swal.fire({
//           toast: true,
//           icon: "error",
//           title: error?.response?.data?.message,
//           animation: true,
//           position: "top-right",
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.addEventListener("mouseenter", Swal.stopTimer);
//             toast.addEventListener("mouseleave", Swal.resumeTimer);
//           },
//         });
//       });
//   };
//   console.log(estimated_credit_score,"estimated_credit_score")

//   return (
//     <>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <Mortageside />

//           <div className="col-md-8 my-5 ps-lg-5 ">
//             <div className="row">
//               <div className="col-lg-9">
//                 <h2 className="mt-4">CREDIT</h2>
//                 <div class="input-group mt-5 mb-4">
//                   <span class="input-group-text" id="basic-addon1">
//                     What is your date of birth?
//                   </span>
//                   <input
//                     type="date"
//                     class="form-control"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                     onChange={(e)=>setdob(e.target.value)}
//                   />
//                 </div>
//                 <div class="input-group mb-4">
//                   <span class="input-group-text" id="basic-addon1">
//                     What is your Social Security Number?
//                   </span>
//                   <input
//                     type="number"
//                     class="form-control"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                     onChange={(e)=>setssn(e.target.value)}

//                   />
//                 </div>
//                 <p className="h6 my-2">
//                   🔒 Your application and all personal information are safely
//                   stored on secured encrypted servers
//                 </p>
//                 <div class="input-group mb-4">
//                   <span class="input-group-text" id="basic-addon1">
//                     Confirm Social Security Number
//                   </span>
//                   <input
//                     type="number"
//                     class="form-control"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                     onChange={(e)=>setcssn(e.target.value)}

//                   />
//                 </div>
//                 <p className="fw-semibold">
//                   What is your estimated credit score?
//                 </p>
//                 <select class="form-select form-select mb-4" onChange={(e)=>setestimated_credit_score(e.target.value)}>
//                   <option selected>SELECT CREDIT SCORE</option>
//                   <option value="780+">780+</option>
//                   <option value="740-799">740 - 799</option>
//                   <option value="700-739">700 - 739</option>
//                   <option value="600-699">600 - 699</option>
//                   <option value="620-659">620 - 659</option>
//                   <option value="Below 620">Below 620</option>
//                 </select>
//                 <label className="text-secondary h6 mt-4">
//                   Next is <span className="text-dark">Review and Submit</span>
//                 </label>{" "}
//                 <br />
//                 <button className="btn btn-primary rounded-0 mt-2" onClick={AddCredits}>
//                   Save And Continue &nbsp;
//                   <AiOutlineArrowRight />
//                 </button>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Credit;














import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../Layout/Header";
import axios from "axios";
import Mortageside from "./Mortageside";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaLock } from 'react-icons/fa';
import footer from "../../../../Images/footercity.svg";

function Credit() {

  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const [bund, setBund] = useState("");
  
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

  const [fieldsError, setFieldsError] = useState();

  const [id, setId] = useState(null);
  const Assign_id = localStorage.getItem("assignId");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [confirmSocialSecurityNumber, setConfirmSocialSecurityNumber] =
    useState("");
  const [estmatedCreditStore, setEstmatedCreditStore] = useState("");
  const [asset_type, setasset_type] = useState("");
  const [cash_or_market, setcash_or_market] = useState("");

  const getRefCreditInfo = async () => {
    setLoader(true)
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/credit`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response);
        const {
          id,
          dob,
          credit_score,
          social_security_no,
          c_social_security_no,
          asset_type,
        } = response?.data?.data;
        setId(id);
        setDateOfBirth(dob);
        setEstmatedCreditStore(credit_score);
        setSocialSecurityNumber(social_security_no);
        setConfirmSocialSecurityNumber(c_social_security_no);
        setLoader(false)

        // setasset_type(asset_type);
        // setcash_or_market(cash_or_market);
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
    getRefCreditInfo();
  }, []);

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("dob", dateOfBirth);
  Data.append("ssn", socialSecurityNumber);
  Data.append("cssn", confirmSocialSecurityNumber);
  Data.append("estimated_credit_score", estmatedCreditStore);
  // Data.append("cash_or_market", cash_or_market);
  if (id) {
    Data.append("id", id);
  }

  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/credit`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setLoader(true);
        console.log(response?.data?.data, "Data from Response");
        console.log("title:", response?.data?.data?.message);
        if (response.data.status === true) {
          setLoader(false);

          history.push("/purchase/review");
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
        setFieldsError(error?.response?.data?.errors, "errors");
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


console.log(socialSecurityNumber,"ssn")
console.log(dateOfBirth,"dateOfBirth")
console.log(confirmSocialSecurityNumber,"confirmSocialSecurityNumber")
console.log(estmatedCreditStore,"estmatedCreditStore")
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
                ? "col-md-8 open he mb-2 mt-5 ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mb-2 mt-5 ps-lg-5"
                : ""
            }>
            <div className="row mx-3 pb-3">
              <div className="col-lg-9" style={{width:"400px"}}>
                <h2 className="mt-4">CREDIT</h2>
                <div className="mt-5 mb-4" >
                  <div className="mb-3" style={{fontSize:'20px',fontWeight:"500", color:"black"}} id="basic-addon1">
                    What is your date of birth?
                  </div>
                  <input
                  style={{fontSize:"12px", fontWeight:"400"}}
                    type="date"
                    className="form-control py-3 text-uppercase input26clr rounded-0"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                {fieldsError?.dob
                  ? fieldsError?.dob.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                  : null}
                <div class="mb-4" >
                  <div class="mb-3" style={{fontSize:'20px',fontWeight:"500", color:"black", width:"100%"}} id="basic-addon1">
                    What is your Social Security Number?
                  </div>
                  <input
                    type="number"
                    className="form-control py-3 input26clr rounded-0"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={socialSecurityNumber}
                    onChange={(e) => setSocialSecurityNumber(e.target.value)}
                  />
                </div>
                  {fieldsError?.ssn
                    ? fieldsError?.ssn.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
                <p style={{fontSize:'14px',fontWeight:"400"}} className="my-2">
                  <FaLock style={{color:'green'}}/> Your application and all personal information are safely
                  stored on secured encrypted servers
                </p>
                <div className="mb-4">
                  <div className="mb-3" style={{fontSize:'20px', color:"black"}} id="basic-addon1">
                    Confirm Social Security Number
                  </div>
                  <input
                    type="number"
                    className="form-control py-3 input26clr rounded-0"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={confirmSocialSecurityNumber}
                    onChange={(e) =>
                      setConfirmSocialSecurityNumber(e.target.value)
                    }
                  />
                  {fieldsError?.cssn
                    ? fieldsError?.cssn.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
                </div>
                <p className="mb-3" style={{fontSize:'20px',color:"black", fontWeight:"500"}}>
                  What is your estimated credit score?
                </p>
                <select
                  class="form-select form-select py-3 mb-4 input26clr rounded-0"
                  value={estmatedCreditStore}
                  style={{fontSize:"14px", fontWeight:"500"}}
                  onChange={(e) => setEstmatedCreditStore(e.target.value)}
                >
                  <option selected>Select Credit Score</option>
                  <option value="780+">780+</option>
                  <option value="740-799">740 - 799</option>
                  <option value="700-739">700 - 739</option>
                  <option value="600-699">600 - 699</option>
                  <option value="620-659">620 - 659</option>
                  <option value="Below 620">Below 620</option>
                </select>
                {fieldsError?.estimated_credit_score
                  ? fieldsError?.estimated_credit_score.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                  : null}
                <label style={{fontSize:"13", fontWeight:"400", color:"black"}} className="text-secondary mt-4">
                  Next is <span  style={{fontSize:"14",fontWeight:"500", color:"black"}}>Review and Submit</span>
                </label>{" "}
                <br />
                <button
                  className="btn btn-primary rounded-0 mt-2"
                  onClick={onSubmit}
                >
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>{" "}
              </div>
            </div>
            <div style={{width:"95%"}}>
              <hr />
              <img src={footer} alt="footer" />
            </div>
          </div>
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default Credit;
