import React from 'react'

export const Financial = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="mt-3">
                  <h5>Financial Institution</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Required"
                  />
                </div>


                <div className="mt-3">
                  <h4>Account Number</h4>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Required"
                  />
                </div>


                <div className='mt-3 d-none'>
                  <h4>Number of shares</h4>
                  <input
                    type="number"
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

export default Financial;