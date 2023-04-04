import React from "react";

function Other() {
  return (
    <>
      <h2 className="my-3 mt-4">Other Employment Income</h2>

      <form action="" className="mt-5">
        <span className="h5">Select Other Income Type</span>
        <select className="form-select form-select-lg mt-1 mb-3 py-2">
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
          <span className="input-group-text" id="basic-addon1">
            Amount
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <select className="form-select py-2" id="inputGroupSelect02">
            <option value="2">ANNUALLY</option>
            <option value="3">MONTHLY</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Retirement Date
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Description
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex my-4">
          <button className="btn btn-primary mx-2 px-md-5 w-100">SAVE</button>
          <button className="btn btn-light mx-2 px-md-5 border w-100">
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}

export default Other;
