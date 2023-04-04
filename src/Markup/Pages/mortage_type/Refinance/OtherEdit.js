import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import Header from "../../../Layout/Header";
import RefSideBar from "./RefSideBar";
import { useParams, useHistory } from "react-router-dom";
import ReFooter from "./ReFooter";

const OtherEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  //   setIdFromParams(id);
  const [current, Setcurrent] = useState(0);

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

  const [other_type_income, Set_other_type_income] = useState("");
  const [amount, Setamount] = useState("");
  const [amount_type, Set_amount_type] = useState("");
  const [retirement_date, Setretirement_date] = useState("");
  const [description, Setdescription] = useState("");

  const Data = new FormData();
  Data.append("base_employment_income", 0);
  Data.append("military_employment_income", 0);
  Data.append("other_income", 1);
  Data.append("other_type_income", other_type_income);
  Data.append("amount", amount);
  Data.append("amount_type", amount_type);
  Data.append("retirement_date", retirement_date);
  Data.append("description", description);
  Data.append("application_id", Assign_id);
  Data.append("id",id)


  const getOtherIncome = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}mortgage/refinance/get/income/record/${id}`,
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
          console.log(response?.data?.message, "response?.data?.message");
          const {
            other_type_income,
            amount,
            amount_type,
            retirement_date,
            description
        } = response?.data?.data[0];
          Set_other_type_income(other_type_income)
          Setamount(amount)
          Set_amount_type(amount_type)
          Setretirement_date(retirement_date)
          Setdescription(description)

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
    getOtherIncome();
  }, []);

  const EditOtherIncome = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/add/income`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        history.push('/ref/income')
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
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
        fieldsError(error?.response?.data?.errors);
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

  function handleSelectChangeForIncomeType(event) {
    Set_other_type_income(event.target.value);
    console.log(event.target.value, "event.target.value");
  }

  function handleSelectChangeForAmount_type(event) {
    Set_amount_type(event.target.value);
    console.log(event.target.value, "event.target.value");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <div className="container-fluid">
        <div className="row">
          <RefSideBar />
          <div className="col-md-10 my-5 ps-lg-5 ">
            <div className="row">
              <div className="col-md-6">
                <h2 className="my-3 mt-4">Other Employment Income</h2>
                <form action="" className="mt-5" onSubmit={handleSubmit}>
                  <span class="h5">Select Other Income Type</span>
                  <select
                    class="form-select form-select-lg mt-1 mb-3"
                    value={other_type_income}
                    onChange={(e) => handleSelectChangeForIncomeType(e)}
                  >
                    <option value="" disabled selected>
                      Select Any Type
                    </option>
                    <option value="Alimony"> Alimony </option>

                    <option value="AutomobileAllowance">
                      Automobile Allowance{" "}
                    </option>
                    <option value="BoarderIncome"> Boarder Income</option>
                    <option value="CapitalGains"> Capital Gains</option>
                    <option value="ChildSupport"> Child Support</option>
                    <option value="Disability"> Disability</option>
                    <option value="FosterCare"> Foster Care</option>
                    <option value="HousingAllowance">
                      {" "}
                      Housing or Parsonage{" "}
                    </option>
                    <option value="DividendsInterest">
                      {" "}
                      Interest and Dividends{" "}
                    </option>
                    <option value="MortgageCreditCertificate">
                      Mortgage Credit Certificate{" "}
                    </option>
                    <option value="MortgageDifferential">
                      Mortgage Differential Payments{" "}
                    </option>
                    <option value="NotesReceivableInstallment">
                      Notes Receivable{" "}
                    </option>
                    <option value="PublicAssistance">
                      {" "}
                      Public Assistance{" "}
                    </option>
                    <option value="Pension"> Retirement </option>
                    <option value="Royalties"> Royalty Payments</option>
                    <option value="SeparateMaintenance">
                      {" "}
                      Separate Maintenance{" "}
                    </option>
                    <option value="SocialSecurity"> Social Security </option>
                    <option value="TipIncome"> Tip Income</option>
                    <option value="Trust">Trust Income </option>
                    <option value="Unemployment">
                      {" "}
                      Unemployment Benefits{" "}
                    </option>
                    <option value="VABenefitsNonEducational">
                      {" "}
                      VA Compensation{" "}
                    </option>
                    <option value="TemporaryLeave"> Temporary Leave </option>
                    <option value="MiscellaneousIncome">
                      Miscellaneous Income{" "}
                    </option>
                    <option value="Other">Other </option>
                    <option value="AccessoryUnitIincome">
                      Accessory Unit Income{" "}
                    </option>
                    <option value="DefinedContributionPlan">
                      Defined Contribution Plan{" "}
                    </option>
                    <option value="EmploymentRelatedAccount">
                      Employment Related Account{" "}
                    </option>
                    <option value="HousingChoiceVoucherProgram">
                      Housing Choice Voucher Program{" "}
                    </option>
                    <option value="NonBorrowerHouseholdIncome">
                      Non Borrower Household Income{" "}
                    </option>
                    <option value="ContractBasis"> Contract Basis</option>
                    <option value="Other" selected="">
                      Other
                    </option>
                  </select>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Amount
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="0"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={amount}
                      onChange={(e) => Setamount(e.target.value)}
                    />
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={amount_type}
                      onChange={(e) => handleSelectChangeForAmount_type(e)}
                    >
                      <option value="SELECT">Select</option>
                      <option value="ANNUALLY">ANNUALLY</option>
                      <option value="MONTHLY3">MONTHLY</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Retirement Date
                    </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Required"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={retirement_date}
                      onChange={(e) => Setretirement_date(e.target.value)}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Description
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Optional"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={description}
                      onChange={(e) => Setdescription(e.target.value)}
                    />
                  </div>
                  <div className="d-flex my-4">
                    <button
                      className="btn btn-primary mx-2 px-md-5 w-100"
                      onClick={EditOtherIncome}
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <div>
              <hr/>
              <ReFooter />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherEdit;
