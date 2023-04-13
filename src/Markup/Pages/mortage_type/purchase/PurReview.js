// import React, { useState, useEffect } from "react";
// import Header from "../../../Layout/Header";
// import Mortageside from "./Mortageside";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import ProfileInfo from "../Profile/ProfileInfo";
// import Baseurl from "../../../../Baseurl";
// import axios from "axios";
// import dollar from "../../../../Images/dollar.png";
// import Swal from "sweetalert2";
// import { useHistory } from 'react-router-dom';


// function PurReview() {
//   const [allGet, setAllGet] = useState();
//   const history = useHistory()

//   const [allPostData, setAllPostData] = useState();
//   const [about_us, set_about_us] = useState("");
//   const [financial_note, set_financial_note] = useState("");
//   const [disclosures_consent, set_disclosures_consent] = useState(0);
//   const [authorization, set_authorization] = useState(0);
//   const [loader, setLoader] = useState(false);
//   const [showfirstform, setshowfirstform] = useState(false);
//   const [bund, setBund] = useState("");

//   const application_id = localStorage.getItem("assignId");
//   const reviewData = new FormData();
//   reviewData.append("application_id", application_id);
//   reviewData.append("about_us", about_us);
//   reviewData.append("financial_note", financial_note);
//   reviewData.append("disclosures_consent", disclosures_consent);
//   reviewData.append("authorization", authorization);



//   const getData = () => {
//     const token = localStorage.getItem("usertoken");

//     var config = {
//       method: "post",
//       url: `${Baseurl.baseurl}review/application`,
//       data: reviewData,
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     axios(config)
//       .then((response) => {
//         setAllGet(response?.data?.data);
//         // console.log(allGet, "all data");
//         console.log(response, "my response");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);
  // const postData = () => {
  //   const token = localStorage.getItem("usertoken");

  //   var config = {
  //     method: "post",
  //     url: `${Baseurl.baseurl}submit/application`,
  //     data: reviewData,
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   axios(config)
  //     .then((response) => {
  //       setAllPostData(response?.data?.data);
  //       if (response?.data?.status === true) {

  //         console.log(response?.data?.message, "response?.data?.message")
  //         history.push('/new_mortage')
  //         setLoader(false);
  //         setshowfirstform(false);
  //         Swal.fire({
  //           toast: true,
  //           icon: "success",
  //           title: response?.data?.message,
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
  //         window.scrollTo({
  //           top: 0,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         setLoader(false);
  //       }
  //       // console.log(allGet, "all data");
  //       console.log(response, "my response");
  //     })
  //     .catch(function (error) {
  //       setLoader(false);
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //       setBund(error?.response?.data?.errors);
  //       Swal.fire({
  //         toast: true,
  //         icon: "error",
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: "top-right",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });
  //     });
  // };


//   const handlechange = (e) => {
//     set_about_us(e.target.value)

//   }

//   console.log(about_us, "about_us")
//   const handleChangeCheckBox = (e, func) => {
//     // Destructuring
//     const { value, checked } = e.target;

//     console.log(`${value} is ${checked}`);

//     // Case 1 : The user checks the box
//     {
//       checked
//         ? func(1)
//         : // Case 2  : The user unchecks the box
//         func(0);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <Mortageside />

//           <div className="col-md-8 my-5 ps-lg-5 ">
//             <div className="row">
//               <h3>Quickly review all the details and you’re ready to submit</h3>

//               <div className="row mt-4">
//                 <h5>No Mortgage Info</h5>
//                 {allGet?.mortgage_info?.map((elem, index) => {
//                   return (

//                     <>
//                       <>
//                         <div className="bg-gray">

//                           <div class=" d-flex ">
//                             <label class="">property Type</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.property_type}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             <label class="">price of property</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.price_of_property}</p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* <div className="col-5 d-flex mt-2">
//                         <label>Address:</label>
//                         <div>
//                           <p>{elem?.address}</p>
//                         </div>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property value:</p>
//                         <p>{elem?.property_value}</p>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property Usage</p>
//                         <p>{elem?.property_usage}</p>
//                       </div> */}
//                       </>
//                     </>

//                   )

//                 })}
//               </div>
//               <div className="row mt-3">
//                 <h5>No Personal Info</h5>
//                 {allGet?.personal_info?.map((elem, index) => {
//                   return (

//                     <>
//                       <>
//                         <div className="bg-gray">

//                           <div class=" d-flex ">
//                             <label class="">Email</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.email}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             <label class="">Cell Phone</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.cell_phone}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             <label class="">Work Phone</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.work_phone}</p>
//                             </div>
//                           </div>
//                         </div>


//                       </>
//                     </>

//                   )

//                 })}
//               </div>
//               <div className="row mt-3">
//                 <h5>No Co-Borrower (s)</h5>
//                 {allGet?.co_borrower?.map((elem, index) => {
//                   return (

//                     <>
//                       <>
//                         <div className="bg-gray">

//                           <div class=" d-flex ">
//                             <label class="">Email</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.cob_email}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             <label class="">Cell Phone</label>
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.cob_phone}</p>
//                             </div>
//                           </div>

//                         </div>


//                       </>
//                     </>

//                   )

//                 })}
//               </div>
//               <div className="row mt-3">
//                 <h5>No Income</h5>
//                 <div className="col-5 mt-2 d-flex justify-content-between">
//                   <div>
//                     <span className="dollar_img">
//                       <img src={dollar} alt="" />
//                     </span>
//                   </div>
//                   {allGet?.income?.map((elem, index) => {
//                     return (

//                       <>
//                         <>
//                           <div>
//                             <p>{elem?.employee_name}</p>
//                             <span>{elem?.year_profession}</span>
//                             <br />
//                             {/* <span>No Descriptio</span> */}
//                           </div>


//                         </>
//                       </>

//                     )

//                   })}
//                   {/* <div>
//                     <p>Mortagage Different Payments</p>
//                     <span>$0/year</span>
//                     <br />
//                     <span>No Descriptio</span>
//                   </div> */}
//                 </div>
//               </div>
//               <div className="row mt-3">
//                 <h5>No Assets</h5>
//                 {allGet?.asset?.map((elem, index) => {
//                   return (

//                     <>
//                       <>
//                         <div className="bg-gray">

//                           <div class=" d-flex ">
//                             {/* <label class="">Email</label> */}
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.asset_type}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             {/* <label class="">Cell Phone</label> */}
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.cash_or_market}</p>
//                             </div>
//                           </div>
//                           <div class=" d-flex ">
//                             {/* <label class="">Cell Phone</label> */}
//                             <div class="">
//                               <p class="text-dark ps-5">{elem?.account_number}</p>
//                             </div>
//                           </div>

//                         </div>


//                       </>
//                     </>

//                   )

//                 })}
//               </div>
//               <div className=" mt-3">
//                 <h5>No Real Estate</h5>

//                 {allGet?.real_estate?.map((elem, index) => {
//                   return (
//                     // console.log(elem?.address,"elem")
//                     <>
//                       <div className="bg-gray">

//                         <div class=" d-flex ">
//                           <label class="">Email</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.address}</p>
//                           </div>
//                         </div>
//                         <div class=" d-flex ">
//                           <label class="">property value</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.property_value}</p>
//                           </div>
//                         </div>
//                         <div class=" d-flex ">
//                           <label class="">property Usage</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.property_usage}</p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* <div className="col-5 d-flex mt-2">
//                         <label>Address:</label>
//                         <div>
//                           <p>{elem?.address}</p>
//                         </div>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property value:</p>
//                         <p>{elem?.property_value}</p>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property Usage</p>
//                         <p>{elem?.property_usage}</p>
//                       </div> */}
//                     </>
//                   );
//                 })}
//               </div>
//               <div className="row mt-3">
//                 <h5>No Declaration</h5>
//               </div>
//               <div className="row mt-3">
//                 <h5>No Demographic</h5>
//               </div>
//               <div className="row mt-3">
//                 <h5>No Credit</h5>
//                 {allGet?.credit?.map((elem, index) => {
//                   return (
//                     // console.log(elem?.address,"elem")
//                     <>
//                       <div className="bg-gray">

//                         <div class=" d-flex ">
//                           <label class="">date of birth</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.dob}</p>
//                           </div>
//                         </div>
//                         <div class=" d-flex ">
//                           <label class="">Social Security Number</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.social_security_no}</p>
//                           </div>
//                         </div>
//                         <div class=" d-flex ">
//                           <label class="">property Usage</label>
//                           <div class="">
//                             <p class="text-dark ps-5">{elem?.property_usage}</p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* <div className="col-5 d-flex mt-2">
//                         <label>Address:</label>
//                         <div>
//                           <p>{elem?.address}</p>
//                         </div>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property value:</p>
//                         <p>{elem?.property_value}</p>
//                       </div>
//                       <div className="col-5 d-flex justify-content-between mt-2">
//                         <p>property Usage</p>
//                         <p>{elem?.property_usage}</p>
//                       </div> */}
//                     </>
//                   );
//                 })}
//               </div>

//               <div className="row">
//                 <div className="col-md-8">
//                   <p>How did you hear about us?</p>


//                   <select
//                     formcontrolname="Source"
//                     className="form-select width-300  ng-untouched ng-pristine ng-invalid pl-2"
//                     onChange={(e) => handlechange(e)}
//                   >
//                     <option >Select Source</option>

//                     <option value="Televison">Televison</option>
//                     <option value="Radio">Radio</option>
//                     <option value="Newspaper">Newspaper</option>
//                     <option value="SocialMedia">Social Media</option>
//                     <option value="SearchEngine">Search Engine</option>
//                     <option value="FriendFamily">
//                       Referral - Friend/Family
//                     </option>
//                     <option value="RealEstateAgent">
//                       Referral - Business Contact
//                     </option>
//                     <option value="FinancialAdvisor">
//                       Referral - Financial Advisor
//                     </option>
//                     <option value="ReturnClient">Return Client</option>
//                     <option value="1Other">Other</option>
//                   </select>
//                   {bund?.about_us
//                     ? bund?.about_us.map((e) => (
//                       <p className="text-danger">{e}</p>
//                     ))
//                     : null}

//                   <div className="mt-4">
//                     <p>
//                       Anything else we should know about your financial
//                       situation?
//                     </p>
//                     <textarea
//                       className="form-control"
//                       cols="30"
//                       rows="10"
//                       onChange={(e) => set_financial_note(e.target.value)}
//                     ></textarea>
//                     {bund?.financial_note
//                       ? bund?.financial_note.map((e) => (
//                         <p className="text-danger">{e}</p>
//                       ))
//                       : null}
//                   </div>

//                   <div className="mt-4">
//                     <div class="alternate-name-wrapper mt-gutter ">
//                       <label
//                         for="eConsent"
//                         className="custom-checkbox checkbox-top-aligned "
//                       >
//                         <input
//                           type="checkbox"
//                           id="eConsent"
//                           className=" ng-untouched ng-pristine ng-valid"
//                           onChange={(e) =>
//                             handleChangeCheckBox(e, set_disclosures_consent)
//                           }
//                         />{" "}
//                         {bund?.disclosures_consent
//                           ? bund?.disclosures_consent.map((e) => (
//                             <p className="text-danger">{e}</p>
//                           ))
//                           : null}
//                         &nbsp;
//                         <span class="label font-sm ">
//                           <span>
//                             I, Hnh Tech, agree to and acknowledge receipt of
//                             &nbsp;
//                             <a className="text-primary">
//                               Disclosures and Consent to Do Business
//                               Electronically
//                             </a>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <div class="alternate-name-wrapper mt-gutter ">
//                       <label
//                         for="consent"
//                         className="custom-checkbox checkbox-top-aligned "
//                       >
//                         <input
//                           type="checkbox"
//                           id="consent"
//                           className=" ng-untouched ng-pristine ng-valid"
//                           onChange={(e) =>
//                             handleChangeCheckBox(e,
//                               set_authorization)
//                           }
//                         />{" "}
//                         {bund?.financial_note

//                           ? bund?.financial_note
//                             .map((e) => (
//                               <p className="text-danger">{e}</p>
//                             ))
//                           : null}
//                         &nbsp;
//                         <span class="label font-sm ">
//                           <span>
//                             Authorization to Order Credit and Verify Financial
//                             History &nbsp;
//                             <a className="text-primary">
//                               Authorization to Order Credit and Verify Financial
//                               History
//                             </a>
//                           </span>
//                         </span>
//                       </label>

//                       <button className="btn btn-primary rounded-0 mt-4" onClick={postData}>
//                         Save And Continue &nbsp;
//                         <AiOutlineArrowRight />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ProfileInfo />
//         </div>
//       </div>
//     </>
//   );
// }

// export default PurReview;






















import React, { useEffect, useState } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight, AiOutlineDollar } from "react-icons/ai";
import Mortageside from "./Mortageside";
import ProfileInfo from "../Profile/ProfileInfo";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import moneycheck from "../../../../Images/moneycheck.png";
import axios from "axios";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import footer from "../../../../Images/footercity.svg"
import { RiArrowDropDownLine } from 'react-icons/ri';




const PurReview = () => {

  
  const [allPosting_Data, setAllPosting_Data] = useState();
  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);

  const posting_Data = () => {
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
    posting_Data();
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

  const history = useHistory()
  const [loader, setLoader] = useState(false);
    const [allPostData, setAllPostData] = useState();

  const Assign_id = localStorage.getItem("assignId");
  const [bund, setBund] = useState("");

  const [sourse, setSourse] = useState("");
  const [textField, setTextField] = useState("");
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const [mortgage, setMortgage] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [income, setIncome] = useState([]);
  const [realState, setRealState] = useState([]);
  const [assets, setAssets] = useState([]);
  const [decleration, setDecleration] = useState([]);
  const [demographic, setDemographic] = useState([]);
  const [credit1, setCredit] = useState([]);

  const Data = new FormData();
  Data.append("application_id", Assign_id);

  const getRefReviewData = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}review/application`,
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
          asset,
          personal_info,
          income,
          real_estate,
          mortgage_info,
          declaration,
          demographic,
          credit,
        } = {
          ...response?.data?.data,
        };
        // const {} = response?.data?.data;
        console.log(asset, "response");
        setMortgage([...mortgage_info]);
        setPersonalInfo([...personal_info]);
        setAssets([...asset]);
        setIncome([...income]);
        setRealState([...real_estate]);
        setDecleration([...declaration]);
        setDemographic([...demographic]);
        setCredit([...credit]);
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
    getRefReviewData();
  }, []);

  const Data1 = new FormData();
  Data1.append("application_id", Assign_id);
  Data1.append("about_us", sourse);
  Data1.append("financial_note", textField);
  Data1.append("disclosures_consent", checkBox1 === true ? 1 : 0);
  Data1.append("authorization", checkBox2 === true ? 1 : 0);

 
    const postData = () => {
      const token = localStorage.getItem("usertoken");
  
      var config = {
        method: "post",
        url: `${Baseurl.baseurl}submit/application`,
        data: Data1,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios(config)
        .then((response) => {
          setAllPostData(response?.data?.data);
          if (response?.data?.status === true) {
  
            console.log(response?.data?.message, "response?.data?.message")
            history.push('/new_mortage')
            localStorage.removeItem("assignId")
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
  

  console.log(personalInfo);

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
                <Progress percent={allPosting_Data} status="actice" />
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
            <div className="row mx-3" style={{width:"98%"}}>
              <h5 style={{fontWeight:"500", color:"black"}} className="mb-3 p-md-0">
                Quickly review all the details and you’re ready to submit
              </h5>
              {/* mortgage */}
              <div>
                <div className="row mt-3">
                  {mortgage.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5 style={{fontSize:"16px"}}>Mortgage</h5>
                      <div>
                        <button onClick={()=>history.push('/mortage_info')}
                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {mortgage.length > 0 ? (
                    mortgage?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Property Type</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.use_of_property}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">occupy the property</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.use_of_property}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property value</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.comfortable_monthly_ho_payment}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Residency Type</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.down_payment}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Mortgage</h5>
                  )}
                </div>
              </div>
              {/* mortgage end */}
              
              {/* personal */}
              <div>
                <div className="row mt-3">
                  {personalInfo.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Personal</h5>
                      <div>
                        <button
                        onClick={()=>history.push('/personal_info')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {personalInfo.length > 0 ? (
                    personalInfo?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Email</label>
                                <div class="">
                                  <p class="text-dark ps-5">{elem?.email}</p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Cell Phone</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.cell_phone}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Work Phone</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.work_phone}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Personal Info</h5>
                  )}
                </div>
              </div>
              {/* personal end */}
             
              {/* income */}
              <div>
                <div className="row mt-3">
                  {income.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Income</h5>
                      <div>
                        <button
                        onClick={()=>history.push('/Co-Borrowers')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {income.length > 0 ? (
                    income?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Employee Name</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.employee_name}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Year Of Profession</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.year_profession}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Start Date</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.start_date}
                                  </p>
                                </div>
                              </div>
                              {elem?.end_date ? (
                                <div class=" d-flex ">
                                  <label class="">End Date</label>
                                  <div class="">
                                    <p class="text-dark ps-5">
                                      {elem?.end_date}
                                    </p>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Income</h5>
                  )}
                </div>
              </div>
              {/* income end */}
            
              {/* assets */}
              <div>
                <div className="row mt-3">
                  {assets.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Assets</h5>
                      <div>
                        <button
                        onClick={()=>history.push('/assets')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {assets.length > 0 ? (
                    assets?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="d-flex">
                              <div>
                                <span className="icon_green">
                                  <img src={moneycheck} alt="money" />
                                </span>
                              </div>
                              <div>
                                <p className="ms-3 my-0">{elem?.asset_type}</p>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  $ {elem?.cash_or_market}
                                </span>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  {elem?.financial_inst}
                                </span>
                                <span
                                  className="ms-3 my-0 d-block"
                                  style={{ fontSize: "14px" }}
                                >
                                  Account No . {elem?.account_number}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Assets</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* assets end */}
              {/* Real state */}
              <div>
                <div className="row mt-3">
                  {realState.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Real State</h5>
                      <div>
                        <button
                        onClick={()=>history.push('/Real_state')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {realState.length > 0 ? (
                    realState?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">Address</label>
                                <div class="">
                                  <p class="text-dark ps-5">{elem?.address}</p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property Value</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.property_value}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">Property Usage</label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.property_usage}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Real State</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Real state end */}
              {/* Decleration */}
              <div>
                <div className="row mt-3">
                  {decleration.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Decleration</h5>
                      <div>
                        <button                        
                        onClick={()=>history.push('/declaration')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {decleration.length > 0 ? (
                    decleration?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <p>Legal Disclosures</p>
                              <div class=" d-flex ">
                                <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.primary_residence === 1
                                      ? "Yes"
                                      : "No"}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">
                                  Affiliation with seller :{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.Purchase_Transaction === 1
                                      ? "Yes"
                                      : "No"}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                <label class="">
                                  Borrowing for the down payment :
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.mortgage_loan === 1 ? "Yes" : "No"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Decleration</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Decleration end */}
              {/* Demographic */}
              <div>
                <div className="row mt-3">
                  {demographic.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Demographic</h5>
                      <div>
                        <button                        
                        onClick={()=>history.push('/demographic')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {demographic.length > 0 ? (
                    demographic?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <p>Race</p>
                              <div class=" d-flex ">
                                {/* <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.asian === 1 ? "asian" : null}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                                {/* <label class="">Affiliation with seller : </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.other_asian === 1
                                      ? "Other asian"
                                      : null}
                                  </p>
                                </div>
                              </div>
                              <p>Ethnicity</p>
                              <div class=" d-flex ">
                                {/* <label class="">
                                  Intend to occupy property as primary residence
                                  :{" "}
                                </label> */}
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.native_hawaiian === 1
                                      ? "native hawaiian or pacific"
                                      : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.other_pacific_islander === 1
                                      ? "islander"
                                      : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.guamanian_or_chamorro === 1
                                      ? "guamanian or chamorro"
                                      : null}
                                  </p>
                                </div>
                              </div>
                              <p>Gender</p>
                              <div class=" d-flex ">
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "1" ? "Male" : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "2" ? "Female" : null}
                                  </p>
                                  <p class="text-dark ps-5">
                                    {elem?.gender === "3"
                                      ? "Do not wish to provide"
                                      : null}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Demogrphic</h5>
                  )}
                </div>
              </div>
              <hr />
              {/* Demeographic end */}
              {/* credit */}
              <div>
                <div className="row mt-3">
                  {credit1.length > 0 ? (
                    <div className="mb-3 d-flex justify-content-between">
                      <h5>Credit</h5>
                      <div>
                        <button                        
                        onClick={()=>history.push('/credit')}

                          className="mx-4 px-4 py-1"
                          style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "25px",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {credit1.length > 0 ? (
                    credit1?.map((elem, index) => {
                      return (
                        <>
                          <div className="bg-gray m-2 p-2">
                            <div className="bg-gray">
                              <div class=" d-flex ">
                                <label class="">
                                  Birth Date:{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.dob}
                                  </p>
                                </div>
                              </div>
                              <div class=" d-flex ">
                              <label class="">
                                Social Security Number:{" "}
                                </label>
                                <div class="">
                                  <p class="text-dark ps-5">
                                    {elem?.c_social_security_no}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h5 style={{fontSize:"16px"}}>No Credit</h5>
                  )}
                </div>
              </div>
              {/* credit ends */}
              <>
                <hr />
                <p className="mx-2 p-1">How did you hear about us?</p>
                <div class="input-group position-relative">
                 <RiArrowDropDownLine style={{ fontSize:"35px", fontWeight:"500", zIndex:"123", position:"absolute", right:"6", top:"2"}}/>
                  <select
                    class="form-control input26clr"
                    style={{fontSize:"14px"}}
                    onChange={(e) => setSourse(e.target.value)}
                  >
                    <option  value="" selected disabled>
                      Select Source
                    </option>
                    <option value="Televison"> Televison </option>
                    <option value="Radio"> Radio </option>
                    <option value="Newspaper"> Newspaper </option>
                    <option value="SocialMedia">Social Media</option>
                    <option value="SearchEngine"> Search Engine </option>
                    <option value="referralfromFamily/Friend">
                      {" "}
                      Referral - Family/Friend{" "}
                    </option>
                    <option value="referralfromBusinesContact">
                      {" "}
                      Referral - Business contact{" "}
                    </option>
                    <option value="referralfromFinancialAdvisior">
                      {" "}
                      Referral - Financial Advisior{" "}
                    </option>
                    <option value="ReturnClient"> Return Client </option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <p className="mx-2 mt-3 p-2">
                  Anything else we should know about your financial situation?
                </p>
                <div>
                  <textarea
                    className="w-100"
                    rows={6}
                    onChange={(e) => setTextField(e.target.value)}
                  ></textarea>
                </div>
                <div className="mt-3 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={checkBox1}
                    onClick={() => setCheckBox1(!checkBox1)}
                  />
                  &nbsp; &nbsp;
                  <label className="h6 text-muted" style={{fontSize:"14px",fontWeight:"600"}}>
                    I, Hnh Tech, agree to and acknowledge receipt of <span className="text-primary">
                    Disclosures Consent to Do Business Electronically
                    </span>
                  </label>
                  <br />
                </div>
                <div className="mt-3 d-flex align-items-baseline">
                  &nbsp; &nbsp;
                  <input
                    type="checkbox"
                    checked={checkBox2}
                    onClick={() => setCheckBox2(!checkBox2)}
                  />
                  &nbsp; &nbsp;
                  <label className="h6 text-muted" style={{fontSize:"14px",fontWeight:"600"}}>
                    I, Hnh Tech, agree to give <span className="text-primary">
                    Authorization to Order Credit and Verify Financial History
                    </span>
                  </label>
                  <br />
                </div>
              </>
              <div className="w-50">
                <button
                  className="btn btn-primary rounded-0 mt-2"
                  onClick={postData}
                >
                  Save And Continue &nbsp;
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <br />
            <div>
                <hr className="py-1" />
                <img className="pb-1" src={footer} alt="footer"/>
              </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );

}

export default PurReview