import React from "react";
import "./styles.css";

function Militry() {
  return (
    <>
      <h2 className="mt-4"></h2>
      <div className="d-flex">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="current"
          />
          <label className="form-check-label" for="current">
            Current
          </label>
        </div>

        <div className="form-check ms-3 ms-md-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="primary"
          />
          <label className="form-check-label" for="primary">
            Primary
          </label>
        </div>
      </div>

      <h6 className="mt-5">EMPLOYMENT DETAILS</h6>

      <form action="">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Employer Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button className="btn btn-outline-secondary" type="button">
            +
          </button>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Start Date
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
            Official Address
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Position
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Work Phone
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Work Phone
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Required"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <h6 className="my-5">EMPLOYMENT DETAILS</h6>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Militry Base
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Amount Required"
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
            Military Clothes Allowance
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Combat Pay
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Flight Pay
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Hazard Pay
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Overseas Pay
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Prop Pay
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Quarters Allowance
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Rations Allowance
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
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
            Military Variable Housing Allowance
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Optional"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <select className="form-select py-2" id="inputGroupSelect02">
            <option value="2">ANNUALLY</option>
            <option value="3">MONTHLY</option>
          </select>
        </div>

        {/* <div className="d-flex mt-4">
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Seasonal" />
  <label className="form-check-label" for="Seasonal">
  Seasonal Income
  </label>
</div>

    <div className="form-check ms-3 ms-md-5">
  <input className="form-check-input" type="checkbox" value="" id="Foreign" />
  <label className="form-check-label" for="Foreign">
  Foreign Income
  </label>
</div>
    </div> */}

        <div className="form-check mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Employed"
          />
          <label className="form-check-label" for="Employed">
            Employed by a family member, property seller, real estate agent,
            etc.
          </label>
        </div>
        <div className="d-flex my-4">
          <button className="btn btn-primary mx-2 px-md-5 w-100">INVITE</button>
          <button className="btn btn-light mx-2 px-md-5 border w-100">
            CLOSE
          </button>
        </div>
      </form>
    </>
  );
}

export default Militry;
