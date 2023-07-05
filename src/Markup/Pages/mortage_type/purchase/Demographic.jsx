import Header from "../../../Layout/Header";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import ProfileInfo from "../Profile/ProfileInfo";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import footer from "../../../../Images/footercity.svg";

function Demographic() {

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
  const [id, setId] = useState("");
  const [fieldsError, setFieldsError] = useState();

  const Assign_id = localStorage.getItem("assignId");

  const [userinfo, setUserInfo] = useState({});
  const [userinfo2, setUserInfo2] = useState({});
  const [
    American_indian_or_Alaska_native,
    setAmerican_indian_or_Alaska_native,
  ] = useState(0);
  const [asian, setasian] = useState(0);
  const [asian_indian, setasian_indian] = useState(0);
  const [filipino, setfilipino] = useState(0);
  const [korean, setkorean] = useState(0);
  const [other_asian, setother_asian] = useState(0);
  const [chinese, setchinese] = useState(0);
  const [japanese, setjapanese] = useState(0);
  const [vietnamese, setvietnamese] = useState(0);
  const [black_or_african_american, setblack_or_african_american] = useState(0);
  const [
    native_hawaiian_or_pacific_islander,
    setnative_hawaiian_or_pacific_islander,
  ] = useState(0);
  const [native_hawaiian, setnative_hawaiian] = useState(0);
  const [samoan, setsamoan] = useState(0);
  const [guamanian_or_chamorro, setguamanian_or_chamorro] = useState(0);
  const [other_pacific_islander, setother_pacific_islander] = useState(0);
  const [white, setwhite] = useState(0);
  const [do_not_wish_to_provide_race, setdo_not_wish_to_provide_race] =
    useState(0);
  const [hispanic_or_latino, sethispanic_or_latino] = useState(0);
  const [cuban, setcuban] = useState(0);
  const [puerto_rican, setpuerto_rican] = useState(0);
  const [mexican, setmexican] = useState(0);
  const [not_hispanic_or_latino, setnot_hispanic_or_latino] = useState(0);
  const [
    do_not_wish_to_provide_ethnicity,
    setdo_not_wish_to_provide_ethnicity,
  ] = useState(0);
  const [other_Hispanic, setother_Hispanic] = useState(0);
  const [gender, setGender] = useState("");
  const [principal_tribe, setprincipal_tribe] = useState("");
  const [other_asian_details, setother_asian_details] = useState("");
  const [otherPacificIslanderDetails, setOtherPacificIslanderDetails] =
    useState("");
  const [
    other_hispanic_or_latino_details,
    setother_hispanic_or_latino_details,
  ] = useState("");

  const handleChange = (e, func) => {
    // Destructuring
    const { value, checked } = e.target;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    {
      checked
        ? func(1)
        : // Case 2  : The user unchecks the box
          func(0);
    }
  };

  // function in which we get data back

  const getRefDemographicInfo = async () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}get/demographic`,
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
          American_indian_or_Alaska_native,
          principal_tribe,
          asian,
          asian_indian,
          chinese,
          filipino,
          korean,
          other_asian,
          other_asian_details,
          japanese,
          vietnamese,
          black_or_african_american,
          native_hawaiian_or_pacific_islander,
          native_hawaiian,
          guamanian_or_chamorro,
          samoan,
          white,
          do_not_wish_to_provide_race,
          hispanic_or_latino,
          cuban,
          puerto_rican,
          mexican,
          other_Hispanic,
          other_pacific_islander,
          not_hispanic_or_latino,
          other_hispanic_or_latino_details,
          other_pacific_islander_details,
          do_not_wish_to_provide_ethnicity,
          gender,
        } = response?.data?.data;
        setId(id);
        setAmerican_indian_or_Alaska_native(American_indian_or_Alaska_native);
        setprincipal_tribe(principal_tribe);
        setasian(asian);
        setasian_indian(asian_indian);
        setfilipino(filipino);
        setkorean(korean);
        setother_asian(other_asian);
        setchinese(chinese);
        setjapanese(japanese);
        setvietnamese(vietnamese);
        setblack_or_african_american(black_or_african_american);
        setnative_hawaiian_or_pacific_islander(
          native_hawaiian_or_pacific_islander
        );
        setnative_hawaiian(native_hawaiian);
        setOtherPacificIslanderDetails(other_pacific_islander_details);
        setguamanian_or_chamorro(guamanian_or_chamorro);
        setsamoan(samoan);
        setwhite(white);
        setdo_not_wish_to_provide_race(do_not_wish_to_provide_race);
        sethispanic_or_latino(hispanic_or_latino);
        setcuban(cuban);
        setpuerto_rican(puerto_rican);
        setother_asian_details(other_asian_details);
        setmexican(mexican);
        setother_pacific_islander(other_pacific_islander);
        setother_hispanic_or_latino_details(other_hispanic_or_latino_details);
        setother_Hispanic(other_Hispanic);
        setnot_hispanic_or_latino(not_hispanic_or_latino);
        setdo_not_wish_to_provide_ethnicity(do_not_wish_to_provide_ethnicity);
        setGender(gender);
        setLoader(false);
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

  // useEffect for get data at the time of componenet renders

  useEffect(() => {
    getRefDemographicInfo();
  }, []);

  // all Fields for required data

  const Data = new FormData();
  Data.append("application_id", Assign_id);
  Data.append(
    "American_indian_or_Alaska_native",
    American_indian_or_Alaska_native
  );
  if (American_indian_or_Alaska_native) {
    Data.append("principal_tribe", principal_tribe);
  }
  Data.append("asian", asian);
  Data.append("asian_indian", asian_indian);
  Data.append("chinese", chinese);
  Data.append("japanese", japanese);
  Data.append("filipino", filipino);
  Data.append("korean", korean);
  Data.append("vietnamese", vietnamese);
  Data.append("other_asian", other_asian);
  if (other_asian) {
    Data.append("other_asian_details", other_asian_details);
  }
  Data.append("black_or_african_american", black_or_african_american);
  Data.append(
    "native_hawaiian_or_pacific_islander",
    native_hawaiian_or_pacific_islander
  );
  Data.append("native_hawaiian", native_hawaiian);
  Data.append("samoan", samoan);
  Data.append("guamanian_or_chamorro", guamanian_or_chamorro);
  Data.append("other_pacific_islander", other_pacific_islander);
  if (other_pacific_islander) {
    Data.append("other_pacific_islander_details", otherPacificIslanderDetails);
  }

  Data.append("white", white);
  Data.append("do_not_wish_to_provide_race", do_not_wish_to_provide_race);
  Data.append("hispanic_or_latino", hispanic_or_latino);
  Data.append("cuban", cuban);
  Data.append("mexican", mexican);
  Data.append("puerto_rican", puerto_rican);

  Data.append("not_hispanic_or_latino", not_hispanic_or_latino);
  Data.append(
    "do_not_wish_to_provide_ethnicity",
    do_not_wish_to_provide_ethnicity
  );
  Data.append("other_Hispanic", other_Hispanic);
  if (other_Hispanic) {
    Data.append(
      "other_hispanic_or_latino_details",
      other_hispanic_or_latino_details
    );
  }
  Data.append("gender", gender);
  if (id) {
    Data.append("id", id);
  }

  // Onsubmit to add

  const onSubmit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}demographic/store`,
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
          history.push("/credit");
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
        setFieldsError(error?.response?.data?.errors);
      
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
            <div className="row mx-3">
              <div className="col-lg-9">
                <h2 className="mt-4">Demographic</h2>
                <p style={{fontSize:"20px", fontWeight:"700", color:"black"}} className="mt-5">
                  Fill your Race, Ethnicity and Gender Information
                </p>
                <p style={{fontSize:"13px", fontWeight:"400"}} className=" lh-base mt-1">
                  The purpose of collecting this information is to help ensure
                  that all applicants are treated fairly and that the housing
                  needs of communities and neighborhoods are being fulfilled.
                  For residential mortgage lending, Federal law requires that we
                  ask applicants for their demographic information (ethnicity,
                  sex, and race) in order to monitor our compliance with equal
                  credit opportunity, fair housing, and home mortgage disclosure
                  laws. You are not required to provide this information, but
                  are encouraged to do so. You may select one or more
                  designations for "Ethnicity" and one or more designations for
                  "Race." The law provides that we may not discriminate on the
                  basis of this information, or on whether you choose to provide
                  it. However, if you choose not to provide the information and
                  you have made this application in person, Federal regulations
                  require us to note your ethnicity, sex, and race on the basis
                  of visual observation or surname. The law also provides that
                  we may not discriminate on the basis of age or marital status
                  information you provide in this application. If you do not
                  wish to provide some or all of this information, please check
                  below.
                </p>
                <p className="h5 fw-bold mt-5">Race</p>
                <div className="row my-3 mx-0 align-items-center">
                  <div class="form-check mb-2 ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={
                        American_indian_or_Alaska_native === 1 ? true : false
                      }
                      id="American Indian / Alaska Native"
                      onChange={(e) =>
                        handleChange(e, setAmerican_indian_or_Alaska_native)
                      }
                    />
                    <label
                    style={{marginLeft:"10px"}}
                      class="form-check-label"
                      for="American Indian / Alaska Native"
                    >
                      American Indian / Alaska Native
                    </label>
                  </div>

                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={principal_tribe}
                    placeholder="Enter enrolled or principal tribe"
                    onChange={(e) => setprincipal_tribe(e.target.value)}
                  />
                  {fieldsError?.principal_tribe
                    ? fieldsError?.principal_tribe.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        checked={asian === 1 ? true : false}
                        id="Asian"
                        onChange={(e) => handleChange(e, setasian)}
                      />&nbsp; 
                      <label class="form-check-label" for="Asian">
                        Asian
                      </label>
                      {fieldsError?.asian
                        ? fieldsError?.asian.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={asian_indian === 1 ? true : false}
                        value=""
                        id="Asian Indian"
                        onChange={(e) => handleChange(e, setasian_indian)}
                      />&nbsp;
                      <label class="form-check-label" for="Asian Indian">
                        Asian Indian
                      </label>
                      {fieldsError?.asian_indian
                        ? fieldsError?.asian_indian.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={filipino === 1 ? true : false}
                        value=""
                        id="Filipino"
                        onChange={(e) => handleChange(e, setfilipino)}
                      />&nbsp;
                      <label class="form-check-label" for="Filipino">
                        Filipino
                      </label>
                      {fieldsError?.filipino
                        ? fieldsError?.filipino.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={korean === 1 ? true : false}
                        value=""
                        id="Korean"
                        onChange={(e) => handleChange(e, setkorean)}
                      />&nbsp;
                      <label class="form-check-label" for="Korean">
                        Korean
                      </label>
                      {fieldsError?.korean
                        ? fieldsError?.korean.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={other_asian === 1 ? true : false}
                        value=""
                        id="Other Asian"
                        onChange={(e) => handleChange(e, setother_asian)}
                      />&nbsp;
                      <label class="form-check-label" for="Other Asian">
                        Other Asian{" "}
                      </label>
                      {fieldsError?.other_asian
                        ? fieldsError?.other_asian.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={chinese === 1 ? true : false}
                        value=""
                        id="Chinese"
                        onChange={(e) => handleChange(e, setchinese)}
                      />&nbsp;
                      <label class="form-check-label" for="Chinese">
                        Chinese
                      </label>
                      {fieldsError?.chinese
                        ? fieldsError?.chinese.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={japanese === 1 ? true : false}
                        value=""
                        id="Japanese"
                        onChange={(e) => handleChange(e, setjapanese)}
                      />&nbsp;
                      <label class="form-check-label" for="Japanese">
                        Japanese
                      </label>
                      {fieldsError?.japanese
                        ? fieldsError?.japanese.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={vietnamese === 1 ? true : false}
                        value=""
                        id="Vietnamese"
                        onChange={(e) => handleChange(e, setvietnamese)}
                      />&nbsp;
                      <label class="form-check-label" for="Vietnamese">
                        Vietnamese
                      </label>
                      {fieldsError?.vietnamese
                        ? fieldsError?.vietnamese.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>

                  {/* <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="If other, then please specify"
                    
                  /> */}
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    value={other_asian_details}
                    aria-describedby="basic-addon1"
                    placeholder="Other asian Details"
                    onChange={(e) => setother_asian_details(e.target.value)}
                  />&nbsp;

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={black_or_african_american === 1 ? true : false}
                        value=""
                        id="Black Or African American"
                        onChange={(e) =>
                          handleChange(e, setblack_or_african_american)
                        }
                      />&nbsp;
                      <label
                        class="form-check-label"
                        for="Black Or African American"
                      >
                        Black Or African American
                      </label>
                      {fieldsError?.black_or_african_american
                        ? fieldsError?.black_or_african_american.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={
                          native_hawaiian_or_pacific_islander === 1
                            ? true
                            : false
                        }
                        value=""
                        id="Native Hawaiian / Pacific Islander"
                        onChange={(e) =>
                          handleChange(
                            e,
                            setnative_hawaiian_or_pacific_islander
                          )
                        }
                      />&nbsp;
                      <label
                        class="form-check-label"
                        for="Native Hawaiian / Pacific Islander"
                      >
                        Native Hawaiian / Pacific Islander
                      </label>
                      {fieldsError?.native_hawaiian_or_pacific_islander
                        ? fieldsError?.native_hawaiian_or_pacific_islander.map(
                            (e) => <p className="text-danger">{e}</p>
                          )
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={native_hawaiian === 1 ? true : false}
                        value=""
                        id="Native Hawaiian"
                        onChange={(e) => handleChange(e, setnative_hawaiian)}
                      />&nbsp;
                      <label class="form-check-label" for="Native Hawaiian">
                        Native Hawaiian
                      </label>
                      {fieldsError?.native_hawaiian
                        ? fieldsError?.native_hawaiian.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={guamanian_or_chamorro === 1 ? true : false}
                        value=""
                        id="Guamanian Or Chamorro"
                        onChange={(e) =>
                          handleChange(e, setguamanian_or_chamorro)
                        }
                      />
                      <label
                        class="form-check-label"
                        for="Guamanian Or Chamorro"
                      >
                        Guamanian Or Chamorro{" "}
                      </label>
                      {fieldsError?.guamanian_or_chamorro
                        ? fieldsError?.guamanian_or_chamorro.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={samoan === 1 ? true : false}
                        value=""
                        id="Samoan"
                        onChange={(e) => handleChange(e, setsamoan)}
                      />&nbsp;
                      <label class="form-check-label" for="Samoan">
                        Samoan
                      </label>
                      {fieldsError?.samoan
                        ? fieldsError?.samoan.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={other_pacific_islander === 1 ? true : false}
                        value=""
                        id="Other Pacific Islander"
                        onChange={(e) =>
                          handleChange(e, setother_pacific_islander)
                        }
                      />&nbsp;
                      <label
                        class="form-check-label"
                        for="Other Pacific Islander"
                      >
                        Other Pacific Islander
                      </label>
                      {fieldsError?.other_pacific_islander
                        ? fieldsError?.other_pacific_islander.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={otherPacificIslanderDetails}
                    placeholder="If other, then please specify"
                    onChange={(e) =>
                      setOtherPacificIslanderDetails(e.target.value)
                    }
                  />&nbsp;

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={white === 1 ? true : false}
                        value=""
                        id="White"
                        onChange={(e) => handleChange(e, setwhite)}
                      />&nbsp;
                      <label class="form-check-label" for="White">
                        White
                      </label>
                      {fieldsError?.white
                        ? fieldsError?.white.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={
                          do_not_wish_to_provide_race === 1 ? true : false
                        }
                        value=""
                        id="Do not wish to provide"
                        onChange={(e) =>
                          handleChange(e, setdo_not_wish_to_provide_race)
                        }
                      />&nbsp;
                      <label
                        class="form-check-label"
                        for="Do not wish to provide"
                      >
                        Do not wish to provide
                      </label>
                      {fieldsError?.do_not_wish_to_provide_race
                        ? fieldsError?.do_not_wish_to_provide_race.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>

                  <p className="h5 fw-bold mb-2 mt-3">Ethnicity</p>

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={hispanic_or_latino === 1 ? true : false}
                        value=""
                        id="Hispanic/Latino"
                        onChange={(e) => handleChange(e, sethispanic_or_latino)}
                      />&nbsp;
                      <label style={{fontSize:"20px", fontWeight:'400', color:"black"}} class="form-check-label" for="Hispanic/Latino">
                        Hispanic/Latino
                      </label>
                      {fieldsError?.hispanic_or_latino
                        ? fieldsError?.hispanic_or_latino.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={cuban === 1 ? true : false}
                        value=""
                        id="Cuban"
                        onChange={(e) => handleChange(e, setcuban)}
                      />&nbsp;
                      <label class="form-check-label" for="Cuban">
                        Cuban
                      </label>
                      {fieldsError?.cuban
                        ? fieldsError?.cuban.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={puerto_rican === 1 ? true : false}
                        value=""
                        id="Puerto Rican"
                        onChange={(e) => handleChange(e, setpuerto_rican)}
                      />&nbsp;
                      <label class="form-check-label" for="Puerto Rican">
                        Puerto Rican
                      </label>
                      {fieldsError?.puerto_rican
                        ? fieldsError?.puerto_rican.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={mexican === 1 ? true : false}
                        value=""
                        id="Mexican"
                        onChange={(e) => handleChange(e, setmexican)}
                      />&nbsp;
                      <label class="form-check-label" for="Mexican">
                        Mexican
                      </label>
                      {fieldsError?.mexican
                        ? fieldsError?.mexican.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={other_Hispanic === 1 ? true : false}
                        value=""
                        id="Other"
                        onChange={(e) => handleChange(e, setother_Hispanic)}
                      />&nbsp;
                      <label class="form-check-label" for="Other">
                        Other
                      </label>
                      {fieldsError?.other_Hispanic
                        ? fieldsError?.other_Hispanic.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  </div>

                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={other_hispanic_or_latino_details}
                    placeholder="If other, then please specify"
                    onChange={(e) =>
                      setother_hispanic_or_latino_details(e.target.value)
                    }
                  />&nbsp;
                  {fieldsError?.other_hispanic_or_latino_details
                    ? fieldsError?.other_hispanic_or_latino_details.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}

                  <div className="col-lg-6 my-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={not_hispanic_or_latino === 1 ? true : false}
                        value=""
                        id="Not Hispanic/Latino"
                        onChange={(e) =>
                          handleChange(e, setnot_hispanic_or_latino)
                        }
                      />&nbsp;
                      <label class="form-check-label" for="Not Hispanic/Latino">
                        Not Hispanic/Latino
                      </label>
                      {fieldsError?.not_hispanic_or_latino
                        ? fieldsError?.not_hispanic_or_latino.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={
                          do_not_wish_to_provide_ethnicity === 1 ? true : false
                        }
                        value=""
                        id="Do not wish to provide"
                        onChange={(e) =>
                          handleChange(e, setdo_not_wish_to_provide_ethnicity)
                        }
                      />&nbsp;
                      <label
                        class="form-check-label"
                        for="Do not wish to provide"
                      >
                        Do not wish to provide
                      </label>
                      {fieldsError?.do_not_wish_to_provide_ethnicity
                        ? fieldsError?.do_not_wish_to_provide_ethnicity.map(
                            (e) => <p className="text-danger">{e}</p>
                          )
                        : null}
                    </div>
                  </div>

                  <p className="h5 fw-bold mb-2 mt-3">Gender</p>

                  <div className="col-lg-6 my-3">
                    <div class="form-check">
                      {gender === "1" ? (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                          id="Male"
                          onClick={() => setGender("1")}
                        />
                      ) : (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="Male"
                          onClick={() => setGender("1")}
                        />
                      )}&nbsp;
                      <label class="form-check-label" for="Male">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      {gender === "2" ? (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                          id="Female"
                          onClick={() => setGender("2")}
                        />
                      ) : (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="Female"
                          onClick={() => setGender("2")}
                        />
                      )}&nbsp;
                      <label class="form-check-label" for="Female">
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      {gender === "3" ? (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                          id="Do not wish to provide_g"
                          onClick={() => setGender("3")}
                        />
                      ) : (
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="Do not wish to provide_g"
                          onClick={() => setGender("3")}
                        />
                      )}&nbsp; 
                      <label
                        class="form-check-label"
                        for="Do not wish to provide_g"
                      >
                        Do not wish to provide
                      </label>
                    </div>
                  </div>
                </div>
                {fieldsError?.gender
                  ? fieldsError?.gender.map((e) => (
                      <p className="text-danger">{e}</p>
                    ))
                  : null}
                <label style={{fontSize:"13px", fontWeight:"500"}} className="text-secondary mt-4">
                  Next is <span style={{fontSize:"14px", fontWeight:"600", color:"black !important"}} className="text-dark">Credit</span>
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
            <br />
            <div >
              <hr />
              <img src={footer} alt="footer" />
            </div>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default Demographic;
