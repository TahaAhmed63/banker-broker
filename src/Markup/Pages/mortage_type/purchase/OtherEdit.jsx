import React,{useState,useEffect} from 'react'
import { useParams,useHistory } from "react-router-dom";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import "./styles.css";
import Mortageside from "./Mortageside";
import ProfileInfo from "../Profile/ProfileInfo";


export default function OtherEdit() {
  const { id } = useParams();
const history = useHistory()
  const [getborrower, setGetborrower] = useState("");

  const Assign_id = localStorage.getItem("assignId");
  const [other_type_income, Set_other_type_income] = useState();
  const [amount, Setamount] = useState();
  const [amount_type, Set_amount_type] = useState();
  const [retirement_date, Setretirement_date] = useState();
  const [description, Setdescription] = useState();
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
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
  BorrowerData.append("id", id);

  const AddMilitryIncome = () => {
    alert();
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}add/income`,
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
        history.push('/heloc/tanent/income')
        setshowfirstform(false);
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
  const Get_Borrower = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}get/income/record/${id}`,
      data: BorrowerData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response?.data?.data);
        setGetborrower(response?.data?.data);
        // console.log(getborrower, getborrower[0]?.primary, "getborrower record");
        if (response?.data?.status === true) {
          Set_other_type_income(getborrower[0]?.other_type_income);
          Setamount(getborrower[0]?.amount);
          Setretirement_date(getborrower[0]?.retirement_date);
          Setdescription(getborrower[0]?.description);
          Set_amount_type(getborrower[0]?.amount_type);
          // Set_military_clothe_allowance(response?.data?.data[0]?.Set_military_clothe_allowance)

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
  useEffect(() => {
    Get_Borrower();
  }, []);

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <div className="container-fluid">
        <div className="row">
          <Mortageside />
          <div className="col-md-8">
            <div className="w-74">
              <h2 className="my-3 mt-4">Other Employment Income</h2>

              <form action="" className="mt-5" onSubmit={handleSubmit}>
                <span class="h5">Select Other Income Type</span>
                <select
                  class="form-select form-select-lg mt-1 mb-3"
                  onChange={(e) => handleSelectChangeForIncomeType(e)}
                >
                  <option value="" disabled selected>
                    Select Any Type
                  </option>
                  {getborrower[0]?.other_type_income ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.other_type_income}
                    </option>
                  ) : null}
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
                  <option value="PublicAssistance"> Public Assistance </option>
                  <option value="Pension"> Retirement </option>
                  <option value="Royalties"> Royalty Payments</option>
                  <option value="SeparateMaintenance">
                    {" "}
                    Separate Maintenance{" "}
                  </option>
                  <option value="SocialSecurity"> Social Security </option>
                  <option value="TipIncome"> Tip Income</option>
                  <option value="Trust">Trust Income </option>
                  <option value="Unemployment"> Unemployment Benefits </option>
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
                    onChange={(e) => Setamount(e.target.value)}
                    defaultValue={getborrower[0]?.amount}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => handleSelectChangeForAmount_type(e)}
                  >
                    {getborrower[0]?.amount_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.amount_type}
                      </option>
                    ) : null}
                    <option value="ANNUALLY">ANNUALLY</option>
                    <option value="MONTHLY">MONTHLY</option>
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
                    onChange={(e) => Setretirement_date(e.target.value)}
                    defaultValue={getborrower[0]?.retirement_date}
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
                    onChange={(e) => Setdescription(e.target.value)}
                    defaultValue={getborrower[0]?.description}
                  />
                </div>
                <div className="d-flex my-4">
                  <button
                    className="btn btn-primary mx-2 px-md-5 w-100"
                    onClick={AddMilitryIncome}
                  >
                    SAVE
                  </button>
                  <button className="btn btn-light mx-2 px-md-5 border w-100">
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ProfileInfo />
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
            onChange={(e)=>Setretirement_date(e.target.value)}
            defaultValue={getborrower[0]?.retirement_date
            }
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
            onChange={(e)=>Setdescription(e.target.value)}
            defaultValue={getborrower[0]?.description
            }


          />
        </div>
        <div className="d-flex my-4">
          <button className="btn btn-primary mx-2 px-md-5 w-100" onClick={AddMilitryIncome}>SAVE</button>
          <button className="btn btn-light mx-2 px-md-5 border w-100" onClick={() => history.push("/Income")}>
            CANCEL
          </button>
        </div>
        {/* </div> */}
      {/* </form> */}
        </div>
    </>
  );
}
