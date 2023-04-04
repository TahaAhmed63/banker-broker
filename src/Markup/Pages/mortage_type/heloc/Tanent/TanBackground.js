// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { useHistory } from "react-router-dom";
// import Swal from "sweetalert2";
// import Baseurl from "../../../../../Baseurl";
// import Header from "../../../../Layout/Header";
// import ProfileInfo from "../../Profile/ProfileInfo";
// import TanSideBar from "./TanSideBar";

// function TanBackground() {
//   const Assign_id = localStorage.getItem("assignId"); // also on condition for add and update
//   const [id, setId] = useState(null);
//   const [loader, setLoader] = useState(false);
//   const [fieldsError, setFieldsError] = useState();
//   const history = useHistory();

// const [owning_money, setowning_money] = useState(0);
// const [bankruptcy, setbankruptcy] = useState(0);
// const [not_guilty, setnot_guilty] = useState(0);
// const [special_needs, setspecial_needs] = useState(0);
// const [additional_comments, setadditional_comments] = useState("");
// const [find_property, setfind_property] = useState("");

//   const getRefDeclarationInfo = async () => {
//     setLoader(true);
//     let token = localStorage.getItem("usertoken");
//     var config = {
//       method: "post",
//       url: `${Baseurl.baseurl}real-estate/rent/tenant/get/background`,
//       data: Data,
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     axios(config)
//       .then((response) => {
//         setLoader(false);
//         console.log(response);
//         const {
//           id,
//           find_property,
//           additional_comments,
//           owning_money,
//           bankruptcy,
//           not_guilty,
//           special_needs,
//         } = response?.data?.data;
//         // console.log(another_property, "response");
//         console.log(response?.data?.data, "response");
//         setId(id);
//         setfind_property(find_property)
//         setadditional_comments(additional_comments);

//         setowning_money(owning_money);
//         setbankruptcy(bankruptcy);

//         setnot_guilty(not_guilty);

//         setspecial_needs(special_needs);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoader(false);
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       });
//   };

//   useEffect(() => {
//     getRefDeclarationInfo();
//   }, []);

//   const Data = new FormData();
// Data.append("application_id", Assign_id);
// Data.append("find_property", find_property);
// Data.append("additional_comments", additional_comments);
// Data.append("owning_money", owning_money);
// Data.append("bankruptcy", bankruptcy);
// Data.append("not_guilty", not_guilty);
// Data.append("special_needs", special_needs);
//   if(id){
//     Data.append("id", id);
//   }

//   const onSubmit = () => {
//     setLoader(true);
//     let token = localStorage.getItem("usertoken");
//     var config = {
//       method: "post",
//       url: `${Baseurl.baseurl}real-estate/rent/tenant/store/background`,
//       data: Data,
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     axios(config)
//       .then(function (response) {
//         console.log(response);
//         if (response?.data?.status === true) {
//           console.log(response?.data?.message, "response?.data?.message");
//           setLoader(false);
//           history.push("/heloc/tanent/background");
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
//         setFieldsError(error?.response?.data?.errors);
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

//   return (
//     <>
//       {loader ? <div className="loader"></div> : null}
//       <Header />

//       <div className="container-fluid">
//         <div className="row">
//           <TanSideBar />

//           <div className="col-md-8 my-5 ps-lg-2 ">
//             <h2>Background</h2>
//             <div>
//               <h5 className="mt-4">
//                 1) Have you (or any person you have named on this applications)
//                 ever been evicted <br /> from a tanancy or let owning money?
//               </h5>
//               <div className="stateagent mt-3">
//                 <div className="d-flex">
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1"
//                     checked={owning_money === 1 ? true : false}
//                     onClick={() => setowning_money(1)}

//                     id="YES"
//                     autocomplete="off"
//                     // checked={decvalue?.primary_residence == 1}

//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="YES">
//                     Yes
//                   </label>
//                 </div>
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1"
//                     id="No"
//                     autocomplete="off"
//                      defaultChecked
//                     onClick={() => setowning_money(0)}
//                     // defaultChecked
//                     // checked
//                     // checked={decvalue?.primary_residence == 0}
//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="No">
//                     No
//                   </label>
//                 </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h5 className="mt-4">
//                 2) Do you or any of the members of your household have pending
//                 criminal charges, or have you ever been convicted of (or pled
//                 guilty or no contest to) any criminal offense(s) other than
//                 minor traffic infractions that were disposed of by means other
//                 than acquittal or a finding of "not guilty"?
//               </h5>
//               <div className="stateagent mt-3">
//                 <div className="d-flex">
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.1"
//                     id="YES1"
//                     checked={not_guilty === 1 ? true : false}
//                     onClick={() => setnot_guilty(1)}
//                     autocomplete="off"
//                     // checked={decvalue?.primary_residence == 1}

//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="YES1">
//                     Yes
//                   </label>
//                 </div>
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.1"
//                     id="No1"
//                     autocomplete="off"
//                     defaultChecked
//                     // checked
//                     // checked={decvalue?.primary_residence == 0}
//                     onClick={() => setnot_guilty(0)}

//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="No1">
//                     No
//                   </label>
//                 </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h5 className="mt-4">
//                 3) Have you (or any person you have named on this application)
//                 ever filed for or been involved in a bankruptcy, been foreclosed
//                 on, or been a defendant in a civil suit?
//               </h5>
//               <div className="stateagent mt-3">
//                 <div className="d-flex">
//                 <div className="col-3 col-md-2 col-lg-1">
//                 <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.2"
//                     id="YES2"
//                     checked={bankruptcy === 1 ? true : false}
//                     onClick={() => setbankruptcy(1)}
//                     autocomplete="off"
//                     // checked={decvalue?.primary_residence == 1}

//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="YES2">
//                     Yes
//                   </label>
//                 </div>
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.2"
//                     id="No2"
//                     autocomplete="off"
//                     defaultChecked
//                     // checked
//                     onClick={() => setbankruptcy(0)}
//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="No2">
//                     No
//                   </label>
//                 </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <h3 className="m-0 ">Other Information</h3>
//               <h5 className="mt-4">
//                 Are Do you have any special needs for requirement we should be
//                 aware of?
//               </h5>
//               <div className="stateagent mt-3">
//                 <div className="d-flex">
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.3"
//                     id="YES3"
//                     autocomplete="off"
//                     checked={special_needs === 1 ? true : false}
//                     onClick={() => setspecial_needs(1)}
//                     // checked={decvalue?.primary_residence == 1}

//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="YES3">
//                     Yes
//                   </label>
//                 </div>
//                 <div className="col-3 col-md-2 col-lg-1">
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="q1.3"
//                     id="No3"
//                     autocomplete="off"
//                     defaultChecked
//                     onClick={() => setspecial_needs(0)}

//                     // checked
//                     // checked={decvalue?.primary_residence == 0}
//                   />
//                   <label className="btn btn-outline-primary px-3 py-2" for="No3">
//                     No
//                   </label>
//                 </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-6 mt-4">
//               <p className="fs-small m-0">How did you find this property?</p>
//               <select name="find_property" className=" form-select col-md-5" value={find_property} onChange={(e)=>setfind_property(e.target.value)}>
//                 <option selected disabled>
//                   Select
//                 </option>
//                 <option> Zillow</option>
//                 <option> Making Offers </option>
//                 <option> Found a House / Offer Pending</option>
//                 <option> Under Contract </option>
//               </select>
//             </div>

//             <div className="col-6 mt-4">
//               <p className="fs-small m-0">Additional Comments (Optional)</p>
//               <textarea className="form-control" onChange={(e)=>setadditional_comments(e.target.value)} cols="70" rows="8"></textarea>
//             </div>

//             <div>
//               <div className="row mt-4">
//                 <label className="text-secondary h6">
//                   Next is <span className="text-dark">Demographic</span>
//                 </label>
//               </div>
//               <button className="btn btn-primary rounded-0"onClick={onSubmit}>
//                 Save And Continue &nbsp;
//                 <AiOutlineArrowRight />
//               </button>
//             </div>
//           </div>

//           <ProfileInfo />
//         </div>
//       </div>
//     </>
//   );
// }

// export default TanBackground;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";
import Baseurl from "../../../../../Baseurl";
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import TanSideBar from "./TanSideBar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";

function TanBackground() {

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

  const Assign_id = localStorage.getItem("assignId"); // also on condition for add and update
  const [id, setId] = useState(null);
  const [fieldsError, setFieldsError] = useState();
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [decvalue, setDecValue] = useState();

  const [owning_money, setowning_money] = useState(0);
  const [bankruptcy, setbankruptcy] = useState(0);
  const [not_guilty, setnot_guilty] = useState(0);
  const [special_needs, setspecial_needs] = useState(0);
  const [additional_comments, setadditional_comments] = useState("");
  const [find_property, setfind_property] = useState("");

  const BorrowerData = new FormData();
  BorrowerData.append("application_id", Assign_id);
  BorrowerData.append("find_property", find_property);
  BorrowerData.append("additional_comments", additional_comments);
  BorrowerData.append("owning_money", owning_money);
  BorrowerData.append("bankruptcy", bankruptcy);
  BorrowerData.append("not_guilty", not_guilty);
  BorrowerData.append("special_needs", special_needs);
  id && BorrowerData.append("id", id);

  const AddDeclaration = () => {
    setLoader(true);
    // alert();
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/background`,
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
          history.push("/heloc/tanent/demographic");
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
  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/get/background`,
      data: BorrowerData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data);
        setDecValue(response?.data?.data);

        if (response?.data?.status === true) {
          setId(response?.data?.data?.id);
          setfind_property(
            response?.data?.datafind_property == null
              ? ""
              : response?.data?.datafind_property
          );
          setadditional_comments(
            response?.data?.data?.additional_comments == null
              ? ""
              : response?.data?.data?.additional_comments
          );

          setowning_money(
            response?.data?.data?.owning_money == null
              ? 0
              : response?.data?.data?.owning_money
          );
          setbankruptcy(
            response?.data?.data?.bankruptcy == null
              ? 0
              : response?.data?.data?.bankruptcy
          );

          setnot_guilty(response?.data?.data?.not_guilty == null ? 0 : 1);

          setspecial_needs(response?.data?.data?.special_needs == null ? 0 : 1);
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

  console.log(find_property, "find_property");
  console.log(not_guilty, "not_guilty");
  console.log(owning_money, "owning_money");
  console.log(special_needs, "special_needs");

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
                    <div className="mort grey_color fw-500" >Background</div>
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

            <div  className={
                isOpen === true
                  ? "col-md-8 open he my-5 ps-lg-5"
                  : isOpen === false
                  ? "col-md-10 open nhi he my-5 ps-lg-5"
                  : ""
              }>
              <h3 className=" mb-3" id="bgcolor1">Background</h3>
              <div>
                <label className="form-label col-10 mt-4">
                  1) Have you (or any person you have named on this
                  applications) ever been evicted <br /> from a tanancy or let
                  owning money?
                </label>
                <div className="stateagent mt-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1"
                        defaultChecked={owning_money == 1}
                        onChange={() => {
                          setowning_money(1);
                        }}
                        id="YES"
                        autocomplete="off"
                        // checked={decvalue?.primary_residence == 1}
                      />
                      <label
                        className="btn btn btn-link yes px-3 py-2"
                        for="YES"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1"
                        id="No"
                        autocomplete="off"
                        defaultChecked={owning_money == 0}
                        onChange={() => {
                          setowning_money(0);
                        }} // defaultChecked
                        // checked
                        // checked={decvalue?.primary_residence == 0}
                      />
                      <label
                        className="btn btn btn-link no px-3 py-2"
                        for="No"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="form-label col-10 mt-4">
                  2) Do you or any of the members of your household have pending
                  criminal charges, or have you ever been convicted of (or pled
                  guilty or no contest to) any criminal offense(s) other than
                  minor traffic infractions that were disposed of by means other
                  than acquittal or a finding of "not guilty"?
                </h5>
                <div className="stateagent mt-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="YES1"
                        defaultChecked={not_guilty == 1}
                        onChange={() => {
                          setnot_guilty(1);
                        }}
                        autocomplete="off"
                        // checked={decvalue?.primary_residence == 1}
                      />
                      <label
                        className="btn btn btn-link yes px-3 py-2"
                        for="YES1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="No1"
                        autocomplete="off"
                        defaultChecked={not_guilty == 0}
                        onChange={() => {
                          setnot_guilty(0);
                        }}
                      />
                      <label
                        className="btn btn btn-link no px-3 py-2"
                        for="No1"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="form-label col-10 mt-4">
                  3) Have you (or any person you have named on this application)
                  ever filed for or been involved in a bankruptcy, been
                  foreclosed on, or been a defendant in a civil suit?
                </h5>
                <div className="stateagent mt-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.2"
                        id="YES2"
                        defaultChecked={bankruptcy == 1}
                        onChange={() => {
                          setbankruptcy(1);
                        }}
                        autocomplete="off"
                        // checked={decvalue?.primary_residence == 1}
                      />
                      <label
                        className="btn btn btn-link yes px-3 py-2"
                        for="YES2"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.2"
                        id="No2"
                        autocomplete="off"
                        defaultChecked={bankruptcy == 0}
                        onChange={() => {
                          setbankruptcy(0);
                        }}
                      />
                      <label
                        className="btn btn btn-link no px-3 py-2"
                        for="No2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-10 mt-4">
                <h3 className="text-black ">Other Information</h3>
                <h5 className="form-label ">
                  Are Do you have any special needs for requirement we should be
                  aware of?
                </h5>
                <div className="stateagent mt-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.3"
                        id="YES3"
                        autocomplete="off"
                        checked={special_needs == 1}
                        onChange={() => {
                          setspecial_needs(1);
                        }} // checked={decvalue?.primary_residence == 1}
                      />
                      <label
                        className="btn btn btn-link yes px-3 py-2"
                        for="YES3"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.3"
                        id="No3"
                        autocomplete="off"
                        checked={special_needs == 0}
                        onChange={() => {
                          setspecial_needs(0);
                        }}
                        // checked
                        // checked={decvalue?.primary_residence == 0}
                      />
                      <label
                        className="btn btn btn-link no px-3 py-2"
                        for="No3"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 mt-4 form-group">
                <label className="land_fname">How did you find this property?</label>
                <select
                  name="find_property"
                  className=" form-select1 col-md-5"
                  value={find_property}
                  onChange={(e) => setfind_property(e.target.value)}
                >
                  {find_property ? (
                    <option selected disabled hidden>
                      {find_property}
                    </option>
                  ) : null}
                  <option  disabled={true}>Select</option>
                  <option> Zillow</option>
                  <option> Making Offers </option>
                  <option> Found a House / Offer Pending</option>
                  <option> Under Contract </option>
                </select>
              </div>

              <div className="col-6 mt-4 form-group">
                <p className="land_fname">Additional Comments (Optional)</p>
                <textarea
                  className="comment-area"
                  defaultValue={additional_comments}
                  onChange={(e) => setadditional_comments(e.target.value)}
                  cols="88"
                  rows="4"
                ></textarea>
              </div>

              <div>
                <div className="row mt-4">
                  <label className="text-scolor fontsbtn">
                    Next is <span className="fontsbtncobor">Demographic</span>
                  </label>
                </div>
                
                <button
                  id="btn-save"
                  className="btn btn-primary rounded"
                  onClick={AddDeclaration}
                >
                  Save & Continue  &nbsp;
                  <AiOutlineArrowRight />
                </button>
               
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
}

export default TanBackground;
