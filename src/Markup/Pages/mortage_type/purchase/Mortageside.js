import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./MortagageSIdebar.css";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { Progress } from "antd";
import axios from "axios";
import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";

const Mortageside = (props) => {
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const [bund, setBund] = useState("");
  
  const [allPostData, setAllPostData] = useState();
  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);

  const postData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}application/completion`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAllPostData(response?.data?.data);
        console.log(response?.data?.data, "sidebar response");
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          // history.push('/new_mortage')
          setLoader(false);
     
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
        // console.log(allGet, "all data");
        console.log(response, "my response");
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setBund(error?.response?.data?.errors);
      
      });
  };
  useEffect(() => {
    postData();
  }, []);
  const location = useLocation();
  const mort =
    location.pathname === "/mortage_info"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100 ";
  const pers =
    location.pathname === "/personal_info"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const cobo =
    location.pathname === "/Co-Borrowers"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const inc =
    location.pathname === "/Income"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const ass =
    location.pathname === "/assets"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const real =
    location.pathname === "/Real_state"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const Decl =
    location.pathname === "/declaration"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const demo =
    location.pathname === "/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const credit =
    location.pathname === "/credit"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const review =
    location.pathname === "/review"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      console.log(isOpen, "hui");
    }
    console.log(isOpen, "huihui");
  };

  return (
    <>
      <FaBars
        class=" none"
        onClick={() => {
          props.OnHandleToggle();
          handleToggle();
        }}
      />

      <FaBars
        class=" block"
        id="topnav-hamburger-icon"
        onClick={() => {
          props.OnHandleToggle();
          handleToggle();
        }}
      />

      <div
        className={
          isOpen === true
            ? "col-md-2 ps-0 sidebarmain fixed_side sidebar-nav open "
            : "d-none"
        }
      >
        <div className="px-4 my-3">
          <Link to="#">Dashboard</Link>
          <Progress percent={allPostData} status="actice" />
        </div>
        <div className="greyline"></div>
        <Link to={"/mortage_info"}>
          <div className={mort}>
            <div className="sidecircle">
              {location.pathname === "/mortage_info" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Mortgage</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/personal_info"}>
          <div className={pers}>
            <div className="sidecircle">
              {location.pathname === "/personal_info" ? (
                <>
                  <FaCheckCircle className="checkicon" />
                </>
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Personal Info</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/Co-Borrowers"}>
          <div className={cobo}>
            <div className="sidecircle">
              {location.pathname === "/Co-Borrowers" ? (
                <>
                  <FaCheckCircle className="checkicon" />
                </>
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Co-Borrowers</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/Income"}>
          <div className={inc}>
            <div className="sidecircle">
              {location.pathname === "/Income" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Income</div>
            <div></div>
          </div>
        </Link>
        <Link to={"assets"}>
          <div className={ass}>
            <div className="sidecircle">
              {location.pathname === "/assets" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}{" "}
            </div>
            <div className="mort grey_color fw-500">Assets</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/Real_state"}>
          <div className={real}>
            <div className="sidecircle">
              {location.pathname === "Real_state" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Real State</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/declaration"}>
          <div className={Decl}>
            <div className="sidecircle">
              {location.pathname === "/declaration" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Declaration</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/demographic"}>
          <div className={demo}>
            <div className="sidecircle">
              {location.pathname === "/demographic" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Demographic</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/credit"}>
          <div className={credit}>
            <div className="sidecircle">
              {location.pathname === "/credit" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Credit</div>
            <div></div>
          </div>
        </Link>
        <Link to={"/purchase/review"}>
          <div className={review}>
            <div className="sidecircle">
              {location.pathname === "/purchase/review" ? (
                <FaCheckCircle className="checkicon" />
              ) : null}
            </div>
            <div className="mort grey_color fw-500">Review and Submit</div>
            <div></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Mortageside;
