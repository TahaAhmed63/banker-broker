import React, { useState } from "react";
import Baseurl from "../../../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Other({ setpanel }) {
  const history = useHistory();
  const Assign_id = localStorage.getItem("assignId");
  const [other_type_income, Set_other_type_income] = useState();
  const [amount, Setamount] = useState();
  const [amount_type, Set_amount_type] = useState();
  const [retirement_date, Setretirement_date] = useState();
  const [description, Setdescription] = useState();
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
  const [getborrower, setGetborrower] = useState("");

  const [bund, setBund] = useState("");

  const BorrowerData = new FormData();
  BorrowerData.append("base_employment_income", 0);
  BorrowerData.append("military_employment_income", 0);
  BorrowerData.append("other_income", 1);
  BorrowerData.append("other_type_income", other_type_income);
  BorrowerData.append("amount", amount);
  BorrowerData.append("amount_type", amount_type);
  BorrowerData.append("retirement_date", retirement_date);
  BorrowerData.append("description", description);
  BorrowerData.append("application_id", Assign_id);
  const AddMilitryIncome = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/add/income`,
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
          setLoader(false);
          setshowfirstform(false);
          setpanel("")


          history.push("/heloc/tanent/income");

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
          setpanel("")
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
  function handleSelectChangeForIncomeType(event) {
    Set_other_type_income(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForAmount_type(event) {
    Set_amount_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onCancel = () => {
    setpanel("");
  };

  return (
    <>
    {loader ? <div className="loader"></div> : null}

<h2 className="my-3 mt-4">Other Employment Income</h2>

<form action="" className="mt-5" onSubmit={handleSubmit}>
  <span class="h5">Select Other Income Type</span>
  <select class="form-select form-select-lg mt-1 mb-3 select-wd6" onChange={(e)=>handleSelectChangeForIncomeType(e)}>
    <option value="" disabled selected>
    Alimony 
    </option>
    <option value="Alimony"> Alimony </option>

    <option value="AutomobileAllowance">Automobile Allowance </option>
    <option value="BoarderIncome"> Boarder Income</option>
    <option value="CapitalGains"> Capital Gains</option>
    <option value="ChildSupport"> Child Support</option>
    <option value="Disability"> Disability</option>
    <option value="FosterCare"> Foster Care</option>
    <option value="HousingAllowance"> Housing or Parsonage </option>
    <option value="DividendsInterest"> Interest and Dividends </option>
    <option value="MortgageCreditCertificate">
      Mortgage Credit Certificate{" "}
    </option>
    <option value="MortgageDifferential">
      Mortgage Differential Payments{" "}
    </option>
    <option value="NotesReceivableInstallment">Notes Receivable </option>
    <option value="PublicAssistance"> Public Assistance </option>
    <option value="Pension"> Retirement </option>
    <option value="Royalties"> Royalty Payments</option>
    <option value="SeparateMaintenance"> Separate Maintenance </option>
    <option value="SocialSecurity"> Social Security </option>
    <option value="TipIncome"> Tip Income</option>
    <option value="Trust">Trust Income </option>
    <option value="Unemployment"> Unemployment Benefits </option>
    <option value="VABenefitsNonEducational"> VA Compensation </option>
    <option value="TemporaryLeave"> Temporary Leave </option>
    <option value="MiscellaneousIncome">Miscellaneous Income </option>
    <option value="Other">Other </option>
    <option value="AccessoryUnitIincome">Accessory Unit Income </option>
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
  <div className="input-group mb-3">
    <span className="input-group-text amount-wd5" id="basic-addon1">
      Amount
    </span>
    <input
      type="number"
      className="form-control amount-wd0 date-colr8"
      placeholder="0"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>Setamount(e.target.value)}

    />
    <select class="form-select monthly-wd4" id="inputGroupSelect02" onChange={(e)=>handleSelectChangeForAmount_type(e)}>
      <option value="ANNUALLY">ANNUALLY</option>
      <option value="MONTHLY">MONTHLY</option>
    </select>
  </div>
  {bund?.amount_type
        ? bund?.amount_type.map((e) => (
            <p className="text-danger">{e}</p>
          ))
        : null}
  <div className="input-group mb-3 ">
    <span className="input-group-text retirement-wd5" id="basic-addon1">
      Retirement Date
    </span>
    <input
      type="date"
      className="form-control date-wd7 date-colr8"
      placeholder="Required"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>Setretirement_date(e.target.value)}
    />
  </div>
  <div className="input-group mb-3 ">
    <span className="input-group-text retirement-wd5" id="basic-addon1">
      Description
    </span>
    <input
      type="text"
      className="form-control date-wd7 optional-hv3"
      placeholder="Optional"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>Setdescription(e.target.value)}

    />
  </div>
  <div className="d-flex my-4">
    <button className="btn btn-primary mx-2 w-100 save-wd4" onClick={AddMilitryIncome}>SAVE</button>
    <button className="btn btn-light mx-2 border w-100 close-wd4" onClick={onCancel}>
      CANCEL
    </button>
  </div>
</form>
</>
  );
}

export default Other;
