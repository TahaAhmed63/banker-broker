import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";
import Header from "../../Layout/Header";
import ProfileInfo from "../mortage_type/Profile/ProfileInfo";
import PMortGageTable from "./mortgagePurchaseTables/PMortGageTabl.js"
import PPersonalTable from "./mortgagePurchaseTables/PPersonalTable.js"
import PCoBorrowerTable from "./mortgagePurchaseTables/PCoBorrowerTable.js"
import PIncomeTable from "./mortgagePurchaseTables/PIncomeTable.js"
import PAssetsTable from "./mortgagePurchaseTables/PAssetsTable.js"
import PRealEstateTable from "./mortgagePurchaseTables/PRealEstateTable.js"
import PDeclerationTable from "./mortgagePurchaseTables/PDeclerationTable.js"
import PDemographicTable from "./mortgagePurchaseTables/PDemographicTable.js"
import PCreditTable from "./mortgagePurchaseTables/PCreditTable.js"

import { useParams } from "react-router-dom";

function MRPReview() {
  const { id } = useParams();
  // console.log(id, "id and type");

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();


  const [mortgageData, setMortgageData] = useState();
  const [personal, setPersonal] = useState();
  const [coBorrowerData, setCoBorrowerData] = useState();
  const [incomeData, setIncomeData] = useState();
  const [assetsData, setAssetsData] = useState();
  const [realStateData, setRealStateData] = useState();
  const [declerationData, setDeclerationData] = useState();
  const [demographicData, setDemographicData] = useState();
  const [creditData, setCreditData] = useState();

  const [mortgage, setMortgage] = useState(true);
  const [pers, setPers] = useState(false);
  const [coBorrower, setCoBorrower] = useState(false);
  const [income, setIncome] = useState(false);
  const [assets, setAssets] = useState(false);
  const [realState, setRealState] = useState(false);
  const [decleration, setDecleration] = useState(false);
  const [demographic, setDemographic] = useState(false);
  const [credit, setcredit] = useState(false);


  const Data = new FormData();
  Data.append("Application_id", Assign_id);

  const getData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}view/completed/application/data/${id}/mpa`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(response);
        if (response?.data?.status === true) {
          setLoader(false);
          // console.log(response?.data?.data[0]);
          const {
            mortgages,
            personal_infos,
            co_borrowers,
            incomes,
            assets,
            real_estates,
            declarations,
            demographics,
            credits,
          } = response?.data?.data[0];
          console.log(co_borrowers)
          setMortgageData(mortgages)
          setPersonal(personal_infos)
          setCoBorrowerData(co_borrowers)
          setIncomeData(incomes)
          setAssetsData(assets)
          setRealStateData(real_estates)
          setDeclerationData(declarations)
          setDemographicData(demographics)
          setCreditData(credits)


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
// console.log(mortgageData)

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
                          setMortgage(true);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Mortgage
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(true);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Personal Info
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(true)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Co-Borrower
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(true)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Income
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(true)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Assets
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(true)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Real Estate
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(true);
                          setDemographic(false);
                          setcredit(false);
                        }}
                      >
                        Decleration
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(true);
                          setcredit(false);
                        }}
                      >
                        Demographic
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setMortgage(false);
                          setPers(false);
                          setCoBorrower(false)
                          setIncome(false)
                          setAssets(false)
                          setRealState(false)
                          setDecleration(false);
                          setDemographic(false);
                          setcredit(true);
                        }}
                      >
                        Credit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  {mortgage ? <PMortGageTable mortgageData={mortgageData} /> : null}
                  {pers ? <PPersonalTable personal={personal} /> : null}
                  {coBorrower ? <PCoBorrowerTable coBorrowerData={coBorrowerData} /> : null}
                  {income ? <PIncomeTable incomeData={incomeData} /> : null}
                  {assets ? <PAssetsTable assetsData={assetsData} /> : null}
                  {realState ? <PRealEstateTable realStateData={realStateData} /> : null}
                  {decleration ? <PDeclerationTable declerationData={declerationData} /> : null}
                  {demographic ? <PDemographicTable demographicData={demographicData} /> : null}
                  {credit ? <PCreditTable creditData={creditData} /> : null}
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

export default MRPReview;

