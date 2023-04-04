import React, { useState, useEffect } from "react";
import Header from "../../../../Layout/Header";
import TanSideBar from "./TanSideBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProfileInfo from "../../Profile/ProfileInfo";
import Baseurl from "../../../../../Baseurl";
import axios from "axios";
import dollar from "../../../../../Images/dollar.png";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function TanReview() {
  const [allGet, setAllGet] = useState();
  const history = useHistory();

  const [allPostData, setAllPostData] = useState();
  const [about_us, set_about_us] = useState("");
  const [financial_note, set_financial_note] = useState("");
  const [disclosures_consent, set_disclosures_consent] = useState(0);
  const [authorization, set_authorization] = useState(0);
  const [loader, setLoader] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
  const [bund, setBund] = useState("");

  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);
  reviewData.append("about_us", about_us);
  reviewData.append("financial_note", financial_note);
  reviewData.append("disclosures_consent", disclosures_consent);
  reviewData.append("authorization", authorization);

  const getData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/review`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAllGet(response?.data?.data);
        // console.log(allGet, "all data");
        console.log(response, "my response");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const postData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/submit/application`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAllPostData(response?.data?.data);
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          // history.push('')
          setLoader(true);
          setshowfirstform(false);
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
          setLoader(false);

          history.push("/new_mortage");
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

  const handlechange = (e) => {
    set_about_us(e.target.value);
  };

  console.log(about_us, "about_us");
  const handleChangeCheckBox = (e, func) => {
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

  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <Header />
      <div className="container-fluid">
        <div className="row">
          <TanSideBar />

          <div className="col-md-8 my-5 ps-lg-5 ">
            <div className="row">
              <div className="form-group mb-gutter ">
                <label className="form-label font-bold">
                  Quickly review all the details and you’re ready to submit
                </label>
              </div>
              <hr className="divider" />
              <div className="row mt-4">
                <h6 className="font-bold">No Personal Info</h6>
                {allGet?.personal_info?.map((elem, index) => {
                  return (
                    <>
                      <>
                        <div className="bg-gray">
                          <div class=" d-flex ">
                            <label class="">First Name</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.first_name}</p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            <label class="">Middel Name</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.middle_name}</p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            <label class="">Last Name</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.last_name}</p>
                            </div>
                          </div>
                        </div>

                        {/* <div className="col-5 d-flex mt-2">
                        <label>Address:</label>
                        <div>
                          <p>{elem?.address}</p>
                        </div>
                      </div>
                      <div className="col-5 d-flex justify-content-between mt-2">
                        <p>property value:</p>
                        <p>{elem?.property_value}</p>
                      </div>
                      <div className="col-5 d-flex justify-content-between mt-2">
                        <p>property Usage</p>
                        <p>{elem?.property_usage}</p>
                      </div> */}
                      </>
                    </>
                  );
                })}
              </div>
              <hr className="divider" />

              <div className="row mt-3">
                <h6 className="font-bold">No Additional Info</h6>
                {allGet?.additional_info?.map((elem, index) => {
                  return (
                    <>
                      <>
                        <div className="bg-gray">
                          <div class=" d-flex ">
                            <label class="">pet Living</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.pet_living}</p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            <label class="">type</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.type}</p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            <label class="">breed</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.breed}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  );
                })}
              </div>

              <div className="row mt-3">
                <h6 className="text-dark font-bold">No Co-Signer(s)</h6>
                <div class="btn-container float-right">
                                <a className="action-btn action-btn-secondary" id="edit-lft1" href="#">Edit </a>
                            </div>

                {allGet?.co_signer?.map((elem, index) => {
                  return (
                    <>
                      <>
                        <div className="bg-gray">
                          <div class=" d-flex ">
                            <label class="">Email</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.cob_email}</p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            <label class="">Cell Phone</label>
                            <div class="">
                              <p class="text-dark ps-5">{elem?.cob_phone}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  );
                })}
              </div>
              <div className="row mt-3">
                <h6 className="font-bold">No Income</h6>

                <div class="btn-container float-right">
                                <a className="action-btn action-btn-secondary" id="edit-lft1" href="#">Edit </a>
                            </div>

                <div className="col-5 mt-2 d-flex justify-content-between">
                  <div>
                    <span className="dollar_img">
                      <img src={dollar} alt="" />
                    </span>
                  </div>
                  {allGet?.income?.map((elem, index) => {
                    return (
                      <>
                        <>
                          <div>
                            <p>{elem?.employee_name}</p>
                            <span>{elem?.year_profession}</span>
                            <br />
                            {/* <span>No Descriptio</span> */}
                          </div>
                        </>
                      </>
                    );
                  })}
                  {/* <div>
                    <p>Mortagage Different Payments</p>
                    <span>$0/year</span>
                    <br />
                    <span>No Descriptio</span>
                  </div> */}
                </div>
              </div>
              <div className="row mt-3">
                <h6 className="font-bold">Backgound</h6>
                {allGet?.background?.map((elem, index) => {
                  return (
                    <>
                      <>
                        <div className="bg-gray">
                          <div class=" d-flex ">
                            {/* <label class="">Email</label> */}
                            <div class="">
                              <p class="text-dark ps-5">
                                {elem?.owning_money == 1 ? "Yes" : "No"}
                              </p>
                            </div>
                          </div>
                          <div class=" d-flex ">
                            {/* <label class="">Cell Phone</label> */}
                            <div class="">
                              <p class="text-dark ps-5">
                                {elem?.additional_comments}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  );
                })}
              </div>
              <div className=" mt-3">
                <h6 className="font-bold">Demographic</h6>

                {allGet?.demographic?.map((elem, index) => {
                  return (
                    // console.log(elem?.address,"elem")
                    <>
                      <div className="bg-gray">
                        <div class=" d-flex ">
                          <label class="">principal Tribe</label>
                          <div class="">
                            <p class="text-dark ps-5">
                              {elem?.principal_tribe}
                            </p>
                          </div>
                        </div>
                        <div class=" d-flex ">
                          <label class="">Asian</label>
                          <div class="">
                            <p class="text-dark ps-5">
                              {elem?.asian == 1 ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <div className="col-5 d-flex mt-2">
                        <label>Address:</label>
                        <div>
                          <p>{elem?.address}</p>
                        </div>
                      </div>
                      <div className="col-5 d-flex justify-content-between mt-2">
                        <p>property value:</p>
                        <p>{elem?.property_value}</p>
                      </div>
                      <div className="col-5 d-flex justify-content-between mt-2">
                        <p>property Usage</p>
                        <p>{elem?.property_usage}</p>
                      </div> */}
                    </>
                  );
                })}
              </div>
              <div className="row mt-3">
                <h6 className="font-bold">Document</h6>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <p>How did you hear about us?</p>

                  <select
                    formcontrolname="Source"
                    id="select-source-wd1"
                    className="form-select width-300  ng-untouched ng-pristine ng-invalid pl-2"
                    onChange={(e) => handlechange(e)}
                  >
                    <option>Select Source</option>

                    <option value="Televison">Televison</option>
                    <option value="Radio">Radio</option>
                    <option value="Newspaper">Newspaper</option>
                    <option value="SocialMedia">Social Media</option>
                    <option value="SearchEngine">Search Engine</option>
                    <option value="FriendFamily">
                      Referral - Friend/Family
                    </option>
                    <option value="RealEstateAgent">
                      Referral - Business Contact
                    </option>
                    <option value="FinancialAdvisor">
                      Referral - Financial Advisor
                    </option>
                    <option value="ReturnClient">Return Client</option>
                    <option value="1Other">Other</option>
                  </select>

                  <div className="mt-4">
                    <p>
                      Anything else we should know about your financial
                      situation?
                    </p>
                    <textarea
                      className="form-control "
                      id="text-area-bordr1"
                      cols="100"
                      rows="8"
                      onChange={(e) => set_financial_note(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <div class="alternate-name-wrapper mt-gutter ">
                      <label
                        for="eConsent"
                        className="custom-checkbox checkbox-top-aligned "
                      >
                        <input
                          type="checkbox"
                          id="eConsent"
                          className=" ng-untouched ng-pristine ng-valid"
                          onChange={(e) =>
                            handleChangeCheckBox(e, set_disclosures_consent)
                          }
                        />{" "}
                        &nbsp;
                        <span class="label font-sm ">
                          <span>
                            I, Hnh Tech, agree to and acknowledge receipt of
                            &nbsp;
                            <a className="text-primary">
                              Disclosures and Consent to Do Business
                              Electronically
                            </a>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div class="alternate-name-wrapper mt-gutter ">
                      <label
                        for="consent"
                        className="custom-checkbox checkbox-top-aligned "
                      >
                        <input
                          type="checkbox"
                          id="consent"
                          className=" ng-untouched ng-pristine ng-valid"
                          onChange={(e) =>
                            handleChangeCheckBox(e, set_authorization)
                          }
                        />{" "}
                        &nbsp;
                        <span class="label font-sm ">
                          <span>
                            Authorization to Order Credit and Verify Financial
                            History &nbsp;
                            <a className="text-primary">
                              Authorization to Order Credit and Verify Financial
                              History
                            </a>
                          </span>
                        </span>
                      </label>

                      <button
                        className="btn btn-primary rounded font-bold"
                        id="btn-save-con1"
                        onClick={postData}
                      >
                        Save & Continue &nbsp;
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProfileInfo />

          <div className="footerimage3">
                <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
              </div>
              
        </div>
        
      </div>
    
    </>
  );
}

export default TanReview;
