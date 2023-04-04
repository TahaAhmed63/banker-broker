import React from 'react'

export const Financial = ({setFinalInstitute, value}) => {

  console.log(value)

const {finalInstitute} = value
const {accountNumber} = value
const {numberOfShares} = value
  
return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="mt-3">
                  <h5 className='textdark'>Financial Institution</h5>
                  <input
                    type="text"
                    className="form-control"
                    value={finalInstitute}
                    placeholder="Required"
                    onChange={(e) => setFinalInstitute((perv)=>({...perv,finalInstitute:(e.target.value)}))}
                  />
                </div>


                <div className="mt-3">
                  <h5 className='textdark'>Account Number</h5>
                  <input
                    type="number"
                    className="form-control"
                    value={accountNumber}
                    placeholder="Required"
                    onChange={(e) => setFinalInstitute((perv)=>({...perv,accountNumber:(e.target.value)}))}
                  />
                </div>


                <div className='mt-3 d-none'>
                  <h4>Number of shares</h4>
                  <input
                    type="number"
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

export default Financial;