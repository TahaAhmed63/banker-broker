import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import Header from "../../../Layout/Header";
import RefSideBar from "./RefSideBar";
import { useParams, useHistory } from "react-router-dom";
import ReFooter from "./ReFooter";

const BaseEdit = () => {
  const history = useHistory()
  const { id } = useParams();
  console.log(id);
  //   setIdFromParams(id);
  const [current, Setcurrent] = useState(0);

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

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
  const [primary, Setprimary] = useState(0);
  const [foreign_income, Set_foreign_income] = useState(0);
  const [month_profession, Set_month_profession] = useState(0);
  const [ownership_share, Set_ownership_share] = useState(0);
  const [seasonal_income, Set_seasonal_income] = useState(0);
  const [year_profession, Set_year_profession] = useState(0);

  const getBaseincome = () => {
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
          console.log(response?.data?.data[0], "response?.data?.message");
          const {
            current,
            primary,
            self_employed,
            employee_name,
            start_date,
            current_emp,
            year_profession,
            month_profession,
            office_address,
            position,
            work_phone,
            ext,
            base,
            base_type,
            bonus,
            bonus_type,
            commission,
            commission_type,
            overtime,
            overtime_type,
            other,
            other_type,
            seasonal_income,
            foreign_income,
            employed_family_member,
          } = response?.data?.data[0];
          console.log(current, "response?.data?.message");
          console.log(bonus_type,bonus ,"response?.data?.message");
          Setcurrent(current);
          Setprimary(primary);
          Setself_employed(self_employed)
          Set_seasonal_income(seasonal_income)
          Set_other(other)
          Set_other_type(other_type)
          Set_foreign_income(foreign_income)
          Setemployed_family_member(employed_family_member)
          SetEmployee_name(employee_name)
          SetStart_date(start_date)
          Set_current_emp(current_emp)
          Set_end_date(end_date)
          Set_office_address(office_address)
          Setposition(position)
          Set_work_phone(work_phone)
          Set_ext(ext)
          Setbase_type(base_type)
          Set_base(base)
          Setbonus(bonus) 
          Set_bonus_type(bonus_type)
          Set_commission_type(commission_type)
          Set_overtime_type(overtime_type)
          Setcommission(commission)
          Set_overtime(overtime)
          Setcommission(commission)
          Setcommission(commission)
          Set_overtime(overtime)
          Set_month_profession(month_profession)
          Set_year_profession(year_profession)

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
    getBaseincome();
  }, []);

  const Data = new FormData();
  Data.append("id", id);
  Data.append("base_employment_income", 1);
  Data.append("military_employment_income", 0);
  Data.append("other_income", 0);
  Data.append("application_id", Assign_id);
  Data.append("current", current);
  Data.append("employee_name", employee_name);
  Data.append("start_date", start_date);
  Data.append("current_emp", current_emp);
  Data.append("self_employed", self_employed);
  Data.append("end_date", end_date);
  Data.append("office_address", office_address);
  Data.append("position", position);
  Data.append("work_phone", work_phone);
  Data.append("ext", ext);
  Data.append("base_type", base_type);
  Data.append("base", base);
  Data.append("employed_family_member", employed_family_member);
  Data.append("bonus_type", bonus_type);
  Data.append("commission_type", commission_type);
  Data.append("overtime_type", overtime_type);
  Data.append("other_type", other_type);
  Data.append("bonus", bonus);
  Data.append("commission", commission);
  Data.append("employed_family_member", employed_family_member);
  Data.append("overtime", overtime);
  Data.append("other", other);
  Data.append("primary", primary);
  Data.append("foreign_income", foreign_income);
  Data.append("month_profession", month_profession);
  Data.append("ownership_share", ownership_share);
  Data.append("seasonal_income", seasonal_income);
  Data.append("year_profession", year_profession);

  const EditBaseIncome = () => {
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
          history.push('/ref/income')
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
    {event.target.checked ? Set_seasonal_income(1) : Set_seasonal_income(0)}
  }
  console.log(foreign_income, "foreign_income(");


  function handleSelectChangeForForiegnIncome(event) {
    {event.target.checked ? Set_foreign_income(1) : Set_foreign_income(0)}
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
    }
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

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <RefSideBar />
          <div className="col-md-8 my-5 ps-lg-5 ">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mt-4">Base Employment Income</h2>
                <div className="d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={current === 1 ? true : false}
                      id="current"
                      onChange={handleChange1}
                    />
                    <label class="form-check-label" for="current">
                      Current
                    </label>
                  </div>
                  {current === 1 ? (
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-label"
                        id="primary"
                        onChange={handleChange0}
                        checked={primary === 1 ? true : false}
                      />
                      <label class="form-check-label" for="primary">
                        Primary
                      </label>
                    </div>
                  ) : null}

                  <div class="form-check ms-3 ms-md-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={self_employed === 1 ? true : false}
                      onChange={handleChange2}
                      id="self employee"
                    />
                    <label class="form-check-label" for="self employee">
                      Self Employed
                    </label>
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
                      placeholder="Required"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={employee_name}
                      onChange={(e) => SetEmployee_name(e.target.value)}
                    />
                    {fieldsError?.employee_name
                      ? fieldsError?.employee_name.map((e) => (
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
                      value={start_date}
                      onChange={(e) => SetStart_date(e.target.value)}
                    />
                  </div>
                  {fieldsError?.start_date
                    ? fieldsError?.start_date.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
                  <div class="form-check my-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="CurrentEmployee"
                      checked ={current_emp === 1 ? true : false}
                      onClick={handleChange}
                    />
                    <label class="form-check-label" for="CurrentEmployee">
                      Current Employee?
                    </label>
                  </div>
                  {current === 1 ? (
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Year in Profession
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Required"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={year_profession}
                        onChange={(e) => Set_year_profession(e.target.value)}
                      />
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Month in Profession
                        </span>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Required"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={month_profession}
                          onChange={(e) => Set_month_profession(e.target.value)}
                        />
                      </div>
                      {fieldsError?.start_date
                        ? fieldsError?.start_date.map((e) => (
                            <p className="text-danger">{e}</p>
                          ))
                        : null}
                    </div>
                  ) : (
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
                        value={end_date}
                        onChange={(e) => Set_end_date(e.target.value)}
                      />
                    </div>
                  )}
                  {fieldsError?.end_date
                    ? fieldsError?.end_date.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
                  {/* <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            End Date
          </span>
          <input
            type="date"
            class="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div> */}
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Official Address
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Required"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={office_address}
                      onChange={(e) => Set_office_address(e.target.value)}
                    />
                  </div>
                  {fieldsError?.office_address
                    ? fieldsError?.office_address.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
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
                      value={position}
                      onChange={(e) => Setposition(e.target.value)}
                    />
                  </div>
                  {fieldsError?.position
                    ? fieldsError?.position.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}
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
                      value={work_phone}
                      onChange={(e) => Set_work_phone(e.target.value)}
                    />
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Ext."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={ext}
                      onChange={(e) => Set_ext(e.target.value)}
                    />
                  </div>
                  {fieldsError?.work_phone
                    ? fieldsError?.work_phone.map((e) => (
                        <p className="text-danger">{e}</p>
                      ))
                    : null}

                  <h6 className="mt-5 mb-3">INCOME DETAILS</h6>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Base
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Amount Required"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={base}
                      onChange={(e) => Set_base(e.target.value)}
                    />
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={base_type}
                      onChange={(e) => handleSelectChange(e)}
                    >
                      <option value="Select">Select</option>
                      <option value="ANNUALLY">ANNUALLY</option>
                      <option value="MONTHLY">MONTHLY</option>
                    </select>
                  </div>

                  {self_employed === 1 ? (
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Overnership Share
                      </span>
                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        value={ownership_share}
                        onChange={(e) =>
                          handleSelectChangeForOwnership_share(e)
                        }
                      >
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
                      placeholder="Optional"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={bonus}
                      onChange={(e) => Setbonus(e.target.value)}
                    />
                    {fieldsError?.bonus
                      ? fieldsError?.bonus.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                      : null}
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={bonus_type}
                      onChange={(e) => handleSelectChangeForBonus(e)}
                    >
                      <option value="Select">Select</option>
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
                      placeholder="Optional"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={commission}
                      onChange={(e) => Setcommission(e.target.value)}
                    />
                    {fieldsError?.commission
                      ? fieldsError?.commission.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                      : null}
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={commission_type}
                      onChange={(e) => handleSelectChangeForCommision(e)}
                    >
                      <option value="Select">Select</option>
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
                      placeholder="Optional"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={overtime}
                      onChange={(e) => Set_overtime(e.target.value)}
                    />
                    {fieldsError?.overtime
                      ? fieldsError?.overtime.map((e) => (
                          <p className="text-danger">{e}</p>
                        ))
                      : null}
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={overtime_type}
                      onChange={(e) => handleSelectChangeForOverTime(e)}
                    >
                      <option value="Select">Select</option>
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
                      placeholder="Optional"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={other}
                      onChange={(e) => Set_other(e.target.value)}
                    />
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      value={other_type}
                      onChange={(e) => handleSelectChangeForOther(e)}
                    >
                      <option value="Select">Select</option>
                      <option value="ANNUALLY">ANNUALLY</option>
                      <option value="MONTHLY">MONTHLY</option>
                    </select>
                  </div>
                  {current === 1 ? (
                    <div class="form-check mt-4 mx-2">
                      <input
                        type="checkbox"
                        class="form-check-label"
                        checked={seasonal_income === 1 ? true : false }
                        onChange={handleSelectChangeForSeasonal_income}
                      />
                      Seasonal Income
                      <input
                        type="checkbox"
                        class="form-check-label"
                        checked={foreign_income === 1 ? true : false }
                        onChange={handleSelectChangeForForiegnIncome}
                      />
                      Foreign Income
                    </div>
                  ) : null}

                  <div class="form-check mt-4 mx-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Employed"
                      checked={employed_family_member === 1 ? true : false}
                      onChange={handleChangeforEmployFamily}
                    />
                    <label class="form-check-label" for="Employed">
                      Employed by a family member, property seller, real estate
                      agent, etc.
                    </label>
                  </div>
                  <div className="d-flex my-4">
                    <button
                      className="btn btn-primary mx-2 px-md-5 w-100"
                      onClick={EditBaseIncome}
                    >
                      EDIT
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

export default BaseEdit;
