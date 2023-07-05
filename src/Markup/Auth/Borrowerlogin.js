/* eslint-disable jsx-a11y/heading-has-content */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Baseurl from "../../Baseurl";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
const Borrowerlogin = () => {
  const [loader, setLoader] = useState(false);
  // const params = useParams()
  const history = useHistory();
  const [loginres, setLoginres] = useState();
  const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Data = new FormData();
  Data.append("email", email);
  Data.append("password", password);
  const Login = () => {
    setLoader(true);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}borrower/login`,
      data: Data,
    };

    axios(config)
      .then(function (response) {
        setLoader(true);
        console.log(response);
        setLoginres(response?.data);
        console.log(response?.data?.data);
        setToken(response?.data?.token);
        localStorage.setItem("usertoken", response?.data?.token);
        localStorage.setItem(
          "userDetail",
          JSON.stringify(response?.data?.data)
        );
        if (response.data.status === true) {
          setLoader(false);
          history.push("/dashboard");
          Swal.fire({
            toast: true,
            icon: "success",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        } else {
          setLoader(false);

          Swal.fire({
            toast: true,
            icon: "error",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        }
      })
      .catch(function (error) {
        console.log(error,"error")
        setLoader(false);

        Swal.fire({
          toast: true,
          icon: "success",
          title: error?.response?.data?.message,
          animation: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      });
  };
  return (
    <>
      <>{loader ? <div className="loader"></div> : null}</>
      <Header />
      <section className="bg-light vh-75">
        <div className="container-fluid login_container">
          <div className="row">
            <div className="card custom_card bg-white my-5 ">
              <div className="row">
                <div className="col-md-6 pt-4 my-5 mt-5 border-right">
                  <div className="my-3 mx-3">
                    <Link
                      className="service twitter col-md-12 service--text"
                      id=""
                      target="_top"
                      to="#"
                    >
                      <span className="logo"></span>
                      <span className="service--text" title="Sign in with Twitter">
                        Sign in with Twitter
                      </span>
                    </Link>
                    <Link
                      className="service facebook col-md-12 service--text"
                      id=""
                      target="_top"
                      to="#"
                    >
                      <span className="logo"></span>
                      <span className="service--text" title="Sign in with Twitter">
                        Sign in with Facebook
                      </span>
                    </Link>
                    <Link
                      className="service google col-md-12 service--text"
                      id=""
                      target="_top"
                      to="#"
                    >
                      <span className="logo"></span>
                      <span className="service--text" title="Sign in with google">
                        Sign in with Google
                      </span>
                    </Link>
                    <Link
                      className="service linkedin col-md-12 service--text"
                      id=""
                      target="_top"
                      to="#"
                    >
                      <span className="logo"></span>
                      <span className="service--text" title="Sign in with linkedin">
                        Sign in with linkedin
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="my-3 mx-3">
                    <h3>Sign In</h3>
                    <p className="fs-small">
                    Don't have an account?&nbsp;
                      <span>
                        <Link  to={"#"}>Create Account</Link>
                      </span>
                    </p>
                    <div className="row mt-3">
                      <div className="form-group w-75">
                        <label className="mb-2 fs-small">Email</label>
                        <div className="input-group">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            required=""
                            // value={"mnadeem00064@gmail.com"}
                            className="form-control py-2"
                            placeholder="Your Email Address"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="form-group w-75">
                        <label className="mb-2 fs-small">Password</label>
                        <div className="input-group">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            required=""
                            className="form-control py-2"
                            type="Password"
                          />
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="mt-3 text-right">
                        <Link  to={"#"}>
                          <h6>Forgot Password ?</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <Link
                        to={"#"}
                        className="btn btn-primary w-auto ms-3"
                        onClick={() => Login()}
                      >
                        Sign In &nbsp; 
                        {/* <i className="fa fa-arrow-right"></i> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Borrowerlogin;
