/* eslint-disable jsx-a11y/alt-text */
import Logo from "../../Images/logo.png";
import Img from "../../Images/profile.png";
import Mortageside from "../Pages/mortage_type/purchase/Mortageside";
import Logout from "./Logout";
import user from "../../Images/icons/user.png";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { IoHomeSharp } from 'react-icons/io5';
import { IoNotifications } from 'react-icons/io5';
import { BsFillChatFill } from 'react-icons/bs';

import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../Baseurl";
import { Link, useHistory } from "react-router-dom";
import Imgbaseurl from "../../Imgbaseurl";
const Header = () => {
  let Details = localStorage.getItem("userDetail");
  Details = JSON.parse(Details);
  const [loader, setLoader] = useState(false);
  const [getcompany, setGetCompany] = useState([]);
  let userdata = localStorage.getItem("userDetail");
  let token = localStorage.getItem("usertoken");
  const history = useHistory()

  // userdata = JSON.parse(userdata);
  // const GetCompanies = () => {
  //   setLoader(true);
  //   let token = localStorage.getItem("usertoken");
  //   var config = {
  //     method: "get",
  //     url: `${Baseurl.baseurl}get/all/companies`,
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(response?.data, "Getting Compaines");
  //       setGetCompany(response?.data?.data);
  //       if (response?.data?.status === true) {
  //         setLoader(false);
  //         Swal.fire({
  //           toast: true,
  //           icon: "success",
  //           title: response?.data?.message,
  //           animation: true,
  //           position: "top-right",
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true,
  //           didOpen: (toast) => {
  //             toast.addEventListener("mouseenter", Swal.stopTimer);
  //             toast.addEventListener("mouseleave", Swal.resumeTimer);
  //           },
  //         });
  //         window.scrollTo({
  //           top: 0,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         setLoader(false);
  //       }
  //     })
  //     .catch(function (error) {
  //       setLoader(false);
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //       Swal.fire({
  //         toast: true,
  //         icon: "error",
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: "top-right",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });
  //     });
  // };

  // useEffect(() => {
  //   if (Details?.role_id === 2) GetCompanies();
  // }, []);
  return (
    <>
      <div className="container-fluid bg-white side_header fixed_nav">
        <div className="d-flex py-2 justify-content-between align-items-center px-4">
          <div>
            <Link to={'/new_mortage'}>
              <img
                width="160px"
                className="header_logo"
                src={

                  Logo
                }
                alt=""
              />
            </Link>
          </div>


          {token ? <div >
            <div style={{ display: "flex" }}>
              <div>
                  <div style={{ display: "flex" }}>
                    <Link  to={"#"}>
                    <p className="mt-3 mx-2"><BsFillChatFill size={24} /></p>
                    </Link>
                    <Link  to={"#"}>
                    <p className="mt-3 mx-2"><IoNotifications size={24} /></p>
                    </Link>
                <Link to={'/new_mortage'}>
                    <p className="mt-3 mx-2"><IoHomeSharp size={24} /></p>
                </Link>
                  </div>
              </div>
              <div className="dropdown d-flex align-items-center">
                <img
                  className="dropbtn me-2 "

                  src={user}
                />
                <span
                  className="d-none d-sm-block"
                  style={{ textTransform: "capitalize" }}
                >
                  {userdata?.first_name ? userdata?.first_name : userdata?.type}{" "}
                  &nbsp;
                  {/* <i className="fa fa-angle-down"></i> */}
                  <p className="fw-bold">MIAN</p>
                </span>
                <div className="dropdown-content">
                  <ul className="py-1 px-0 m-0">
                    <Link to="/profile" className="p-0">
                      <li className="py-2 ms-2">
                        <CgProfile className="fs-5 ms-1" />
                        <span className="ms-2">Profile</span>
                      </li>
                    </Link>
                    <Link to="/dashboard" className="p-0">
                      <li className="py-2 ms-2 d-flex">
                        <MdDashboard className="fs-5 ms-1" />
                        <span className="ms-2">Dashboard</span>
                      </li>
                    </Link>
                    <Link to="/applications" className="p-0">
                      <li className="py-2 ms-2">
                        <BiEdit className="fs-5 ms-1" />
                        <span className="ms-2">Application</span>
                      </li>
                    </Link>
                    <li className="py-2 ms-2">
                      <Logout classes="ps-0 pt-0" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
