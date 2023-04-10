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
                  <h4 className='mb-3' style={{fontWeight:"600", fontSize:"20px"}}>Financial Institution</h4>
                  <input
                    type="number"
                    className="form-control rounded-0 hinpt"
                    value={finalInstitute}
                    placeholder="Required"
                    onChange={(e) => setFinalInstitute((perv)=>({...perv,finalInstitute:(e.target.value)}))}
                  />
                </div>


                <div>
                  <h4 className='pb-3' style={{fontWeight:"600", fontSize:"20px"}}>Account Number</h4>
                  <input
                    type="number"
                    className="form-control hinpt rounded-0"
                    value={accountNumber}
                    placeholder="Required"
                    onChange={(e) => setFinalInstitute((perv)=>({...perv,accountNumber:(e.target.value)}))}
                  />
                </div>


                <div className='mt-3 d-none'>
                  <h4 className='pb-3' style={{fontWeight:"600", fontSize:"20px"}}>Number of shares</h4>
                  <input
                    type="number"
                    className="form-control hinpt rounded-0"
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