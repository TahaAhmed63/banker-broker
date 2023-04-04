import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";
import Header from "../../Layout/Header";
import ProfileInfo from "../mortage_type/Profile/ProfileInfo";
import AdditionalTable from "./AdditionalTable";
import BackgroundTable from "./BackgroundTable";
import Co_SignerTable from "./Co_SignerTable";
import DocumentTable from "./DocumentTable";
import PersonalTable from "./PersonalTable";
import IncomeTable from "./IncomeTable";

import { useParams } from "react-router-dom";
import Demographic from "../mortage_type/purchase/Demographic";
import DemographicTable from "./DemographicTable";

function MTAReview() {
  const { id } = useParams();
  console.log(id, "id and type");

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

  const [personal, setPersonal] = useState();
  const [additionalData, setAdditionalData] = useState(); 
  const [coSignerData, setCoSignerData] = useState();
  const [incomeData, setIncomeData] = useState();
  const [backgroundData, setBackgroundData] = useState();
  const [demographicData, setDemographicData] = useState();
  const [documentData, setDocumentData] = useState();

  const [pers, setPers] = useState(false);
  const [additional, setAdditional] = useState(false);
  const [cosiginer, setCosiginer] = useState(false);
  const [income, setIncome] = useState(false);
  const [background, setBackground] = useState(false);
  const [demogrphic, setDemogrphic] = useState(false);
  const [document, setDocument] = useState(false);

  const Data = new FormData();
  Data.append("Application_id", Assign_id);

  const getData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}view/completed/application/data/${id}/new`,
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
          setLoader(false);
          console.log(response?.data?.data);
          const {
            personal_infos,
            additional_info,
            co_signers,
            incomes,
            background,
            demographics,
            document,
          } = response?.data?.data[0];
          setPersonal(personal_infos)
          setAdditionalData(additional_info)
          setCoSignerData(co_signers)
          setIncomeData(incomes)
          setBackgroundData(background)
          setDemographicData(demographics)
          setDocumentData(document)

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
        console.log(error);
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid ps-5">
        <div className="row">
          <div className="col-md-9 my-5 ps-lg-5 ">
            <section>
              <div className="container custom_card pt-2 pb-5">
                <div className="row">
                  <h4>Review Application</h4>
                  <div className="col d-flex flex-wrap mt-2">
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(true);
                          setAdditional(false);
                          setCosiginer(false);
                          setIncome(false);
                          setBackground(false);
                          setDemogrphic(false);
                          setDocument(false);
                        }}
                      >
                        Personal Info
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(true);
                          setCosiginer(false);
                          setIncome(false);
                          setBackground(false);
                          setDemogrphic(false);
                          setDocument(false);
                        }}
                      >
                        Additional Info
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(false);
                          setCosiginer(true);
                          setIncome(false);
                          setBackground(false);
                          setDemogrphic(false);
                          setDocument(false);
                        }}
                      >
                        Co-Signers
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(false);
                          setCosiginer(false);
                          setIncome(true);
                          setBackground(false);
                          setDemogrphic(false);
                          setDocument(false);
                        }}
                      >
                        Income
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(false);
                          setCosiginer(false);
                          setIncome(false);
                          setBackground(true);
                          setDemogrphic(false);
                          setDocument(false);
                        }}
                      >
                        Background
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(false);
                          setCosiginer(false);
                          setIncome(false);
                          setBackground(false);
                          setDemogrphic(true);
                          setDocument(false);
                        }}
                      >
                        Dempgrphic
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(false);
                          setAdditional(false);
                          setCosiginer(false);
                          setIncome(false);
                          setBackground(false);
                          setDemogrphic(false);
                          setDocument(true);
                        }}
                      >
                        Document
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  {pers ? <PersonalTable personal={personal} /> : null}
                  {additional ? <AdditionalTable additionalData={additionalData} /> : null}
                  {cosiginer ? <Co_SignerTable coSignerData={coSignerData} /> : null}
                  {income ? <IncomeTable incomeData={incomeData} /> : null}
                  {background ? <BackgroundTable backgroundData={backgroundData} /> : null}
                  {demogrphic ? <DemographicTable demographicData={demographicData}  /> : null}
                  {document ? <DocumentTable documentData={documentData} /> : null}
                </div>
              </div>
            </section>

            <div></div>
          </div>
          <div className="col-md-1"></div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default MTAReview;
