import React from 'react'

export const NumberShares = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="mt-3">
                  <h4>Number of shares</h4>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Required"
                  />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NumberShares;