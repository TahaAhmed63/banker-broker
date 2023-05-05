/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import SVG from "../../../../Images/sidebar.svg";
import "../../../../css/style.css"

const ProfileInfo = () => {
  const profile = require("../../../../Images/userlogo.jpg");

  return (
    <>
      <div className="col-md-2 ">
        <aside id="sidear2 ">
          <ul className="navbar-nav navbar-right">
            <li className="">
              <Link to="#">
                <img
                  alt="image"
                  src={profile}
                  className="user-img-radious-style userlogoaside"
                />
              </Link>
              <div className="info">
                <h3 className="mb-2 fw-bold">Massiha Kouhssari</h3>
                <p>BankerBroker CA MLO </p>
                <p>massey@bankerbroker.com </p>
                <p>(949) 607-8808</p>
                <p>NMLS #288498</p>
              </div>
              <div className="d-flex justify-content-around mr-5">
                <button type="button" className="btn hoverbtn btn-custom">
                  <FaEnvelope />
                  &nbsp; Email
                </button>
                <button type="button" className=" btn btn-custom">
                  {" "}
                  <FaPhone />
                  &nbsp;Phone
                </button>
              </div>
              <hr />
              <div className="info2">
                <h3 className="mb-2 fw-bold">C2 Financial Corporation</h3>
                <p className="mt-1">Main 10509 Vista Sorrento Pkwy</p>
                <p>#400 San Diego, CA 92121</p>
                <p className="mt-3">help@bankerbroker.com</p>
                <p>949-607-8808</p>
                <p>NMLS #135622 </p>
              </div>
              <p className="housing-logo">
                <img src={SVG} className="hicon" />
              </p>
              <div className="info2 mtop">
                <p>Privacy Police</p>
                <p>Term of Use</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
      
    </>
  );
};

export default ProfileInfo;
