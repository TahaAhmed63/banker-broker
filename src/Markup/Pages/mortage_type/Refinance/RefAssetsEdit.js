import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../../Layout/Header";
import Financial from "./Assets/Financial";
import Funds from "./Assets/Funds";
import NumberShares from "./Assets/NumberShares";
import RefSideBar from "./RefSideBar";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router-dom";
import ReFooter from "./ReFooter";

function RefAssetsEdit() {
  const { id } = useParams();
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [itemId, setItemId] = useState(null)
  const Assign_id = localStorage.getItem("assignId");
  const [fieldsError, setFieldsError] = useState();

  const [assetType, setAssetType] = useState("");
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
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "get",
      url: `${Baseurl.baseurl}mortgage/refinance/get/asset/record/${id}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response);
        setLoader(false);
        const { id ,asset_type, cash_or_market,financial_inst,account_number,no_of_shares } = response?.data?.data[0];
        console.log(response.data.data[0].asset_type, "response");
        console.log(response.data.data[0], "response");
        setItemId(id)
        setAssetType(asset_type);
        setcashOrMarket(cash_or_market);
        setFinalInstitute({...finalInstitute,finalInstitute:financial_inst,accountNumber:account_number,numberOfShares:no_of_shares})
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    getRefAssetsInfo();
  }, []);

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


  if (assetType === "ProceedsFromPropertySale") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }
  if (assetType === "ProceedsFromNonPropertySale") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }
  if (assetType === "SecuredBorrowedFunds") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }
  if (assetType === "UnsecuredBorrowedFunds") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }
  if (assetType === "checkingCashOnHand") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }
  if (assetType === "OtherAsset") {
    Data1.append("asset_type", assetType);
    Data1.append("cash_or_market", cashOrMarket);
  }

  if (id) {
    Data1.append("id", itemId);
  }

  const onEdit = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/add/asset`,
      data: Data1,
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
          history.push('/ref/assets')
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



  return (
    <>
    {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <RefSideBar />
          <div className="col-md-8 my-5 ps-lg-5 ">
            <div className="row">
              <div className="w-70 mt-5">
                <>
                  <h2 className="mt-4">Fill Asset detail</h2>
                  <div class="input-group mt-3">
                    <span class="input-group-label contact-info-label ">
                      Asset Type
                    </span>
                    <select
                      class="form-control"
                      value={assetType}
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
                      <option value="checkingCashOnHand"> Cash On Hand </option>
                      <option value="OtherAsset">Other Asset </option>
                    </select>
                  </div>
                  <div class="input-group mt-2">
                    <span class="input-group-label contact-info-label ">
                      Cash or Market Value
                    </span>
                    <input
                      className="form-control"
                      type="number"
                      value={cashOrMarket}
                      placeholder="Required"
                      onChange={(e) => setcashOrMarket(e.target.value)}
                    />
                  </div>

                  {assetType === "Checking" ? (
                    <>
                      <Financial setFinalInstitute={setFinalInstitute}  value = {finalInstitute} />
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
                      <Financial setFinalInstitute={setFinalInstitute}   value = {finalInstitute} />
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
                      <Funds setFinalInstitute={setFinalInstitute} value = {finalInstitute} />
                    </>
                  ) : null}

                  <div className="mt-4">
                    <button
                      className="btn btn-light text-dark w-40 border"
                      onClick={() => history.push("assets")}
                    >
                      Back
                    </button>
                    <button className="btn btn-primary w-40 ms-2" onClick={onEdit}>Edit</button>
                  </div>
                </>
              </div>
            </div>
            {/* <div>
              <hr/>
              <ReFooter />
            </div> */}
          </div>
          
        </div>
        {/* <div id="naimImages4040" style={{width:"80%", paddingTop:"15px", position:"absolute",bottom:"0px"}}><img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" alt="" /> </div> */}
      </div>
    </>
  );
}

export default RefAssetsEdit;
