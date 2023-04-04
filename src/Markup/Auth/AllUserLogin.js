/* eslint-disable jsx-a11y/heading-has-content */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Baseurl from "../../Baseurl";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const AllUser = () => {
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const [loginres, setLoginres] = useState("");
  const [bund, setBund] = useState([]);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Data = new FormData();
  Data.append("email", email);
  Data.append("password", password);
  const Login = () => {
    setLoader(true);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}login`,
      data: Data,
    };

    axios(config)
      .then(function (response) {
        setLoader(true);
        console.log(response);
        setLoginres(response?.data);
        console.log(response?.data?.data?.id);
        setToken(response?.data?.token);
        if (response.status === 200) {
          setLoader(false);
          localStorage.setItem("usertoken", response?.data?.token);
          localStorage.setItem(
            `userDetail`,
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("nodeIds", response?.data?.data?.id);
          history.push("/allusers");
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
            title: response?.data?.message.password,
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
        setLoader(false);
        setBund(error?.response?.data?.errors);

        Swal.fire({
          toast: true,
          icon: "error",
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
  console.log(bund);
  return (
    <>
      <>{loader ? <div className="loader"></div> : null}</>
      <Header />
      <section className="bg-light vh-75">
        <div>
          <div className="container-fluid " style={{ maxWidth: "50%" }}>
            <br />
            <div className="row ">
              <div className="card bg-white pb-5 rounded bank_login">
                <div className="row">
                  <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                    <h3
                      className="text-info mt-5 sans_serif"
                      style={{ fontWeight: 900 }}
                    >
                      BANKER-BROKER
                    </h3>
                    <img
                      src="http://bankerbroker.developer-oa.xyz/app-assets/images/login.png"
                      alt="branding logo"
                      className="mb-5"
                      width={"100%"}
                    />
                  </div>

                  <div className="col-lg-6 pe-4">
                    <div className="my-3 mx-3 w-85">
                      <h3 className="text-dark mb-0 text-center mt-5 sans_serif">
                        <strong
                          className="sans_serif"
                          style={{ fontWeight: 900 }}
                        >
                          LOGIN
                        </strong>
                      </h3>
                      <div className="row mt-5">
                        <div className="form-group">
                          <label className="mb-2">Email </label>
                          <div className="input-group">
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              required=""
                              className="form-control py-2"
                              placeholder="Your Email Address"
                              type="email"
                            />
                          </div>
                          {bund?.email ? (
                            <p className="text-danger">{bund?.email[0]}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="form-group">
                          <label className="mb-2">Password</label>
                          <div className="input-group">
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              required=""
                              className="form-control py-2"
                              type="Password"
                            />
                          </div>
                          {bund ? (
                            <p className="text-danger mt-1">{bund}</p>
                          ) : null}{" "}
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="mt-1 text-right ml-auto">
                          <Link  to={"#"}>
                            <p className="float-right mb-0 fs-small">
                              Forgot Password ?
                            </p>
                          </Link>
                          <div className="mt-">
                            <input type="checkbox" />
                            &nbsp; <span className="fs-small">Remember me</span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3 px-3">
                        <Link
                          to={"#"}
                          className="btn all_login_btn"
                          onClick={() => Login()}
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllUser;
