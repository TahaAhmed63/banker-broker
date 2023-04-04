import React,{useState} from 'react'

function Base() {
  const [currentEmployee, setcurrentEmployee] = useState(false);
  return (
    <>
    <h2 className='mt-4'>Base Employment Income</h2>
    <div className="d-flex">
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="current" />
  <label className="form-check-label" for="current">
    Current
  </label>
</div>

    <div className="form-check ms-3 ms-md-5">
  <input className="form-check-input" type="checkbox" value="" id="primary" />
  <label className="form-check-label" for="primary">
   Self Employed
  </label>
</div>
    </div>

<h6 className='mt-5 mb-3'>EMPLOYMENT DETAILS</h6>

<form action="">
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Employer Name</span>
  <input type="text" className="form-control" placeholder="Required" aria-label="Username" aria-describedby="basic-addon1" />
  <button className="btn btn-outline-secondary" type="button">+</button>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Start Date</span>
  <input type="date" className="form-control" placeholder="Required" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div className="form-check my-2">
  <input className="form-check-input" type="checkbox" value="" id="CurrentEmployee" onChange={()=>setcurrentEmployee(!currentEmployee)} />
  <label className="form-check-label" for="CurrentEmployee">
  Current Employee?
  </label>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">End Date</span>
  <input type="date" className="form-control" placeholder="Required" aria-label="Username" aria-describedby="basic-addon1" disabled={currentEmployee} />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Official Address</span>
  <input type="text" className="form-control" placeholder="Required" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Position</span>
  <input type="text" className="form-control" placeholder="Required" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Work Phone</span>
  <input type="number" className="form-control" placeholder="(xxx) xxx-xxxx" aria-label="Username" aria-describedby="basic-addon1" />
  <input type="number" className="form-control" placeholder="Ext." aria-label="Username" aria-describedby="basic-addon1" />
</div>

<h6 className='mt-5 mb-3'>INCOME DETAILS</h6>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Base</span>
  <input type="number" className="form-control" placeholder="Amount Required" aria-label="Username" aria-describedby="basic-addon1" />
  <select className="form-select py-2" id="inputGroupSelect02">
    <option value="2">ANNUALLY</option>
    <option value="3">MONTHLY</option>
  </select>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Bonus</span>
  <input type="number" className="form-control" placeholder="Optional" aria-label="Username" aria-describedby="basic-addon1" />
  <select className="form-select py-2" id="inputGroupSelect02">
    <option value="2">ANNUALLY</option>
    <option value="3">MONTHLY</option>
  </select>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Commissions</span>
  <input type="number" className="form-control" placeholder="Optional" aria-label="Username" aria-describedby="basic-addon1" />
  <select className="form-select py-2" id="inputGroupSelect02">
    <option value="2">ANNUALLY</option>
    <option value="3">MONTHLY</option>
  </select>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Overtime</span>
  <input type="number" className="form-control" placeholder="Optional" aria-label="Username" aria-describedby="basic-addon1" />
  <select className="form-select py-2" id="inputGroupSelect02">
    <option value="2">ANNUALLY</option>
    <option value="3">MONTHLY</option>
  </select>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Other</span>
  <input type="number" className="form-control" placeholder="Optional" aria-label="Username" aria-describedby="basic-addon1" />
  <select className="form-select py-2" id="inputGroupSelect02">
    <option value="2">ANNUALLY</option>
    <option value="3">MONTHLY</option>
  </select>
</div>



    <div className="form-check mt-4">
  <input className="form-check-input" type="checkbox" value="" id="Employed" />
  <label className="form-check-label" for="Employed">
  Employed by a family member, property seller, real estate agent, etc.
  </label>
</div>
<div className="d-flex my-4">
                    <button className="btn btn-primary mx-2 px-md-5 w-100">SAVE</button>
                    <button className="btn btn-light mx-2 px-md-5 border w-100">CLOSE</button>
                </div>
</form>



    </>
  )
}

export default Base