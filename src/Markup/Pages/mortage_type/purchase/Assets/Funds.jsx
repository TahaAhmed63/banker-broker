import React from "react";

export const Funds = ({setFinalInstitute}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mt-3">
              <h4 style={{fontSize:"20px", fontWeight:"500", color:"black"}}>Funds Source Type</h4>
              <select
                className="form-control"
                onChange={(e) => setFinalInstitute((perv)=>({...perv,fundStoreType:(e.target.value)}))}
                >
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
              <h4 style={{fontSize:"20px", fontWeight:"500", color:"black"}}>Funds Source Description</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Optional"
                onChange={(e) => setFinalInstitute((perv)=>({...perv,fundStoreDescription:(e.target.value)}))}
              />
            </div>

            <div className="mt-3">
              <h4 style={{fontSize:"20px", fontWeight:"500", color:"black"}}>Deposited/Non-Deposited</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Non-Deposited"
                onChange={(e) => setFinalInstitute((perv)=>({...perv,depositedOrNonDeposited:(e.target.value)}))}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
