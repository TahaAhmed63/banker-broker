import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../../../Layout/Header";
import Mortageside from "./Mortageside";
import ProfileInfo from "../Profile/ProfileInfo";

export default function BaseEdit() {
  const history = useHistory();
  const Assign_id = localStorage.getItem("assignId");
  const { id } = useParams();
  const [getborrower, setGetborrower] = useState("");

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
  BorrowerData.append("id", id);

  console.log(employee_name, "employee_name");

  const AddBaseIncome = () => {
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
          history.push("/Income");
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
          SetEmployee_name(response?.data?.data[0].employee_name);
          SetStart_date(response?.data?.data[0].start_date);
          Set_current_emp(response?.data?.data[0].current_emp);
          Set_end_date(response?.data?.data[0].end_date);
          Set_office_address(response?.data?.data[0].office_address);
          Setposition(response?.data?.data[0].position);
          Set_work_phone(response?.data?.data[0].work_phone);
          Set_ext(response?.data?.data[0].ext);
          Setbase_type(response?.data?.data[0].base_type);
          Set_base(response?.data?.data[0].base);
          Setemployed_family_member(
            response?.data?.data[0].employed_family_member
          );
          Set_bonus_type(response?.data?.data[0].bonus_type);
          Set_commission_type(response?.data?.data[0].commission_type);
          Set_overtime_type(response?.data?.data[0].overtime_type);
          Set_other_type(response?.data?.data[0].other_type);
          Setbonus(response?.data?.data[0].bonus);
          Setcommission(response?.data?.data[0].commission);
          Set_overtime(response?.data?.data[0].overtime);
          Set_other(response?.data?.data[0].other);
          Setcommission(response?.data?.data[0].commission);
          Set_overtime(response?.data?.data[0].overtime);
          Set_other(response?.data?.data[0].other);
          Setcommission(response?.data?.data[0].commission);
          Set_overtime(response?.data?.data[0].overtime);
          Setcurrent(response?.data?.data[0].current);
          Set_month_profession(response?.data?.data[0].month_profession);

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
        console.log(error?.response?.data, "error?.response?.data?.errors");
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
  function handleSelectChange(event) {
    Setbase_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForBonus(event) {
    Set_bonus_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForCommision(event) {
    Set_commission_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForOwnership_share(event) {
    Set_ownership_share(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForOverTime(event) {
    Set_overtime_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForOther(event) {
    Set_other_type(event.target.value);
    console.log(event.target.value, "event.target.value other");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForSeasonal_income(event) {
    {
      event.target.checked ? Set_seasonal_income(1) : Set_seasonal_income(0);
    }
    // Set_seasonal_income(event.target.value);
    // console.log(event.target.value, "event.target.value")
    // geyEpisodeBySeason(event.target.value)
  }
  console.log(foreign_income, "foreign_income(");
  function handleSelectChangeForForiegnIncome(event) {
    {
      foreign_income == 1 ? Set_foreign_income(0) : Set_foreign_income(1);
    }
    // Set_foreign_income(event.tar/get.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  console.log(current_emp, "current_emp if");
  const handleChange = (event) => {
    if (current_emp == 1) {
      Set_current_emp(0);
    } else {
      Set_current_emp(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange1 = (event) => {
    if (current == 1) {
      Setcurrent(0);
    } else {
      Setcurrent(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange2 = (event) => {
    if (event.target.checked) {
      Setself_employed(1);
    } else {
      Setself_employed(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  // const handleChange3 = event => {
  //   if (event.target.checked) {

  //     Setself_employed(1)
  //   } else {
  //     Setself_employed(0)
  //     // console.log(current_emp,"current_emp else")

  //   }
  //   // setIsSubscribed(current => !current);
  // };
  const handleChangeforEmployFamily = (event) => {
    if (employed_family_member == 1) {
      Setemployed_family_member(0);
    } else {
      Setemployed_family_member(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange0 = (event) => {
    if (event.target.checked) {
      Setprimary(1);
    } else {
      Setprimary(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };

  console.log(bonus, "bonus");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Mortageside/>
          <div className="col-md-8">
            <div className="w-74">
            <h2 className="mt-4">Base Employment Income</h2>
            <div className="d-flex">
              <div class="form-check">
                {/* <input class="form-check-input" type="checkbox" value="" id="current" /> */}
                {/* <label class="form-check-label" for="current"> */}
                <input
                  type="checkbox"
                  class="form-check-label"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                  checked={current == 1}
                  onChange={handleChange1}
                />&nbsp;
                Current
                {/* </label> */}
              </div>
              {current == 1 ? (
                <div class="form-check">
                  {/* <input class="form-check-input" type="checkbox" value="" id="current" /> */}
                  {/* <label class="form-check-label" for="current"> */}
                  <input
                    type="checkbox"
                    class="form-check-label"
                    // id="topping"
                    // name="topping"
                    // value="Paneer"
                    // checked={isChecked}
                    onChange={handleChange0}
                    checked
                  />&nbsp;
                  Primary
                  {/* </label> */}
                </div>
              ) : null}

              <div class="form-check ms-3 ms-md-5">
                {/* <input class="form-check-input" type="checkbox" value="" id="primary" /> */}
                {/* <label class="form-check-label" for="primary"> */}
                <input
                  type="checkbox"
                  class="form-check-label"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                  // checked={isChecked}
                  onChange={handleChange2}
                />&nbsp;
                Self Employed
                {/* </label> */}
              </div>
            </div>
            <h6 className="mt-5 mb-3">EMPLOYMENT DETAILS</h6>
            <form action="" onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Employer Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={getborrower[0]?.employee_name}
                  placeholder="Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => SetEmployee_name(e.target.value)}
                />
               
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Start Date
                </span>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Required"
                  defaultValue={getborrower[0]?.start_date}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => SetStart_date(e.target.value)}
                />
              </div>
              <div class="form-check my-2">
                {/* <input class="form-check-input" type="checkbox" value="" id="CurrentEmployee" onChange={(e)=>Set_current_emp(e.target.value)} /> */}
                {/* <label class="form-check-label" for="CurrentEmployee"> */}
                <input
                  type="checkbox"
                  class="form-check-label"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                  checked={current_emp == 1}
                  onChange={handleChange}
                />&nbsp;
                Current Employee?
                {/* </label> */}
              </div>
              {current == 1 ? (
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Year in Profession
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    defaultValue={getborrower[0]?.year_profession}
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => Set_year_profession(e.target.value)}
                  />
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Month in Profession
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      defaultValue={getborrower[0]?.month_profession}
                      placeholder="Required"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => Set_month_profession(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    End Date
                  </span>
                  <input
                    type="date"
                    class="form-control"
                    defaultValue={getborrower[0]?.end_date}
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => Set_end_date(e.target.value)}
                  />
                </div>
              )}
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Office Address
                </span>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={getborrower[0]?.office_address}
                  placeholder="Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_office_address(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Position
                </span>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={getborrower[0]?.position}
                  placeholder="Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Setposition(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Work Phone
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.work_phone}
                  placeholder="(xxx) xxx-xxxx"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_work_phone(e.target.value)}
                />
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.ext}
                  placeholder="Ext."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_ext(e.target.value)}
                />
              </div>

              <h6 className="mt-5 mb-3">INCOME DETAILS</h6>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Base
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.base}
                  placeholder="Amount Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_base(e.target.value)}
                />
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => handleSelectChange(e)}
                >
                  {getborrower[0]?.military_base_type ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.military_base_type}
                    </option>
                  ) : null}

                  <option value="ANNUALLY">ANNUALLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>
              {self_employed == 1 ? (
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Overnership Share
                  </span>
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => handleSelectChangeForOwnership_share(e)}
                  >
                    {getborrower[0]?.ownership_share ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.ownership_share}
                      </option>
                    ) : null}

                    <option value="25% OR MORE">25% OR MORE</option>
                    <option value="MONTHLY">LESS THAN 25%</option>
                  </select>
                </div>
              ) : null}
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Bonus
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.bonus}
                  placeholder="Optional"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Setbonus(e.target.value)}
                />
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => handleSelectChangeForBonus(e)}
                >
                  {getborrower[0]?.bonus_type ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.bonus_type}
                    </option>
                  ) : null}

                  <option value="ANNUALLY">ANNUALLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Commissions
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.commission}
                  placeholder="Optional"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Setcommission(e.target.value)}
                />
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => handleSelectChangeForCommision(e)}
                >
                  {getborrower[0]?.commission_type ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.commission_type}
                    </option>
                  ) : null}

                  <option value="ANNUALLY">ANNUALLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Overtime
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.overtime}
                  placeholder="Optional"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_overtime(e.target.value)}
                />
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => handleSelectChangeForOverTime(e)}
                >
                  {getborrower[0]?.overtime_type ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.overtime_type}
                    </option>
                  ) : null}

                  <option value="ANNUALLY">ANNUALLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Other
                </span>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={getborrower[0]?.other}
                  placeholder="Optional"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_other(e.target.value)}
                />
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => handleSelectChangeForOther(e)}
                >
                  {getborrower[0]?.other_type ? (
                    <option selected disabled hidden>
                      {getborrower[0]?.other_type}
                    </option>
                  ) : null}

                  <option value="ANNUALLY">ANNUALLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>

              {current == 1 ? (
                <div class="form-check mt-4">
                  {/* <input class="form-check-input" type="checkbox" value="" id="Employed" /> */}
                  {/* <label class="form-check-label" for="Employed"> */}
                  <input
                    type="checkbox"
                    class="form-check-label"
                    // id="topping"
                    // name="topping"
                    // value="Paneer"
                    // checked={isChecked}
                    onChange={handleSelectChangeForSeasonal_income}
                    checked
                  />
                  Seasonal Income
                  <input
                    type="checkbox"
                    class="form-check-label"
                    // id="topping"
                    // name="topping"
                    // value="Paneer"
                    // checked={isChecked}
                    onChange={handleSelectChangeForForiegnIncome}
                    checked
                  />
                  Foreign Income
                  {/* </label> */}
                </div>
              ) : null}
              <div class="form-check mt-4">
          <input
            type="checkbox"
            class="form-check-label"
            checked={employed_family_member == 1}
            onChange={handleChangeforEmployFamily}
          />
          Employed by a family member, property seller, real estate agent, etc.
        </div>
        <div className="d-flex my-4">
          <button
            className="btn btn-primary mx-2 px-md-5 w-100"
            onClick={() => AddBaseIncome()}
          >
            SAVE
          </button>
          <button
            className="btn btn-light mx-2 px-md-5 border w-100"
            onClick={() => history.push("/Income")}
          >
            CLOSE
          </button>
        </div>
            </form>
            </div>
          </div>
          <ProfileInfo/>
        </div>

        {/* <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Commissions
          </span>
          <input
            type="number"
            class="form-control"
            defaultValue={getborrower[0]?.commission}
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Setcommission(e.target.value)}
          />
          <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForCommision(e)}
          >
            {getborrower[0]?.commission_type ? (
              <option selected disabled hidden>
                {getborrower[0]?.commission_type}
              </option>
            ) : null}

            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Overtime
          </span>
          <input
            type="number"
            class="form-control"
            defaultValue={getborrower[0]?.overtime}
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_overtime(e.target.value)}
          />
          <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForOverTime(e)}
          >
            {getborrower[0]?.overtime_type ? (
              <option selected disabled hidden>
                {getborrower[0]?.overtime_type}
              </option>
            ) : null}

            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Other
          </span>
          <input
            type="number"
            class="form-control"
            defaultValue={getborrower[0]?.other}
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_other(e.target.value)}
          />
          <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForOther(e)}
          >
            {getborrower[0]?.other_type ? (
              <option selected disabled hidden>
                {getborrower[0]?.other_type}
              </option>
            ) : null}

            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select>
        </div> */}

        {current == 1 ? (
          <div class="form-check mt-4">
            {/* <input class="form-check-input" type="checkbox" value="" id="Employed" /> */}
            {/* <label class="form-check-label" for="Employed"> */}
            <input
              type="checkbox"
              class="form-check-label"
              // id="topping"
              // name="topping"
              // value="Paneer"
              // checked={isChecked}
              onChange={handleSelectChangeForSeasonal_income}
              checked
            />
            Seasonal Income
            <input
              type="checkbox"
              class="form-check-label"
              // id="topping"
              // name="topping"
              // value="Paneer"
              // checked={isChecked}
              onChange={handleSelectChangeForForiegnIncome}
              checked
            />
            Foreign Income
            {/* </label> */}
          </div>
        ) : null}
       
      </div>
    </>
  );
}
