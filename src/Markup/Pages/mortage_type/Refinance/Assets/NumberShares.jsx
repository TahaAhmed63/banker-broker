import React from 'react'

export const NumberShares = ({setFinalInstitute, value}) => {

  const {numberOfShares} = value

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="mt-3">
                  <h4 className='pb-3' style={{fontWeight:"600", fontSize:"20px"}}>Number of shares</h4>
                  <input
                    type="text"
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

export default NumberShares;