import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../Layout/Header";
import ProfileInfo from "../Profile/ProfileInfo";
import Financial from "./Assets/Financial";
import Funds from "./Assets/Funds";
import NumberShares from "./Assets/NumberShares";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import { useHistory, Link, useLocation} from "react-router-dom";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import footer from "../../../../Images/footercity.svg";
import { IoIosArrowBack } from 'react-icons/io';


function Assets() {
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
  const history = useHistory();

  const [allAssets, setAllAssets] = useState([]);
  const [loader, setLoader] = useState(false);
  const [doNotHaveAsset , setDoNotHaveAssets] = useState(null)
  const [fieldsError, setFieldsError] = useState();

  const Assign_id = localStorage.getItem("assignId"); // also on condition for add and update

  const [assetType, setAssetType] = useState("");
  const [addAsset, setAddAsset] = useState(false);
  const [noAssets, setNoAssts] = useState(false);
  const [id, setId] = useState(null);

  const [cashOrMarket, setcashOrMarket] = useState("");
  const [finalInstitute, setFinalInstitute] = useState({
    finalInstitute: "",
    accountNumber: "",
    numberOfShares: "",
    fundStoreType: "",
    fundStoreDescription: "",
    depositedOrNonDeposited: "",
  });

  const getRefAssetsInfo = async () => {
    setLoader(true)
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/all/asset`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response);
        setLoader(false)
        const { id} = response?.data?.data;
        setAllAssets(response.data.data);
        const {not_asset } =response?.data?.data[0]
        console.log(response.data.data, "response");
        setId(id);
        setDoNotHaveAssets(not_asset)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      });
  };

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("no_asset", noAssets === true ? 1 : 0);

  const Data1 = new FormData();
  Data1.append("application_id", Assign_id);
  Data1.append("asset_type", assetType);
  Data1.append("cash_or_market", cashOrMarket);
  if (assetType === "Checking") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "Savings") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "MoneyMarket") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "CertificateOfDeposit") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "MutualFund") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "Stocks") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
    Data1.append("no_of_shares", finalInstitute.numberOfShares);
  }

  if (assetType === "Bonds") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
    Data1.append("no_of_shares", finalInstitute.numberOfShares);
  }

  if (assetType === "Retirement") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "BridgeLoanProceeds") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "IndividualDevelopmentAccount") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "TrustAccount") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "LifeInsurance") {
    Data1.append("financial_inst", finalInstitute.finalInstitute);
    Data1.append("account_number", finalInstitute.accountNumber);
  }

  if (assetType === "Grant") {
    Data1.append("fund_store_type", finalInstitute.fundStoreType);
    Data1.append("funds_store_description", finalInstitute.fundStoreDescription);
    Data1.append("Deposited_or_Non_Deposited", finalInstitute.depositedOrNonDeposited);
  }

  if (assetType === "GiftCash") {
    Data1.append("fund_store_type", finalInstitute.fundStoreType);
    Data1.append("funds_store_description", finalInstitute.fundStoreDescription);
    Data1.append("Deposited_or_Non_Deposited", finalInstitute.depositedOrNonDeposited);
  }

  if (assetType === "GiftOfEquity") {
    Data1.append("fund_store_type", finalInstitute.fundStoreType);
    Data1.append("funds_store_description", finalInstitute.fundStoreDescription);
    Data1.append("Deposited_or_Non_Deposited", finalInstitute.depositedOrNonDeposited);
  }

  if (id) {
    Data.append("id", id);
  }

  useEffect(() => {
    getRefAssetsInfo();
  }, []);

  const onAddAsset = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}add/asset`,
      data: Data1,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAddAsset(false)
        setLoader(true);
        console.log(response?.data?.data, "Data from Response");
        console.log("title:", response?.data?.data?.message);
        if (response.data.status === true) {
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
          getRefAssetsInfo()
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
  };



  // onSubmit Function

  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/asset`,
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
          history.push("/Real_state");
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
  };


  // for Deleting an Asset with id

  const deleteItem = (id) => {

    setLoader(true)
    const Assign_id = localStorage.getItem("assignId");

    const ForDelete = new FormData()
    ForDelete.append("application_id", Assign_id) 
    ForDelete.append("id",id) 

    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}del/asset`,
      data: ForDelete,
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
          getRefAssetsInfo()
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
  }

  // console.log("setFinalInstitute",finalInstitute)
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
                ? "col-md-8 open he mb-2 mt-5  ps-lg-5"
                : isOpen === false
                ? "col-md-10 open nhi he mb-2 mt-5  ps-lg-5"
                : ""
            }>
            <div>
              {allAssets?.map((e) => {
                return (
                  <>
                    {e.length != 0 ? <>
                      <div className="px-5 py-3 mb-3 d-flex" style={{ width:'80%', backgroundColor:'lightblue', justifyContent:'space-between', alignItem:'center'}}>
                      <div>
                        <h4>{e.asset_type}</h4>
                        <div className="px-3">
                        <p>$ {e.cash_or_market}</p>
                        <p>{e.financial_inst ? <p>
                          Financial-Tnstitute : {e.financial_inst} 
                        </p>: null }</p>
                        <p>{e.account_number ? <p>
                          Account No .{e.account_number} 
                        </p>: null }</p>
                        {/* <p>Account No . {e.account_number}</p> */}
                        </div>
                      </div>
                      <div className="mt-5">
                      <button className="mb-3 px-3 py-1" style={{border:'none'}} onClick={() => history.push(`/AssetsEdit/${e.id}`)}>Edit</button>
                      <br/>
                      <button className="px-3 py-1" style={{border:'none'}} onClick={() => deleteItem(e.id)}>Delete</button>
                      </div>
                    </div>
                    </>: null}
                  </>
                );
              })
              }
            </div>
            <div className="position-relative h-100">
            <div className="row">
              <div className="mx-3" style={{width:"98%"}} >
                {addAsset === false ? (
                  <>
                    <div className="d-flex justify-content-between">
                    <h6 className="fontSW26">Total Assets</h6>
                    <h6 className="fontSW26">$22.0</h6>
                    </div>
                    <button
                      className="btn btn-outline-primary btn262 rounded-0"
                      onClick={() => setAddAsset(true)}
                    >
                      Add Asset
                    </button>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      onClick={() => setNoAssts(!noAssets)}
                    />
                    &nbsp;<span>Don't have any asset</span>
                    <div className="row mt-3">
                      <div className=".col-md-6 col-lg-4">
                        <label className="text-secondary h6 mt-4">
                          Next is <span className="textdark">Real State</span>
                        </label>
                        <br />
                        <button
                        style={{fontSize:"15px", fontWeight:"600", borderRadius:"6px", width:"175px"}}
                          className="btn btn-primary mt-2 rounded-0 py-1 px-2"
                          onClick={onSubmit}
                        >
                          Save & Continue &nbsp;
                          <AiOutlineArrowRight />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 style={{fontSize:"20"}} className="mt-4 textdark">Fill Asset detail</h4>
                    <div class="input-group mt-3">
                      <span style={{maxWidth:"30%"}} class="input-group-label contact-info-label ">
                        Asset Type
                      </span>
                      <select
                        class="form-control"
                        onChange={(e) => {
                          setAssetType(e.target.value);
                        }}
                      >
                        <option value="" selected disabled>
                          - Asset Type -
                        </option>
                        <option value="Checking"> Checking </option>
                        <option value="Savings"> Savings </option>
                        <option value="MoneyMarket"> Money Market </option>
                        <option value="CertificateOfDeposit">
                          Certificate Of Deposit
                        </option>
                        <option value="MutualFund"> Mutual Fund </option>
                        <option value="Stocks"> Stocks </option>
                        <option value="Bonds"> Bonds </option>
                        <option value="Retirement"> Retirement </option>
                        <option value="BridgeLoanProceeds">
                          Bridge Loan Proceeds
                        </option>
                        <option value="IndividualDevelopmentAccount">
                          Individual Development Account
                        </option>
                        <option value="TrustAccount"> Trust Account </option>
                        <option value="LifeInsurance"> Life Insurance </option>
                        <option value="TrustAccount"> Trust Account </option>
                        <option value="Grant"> Grant </option>
                        <option value="GiftCash"> Gift Cash </option>
                        <option value="GiftOfEquity"> Gift Of Equity </option>
                        <option value="ProceedsFromPropertySale">
                          Proceeds From Property Sale
                        </option>
                        <option value="ProceedsFromNonPropertySale">
                          Proceeds From Non Property Sale
                        </option>
                        <option value="SecuredBorrowedFunds">
                          Secured Borrowed Funds
                        </option>
                        <option value="UnsecuredBorrowedFunds">
                          Unsecured Borrowed Funds
                        </option>
                        <option value="checkingCashOnHand">
                          {" "}
                          Cash On Hand{" "}
                        </option>
                        <option value="OtherAsset">Other Asset </option>
                      </select>
                    </div>
                    <div class="input-group mt-2">
                      <span style={{maxWidth:"30%"}} class="input-group-label contact-info-label ">
                        Cash or Market Value
                      </span>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Required"
                        onChange={(e) => setcashOrMarket(e.target.value)}
                      />
                    </div>

                    {assetType === "Checking" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "Savings" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "MoneyMarket" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "CertificateOfDeposit" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "MutualFund" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "Stocks" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute}  value = {finalInstitute} />
                        <NumberShares setFinalInstitute={setFinalInstitute}  value = {finalInstitute} />
                      </>
                    ) : assetType === "Bonds" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                        <NumberShares setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "Retirement" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "BridgeLoanProceeds" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "IndividualDevelopmentAccount" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "TrustAccount" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "LifeInsurance" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "TrustAccount" ? (
                      <>
                        <Financial setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "Grant" ? (
                      <>
                        <Funds setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "GiftCash" ? (
                      <>
                        <Funds setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                      </>
                    ) : assetType === "GiftOfEquity" ? (
                      <>
                        <Funds setFinalInstitute={setFinalInstitute} value = {finalInstitute}/>
                      </>
                    ) : null}

                    <div className="mt-4 w-100">
                      <button
                       className="btn btn-link  me-2  px-3 py-2 btnx404 rounded-0"
                        onClick={() => setAddAsset(false)}
                      >
                       <IoIosArrowBack /> Back
                      </button>
                      <button
                        className="btn btn-link text-light bg-primary px-3 py-2 btnx404 rounded-0"
                        onClick={onAddAsset}
                      >
                        Add
                      </button>
                    </div>
                  </>
                )}
                <hr style={{width:"100%", marginTop:"250px"}}/>
              <div>
              <img className="img-fluid" src={footer} alt="footer" />
              </div>
              </div>
            </div>
            </div>
          </div>
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default Assets;
