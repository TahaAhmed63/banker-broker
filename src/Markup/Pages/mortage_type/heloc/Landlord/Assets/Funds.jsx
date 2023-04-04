import React from "react";

export const Funds = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mt-3">
              <h4 >Funds Source Type</h4>
              <select 
                className="form-control py-2">
                <option id="">- Funds Source Type -</option>
                <option value="Community Non Profit">
                  Community Non Profit
                </option>
                <option value="Employer"> Employer</option>
                <option value="Federal Agency"> Federal Agency</option>
                <option value="Local Agency"> Local Agency</option>
                <option value="Non Parent Relative">
                  Non Parent Relative
                </option>
                <option value="Parent"> Parent</option>
                <option value="Relative"> Relative</option>
                <option value="Religious Non Profit">
                  Religious Non Profit
                </option>
                <option value="State Agency"> State Agency</option>
                <option value="Unmarried Partner"> Unmarried Partner</option>
                Other
                <option value="Unrelated Friend"> Unrelated Friend</option>
                <option value="Lender"> Lender</option>
              </select>
            </div>

            <div className="mt-3">
              <h4>Funds Source Description</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Optional"
              />
            </div>

            <div className="mt-3">
              <h4>Deposited/Non-Deposited</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Non-Deposited"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
