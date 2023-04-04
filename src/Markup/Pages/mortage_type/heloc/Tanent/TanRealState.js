import React, { useState } from "react";
import { Button, Modal } from "antd";

import {
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiTwotoneEdit,
} from "react-icons/ai";
import Header from "../../../../Layout/Header";
import HelSideBar from "../HelSidebar";
import ProfileInfo from "../../Profile/ProfileInfo";

function TanRealState() {
  const [showform, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <HelSideBar />

          <div className="col-md-8 my-5 ps-lg-5 ">
            <div className="row">
              <div className="col-lg-9">
                <h2 className="mt-1">Real State</h2>
              </div>

              <p className="h5 fw-semibold mt-4">Do you own any real estate?</p>
              <div className="row">
                <div className="col-3 col-md-2 col-lg-1 my-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="YES"
                    autocomplete="off"
                    onChange={() => {
                      setShowForm(true);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="YES">
                    Yes
                  </label>
                </div>
                <div className="col-3 col-md-2 col-lg-1 my-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="NO"
                    autocomplete="off"
                    onChange={() => {
                      setShowForm(false);
                    }}
                  />
                  <label className="btn btn-outline-primary px-3 py-2" for="NO">
                    No
                  </label>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-9">
                  {showform ? (
                    <>
                      <p>and other details</p>
                      <div className="input-group">
                        <span className="input-group-text">
                          <AiOutlineSearch />
                        </span>
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          aria-label="First name"
                          className="form-control"
                        />
                        <span className="input-group-text" onClick={showModal}>
                          <AiTwotoneEdit />
                        </span>
                      </div>

                      <div className="input-group mt-3">
                        <span className="input-group-text">Property Value</span>
                        <input
                          type="Number"
                          placeholder="0"
                          aria-label="First name"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mt-3">
                        <span className="input-group-text">Property Usage</span>
                        <select className="form-select py-2" id="inputGroupSelect01">
                          <option selected disabled>
                            Select Property Usage
                          </option>
                          <option value="Primary Residence">
                            Primary Residence
                          </option>
                          <option value="Investment">Investment</option>
                          <option value="Second Home">Second Home</option>
                        </select>
                      </div>
                      <div className="input-group mt-3">
                        <span className="input-group-text">Property Status</span>
                        <select className="form-select py-2" id="inputGroupSelect01">
                          <option selected disabled>
                            Select Property Status
                          </option>
                          <option value="Pending Sale">Pending Sale</option>
                          <option value="Retain">Retain</option>
                          <option value="Sold">Sold</option>
                        </select>
                      </div>
                      <div className="input-group mt-3">
                        <span className="input-group-text">Property Type</span>
                        <select className="form-select py-2" id="inputGroupSelect01">
                          <option selected disabled>
                            Select Property Type
                          </option>
                          <option value="Single Family">Single Family</option>
                          <option value="Condominium">Condominium</option>
                          <option value="Cooperative">Cooperative</option>
                          <option value="Manufactured Home">
                            Manufactured Home
                          </option>
                          <option value="Two to Four Family">
                            Two to Four Family
                          </option>
                          <option value="Other">Other</option>
                          <option value="Commerical">Commerical</option>
                          <option value="Farm">Farm</option>
                          <option value="Land">Land</option>
                          <option value="Mixed Use">Mixed Use</option>
                          <option value="Mobile Home">Mobile Home</option>
                          <option value="Multi Family +4">
                            Multi Family +4
                          </option>
                          <option value="Townhouse">Townhouse</option>
                        </select>
                      </div>

                      <div className="input-group mt-3">
                        <span className="input-group-text">Monthly Expenses</span>
                        <input
                          type="Number"
                          placeholder="Ins, Maint, Taxes, etc"
                          aria-label="First name"
                          className="form-control"
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row">
                <div className=".col-md-6 col-lg-4">
                  <label className="text-secondary h6 mt-4">
                    Next is <span className="text-dark">Declarations</span>
                  </label>
                  <br />
                  <button className="btn btn-primary rounded-0 mt-2">
                    Save And Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProfileInfo/>
        </div>
      </div>

      <Modal
        title="Update Address"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}

        footer={[
            <Button key="back" onClick={handleCancel}>
              Close
            </Button>,
            <Button key="submit" type="primary"  onClick={handleOk}>
              Save Changes
            </Button>
          ]}
      >
        <div className="row">
          <div className="col-lg-9">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Unit/Apt</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Unit/Apt"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">City</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">State</label>
              <select className="form-select py-2" aria-label="Default select example">
                <option value="">--</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AS">American Samoa</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GU">Guam</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virgin Islands</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group my-2">
              <label for="exampleFormControlInput1">Country Name</label>
              <select className="form-select py-2" aria-label="Default select example">
                <option selected disabled>
                  --
                </option>
                <option value="ALACHUA">ALACHUA</option>
                <option value="BAKER">BAKER</option>
                <option value="BAY">BAY</option>
                <option value="BRADFORD">BRADFORD</option>
                <option value="BREVARD">BREVARD</option>
                <option value="BROWARD">BROWARD</option>
                <option value="CALHOUN">CALHOUN</option>
                <option value="CHARLOTTE">CHARLOTTE</option>
                <option value="CITRUS">CITRUS</option>
                <option value="CLAY">CLAY</option>
                <option value="COLLIER">COLLIER</option>
                <option value="COLUMBIA">COLUMBIA</option>
                <option value="DESOTO">DESOTO</option>
                <option value="DIXIE">DIXIE</option>
                <option value="DUVAL">DUVAL</option>
                <option value="ESCAMBIA">ESCAMBIA</option>
                <option value="FLAGLER">FLAGLER</option>
                <option value="FRANKLIN">FRANKLIN</option>
                <option value="GADSDEN">GADSDEN</option>
                <option value="GILCHRIST">GILCHRIST</option>
                <option value="GLADES">GLADES</option>
                <option value="GULF">GULF</option>
                <option value="HAMILTON">HAMILTON</option>
                <option value="HARDEE">HARDEE</option>
                <option value="HENDRY">HENDRY</option>
                <option value="HERNANDO">HERNANDO</option>
                <option value="HIGHLANDS">HIGHLANDS</option>
                <option value="HILLSBOROUGH">HILLSBOROUGH</option>
                <option value="HOLMES">HOLMES</option>
                <option value="INDIAN RIVER">INDIAN RIVER</option>
                <option value="JACKSON">JACKSON</option>
                <option value="JEFFERSON">JEFFERSON</option>
                <option value="LAFAYETTE">LAFAYETTE</option>
                <option value="LAKE">LAKE</option>
                <option value="LEE">LEE</option>
                <option value="LEON">LEON</option>
                <option value="LEVY">LEVY</option>
                <option value="LIBERTY">LIBERTY</option>
                <option value="MADISON">MADISON</option>
                <option value="MANATEE">MANATEE</option>
                <option value="MARION">MARION</option>
                <option value="MARTIN">MARTIN</option>
                <option value="MIAMI-DADE">MIAMI-DADE</option>
                <option value="MONROE">MONROE</option>
                <option value="NASSAU">NASSAU</option>
                <option value="OKALOOSA">OKALOOSA</option>
                <option value="OKEECHOBEE">OKEECHOBEE</option>
                <option value="ORANGE">ORANGE</option>
                <option value="OSCEOLA">OSCEOLA</option>
                <option value="PALM BEACH">PALM BEACH</option>
                <option value="PASCO">PASCO</option>
                <option value="PINELLAS">PINELLAS</option>
                <option value="POLK">POLK</option>
                <option value="PUTNAM">PUTNAM</option>
                <option value="SANTA ROSA">SANTA ROSA</option>
                <option value="SARASOTA">SARASOTA</option>
                <option value="SEMINOLE">SEMINOLE</option>
                <option value="ST JOHNS">ST JOHNS</option>
                <option value="ST LUCIE">ST LUCIE</option>
                <option value="SUMTER">SUMTER</option>
                <option value="SUWANNEE">SUWANNEE</option>
                <option value="TAYLOR">TAYLOR</option>
                <option value="UNION">UNION</option>
                <option value="VOLUSIA">VOLUSIA</option>
                <option value="WAKULLA">WAKULLA</option>
                <option value="WALTON">WALTON</option>
                <option value="WASHINGTON">WASHINGTON</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TanRealState;
