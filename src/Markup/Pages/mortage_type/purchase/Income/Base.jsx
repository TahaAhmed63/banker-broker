import React, { useState } from "react";
import Baseurl from "../../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Base({ setpanel }) {
  const history = useHistory();
  const Assign_id = localStorage.getItem("assignId");
  const [currentEmployee, setcurrentEmployee] = useState(false);
  // const [base_employment_income,Setbase_employment_income] = useState("")
  const [current, Setcurrent] = useState(0);
  const [employee_name, SetEmployee_name] = useState("");
  const [start_date, SetStart_date] = useState("");
  const [current_emp, Set_current_emp] = useState(0);
  const [end_date, Set_end_date] = useState("");
  const [office_address, Set_office_address] = useState("");
  const [position, Setposition] = useState("");
  const [work_phone, Set_work_phone] = useState("");
  const [ext, Set_ext] = useState("");
  const [base_type, Setbase_type] = useState("");
  const [base, Set_base] = useState("");
  const [employed_family_member, Setemployed_family_member] = useState(0);
  const [bonus_type, Set_bonus_type] = useState("");
  const [commission_type, Set_commission_type] = useState("");
  const [overtime_type, Set_overtime_type] = useState("");
  const [other_type, Set_other_type] = useState("");
  const [bonus, Setbonus] = useState("");
  const [commission, Setcommission] = useState("");
  const [overtime, Set_overtime] = useState("");
  const [other, Set_other] = useState("");
  const [self_employed, Setself_employed] = useState(0);
  const [co_Borrower, setCo_Borrower] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
  const [bund, setBund] = useState("");
  const [primary, Setprimary] = useState(0);
  const [foreign_income, Set_foreign_income] = useState(0);
  const [month_profession, Set_month_profession] = useState(0);
  const [ownership_share, Set_ownership_share] = useState(0);
  const [seasonal_income, Set_seasonal_income] = useState(0);
  const [year_profession, Set_year_profession] = useState(0);
  console.log(month_profession, "Set_month_profession");

  // const [income,Setincome] = usestate()

  const BorrowerData = new FormData();
  BorrowerData.append("base_employment_income", 1);
  BorrowerData.append("military_employment_income", 0);
  BorrowerData.append("other_income", 0);
  BorrowerData.append("application_id", Assign_id);
  BorrowerData.append("current", current);
  BorrowerData.append("employee_name", employee_name);
  BorrowerData.append("start_date", start_date);
  BorrowerData.append("current_emp", current_emp);
  BorrowerData.append("self_employed", self_employed);
  BorrowerData.append("end_date", end_date);
  BorrowerData.append("office_address", office_address);
  BorrowerData.append("position", position);
  BorrowerData.append("work_phone", work_phone);
  BorrowerData.append("ext", ext);
  BorrowerData.append("base_type", base_type);
  BorrowerData.append("base", base);
  BorrowerData.append("employed_family_member", employed_family_member);
  BorrowerData.append("bonus_type", bonus_type);
  BorrowerData.append("commission_type", commission_type);
  BorrowerData.append("overtime_type", overtime_type);
  BorrowerData.append("other_type", other_type);
  BorrowerData.append("bonus", bonus);
  BorrowerData.append("commission", commission);
  BorrowerData.append("employed_family_member", employed_family_member);
  BorrowerData.append("overtime", overtime);
  BorrowerData.append("other", other);
  BorrowerData.append("primary", primary);
  BorrowerData.append("foreign_income", foreign_income);
  BorrowerData.append("month_profession", month_profession);
  BorrowerData.append("ownership_share", ownership_share);
  BorrowerData.append("seasonal_income", seasonal_income);
  BorrowerData.append("year_profession", year_profession);

  console.log(employee_name, "employee_name");

  const AddBaseIncome = () => {
    setLoader(true);
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
          // history.push("/assets");
          setLoader(false);
          setpanel("")
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
  function handleSelectChange(event) {
    Setbase_type(event.target.value);
    console.log(event.target.value, "event.target.value");
  }
  function handleSelectChangeForBonus(event) {
    Set_bonus_type(event.target.value);
    console.log(event.target.value, "event.target.value");
  }
  function handleSelectChangeForCommision(event) {
    Set_commission_type(event.target.value);
    console.log(event.target.value, "event.target.value");
  }
  function handleSelectChangeForOwnership_share(event) {
    Set_ownership_share(event.target.value);
    console.log(event.target.value, "event.target.value");
  }
  function handleSelectChangeForOverTime(event) {
    Set_overtime_type(event.target.value);
    console.log(event.target.value, "event.target.value");
  }
  function handleSelectChangeForOther(event) {
    Set_other_type(event.target.value);
    console.log(event.target.value, "event.target.value other");
  }
  function handleSelectChangeForSeasonal_income(event) {
    {
      event.target.checked ? Set_seasonal_income(1) : Set_seasonal_income(0);
    }
  }
  console.log(foreign_income, "foreign_income(");
  function handleSelectChangeForForiegnIncome(event) {
    {
      event.target.checked ? Set_foreign_income(1) : Set_foreign_income(0);
    }
    console.log(event.target.value, "event.target.value");
  }
  console.log(current_emp, "current_emp if");
  const handleChange = (event) => {
    if (event.target.checked) {
      Set_current_emp(1);
    } else {
      Set_current_emp(0);
    }
  };
  const handleChange1 = (event) => {
    if (event.target.checked) {
      Setcurrent(1);
    } else {
      Setcurrent(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange2 = (event) => {
    if (event.target.checked) {
      Setself_employed(1);
    } else {
      Setself_employed(0);
    }
  };
  const handleChangeforEmployFamily = (event) => {
    if (event.target.checked) {
      Setemployed_family_member(1);
    } else {
      Setemployed_family_member(0);
    }
  };
  const handleChange0 = (event) => {
    if (event.target.checked) {
      Setprimary(1);
    } else {
      Setprimary(0);
    }
  };

  console.log(base_type, "base_type");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onCancel = () => {
    setpanel("")
    
  }

  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <div className="row">
        <div className="col-md-8">
        <h4 className="mt-4 text-black">Base Employment Income</h4>
      <div className="d-flex">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-label"
            onChange={handleChange1}
          />
          &nbsp; Current
          {/* </label> */}
        </div>
        {current == 1 ? (
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-label"
              onChange={handleChange0}
              checked
            />
            &nbsp; Primary
            {/* </label> */}
          </div>
        ) : null}

        <div class="form-check ms-3 ms-md-5">
          <input
            type="checkbox"
            class="form-check-label"
            onChange={handleChange2}
          />
          &nbsp; Self Employed
          {/* </label> */}
        </div>
      </div>

      <h6 className="mt-5 mb-3">EMPLOYMENT DETAILS</h6>

      <form action="" onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <span style={{fontWeight:"600"}} class="input-group-text fontSW27 htx404" id="basic-addon1">
            Employer Name
          </span>
          <input
            type="text"
            class="form-control rounded-0 fontSW28 "
            placeholder="Required"
            aria-label="Username"
            aria-describedby=""
            onChange={(e) => SetEmployee_name(e.target.value)}
          />
         <span style={{fontWeight:"600"}} class="input-group-text rounded-0 fontSW27 htx404" id="basic-addon1">
            +
         </span>
        </div>
          {bund?.employee_name
            ? bund?.employee_name.map((e) => <p className="text-danger">{e}</p>)
            : null}
        <div class="input-group mb-3">
          <span style={{fontWeight:"600", maxWidth:"25%"}} class="input-group-text ps-3 fontSW27" id="basic-addon1">
            Start Date
          </span>
          <input
          style={{fontSize:"14px", fontWeight:"600"}}
            type="date"
            class="form-control rounded-0 fontSW28 "
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => SetStart_date(e.target.value)}
          />
        </div>
          {bund?.start_date
            ? bund?.start_date.map((e) => <p className="text-danger">{e}</p>)
            : null}
        <div class="form-check my-2">
          <input
            type="checkbox"
            class="form-check-label"
            onChange={handleChange}
          />&nbsp;
          Current Employee?
          {/* </label> */}
        </div>
        {current == 1 ? (
          <div>
          <div class="input-group mb-3 ">
            <span style={{fontWeight:"600", maxWidth:"25%"}}  className="input-group-text fontSW27" id="basic-addon1">
            Year in Profession
            </span>
            <input
              type="number"
              class="form-control rounded-0 fontSW28"
              placeholder="Required"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_year_profession(e.target.value)}
            />
            </div>
            {bund?.year_profession
            ? bund?.year_profession.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
            <div class="input-group mb-3">
              <span style={{fontWeight:"600", maxWidth:"25%"}}  className="input-group-text fontSW27" id="basic-addon1">
              Month in Profession
            </span>
              <input
                type="number"
                class="form-control rounded-0 input26clr"
                placeholder="Required"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => Set_month_profession(e.target.value)}
              />
            </div>
               {bund?.month_profession
            ? bund?.month_profession.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          </div>
        ) : (
          <div class="input-group mb-3">
            <span style={{fontWeight:"600", maxWidth:"25%"}}  className="input-group-text fontSW27" id="basic-addon1">
              End Date
            </span>
            <input
              type="date"
              style={{fontWeight:"600"}}
              class="form-control rounded-0 fontSW28"
              placeholder="Required"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_end_date(e.target.value)}
            />
          </div>
        )}
        <div class="input-group mb-3">
          <span style={{fontWeight:"600", maxWidth:"25%"}} class="input-group-text fontSW27" id="basic-addon1">
            Office Address
          </span>
          <input
            type="text"
            class="form-control fontSW28 rounded-0 input26clr"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_office_address(e.target.value)}
          />
        </div>
          {bund?.office_address
            ? bund?.office_address.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
        <div class="input-group mb-3">
          <span style={{fontWeight:"600", maxWidth:"25%"}} class="input-group-text fontSW27" id="basic-addon1">
            Position
          </span>
          <input
            type="text"
            class="form-control fontSW28 rounded-0 input26clr"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Setposition(e.target.value)}
          />
        </div>
          {bund?.position
            ? bund?.position.map((e) => <p className="text-danger">{e}</p>)
            : null}
        <div class="input-group mb-3">
          <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
            Work Phone
          </span>
          <input
            type="number"
            class="form-control fontSW28 rounded-0 input26clr"
            placeholder="(xxx) xxx-xxxx"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_work_phone(e.target.value)}
          />
          

          <input
            type="number"
            class="form-control rounded-0 input26clr"
            placeholder="Ext."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_ext(e.target.value)}
          />
          
        </div>
        <div className="d-flex justify-content-between align-items-center">
        {bund?.work_phone
            ? bund?.work_phone.map((e) => <p className="text-danger">{e}</p>)
            : null}

            {bund?.ext
            ? bund?.ext.map((e) => <p className="text-danger">{e}</p>)
            : null}
        </div>

        <h6 className="mt-5 mb-3">INCOME DETAILS</h6>

        <div class="input-group mb-3">
          <span class="input-group-text fw-bold fontSW27" id="basic-addon1">
            Base
          </span>
          <input
            type="number"
            class="form-control fontSW28  rounded-0 fw-bold fontSW28"
            placeholder="Amount Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_base(e.target.value)}
          />
          <select
            class="form-select fw-bold rounded-0 fontSW28"
            id="inputGroupSelect02"
            value={base_type}
            onChange={(e) => handleSelectChange(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>
          {bund?.base
            ? bund?.base.map((e) => <p className="text-danger">{e}</p>)
            : null}
        {self_employed == 1 ? (
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Overnership Share
            </span>
            <select
              class="form-select rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForOwnership_share(e)}
            >
              <option value="25% OR MORE">25% OR MORE</option>
              <option value="MONTHLY">LESS THAN 25%</option>
            </select>
          </div>
        ) : null}
        <div class="input-group mb-3">
          <span class="input-group-text fw-bold fontSW27" id="basic-addon1">
            Bonus
          </span>
          <input
            type="number"
            class="form-control rounded-0 fw-bold fontSW28"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Setbonus(e.target.value)}
          />
          {bund?.bonus
            ? bund?.bonus.map((e) => <p className="text-danger">{e}</p>)
            : null}

          <select
            class="form-select rounded-0 fw-bold fontSW28"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForBonus(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text fw-bold fontSW27" id="basic-addon1">
            Commissions
          </span>
          <input
            type="number"
            class="form-control rounded-0 fw-bold fontSW28"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Setcommission(e.target.value)}
          />
          {bund?.commission
            ? bund?.commission.map((e) => <p className="text-danger">{e}</p>)
            : null}

          <select
            class="form-select rounded-0 fw-bold fontSW28"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForCommision(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text fw-bold fontSW27" id="basic-addon1">
            Overtime
          </span>
          <input
            type="number"
            class="form-control rounded-0 fw-bold fontSW28"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_overtime(e.target.value)}
          />
          {bund?.overtime
            ? bund?.overtime.map((e) => <p className="text-danger">{e}</p>)
            : null}

          <select
            class="form-select rounded-0 fw-bold fontSW28"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForOverTime(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text fw-bold fontSW27" id="basic-addon1">
            Other
          </span>
          <input
            type="number"
            class="form-control rounded-0 fw-bold fontSW28"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_other(e.target.value)}
          />
          {bund?.other
            ? bund?.other.map((e) => <p className="text-danger">{e}</p>)
            : null}

          <select
            class="form-select rounded-0 fw-bold fontSW28"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForOther(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        {current == 1 ? (
          <div class="d-flex mt-4">
           <div className="d-flex form-check">
           <input
              type="checkbox"
              class="form-check-label me-1"
              onChange={handleSelectChangeForSeasonal_income}
              checked
            />
            Seasonal Income
           </div>
           <div className="d-flex form-check me-1">
           <input
              type="checkbox"
              class="form-check-label"
              onChange={handleSelectChangeForForiegnIncome}
              checked
            />
            Foreign Income
           </div>
          </div>
        ) : null}
        <div class="form-check d-flex mt-4">
          <input
            type="checkbox"
            class="form-check-label me-1"
            onChange={handleChangeforEmployFamily}
          />&nbsp;
          Employed by a family member, property seller, real estate agent, etc.
        </div>

        <div className="d-flex my-4">
          <button
            className="btn btn-link bg-primary text-light px-3 py-2 btnx404 rounded-0 me-2"
            onClick={() => AddBaseIncome()}
          >
            SAVE
          </button>
          <button className="btn btn-link px-3 py-2 btnx404 rounded-0" onClick={onCancel}>
            CLOSE
          </button>
        </div>
      </form>
        </div>
      </div>
      
    </>
  );
}

export default Base;
