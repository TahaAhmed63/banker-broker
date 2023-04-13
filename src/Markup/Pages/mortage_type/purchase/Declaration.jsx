import { useState, useEffect } from "react";
import Header from "../../../Layout/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import footer from "../../../../Images/footercity.svg";

function Declaration() {

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

  const Assign_id = localStorage.getItem("assignId");
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
  const [decvalue, setDecValue] = useState();
  const [id, Setid] = useState();

  const [firstQ, setfirstQ] = useState(0);
  const [firstQ1, setfirstQ1] = useState(0);
  const [secondQ, setsecondQ] = useState(0);
  const [thirdQ, setthirdQ] = useState(0);
  const [primary_residence, set_primary_residence] = useState(0);
  const [purchase_transaction, set_purchase_transaction] = useState(0);
  const [borrowing, set_borrowing] = useState(0);
  const [mortgage_loan, set_mortgage_loan] = useState(0);
  const [first_mortgage_lien, set_first_mortgage_lien] = useState(0);
  const [guarantor, set_guarantor] = useState(0);
  const [judgements_against_you, set_judgements_against_you] = useState(0);
  const [federal_debt, set_federal_debt] = useState(0);
  const [financial_liability, set_financial_liability] = useState(0);
  const [conveyed_title, set_conveyed_title] = useState(0);
  const [short_sale, set_short_sale] = useState(0);
  const [foreclosed_upon, set_foreclosed_upon] = useState(0);
  const [bankruptcy, set_bankruptcy] = useState(0);
  const [another_property, set_another_property] = useState(0);
  const [amount, set_amount] = useState("");
  const [chapter7, set_chapter7] = useState(0);
  const [chapter11, set_chapter11] = useState(0);
  const [chapter12, set_chapter12] = useState(0);
  const [chapter13, set_chapter13] = useState(0);
  const [type_of_property, set_type_of_property] = useState(0);
  const BorrowerData = new FormData();
  BorrowerData.append("application_id", Assign_id);
  BorrowerData.append("primary_residence", firstQ ? 1 : 0);
  BorrowerData.append("chapter7", chapter7 ? 1 : 0);
  BorrowerData.append("chapter11", chapter11 ? 1 : 0);
  BorrowerData.append("chapter12", chapter12 ? 1 : 0);
  BorrowerData.append("chapter13", chapter13 ? 1 : 0);
  BorrowerData.append("purchase_transaction", purchase_transaction ? 1 : 0);
  BorrowerData.append("borrowing", secondQ ? 1 : 0);
  BorrowerData.append("mortgage_loan", mortgage_loan ? 1 : 0);
  BorrowerData.append("first_mortgage_lien", first_mortgage_lien ? 1 : 0);
  BorrowerData.append("guarantor", guarantor ? 1 : 0);
  BorrowerData.append("judgements_against_you", judgements_against_you ? 1 : 0);
  BorrowerData.append("federal_debt", federal_debt ? 1 : 0);
  BorrowerData.append("financial_liability", financial_liability ? 1 : 0);
  BorrowerData.append("conveyed_title", conveyed_title ? 1 : 0);
  BorrowerData.append("short_sale", short_sale ? 1 : 0);
  BorrowerData.append("foreclosed_upon", foreclosed_upon ? 1 : 0);
  BorrowerData.append("bankruptcy", bankruptcy ? 1 : 0);
  BorrowerData.append("another_property", firstQ1 ? 1 : 0);
  BorrowerData.append("amount", amount);
  BorrowerData.append("type_of_property", type_of_property ? 1 : 0);
  id && BorrowerData.append("id", id);

  const AddDeclaration = () => {
    setLoader(true);
    // alert();
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}store/declaration`,
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
          setshowfirstform(false);
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
  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/declaration`,
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
          setfirstQ(response?.data?.data?.primary_residence);
          set_another_property(
            response?.data?.data?.another_property == null
              ? 0
              : response?.data?.data?.another_property
          );
          setsecondQ(
            response?.data?.data?.borrowing == null
              ? 0
              : response?.data?.data?.borrowing
          );
          console.log(response?.data?.data?.borrowing);
          set_amount(
            response?.data?.data?.amount == null
              ? ""
              : response?.data?.data?.amount
          );
          set_mortgage_loan(
            response?.data?.data?.mortgage_loan == null
              ? 0
              : response?.data?.data?.mortgage_loan
          );
          set_first_mortgage_lien(
            response?.data?.data?.first_mortgage_lien == null
              ? 0
              : response?.data?.data?.first_mortgage_lien
          );
          set_purchase_transaction(
            response?.data?.data?.Purchase_Transaction == null
              ? 0
              : response?.data?.data?.Purchase_Transaction
          );
          set_guarantor(
            response?.data?.data?.guarantor == null
              ? 0
              : response?.data?.data?.guarantor
          );
          set_judgements_against_you(
            response?.data?.data?.judgements_against_you == null
              ? 0
              : response?.data?.data?.judgements_against_you
          );
          set_federal_debt(
            response?.data?.data?.federal_debt == null
              ? 0
              : response?.data?.data?.federal_debt
          );
          set_financial_liability(
            response?.data?.data?.financial_liability == null
              ? 0
              : response?.data?.data?.financial_liability
          );
          set_conveyed_title(
            response?.data?.data?.conveyed_title == null
              ? 0
              : response?.data?.data?.conveyed_title
          );
          set_short_sale(
            response?.data?.data?.short_sale == null
              ? 0
              : response?.data?.data?.short_sale
          );
          set_foreclosed_upon(
            response?.data?.data?.foreclosed_upon == null
              ? 0
              : response?.data?.data?.foreclosed_upon
          );
          set_bankruptcy(
            response?.data?.data?.bankruptcy == null
              ? 0
              : response?.data?.data?.bankruptcy
          );
          set_chapter7(response?.data?.data?.chapter7);
          set_chapter11(response?.data?.data?.chapter11);
          set_chapter12(response?.data?.data?.chapter12);
          set_chapter13(response?.data?.data?.chapter13);
          Setid(response?.data?.data?.id);
          set_type_of_property(response?.data?.data?.type_of_property);
          console.log(decvalue?.primary_residence, "decvalue");
          setLoader(false);

       
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
       
      });
  };
  useEffect(() => {
    Get_Borrower();
  }, []);

  console.log(decvalue?.mortgage_loan, "decvalue?.mortgage_loan ");

  const abc = 1;
  console.log(decvalue?.bankruptcy, "decvalue?.bankruptcy");
  return (
    <>
      <>{loader ? <div className="loader"></div> : null}</>

      <Header />
      {!loader ? (
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

            <div
              className={
                isOpen === true
                  ? "col-md-8 open he mb-2 mt-5  ps-lg-5"
                  : isOpen === false
                  ? "col-md-10 open nhi he mb-2 mt-5  ps-lg-5"
                  : ""
              }
            >
              <div style={{width:"90%"}} className="row mx-3 pb-3">
                <h2 className="mt-1 mb-5">Declaration</h2>
                <div className="row" style={{color:"black"}}>
                  <p className="fontSW29">
                    Will you occupy the property as your primary residence?
                  </p>
                 <div className="d-flex justify-content-between" style={{width:"110px"}}>
                 <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q1"
                      id="YES"
                      autocomplete="off"
                      // checked={decvalue?.primary_residence == 1}
                      defaultChecked={firstQ == 1}
                      onChange={() => {
                        setfirstQ(1);
                      }}
                    />
                    <label
                      className="btn  px-3 py-2 btnx404 rounded-0"
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
                      // defaultChecked
                      // checked
                      // checked={decvalue?.primary_residence == 0}
                      defaultChecked={firstQ == 0}
                      onChange={() => {
                        setfirstQ(0);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No"
                    >
                      No
                    </label>
                  </div>
                 </div>
                  {firstQ ? (
                    <>
                      <p className="mt-4 fontSW29">
                        Have you had an ownership interest in another property
                        in the last three years?
                      </p>
                    <div className="d-flex justify-content-between" style={{width:"110px"}}>
                    <div className="col-3 col-md-2 col-lg-1">
                        <input
                          type="radio"
                          className="btn-check"
                          name="q1.1"
                          id="YES1"
                          autocomplete="off"
                          // checked={decvalue?.purchase_transaction == 1}
                          defaultChecked={another_property == 1}
                          onChange={() => {
                            setfirstQ1(1);
                          }}
                        />
                        <label
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
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
                          //  checked={purchase_transaction == 1}
                          defaultChecked={another_property == 0}
                          onChange={() => {
                            setfirstQ1(0);
                          }}
                        />
                        <label
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="No1"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    </>
                  ) : (
                    ""
                  )}
                  {firstQ1 == 1 ? (
                    <>
                      <p className="fontSW29 mt-4">
                        What type of property did you own?
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className="m-1">
                          <input
                            type="radio"
                            className="btn-check"
                            name="Investment"
                            id="Primary Residence"
                            autocomplete="off"
                            defaultChecked={type_of_property == 1}
                            onChange={() => {
                              set_type_of_property(1);
                            }}
                          />
                          <label
                            className="btnDecl26 px-3 py-2"
                            for="Primary Residence"
                          >
                            Primary Residence
                          </label>
                        </div>
                        <div className="m-1">
                          <input
                            type="radio"
                            className="btn-check"
                            name="Investment"
                            id="Investment"
                            autocomplete="off"
                            defaultChecked={type_of_property == 1}
                            onChange={() => {
                              set_type_of_property(1);
                            }}
                          />
                          <label
                            className="btnDecl26 px-3 py-2"
                            for="Investment"
                          >
                            Investment
                          </label>
                        </div>
                        <div className="m-1">
                          <input
                            type="radio"
                            className="btn-check"
                            name="Investment"
                            id=" Second Home"
                            autocomplete="off"
                            defaultChecked={type_of_property == 1}
                            onChange={() => {
                              set_type_of_property(1);
                            }}
                          />
                          <label
                            className="btnDecl26 px-3 py-2"
                            for=" Second Home"
                          >
                            Second Home
                          </label>
                        </div>
                        <div className="m-1">
                          <input
                            type="radio"
                            className="btn-check"
                            name="Investment"
                            id="FHA Secondary Residence"
                            autocomplete="off"
                            defaultChecked={type_of_property == 1}
                            onChange={() => {
                              set_type_of_property(1);
                            }}
                          />
                          <label
                            className="btnDecl27 px-3 py-2"
                            for="FHA Secondary Residence"
                          >
                            FHA Secondary Residence
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="row my-4 mt-5">
                  <p className="fontSW29">
                    If this is a Purchase Transaction: Do you have a family
                    relationship or business affiliation with the seller of the
                    property?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q3"
                      id="YES2"
                      autocomplete="off"
                      defaultChecked={purchase_transaction == 1}
                      onChange={() => {
                        set_purchase_transaction(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES2"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q3"
                      id="No2"
                      autocomplete="off"
                      defaultChecked={purchase_transaction == 0}
                      onChange={() => {
                        set_purchase_transaction(0);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No2"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Are you borrowing any money for this real estate transaction
                    (e.g., money for your closing costs or down payment) or
                    obtaining any money from another party, such as the seller
                    or realtor, that you have not disclosed on this loan
                    application?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q4"
                      id="YES3"
                      autocomplete="off"
                      defaultChecked={secondQ == 1}
                      onChange={() => {
                        setsecondQ(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES3"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="q4"
                      id="No3"
                      autocomplete="off"
                      defaultChecked={secondQ == 0}
                      onChange={() => {
                        setsecondQ(0);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No3"
                    >
                      No
                    </label>
                  </div>
                  </div>
                  {secondQ ? (
                    <>
                      <p className="fontSW29 mt-4">
                        What is the amount of this money?
                      </p>
                      <div className="col-md-6">
                        <div className="input-group mb-3 mt-1 position-relative">
                          <span style={{fontSize:"17px", top:"8px", left:"5px", zIndex:"123"}} className="position-absolute fw-bold">$</span>
                          <input
                            type="Number"
                            className="form-control ps-4  rounded-0 input266clr"
                            aria-label="Amount (to the nearest dollar)"
                            defaultValue={amount}
                            onChange={(e) => set_amount(e.target.value)}
                          />
                          {bund?.amount
                            ? bund?.amount.map((e) => (
                                <p className="text-danger">{e}</p>
                              ))
                            : null}
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="row  my-4">
                  <p className="fontSW29">
                    Have you or will you be applying for a mortgage loan on
                    another property(not the property securing this loan)on or
                    before closing this transaction that is not disclosed on
                    this loan application?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q3.3"
                      id="YES44"
                      autocomplete="off"
                      defaultChecked={mortgage_loan == 1}
                      onChange={() => set_mortgage_loan(1)}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES44"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q3.3"
                      id="No44"
                      autocomplete="off"
                      defaultChecked={mortgage_loan == 0}
                      onChange={() => set_mortgage_loan(0)}
                    />
                    <label
                     className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No44"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Will this property be subject to a lien that could take
                    priority over the first mortgage lien, such as a clean
                    energy lien paid through your property taxes (e.g., the
                    Property Assessed Clean Energy Program)?
                  </p>
                 <div className="d-flex justify-content-between" style={{width:"110px"}}>
                 <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q5"
                      id="YES5"
                      autocomplete="off"
                      defaultChecked={first_mortgage_lien == 1}
                      onChange={() => {
                        set_first_mortgage_lien(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES5"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q5"
                      id="No5"
                      autocomplete="off"
                      checked={first_mortgage_lien == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No5"
                    >
                      No
                    </label>
                  </div>
                 </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Are you a co-signer or guarantor on any debt or loan that is
                    not disclosed on this application?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q6"
                      id="YES6"
                      autocomplete="off"
                      defaultChecked={guarantor == 1}
                      onChange={() => {
                        set_guarantor(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES6"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q6"
                      id="No6"
                      autocomplete="off"
                      defaultChecked={guarantor == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No6"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Are there any outstanding judgements against you?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q7"
                      id="YES7"
                      autocomplete="off"
                      defaultChecked={judgements_against_you == 1}
                      onChange={() => {
                        set_judgements_against_you(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES7"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q7"
                      id="No7"
                      autocomplete="off"
                      defaultChecked={judgements_against_you == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No7"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Are you currently delinquent or in default on a Federal
                    debt?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q8"
                      id="YES8"
                      autocomplete="off"
                      defaultChecked={federal_debt == 1}
                      onChange={() => {
                        set_federal_debt(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES8"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q8"
                      id="No8"
                      autocomplete="off"
                      defaultChecked={federal_debt == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No8"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Are you a party to a lawsuit in which you potentially have
                    any personal financial liability?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q9"
                      id="YES9"
                      autocomplete="off"
                      defaultChecked={financial_liability == 1}
                      onChange={() => {
                        set_financial_liability(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES9"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q9"
                      id="No9"
                      autocomplete="off"
                      defaultChecked={financial_liability == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No9"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Have you conveyed title to any property in lieu of
                    foreclosure in the past 7 years?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q10"
                      id="YES10"
                      autocomplete="off"
                      defaultChecked={conveyed_title == 1}
                      onChange={() => {
                        set_conveyed_title(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES10"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q10"
                      id="No10"
                      autocomplete="off"
                      defaultChecked={conveyed_title == 0}
                      onChange={() => {
                        set_conveyed_title(1);
                      }}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No10"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Within the past 7 years, have you completed a
                    pre-foreclosure sale or short sale, whereby the property was
                    sold to a third party and the Lender agreed to accept less
                    than the outstanding mortgage balance due?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q11"
                      id="YES11"
                      autocomplete="off"
                      defaultChecked={short_sale == 1}
                      onChange={() => set_short_sale(1)}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES11"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q11"
                      id="No11"
                      autocomplete="off"
                      defaultChecked={short_sale == 0}
                      onChange={() => set_short_sale(0)}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No11"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row my-4">
                  <p className="fontSW29">
                    Have you had property foreclosed upon in the last 7 years?
                  </p>
                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q12"
                      id="YES12"
                      autocomplete="off"
                      defaultChecked={foreclosed_upon == 1}
                      onChange={() => {
                        set_foreclosed_upon(1);
                      }}
                    />
                    <label
                     className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES12"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q12"
                      id="No12"
                      autocomplete="off"
                      defaultChecked={foreclosed_upon == 0}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No12"
                    >
                      No
                    </label>
                  </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <p className="fontSW29">
                    Have you declared bankruptcy within the past 7 years?
                  </p>

                  <div className="d-flex justify-content-between" style={{width:"110px"}}>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q13"
                      id="YES13"
                      autocomplete="off"
                      defaultChecked={bankruptcy == 1}
                      onChange={() => set_bankruptcy(1)}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="YES13"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-3 col-md-2 col-lg-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="Q13"
                      id="No13"
                      autocomplete="off"
                      defaultChecked={bankruptcy == 0}
                      onChange={() => set_bankruptcy(0)}
                    />
                    <label
                      className="btn btn-link px-3 py-2 btnx404 rounded-0"
                      for="No13"
                    >
                      No
                    </label>
                  </div>
                  </div>

                  {bankruptcy ? (
                    <>
                      <p style={{fontSize:"14px", fontWeight:"400"}} className="text-secondary mt-4">
                        Identify the type(s) of bankruptcy:
                      </p>
                      <div
                        className="btn-group mt-2 d-flex flex-wrap"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck1"
                          autocomplete="off"
                          defaultChecked={chapter7 == 1}
                          onChange={() => {
                            set_chapter7(1);
                          }}
                        />
                        <div className="btnBoder26">
                        <label
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="btncheck1"
                        >
                          Chapter 7
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check btnBoder26"
                          id="btncheck2"
                          placeholder="Chapter 7"
                          autocomplete="off"
                          defaultChecked={chapter11 == 1}
                          onChange={() => {
                            set_chapter11(1);
                          }}
                        />
                        </div>
                       <div className="btnBoder26">
                       <label
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="btncheck2"
                        >
                          Chapter 11
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck3"
                          autocomplete="off"
                          defaultChecked={chapter12 == 1}
                          onChange={() => {
                            set_chapter12(1);
                          }}
                        />
                       </div>
                       <div className="btnBoder26">
                       <label
                       style={{width:"120px"}}
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="btncheck3"
                        >
                          Chapter 12
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck4"
                          autocomplete="off"
                          defaultChecked={chapter13 == 1}
                          onChange={() => {
                            set_chapter13(1);
                          }}
                        />
                       </div>
                      <div className="btnBoder26">
                        <label
                        style={{width:"120px"}}
                          className="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="btncheck4"
                        >
                          Chapter 13
                        </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-8 mt-5">
                  <div className="mt-5">
                    <label className="text-secondary h6 mt-4">
                      Next is <span className="textdark">Demographic</span>
                    </label>{" "}
                    <br />
                    <button
                      className="btn btn-primary rounded-0 mt-2"
                      onClick={AddDeclaration}
                    >
                      Save And Continue &nbsp;
                      <AiOutlineArrowRight />
                    </button>{" "}
                  </div>
                </div>
              </div>
              <br />
              <div>
                <hr />
                <img  src={footer} alt="footer"/>
              </div>
            </div>
            <ProfileInfo />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Declaration;
