import React, { useState } from "react";
import Baseurl from "../../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { BackgroundVariant } from "reactflow";
import { BiUndo } from "react-icons/bi";

function Militry({ setpanel }) {
  const history = useHistory();

  const Assign_id = localStorage.getItem("assignId");
  const [currentEmployee, setcurrentEmployee] = useState(false);
  // const [base_employment_income,Setbase_employment_income] = useState("")
  const [military_employment_income, Setmilitary_employment_income] =
    useState(0);
  const [base_employment_income, Setbase_employment_income] = useState(1);
  const [other_income, Setother_income] = useState(0);
  const [current, Setcurrent] = useState(0);
  const [primary, Setprimary] = useState(0);
  const [employee_name, SetEmployee_name] = useState("");
  const [start_date, SetStart_date] = useState("");
  const [current_emp, Set_current_emp] = useState(0);
  const [end_date, Set_end_date] = useState("");
  const [office_address, Set_office_address] = useState("");
  const [position, Setposition] = useState("");
  const [work_phone, Set_work_phone] = useState("");
  const [ext, Set_ext] = useState("");
  const [military_base_type, Setmilitary_base_type] = useState("");
  const [military_base, Setmilitary_base] = useState("");
  const [military_clothe_allowance_type, Set_military_clothe_allowance_type] =
    useState("");
  const [military_combat_pay_type, Set_military_combat_pay_type] = useState("");
  const [military_flight_pay_type, Set_military_flight_pay_type] = useState("");
  const [military_hazard_pay_type, Set_military_hazard_pay_type] = useState("");
  const [military_overseas_pay_type, Set_military_overseas_pay_type] =
    useState("");
  const [military_prop_pay_type, Set_military_prop_pay_type] = useState("");
  const [military_quarter_allowance_type, Set_military_quarter_allowance_type] =
    useState("");
  const [military_ration_allowance_type, Set_military_ration_allowance_type] =
    useState("");
  const [
    military_variable_housing_allowance_type,
    Set_military_variable_housing_allowance_type,
  ] = useState("");

  const [military_clothe_allowance, Set_military_clothe_allowance] =
    useState("");
  const [military_combat_pay, Set_military_combat_pay] = useState("");
  const [military_flight_pay, Set_military_flight_pay] = useState("");
  const [military_hazard_pay, Set_military_hazard_pay] = useState("");
  const [military_overseas_pay, Set_military_overseas_pay] = useState("");
  const [military_prop_pay, Set_military_prop_pay] = useState("");
  const [military_quarter_allowance, Set_military_quarter_allowance] =
    useState("");
  const [military_ration_allowance, Set_military_ration_allowance] =
    useState("");
  const [
    military_variable_housing_allowance,
    Set_military_variable_housing_allowance,
  ] = useState("");
  const [year_profession, Set_year_profession] = useState("");
  const [month_profession, Set_month_profession] = useState("");
  const [seasonal_income, Set_seasonal_income] = useState(0);
  const [foreign_income, Set_foreign_income] = useState(0);
  const [employed_family_member, Set_employed_family_member] = useState(0);

  const [co_Borrower, setCo_Borrower] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showfirstform, setshowfirstform] = useState(false);
  const [bund, setBund] = useState("");

  // const [income,Setincome] = usestate()

  const BorrowerData = new FormData();
  BorrowerData.append("base_employment_income", 0);
  BorrowerData.append("military_employment_income", 1);
  BorrowerData.append("other_income", 0);
  BorrowerData.append("application_id", Assign_id);
  BorrowerData.append("current", current_emp);
  BorrowerData.append("employee_name", employee_name);
  BorrowerData.append("start_date", start_date);
  BorrowerData.append("end_date", end_date);
  BorrowerData.append("office_address", office_address);
  BorrowerData.append("position", position);
  BorrowerData.append("work_phone", work_phone);
  BorrowerData.append("ext", ext);
  BorrowerData.append("military_base_type", military_base_type);
  BorrowerData.append("military_base", military_base);
  BorrowerData.append(
    "military_clothe_allowance_type",
    military_clothe_allowance_type
  );
  BorrowerData.append("military_combat_pay_type", military_combat_pay_type);
  BorrowerData.append("primary", primary);

  BorrowerData.append("military_flight_pay_type", military_flight_pay_type);
  BorrowerData.append("military_hazard_pay_type", military_hazard_pay_type);
  BorrowerData.append("military_overseas_pay_type", military_overseas_pay_type);
  BorrowerData.append("military_prop_pay_type", military_prop_pay_type);
  BorrowerData.append(
    "military_quarter_allowance_type",
    military_quarter_allowance_type
  );
  BorrowerData.append(
    "military_quarter_allowance_type",
    military_quarter_allowance_type
  );
  BorrowerData.append(
    "military_ration_allowance_type",
    military_ration_allowance_type
  );
  BorrowerData.append(
    "military_variable_housing_allowance_type",
    military_variable_housing_allowance_type
  );
  BorrowerData.append("employed_family_member", employed_family_member);
  BorrowerData.append("military_clothe_allowance", military_clothe_allowance);

  BorrowerData.append("military_combat_pay", military_combat_pay);
  BorrowerData.append("military_flight_pay", military_flight_pay);
  BorrowerData.append("military_hazard_pay", military_hazard_pay);
  BorrowerData.append("military_overseas_pay", military_overseas_pay);
  BorrowerData.append("military_prop_pay", military_prop_pay);
  BorrowerData.append("military_quarter_allowance", military_quarter_allowance);
  BorrowerData.append("military_ration_allowance", military_ration_allowance);
  BorrowerData.append(
    "military_variable_housing_allowance",
    military_variable_housing_allowance
  );
  BorrowerData.append("year_profession", year_profession);
  BorrowerData.append("month_profession", month_profession);
  BorrowerData.append("seasonal_income", seasonal_income);
  BorrowerData.append("foreign_income", foreign_income);
  console.log(employee_name, "employee_name");

  const AddMilitryIncome = () => {
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
          setLoader(false);
          setshowfirstform(false);
          history.push("/assets");

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
  const handleChange = (event) => {
    if (event.target.checked) {
      Set_current_emp(1);
    } else {
      Set_current_emp(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleSelectChangeForMilitryBase(event) {
    Setmilitary_base_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_clothe_allowance_type(event) {
    Set_military_clothe_allowance_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_combat_pay_type(event) {
    Set_military_combat_pay_type(event.target.value);
    console.log(event.target.value, "event.target.value combbat pay");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_flight_pay_type(event) {
    Set_military_flight_pay_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_hazard_pay_type(event) {
    Set_military_hazard_pay_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_overseas_pay_type(event) {
    Set_military_overseas_pay_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_prop_pay_type(event) {
    Set_military_prop_pay_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_quarter_allowance_type(event) {
    Set_military_quarter_allowance_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_ration_allowance_type(event) {
    Set_military_ration_allowance_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  function handleSelectChangeForMilitary_variable_housing_allowance_type(
    event
  ) {
    Set_military_variable_housing_allowance_type(event.target.value);
    console.log(event.target.value, "event.target.value");
    // geyEpisodeBySeason(event.target.value)
  }
  const handleChangeforEmployFamily = (event) => {
    if (event.target.checked) {
      Set_employed_family_member(1);
    } else {
      Set_employed_family_member(0);
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
  const handleChange2 = (event) => {
    if (event.target.checked) {
      Set_seasonal_income(1);
    } else {
      Set_seasonal_income(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange3 = (event) => {
    if (event.target.checked) {
      Set_foreign_income(1);
    } else {
      Set_foreign_income(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const onCancel = () => {
    setpanel("");
  };

  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <div className="w-74">
        <h5 style={{fontSize:"20px", fontWeight:"500", color:"black"}} className="mt-4">Military Employment Income</h5>
        <div className="d-flex">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-label  fontSW27"
              // id="topping"
              // name="topping"
              // value="Paneer"
              // checked={isChecked}
              onChange={handleChange}
            />&nbsp;
            Current
            {/* </label> */}
          </div>

          <div class="form-check ms-3 ms-md-5">
            <input
              type="checkbox"
              class="form-check-label"
              // id="topping"
              // name="topping"
              // value="Paneer"
              // checked={isChecked}
              onChange={handleChange0}
            />{" "}
            Primary
            {/* </label> */}
          </div>
        </div>

        <h6 className="mt-5">EMPLOYMENT DETAILS</h6>

        <form action="" onSubmit={handleSubmit}>
          <div class="input-group mb-3">
          <span style={{fontWeight:"600"}} class="input-group-text fontSW27 htx404" id="basic-addon1">
            Employer Name
          </span>
            <input
              type="text"
              class="form-control fontSW28"
              placeholder="Required"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => SetEmployee_name(e.target.value)}
            />
            <span class="input-group-text rounded-0 htx404 " id="basic-addon1">
              +
            </span>

          </div>
            {bund?.employee_name
              ? bund?.employee_name.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
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
            {bund?.end_date
              ? bund?.end_date.map((e) => <p className="text-danger">{e}</p>)
              : null}
          {current_emp == 1 ? (
            <>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Month profession
                </span>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_month_profession(e.target.value)}
                />{" "}
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Year profession
                </span>{" "}
                <input
                  type="number"
                  class="form-control"
                  placeholder="Required"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => Set_year_profession(e.target.value)}
                />{" "}
              </div>{" "}
            </>
          ) : null}
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
            {bund?.end_date
              ? bund?.end_date.map((e) => <p className="text-danger">{e}</p>)
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
            class="form-control fontSW28 rounded-0 input26clr "
            placeholder="(xxx) xxx-xxxx"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => Set_work_phone(e.target.value)}
          />
            
            <input
              type="number"
              class="form-control"
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
          <h6 className="my-5">EMPLOYMENT DETAILS</h6>

          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Militry Base
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Amount Required"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Setmilitary_base(e.target.value)}
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitryBase(e)}
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_base
            ? bund?.military_base.map((e) => <p className="text-danger">{e}</p>)
            : null}
          {bund?.military_base_type
            ? bund?.military_base_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Clothes Allowance
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_clothe_allowance(e.target.value)}
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) =>
                handleSelectChangeForMilitary_clothe_allowance_type(e)
              }
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_clothe_allowance_type
            ? bund?.military_clothe_allowance_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}

          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Combat Pay
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_combat_pay(e.target.value)}
            />
            {bund?.military_combat_pay
              ? bund?.military_combat_pay.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitary_combat_pay_type(e)}
            >
              <option value="2">ANNUALLY</option>
              <option value="3">MONTHLY</option>
            </select>
          </div>
          {bund?.military_combat_pay_type
            ? bund?.military_combat_pay_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}

          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Flight Pay
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_flight_pay(e.target.value)}
            />
            {bund?.military_flight_pay
              ? bund?.military_flight_pay.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitary_flight_pay_type(e)}
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_flight_pay_type
            ? bund?.military_flight_pay_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}

          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Hazard Pay
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_hazard_pay(e.target.value)}
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitary_hazard_pay_type(e)}
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_hazard_pay_type
            ? bund?.military_hazard_pay_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Overseas Pay
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => military_overseas_pay(e.target.value)}
            />
            <select
             class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) =>
                handleSelectChangeForMilitary_overseas_pay_type(e)
              }
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_overseas_pay_type
            ? bund?.military_overseas_pay_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Prop Pay
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_prop_pay(e.target.value)}
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitary_prop_pay_type(e)}
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_prop_pay_type
            ? bund?.military_prop_pay_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Quarters Allowance
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_quarter_allowance(e.target.value)}
            />
            <select
             class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) =>
                handleSelectChangeForMilitary_quarter_allowance_type(e)
              }
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_quarter_allowance_type
            ? bund?.military_quarter_allowance_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Rations Allowance
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => Set_military_ration_allowance(e.target.value)}
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) =>
                handleSelectChangeForMilitary_ration_allowance_type(e)
              }
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_ration_allowance_type
            ? bund?.military_ration_allowance_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div class="input-group mb-3">
            <span style={{fontWeight:"600"}} class="input-group-text fontSW27" id="basic-addon1">
              Military Variable Housing Allowance
            </span>
            <input
              type="number"
              class="form-control fontSW28 rounded-0 input26clr"
              placeholder="Optional"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) =>
                Set_military_variable_housing_allowance(e.target.value)
              }
            />
            <select
              class="form-select fw-bold fontSW28 rounded-0"
              id="inputGroupSelect02"
              onChange={(e) =>
                handleSelectChangeForMilitary_variable_housing_allowance_type(e)
              }
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          </div>
          {bund?.military_variable_housing_allowance_type
            ? bund?.military_variable_housing_allowance_type.map((e) => (
                <p className="text-danger">{e}</p>
              ))
            : null}
          <div className="d-flex mt-4">
            <div class="d-flex form-check">
              <input
                type="checkbox"
                class="form-check-label me-1"
                // id="topping"
                // name="topping"
                // value="Paneer"
                // checked={isChecked}
                onChange={handleChange2}
              />{" "}
              Seasonal Income
              {/* </label> */}
            </div>

            <div class="d-flex form-check">
              <input
                class="form-check-label me-1"
                type="checkbox"
                value=""
                id="Foreign"
                onChange={handleChange3}
              />
              <label class="form-check-label" for="Foreign">
                Foreign Income
              </label>
            </div>
          </div>

          <div class="d-flex form-check mt-4">
            <input
              type="checkbox"
              class="form-check-label me-1"
              // id="topping"
              // name="topping"
              // value="Paneer"
              // checked={isChecked}
              onChange={handleChangeforEmployFamily}
            />
            <label class="form-check-label" for="Foreign">
            Employed by a family member, property seller, real estate agent,
            etc.
              </label>
           
          </div>
          <div className="d-flex my-4">
            <button
              className="btn btn-link bg-primary text-light px-3 py-2 btnx404 rounded-0 me-2"
              onClick={AddMilitryIncome}
            >
              INVITE
            </button>
            <button
              className="btn btn-link px-3 py-2 btnx404 rounded-0"
              onClick={onCancel}
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Militry;
