import React, { useState, useEffect } from "react";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import { useParams,useHistory } from "react-router-dom";
import Mortageside from "./Mortageside";
import ProfileInfo from "../Profile/ProfileInfo";

export default function MilitryEdit() {
  const { id } = useParams();
const history = useHistory()

  const Assign_id = localStorage.getItem("assignId");
  const [currentEmployee, setcurrentEmployee] = useState(false);
  // const [base_employment_income,Setbase_employment_income] = useState("")
  const [military_employment_income, Setmilitary_employment_income] =
    useState(0);
  const [base_employment_income, Setbase_employment_income] = useState(1);
  const [other_income, Setother_income] = useState(0);
  const [getborrower, setGetborrower] = useState("");

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
  BorrowerData.append("id", id);
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
          // alert()
          console.log(
            response?.data?.message,
            "response?.data?.message record"
          );
          setLoader(false);
          history.push('/heloc/tanent/income')
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

  // dcfvghjkbdfghj
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
        console.log(getborrower, getborrower[0]?.primary, "getborrower record");
        if (response?.data?.status === true) {
          Setprimary(response?.data?.data[0]?.primary);
          Set_current_emp(response?.data?.data[0]?.current_emp);
          Set_seasonal_income(response?.data?.data[0]?.seasonal_income);
          Set_foreign_income(response?.data?.data[0]?.foreign_income);
          Set_employed_family_member(
            response?.data?.data[0]?.employed_family_member
          );
          SetEmployee_name(response?.data?.data[0]?.employee_name);
          SetStart_date(response?.data?.data[0]?.Start_date);
          Set_end_date(response?.data?.data[0]?.end_date);
          Set_office_address(response?.data?.data[0]?.office_address);
          Setposition(response?.data?.data[0]?.position);
          Set_work_phone(response?.data?.data[0]?.work_phone);
          Set_ext(response?.data?.data[0]?.Set_ext);
          Setmilitary_base_type(response?.data?.data[0]?.military_base_type);
          Setmilitary_base(response?.data?.data[0]?.military_base);
          Set_military_clothe_allowance_type(
            response?.data?.data[0]?.military_clothe_allowance_type
          );
          Set_military_clothe_allowance(
            response?.data?.data[0]?.military_clothe_allowance
          );
          Set_military_combat_pay_type(
            response?.data?.data[0]?.military_combat_pay_type
          );
          Set_military_combat_pay(response?.data?.data[0]?.military_combat_pay);
          Set_military_hazard_pay_type(
            response?.data?.data[0]?.military_hazard_pay_type
          );
          Set_military_hazard_pay(response?.data?.data[0]?.military_hazard_pay);
          Set_military_overseas_pay_type(
            response?.data?.data[0]?.military_overseas_pay_type
          );
          Set_military_overseas_pay(
            response?.data?.data[0]?.military_overseas_pay
          );
          Set_military_prop_pay_type(
            response?.data?.data[0]?.military_prop_pay_type
          );
          Set_military_prop_pay(response?.data?.data[0]?.military_prop_pay);
          Set_military_quarter_allowance_type(
            response?.data?.data[0]?.military_quarter_allowance_type
          );
          Set_military_ration_allowance(
            response?.data?.data[0]?.military_ration_allowance
          );
          Set_military_ration_allowance_type(
            response?.data?.data[0]?.military_ration_allowance_type
          );
          Set_military_variable_housing_allowance_type(
            response?.data?.data[0]
              ?.Set_military_variable_housing_allowance_type
          );
          Set_military_variable_housing_allowance(
            response?.data?.data[0]?.Set_military_variable_housing_allowance
          );
          Set_military_flight_pay_type(
            response?.data?.data[0]?.military_flight_pay_type
          );
          Set_military_flight_pay(response?.data?.data[0]?.military_flight_pay);
          Set_ext(response?.data?.data[0]?.ext);
          Set_military_variable_housing_allowance_type(
            response?.data?.data[0]?.military_variable_housing_allowance_type
          );
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

  const handleChange = (event) => {
    if (current_emp == 1) {
      Set_current_emp(0);
    } else {
      Set_current_emp(1);
    }
    // setIsSubscribed(current => !current);
  };
  console.log(current_emp, "current_emp ");
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
    if (employed_family_member == 1) {
      Set_employed_family_member(0);
    } else {
      Set_employed_family_member(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange0 = (event) => {
    if (primary == 0) {
      Setprimary(1);
    } else {
      Setprimary(0);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange2 = (event) => {
    if (seasonal_income == 1) {
      Set_seasonal_income(0);
    } else {
      Set_seasonal_income(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  const handleChange3 = (event) => {
    if (foreign_income == 1) {
      Set_foreign_income(0);
    } else {
      Set_foreign_income(1);
      // console.log(current_emp,"current_emp else")
    }
    // setIsSubscribed(current => !current);
  };
  console.log(primary, "primary");
  console.log(
    getborrower[0]?.military_clothe_allowance_type,
    "<====Qaxim Gando"
  );
  return (
    <>
      {loader ? <div className="loader"></div> : null}

      <div className="container-fluid">
        <div className="row">
          <Mortageside />
          <div className="col-md-8">
            <div className="w-74">
              <h2 className="mt-4">Military Employment Income</h2>
              <div className="d-flex">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-label"
                    // id="topping"
                    // name="topping"
                    // value="Paneer"
                    checked={current_emp == 1}
                    onChange={handleChange}
                  />&nbsp;
                  Current
                  {/* </label> */}
                </div>

                <div class="form-check ms-3 ms-md-5">
                  {/* {primary === 1 ? <input
            type="checkbox"
            class="form-check-label"
            // id="topping"
            // name="topping"
            // value="Paneer"
            checked={primary == 1 }
            onChange={handleChange0} 
          />  : <input
          type="checkbox"
          class="form-check-label"
         "
          onChange={handleChange0} 
        /> } */}
                  <input
                    type="checkbox"
                    class="form-check-label"
                    // id="topping"
                    // name="topping"
                    // value="Paneer"
                    checked={primary == 1}
                    onChange={handleChange0}
                  />&nbsp;
                  Primary
                  {/* </label> */}
                </div>
              </div>
              <h6 className="mt-5">EMPLOYMENT DETAILS</h6>
              <form action="" onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Employer Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.employee_name}
                    onChange={(e) => SetEmployee_name(e.target.value)}
                  />
                     {bund?.employee_name
          ? bund?.employee_name.map((e) => (
              <p className="text-danger">{e}</p>
            ))
          : null}
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Start Date
                  </span>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.start_date}
                    onChange={(e) => SetStart_date(e.target.value)}
                  />
                   {bund?.start_date
          ? bund?.start_date.map((e) => (
              <p className="text-danger">{e}</p>
            ))
          : null}
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    End Date
                  </span>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.end_date}
                    onChange={(e) => Set_end_date(e.target.value)}
                  />
                   {bund?.end_date
          ? bund?.end_date.map((e) => <p className="text-danger">{e}</p>)
          : null}
                </div>
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
                  <span class="input-group-text" id="basic-addon1">
                    Office Address
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.office_address}
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
                    placeholder="Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.position}
                    onChange={(e) => Setposition(e.target.value)}
                  />
                  {bund?.position
          ? bund?.position.map((e) => <p className="text-danger">{e}</p>)
          : null}
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Work Phone
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="(xxx) xxx-xxxx"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.work_phone}
                    onChange={(e) => Set_work_phone(e.target.value)}
                  />
                  {bund?.work_phone
              ? bund?.work_phone.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Ext."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.ext}
                    onChange={(e) => Set_ext(e.target.value)}
                  />
                   {bund?.ext
          ? bund?.ext.map((e) => (
              <p className="text-danger">{e}</p>
            ))
          : null}
                </div>
                <h6 className="my-5">EMPLOYMENT DETAILS</h6>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Militry Base
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Amount Required"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_base}
                    onChange={(e) => Setmilitary_base(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => handleSelectChangeForMilitryBase(e)}
                  >
                    {getborrower[0]?.military_base_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_base_type}
                      </option>
                    ) : null}

                    <option value="MONTHLY">MONTHLY</option>
                    <option value="ANNUALLY">ANNUALLY</option>
                  </select>{" "}
                  :{" "}
                  {/* {military_base_type === "MONTHLY" ? (
            <select
              class="form-select"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitryBase(e)}
            >
              <option value="MONTHLY">MONTHLY</option>
              <option value="ANNUALLY">ANNUALLY</option>
            </select>
          ) : (
            <select
              class="form-select"
              id="inputGroupSelect02"
              onChange={(e) => handleSelectChangeForMilitryBase(e)}
            >
              <option value="ANNUALLY">ANNUALLY</option>
              <option value="MONTHLY">MONTHLY</option>
            </select>
          )} */}
                </div>
                {bund?.military_base
              ? bund?.military_base.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}
        {bund?.military_base_type
              ? bund?.military_base_type.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Military Clothes Allowance
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_clothe_allowance}
                    onChange={(e) =>
                      Set_military_clothe_allowance(e.target.value)
                    }
                  />
                  {/* <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForMilitryBase(e)}
          >
            {getborrower[0]?.military_clothe_allowance_type ? (
              <option selected disabled hidden>
                {getborrower[0]?.military_clothe_allowance_type}
              </option>
            ) : null}

            <option value="MONTHLY">MONTHLY</option>
            <option value="ANNUALLY">ANNUALLY</option>
          </select>{" "}
          :{" "} */}
                  {/* qwjjhbjhb */}
                  {/* <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) => handleSelectChangeForMilitryBase(e)}
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select> */}
                  {/* <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={(e) =>
              handleSelectChangeForMilitary_clothe_allowance_type(e)
            }
          >
            <option value="ANNUALLY">ANNUALLY</option>
            <option value="MONTHLY">MONTHLY</option>
          </select> */}
                  <select class="form-select" id="inputGroupSelect02">
                    {getborrower[0]?.military_clothe_allowance_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_clothe_allowance_type}
                      </option>
                    ) : null}

                    <option value="MONTHLY">MONTHLY</option>
                    <option value="ANNUALLY">ANNUALLY</option>
                  </select>{" "}
                  :{" "}
                </div>
                {bund?.military_clothe_allowance_type
              ? bund?.military_clothe_allowance_type.map((e) => (
                  <p className="text-danger">{e}</p>
                ))
              : null}

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Military Combat Pay
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_combat_pay}
                    onChange={(e) => Set_military_combat_pay(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_combat_pay_type(e)
                    }
                  >
                    {getborrower[0]?.military_combat_pay_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_combat_pay_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Flight Pay
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_flight_pay}
                    onChange={(e) => Set_military_flight_pay(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_flight_pay_type(e)
                    }
                  >
                    {getborrower[0]?.military_flight_pay_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_flight_pay_type}
                      </option>
                    ) : null}

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
                  <span class="input-group-text" id="basic-addon1">
                    Military Hazard Pay
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_hazard_pay}
                    onChange={(e) => Set_military_hazard_pay(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_hazard_pay_type(e)
                    }
                  >
                    {getborrower[0]?.military_hazard_pay_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_hazard_pay_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Overseas Pay
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_overseas_pay}
                    onChange={(e) => military_overseas_pay(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_overseas_pay_type(e)
                    }
                  >
                    {getborrower[0]?.military_overseas_pay_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_overseas_pay_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Prop Pay
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_prop_pay}
                    onChange={(e) => Set_military_prop_pay(e.target.value)}
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_prop_pay_type(e)
                    }
                  >
                    {getborrower[0]?.military_prop_pay_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_prop_pay_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Quarters Allowance
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_quarter_allowance}
                    onChange={(e) =>
                      Set_military_quarter_allowance(e.target.value)
                    }
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_quarter_allowance_type(e)
                    }
                  >
                    {getborrower[0]?.military_quarter_allowance_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_quarter_allowance_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Rations Allowance
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={getborrower[0]?.military_ration_allowance}
                    onChange={(e) =>
                      Set_military_ration_allowance(e.target.value)
                    }
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_ration_allowance_type(e)
                    }
                  >
                    {getborrower[0]?.military_ration_allowance_type ? (
                      <option selected disabled hidden>
                        {getborrower[0]?.military_ration_allowance_type}
                      </option>
                    ) : null}
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
                  <span class="input-group-text" id="basic-addon1">
                    Military Variable Housing Allowance
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      getborrower[0]?.military_variable_housing_allowance
                    }
                    onChange={(e) =>
                      Set_military_variable_housing_allowance(e.target.value)
                    }
                  />
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      handleSelectChangeForMilitary_variable_housing_allowance_type(
                        e
                      )
                    }
                  >
                    {getborrower[0]
                      ?.military_variable_housing_allowance_type ? (
                      <option selected disabled hidden>
                        {
                          getborrower[0]
                            ?.military_variable_housing_allowance_type
                        }
                      </option>
                    ) : null}
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
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-label"
                      // id="topping"
                      // name="topping"
                      // value="Paneer"
                      // checked={isChecked}
                      checked={seasonal_income == 1}
                      onChange={handleChange2}
                    />{" "}
                    Seasonal Income
                    {/* </label> */}
                  </div>

                  <div class="form-check ms-3 ms-md-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Foreign"
                      checked={foreign_income == 1}
                      onChange={handleChange3}
                    />
                    <label class="form-check-label" for="Foreign">
                      Foreign Income
                    </label>
                  </div>
                </div>

                <div class="form-check mt-4">
          <input
            type="checkbox"
            class="form-check-label"
            // id="topping"
            // name="topping"
            // value="Paneer"
            checked={employed_family_member == 1}
            onChange={handleChangeforEmployFamily}
          />
          Employed by a family member, property seller, real estate agent, etc.
        </div>
        <div className="d-flex my-4">
          <button
            className="btn btn-primary mx-2 px-md-5 w-100"
            onClick={AddMilitryIncome}
          >
            INVITE
          </button>
          <button className="btn btn-light mx-2 px-md-5 border w-100" onClick={() => history.push("/Income")}>
            CLOSE
          </button>
        </div>
              </form>
            </div>
          </div>
          <ProfileInfo />
        </div>

       
        </div>
      {/* </form> */}
    </>
  );
}
