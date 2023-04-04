import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Baseurl from "../../../../../Baseurl";
import Footerx404 from "../../../../../Images/Footerx404.png";


function Other({ setpanel, getIncome }) {
  const history = useHistory();

  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

  const Assign_id = localStorage.getItem("assignId");

  const [other_type_income, Set_other_type_income] = useState();
  const [amount, Setamount] = useState();
  const [amount_type, Set_amount_type] = useState();
  const [retirement_date, Setretirement_date] = useState();
  const [description, Setdescription] = useState();

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

  const AddOtherIncome = () => {
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

        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          setLoader(false);
          setpanel("");
          getIncome();
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
          setpanel("");
          getIncome();
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
  const onCancel = () => {
    setpanel("")
    getIncome()
  }


  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <div className="w-74 maiN404">
    

        <span class="h5">Select Other Income Type</span>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <select class="form-select form-select-lg mt-1 mb-5 rounded-0" onChange={(e)=>handleSelectChangeForIncomeType(e)}>
          <option value="" disabled selected>
            Select Any Type
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
          <span className="input-group-text rounded-0 w-25" id="basic-addon1">
            Amount
          </span>
          <input
            type="number"
            className="form-control rounded-0 bg-white text-dark"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e)=>Setamount(e.target.value)}
          />
          <select class="form-select rounded-0" id="inputGroupSelect02" onChange={(e)=>handleSelectChangeForAmount_type(e)}>
            <option value="SELECT">ANNUALLY</option>
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY3">MONTHLY</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <span style={{width:"30%"}} className="input-group-text rounded-0" id="basic-addon1">
            Retirement Date
          </span>
          <input
          style={{width:"35%"}}
            type="date"
            className="form-control rounded-0 bg-white text-dark"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e)=>Setretirement_date(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text rounded-0 w-25" id="basic-addon1">
            Description
          </span>
          <input
          style={{width:"35%"}}
            type="text"
            className="form-control rounded-0 bg-white text-dark"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e)=>Setdescription(e.target.value)}
          />
        </div>
        <div className="d-flex my-4 w-50">
          <button className="btn btn-primary mx-2 px-md-3 w-100 rounded-0" onClick={AddOtherIncome}>SAVE</button>
          <button className="btn btn-light mx-2 px-md-3 border w-100 rounded-0 bg-white text-dark" onClick={onCancel}>
            CANCEL
          </button>
        </div>
      </form>
      </div>
      {/* <div className="naimImages" style={{width:"80%", paddingTop:"15px",bottom:"0px"}}><img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" alt="" /> </div> */}
      <div className="Otherx4020" style={{marginTop:"34px"}}>
              <hr/>
              <img src={Footerx404} alt="" width="100%" height="50%" />
            </div>
    </>
  );
}

export default Other;
