import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import RefSideBar from "./RefSideBar";
import Header from "../../../Layout/Header";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
// import ReFooter from "./ReFooter";
import Footerx404 from "../../../../Images/Footerx404.png";


function RefDeclaration() {
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

  const Assign_id = localStorage.getItem("assignId"); // also on condition for add and update
  const [id, setId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();
  const history = useHistory();

  const [firstQ, setfirstQ] = useState(false);
  const [firstQ1, setfirstQ1] = useState(false);
  const [secondQ, setsecondQ] = useState(false);
  const [thirdQ, setthirdQ] = useState(false);

  const [primary_residence, set_primary_residence] = useState(0);
  const [purchase_transaction, set_purchase_transaction] = useState(0);
  const [borrowingMoney, setBorrowingMoney] = useState(0);
  const [anotherProperty, setAnotherProperty] = useState(0);
  const [typeOfProperty, setTypeOfProperty] = useState(0);
  const [titleProperty, setTitleProperty] = useState("");
  const [amount, setAmount] = useState("");
  const [mortgageLoan, setMortgageLoan] = useState(0);
  const [mortgageLien, setMortgageLien] = useState(0);
  const [guarantor, set_guarantor] = useState(0);
  const [conveyed_title, set_conveyed_title] = useState(0);
  const [judgements_against_you, set_judgements_against_you] = useState(0);
  const [federal_debt, set_federal_debt] = useState(0);
  const [financial_liability, set_financial_liability] = useState(0);
  const [foreclosed_upon, set_foreclosed_upon] = useState(0);
  const [short_sale, set_short_sale] = useState(0);
  const [bankruptcy, setBankruptcy] = useState(0);
  const [chapter7, setChapter7] = useState(false);
  const [chapter11, setChapter11] = useState(false);
  const [chapter12, setChapter12] = useState(false);
  const [chapter13, setChapter13] = useState(false);

  const getRefDeclarationInfo = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/get/declaration`,
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
          amount,
          primary_residence,
          Purchase_Transaction,
          borrowing,
          another_property,
          mortgage_loan,
          first_mortgage_lien,
          guarantor,
          judgements_against_you,
          foreclosed_upon,
          federal_debt,
          financial_liability,
          conveyed_title,
          short_sale,
          bankruptcy,
          chapter7,
          chapter11,
          chapter12,
          chapter13,
        } = response?.data?.data;
        console.log(another_property, "response");
        console.log(response?.data?.data, "response");
        setId(id);
        setAmount(amount);
        set_primary_residence(primary_residence);
        if (primary_residence === 1) {
          setfirstQ(true);
        }
        set_purchase_transaction(Purchase_Transaction);
        setBorrowingMoney(borrowing);
        if (borrowing === 1) {
          setsecondQ(true);
        }
        setAnotherProperty(another_property);
        if (another_property === 1) {
          setfirstQ1(true);
        }
        setMortgageLoan(mortgage_loan);
        setMortgageLien(first_mortgage_lien);
        set_guarantor(guarantor);
        set_judgements_against_you(judgements_against_you);
        set_federal_debt(federal_debt);
        set_foreclosed_upon(foreclosed_upon);
        set_financial_liability(financial_liability);
        set_conveyed_title(conveyed_title);
        set_short_sale(short_sale);
        setBankruptcy(bankruptcy);
        if (bankruptcy === 1) {
          setthirdQ(true);
        }
        if (chapter7 === 1) {
          setChapter7(true);
        }
        if (chapter11 === 1) {
          setChapter11(true);
        }
        if (chapter12 === 1) {
          setChapter12(true);
        }
        if (chapter13 === 1) {
          setChapter13(true);
        }
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
    getRefDeclarationInfo();
  }, []);

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append("primary_residence", primary_residence);
  Data.append("another_property", anotherProperty);
  Data.append("type_of_property", typeOfProperty);
  Data.append("property_tile", titleProperty);
  Data.append("purchase_transaction", purchase_transaction);
  Data.append("borrowing", borrowingMoney);
  if (borrowingMoney === 1) {
    Data.append("amount", amount);
  }
  Data.append("mortgage_loan", mortgageLoan);
  Data.append("first_mortgage_lien", mortgageLien);
  Data.append("conveyed_title", conveyed_title);
  Data.append("federal_debt", federal_debt);
  Data.append("judgements_against_you", judgements_against_you);
  Data.append("foreclosed_upon", foreclosed_upon);
  Data.append("financial_liability", financial_liability);
  Data.append("short_sale", short_sale);
  Data.append("guarantor", guarantor);
  Data.append("bankruptcy", bankruptcy);
  Data.append("chapter7", chapter7 ? 1 : 0);
  Data.append("chapter11", chapter11 ? 1 : 0);
  Data.append("chapter12", chapter12 ? 1 : 0);
  Data.append("chapter13", chapter13 ? 1 : 0);
  if (id) {
    Data.append("id", id);
  }

  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/store/declaration`,
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
          setLoader(false);
          history.push("/ref/demographic");
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
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
            }
          >
            <div className="row mainDivx404 ps-5">
              {/* <h2 className="mt-1 mb-5">Declaration</h2> */}
              <div className="row">
                <p className="h5 nexth5">
                  Will you occupy the property as your primary residence?
                </p>
                <div className="col-3 col-md-2 col-lg-1"   style={{width:"100px"}}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="q1"
                    checked={primary_residence === 1 ? true : false}
                    id="YES"
                    autocomplete="off"
                    onClick={() => set_primary_residence(1)}
                    onChange={() => {
                      setfirstQ(true);
                    }}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1"  style={{width:"100px"}}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="q1"
                    id="No"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => set_primary_residence(0)}
                    onChange={() => {
                      setfirstQ(false);
                    }}
                  />
                  <label className="btn btn-link px-3 py-2 btnx404 rounded-0" for="No">
                    No
                  </label>
                </div>
                {fieldsError?.primary_residence
                  ? fieldsError?.primary_residence.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                  : null}
                {firstQ ? (
                  <>
                    <p className="h5 nexth5 mt-4">
                      Have you had an ownership interest in another property in
                      the last three years?
                    </p>
                    <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="YES1"
                        checked={anotherProperty === 1 ? true : false}
                        autocomplete="off"
                        onClick={() => setAnotherProperty(1)}
                        onChange={() => {
                          setfirstQ1(true);
                        }}
                      />
                      <label
                        className="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="YES1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="q1.1"
                        id="No1"
                        checked={anotherProperty === 0 ? true : false}
                        autocomplete="off"
                        onClick={() => setAnotherProperty(1)}
                        onChange={() => {
                          setfirstQ1(false);
                        }}
                      />
                      <label
                        className="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="No1"
                      >
                        No
                      </label>
                    </div>
                    {fieldsError?.another_property
                      ? fieldsError?.another_property.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                      : null}
                  </>
                ) : (
                  ""
                )}
                {firstQ1 ? (
                  <>
                    <p className="h5 nexth5 mt-4">
                      What type of property did you own?
                    </p>
                    <div className="d-flex flex-wrap">
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="Investment"
                          id="Primary Residence"
                          autocomplete="off"
                          onClick={() => setTypeOfProperty(1)}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="Primary Residence"
                        >
                          Primary Residence
                        </label>
                      </div>
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="Investment"
                          id="Investment"
                          autocomplete="off"
                          onClick={() => setTypeOfProperty(2)}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="Investment"
                        >
                          Investment
                        </label>
                      </div>
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="Investment"
                          id=" Second Home"
                          autocomplete="off"
                          onClick={() => setTypeOfProperty(3)}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for=" Second Home"
                        >
                          Second Home
                        </label>
                      </div>
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="Investment"
                          id="FHA Secondary Residence"
                          autocomplete="off"
                          onClick={() => setTypeOfProperty(4)}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="FHA Secondary Residence"
                        >
                          FHA Secondary Residence
                        </label>
                      </div>
                    </div>

                    <p className="h5 nexth5 mt-4">
                      How did you hold title to the property?
                    </p>
                    <div className="d-flex flex-wrap">
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="propertyTitle"
                          id="Sole"
                          autocomplete="off"
                          onClick={() => setTitleProperty("Sole")}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="Sole"
                        >
                          Sole
                        </label>
                      </div>
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="propertyTitle"
                          id="Joint With Spouse"
                          autocomplete="off"
                          onClick={() => setTitleProperty("Joint With Spouse")}
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="Joint With Spouse"
                        >
                          Joint With Spouse
                        </label>
                      </div>
                      <div className="m-1">
                        <input
                          type="radio"
                          class="btn-check"
                          name="propertyTitle"
                          id="Joint With Other Person"
                          autocomplete="off"
                          onClick={() =>
                            setTitleProperty("Joint With Other Person")
                          }
                        />
                        <label
                          class="btn btn-link px-3 py-2 btnx404 rounded-0"
                          for="Joint With Other Person"
                        >
                          Joint With Other Person
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="row my-4 mt-5">
                <p className="h5 nexth5">
                  If this is a Purchase Transaction: Do you have a family
                  relationship or business affiliation with the seller of the
                  property?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    class="btn-check"
                    checked={purchase_transaction === 1 ? true : false}
                    name="Q3"
                    id="YES2"
                    autocomplete="off"
                    onClick={() => set_purchase_transaction(1)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES2"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3"
                    id="No2"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => set_purchase_transaction(0)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No2"
                  >
                    No
                  </label>
                </div>
                {fieldsError?.purchase_transaction
                  ? fieldsError?.purchase_transaction.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                  : null}
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Are you borrowing any money for this real estate transaction
                  (e.g., money for your closing costs or down payment) or
                  obtaining any money from another party, such as the seller or
                  realtor, that you have not disclosed on this loan application?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="q4"
                    checked={borrowingMoney === 1 ? true : false}
                    id="YES3"
                    autocomplete="off"
                    onClick={() => setBorrowingMoney(1)}
                    onChange={() => {
                      setsecondQ(true);
                    }}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES3"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="q4"
                    id="No3"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => setBorrowingMoney(0)}
                    onChange={() => {
                      setsecondQ(false);
                    }}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No3"
                  >
                    No
                  </label>
                </div>
                {secondQ ? (
                  <>
                    <p className="h5 nexth5 mt-4">What is the amount of this money?</p>
                    <div className="col-md-6">
                      <div className="input-group mb-3 mt-1">
                        <span className="input-group-text">$</span>
                        <input
                          type="Number"
                          class="form-control"
                          value={amount}
                          aria-label="Amount (to the nearest dollar)"
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Have you or will you be applying for a mortgage loan on
                  another property(not the property securing this loan)on or
                  before closing this transaction that is not disclosed on this
                  loan application?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    class="btn-check"
                    checked={mortgageLoan === 1 ? true : false}
                    name="Q3.3"
                    id="YES44"
                    autocomplete="off"
                    onClick={() => setMortgageLoan(1)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES44"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q3.3"
                    id="No44"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => setMortgageLoan(0)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No44"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Will this property be subject to a lien that could take
                  priority over the first mortgage lien, such as a clean energy
                  lien paid through your property taxes (e.g., the Property
                  Assessed Clean Energy Program)?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q5"
                    checked={mortgageLien === 1 ? true : false}
                    id="YES5"
                    autocomplete="off"
                    onClick={() => setMortgageLien(1)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES5"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q5"
                    id="No5"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => setMortgageLien(1)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No5"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Are you a co-signer or guarantor on any debt or loan that is
                  not disclosed on this application?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    class="btn-check"
                    checked={guarantor === 1 ? true : false}
                    name="Q6"
                    onClick={() => set_guarantor(1)}
                    id="YES6"
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES6"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q6"
                    onClick={() => set_guarantor(0)}
                    id="No6"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No6"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Are there any outstanding judgements against you?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q7"
                    checked={judgements_against_you === 1 ? true : false}
                    id="YES7"
                    onClick={() => set_judgements_against_you(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES7"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q7"
                    id="No7"
                    onClick={() => set_judgements_against_you(0)}
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No7"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Are you currently delinquent or in default on a Federal debt?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q8"
                    checked={federal_debt === 1 ? true : false}
                    id="YES8"
                    onClick={() => set_federal_debt(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES8"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q8"
                    id="No8"
                    onClick={() => set_federal_debt(0)}
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No8"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Are you a party to a lawsuit in which you potentially have any
                  personal financial liability?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q9"
                    checked={financial_liability === 1 ? true : false}
                    id="YES9"
                    onClick={() => set_financial_liability(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES9"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q9"
                    onClick={() => set_financial_liability(0)}
                    id="No9"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No9"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Have you conveyed title to any property in lieu of foreclosure
                  in the past 7 years?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q10"
                    checked={conveyed_title === 1 ? true : false}
                    id="YES10"
                    onClick={() => set_conveyed_title(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES10"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q10"
                    id="No10"
                    onClick={() => set_conveyed_title(0)}
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No10"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Within the past 7 years, have you completed a pre-foreclosure
                  sale or short sale, whereby the property was sold to a third
                  party and the Lender agreed to accept less than the
                  outstanding mortgage balance due?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q11"
                    checked={short_sale === 1 ? true : false}
                    id="YES11"
                    onClick={() => set_short_sale(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES11"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q11"
                    onClick={() => set_short_sale(0)}
                    id="No11"
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No11"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row my-4">
                <p className="h5 nexth5">
                  Have you had property foreclosed upon in the last 7 years?
                </p>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q12"
                    checked={foreclosed_upon === 1 ? true : false}
                    id="YES12"
                    onClick={() => set_foreclosed_upon(1)}
                    autocomplete="off"
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES12"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q12"
                    id="No12"
                    onClick={() => set_foreclosed_upon(0)}
                    autocomplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No12"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row mt-4">
                <p className="h5 nexth5">
                  Have you declared bankruptcy within the past 7 years?
                </p>

                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q13"
                    checked={bankruptcy === 1 ? true : false}
                    id="YES13"
                    autocomplete="off"
                    onClick={() => setBankruptcy(1)}
                    onChange={() => setthirdQ(true)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="YES13"
                  >
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1" style={{width:"100px"}} >
                  <input
                    type="radio"
                    className="btn-check"
                    name="Q13"
                    id="No13"
                    autocomplete="off"
                    defaultChecked
                    onClick={() => setBankruptcy(0)}
                    onChange={() => setthirdQ(false)}
                  />
                  <label
                    className="btn btn-link px-3 py-2 btnx404 rounded-0"
                    for="No13"
                  >
                    No
                  </label>
                </div>

                {thirdQ ? (
                  <>
                    <p className="h6 text-secondary mt-4">
                      Identify the type(s) of bankruptcy:
                    </p>
                    <div
                      className="btn-group mt-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        class="btn-check"
                        checked={chapter7}
                        id="btncheck1"
                        autocomplete="off"
                        onClick={() => setChapter7(!chapter7)}
                      />
                      <label
                        className="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="btncheck1"
                      >
                        Chapter 7
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck2"
                        checked={chapter11}
                        autocomplete="off"
                        onClick={() => setChapter11(!chapter11)}
                      />
                      <label
                        class="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="btncheck2"
                      >
                        Chapter 11
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck3"
                        checked={chapter12}
                        autocomplete="off"
                        onClick={() => setChapter12(!chapter12)}
                      />
                      <label
                        class="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="btncheck3"
                      >
                        Chapter 12
                      </label>
                      <input
                        type="checkbox"
                        class="btn-check"
                        checked={chapter13}
                        id="btncheck4"
                        autocomplete="off"
                        onClick={() => setChapter13(!chapter13)}
                      />
                      <label
                        className="btn btn-link px-3 py-2 btnx404 rounded-0"
                        for="btncheck4"
                      >
                        Chapter 13
                      </label>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="col-md-8 mt-5">
                <div className="mt-5">
                  <label className="text-secondary h6 mt-4">
                    Next is <span className="text-dark">Demographic</span>
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
            </div>
            <div  style={{marginTop:"25px"}}>
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

export default RefDeclaration;
