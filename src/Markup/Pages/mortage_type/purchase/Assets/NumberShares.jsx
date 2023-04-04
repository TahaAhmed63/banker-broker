import React from 'react'

export const NumberShares = ({setFinalInstitute, value}) => {

  const {numberOfShares} = value

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="mt-3">
                  <h5 className="textdark">Number of shares</h5>
                  <input
                    type="text"
                    className="form-control"
                    value={numberOfShares}
                    placeholder="Required"
                    onChange={(e) => setFinalInstitute((perv)=>({...perv,numberOfShares:(e.target.value)}))}
                  />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NumberShares;