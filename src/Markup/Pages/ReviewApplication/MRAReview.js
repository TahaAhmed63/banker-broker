import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";
import Header from "../../Layout/Header";
import ProfileInfo from "../mortage_type/Profile/ProfileInfo";
import MortGageTable from "./MortGageTable.js";
import RealEstateTable from './RealEstateTable'
import CoBorrowerTable from './CoBorrowerTable'
import DemographicTable from "./DemographicTable";
import CreditTable from "./CreditTable";
import DeclerationTable from './DeclerationTable'
import IncomeTable from "./IncomeTable";
import PersonalTable from "./PersonalTable";
import { useParams } from "react-router-dom";
import AssetsTable from "./AssetsTable";

function MRAReview() {
  const { id } = useParams();

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

  const [mortgaeRefinanceData, setMortgaeRefinanceData] = useState({});
  const [mortgageData, setMortgageData] = useState();
  const [personal, setPersonal] = useState();
  const [coBorrower, setCoBorrower] = useState();
  const [incomeData, setIncomeData] = useState();
  const [assetsData, setAssetsData] = useState();
  const [realStateData, setRealStateData] = useState();
  const [declerationData, setDeclerationData] = useState();
  const [demographicData, setDemographicData] = useState();
  const [creditData, setCreditData] = useState();
  
  const [pers, setPers] = useState(true);
  const [mortgage, setmortgage] = useState(false);
  const [coBorrow, setCoBorrow] = useState(false);
  const [income, setIncome] = useState(false);
  const [assets, setAssets] = useState(false);
  const [realEstate, setRealEstate] = useState(false);
  const [decleration, setDecleration ]= useState(false);
  const [demographic, setDemographic] = useState(false);
  const [credit, setCredit ]= useState(false);

  const Data = new FormData();
  Data.append("Application_id", Assign_id);

  const getData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}view/completed/application/data/${id}/mra`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        if (response?.data?.status === true) {
          setLoader(false);
          console.log(response?.data?.data[0]);
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
          setMortgageData(mortgages)
          setPersonal(personal_infos)
          setCoBorrower(co_borrowers)
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

  console.log(assets, "data1234567890");

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
                          setPers(false);
                          setmortgage(true);
                          setCoBorrow(false);
                          setAssets(false);
                          setIncome(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        mortage Info
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setPers(true);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setIncome(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
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
                          setmortgage(false);
                          setCoBorrow(true);
                          setAssets(false);
                          setIncome(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        Co-Borrower
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(true);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        Income
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(false);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(true);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        Assets
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(false);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setRealEstate(true);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        Real Estate
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(false);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setRealEstate(false);
                          setDemographic(true);
                          setDecleration(false);
                          setCredit(false);
                        }}
                      >
                        Demographic
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(false);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(true);
                          setCredit(false);
                        }}
                      >
                        Decleration
                      </button>
                    </div>
                    <div className="ms-md-2">
                      <button
                        className="btn btn-outline-primary review_btn"
                        onClick={() => {
                          setIncome(false);
                          setPers(false);
                          setmortgage(false);
                          setCoBorrow(false);
                          setAssets(false);
                          setRealEstate(false);
                          setDemographic(false);
                          setDecleration(false);
                          setCredit(true);
                        }}
                      >
                        Credit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  {mortgage ? <MortGageTable mortgageData={mortgageData} /> : null} 
                  {pers ? <PersonalTable personal={personal} /> : null}
                  {coBorrow ? <CoBorrowerTable coBorrower={coBorrower} /> : null}
                  {assets ? <AssetsTable assetsData={assetsData} /> : null}
                  {income ? <IncomeTable incomeData={incomeData} /> : null}
                  {realEstate ? <RealEstateTable realStateData={realStateData} /> : null}
                  {demographic ? <DemographicTable demographicData={demographicData} /> : null}
                  {decleration ? <DeclerationTable declerationData={declerationData} /> : null} 
                  { credit ? <CreditTable creditData={creditData} /> : null} 

                </div>
              </div>
            </section>
          </div>
          <div className="col-md-1"></div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default MRAReview;
