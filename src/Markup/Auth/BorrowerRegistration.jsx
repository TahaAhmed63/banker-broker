/* eslint-disable jsx-a11y/heading-has-content */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Baseurl from "../../Baseurl";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const BorrowerRegistration = () => {
  const [loader, setLoader] = useState(false);
  const [verfication, setVerficationResponse] = useState();
  const [registrationformShow, setregistrationformShow] = useState(true);
  let { useremail, key, id } = useParams();
  const [bund, setBund] = useState("");

  console.log(key, id, useremail, "key");

  const history = useHistory();
  const [loginres, setLoginres] = useState();
  const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [Code, setCode] = useState();
  const [lastname, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const Data = new FormData();
  Data.append("email", email);
  Data.append("password", password);
  Data.append("first_name", firstname);
  Data.append("last_name", lastname);
  Data.append("phone", phone);
  Data.append("verification_id", id);
  Data.append("key", key);
  const Login = () => {
    setLoader(true);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}borrower/new/registration`,
      data: Data,
    };

    axios(config)
      .then(function (response) {
        setLoader(true);
        console.log(response);
        setLoginres(response?.data);
        console.log(response?.data?.data, "response login");
        setToken(response?.data?.token);
        localStorage.setItem("usertoken", response?.data?.token);
        localStorage.setItem(
          "userDetail",
          JSON.stringify(response?.data?.data)
        );
        if (response.data.status === true) {
          setLoader(false);
          setregistrationformShow(false);
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
          console.log(response?.data?.errors.email, "err agaya ha");

          Swal.fire({
            toast: true,
            icon: "error",
            title: response?.data?.error,
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
          icon: "success",
          title: error,
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
  const Verfiycode = () => {
    const Data = new FormData();
    Data.append("code", Code);
    Data.append("user_id", loginres?.data.id);
    setLoader(true);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}borrower/verification`,
      data: Data,
    };

    axios(config)
      .then(function (response) {
        setLoader(true);
        console.log(response);
        // setLoginres(response?.data);
        history.push("/");
        console.log(response?.data?.data);
        // setToken(response?.data?.token);
        localStorage.setItem("usertoken", response?.data?.token);
        localStorage.setItem(
          "userDetail",
          JSON.stringify(response?.data?.data)
        );
        if (response.data.status === true) {
          setLoader(false);
          //   setregistrationformShow(false)
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
        setLoader(false);

        Swal.fire({
          toast: true,
          icon: "success",
          title: error,
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
  const verification = () => {
    // alert()
    setLoader(true);

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}borrower/registration/${useremail}/&key/${key}/verification_id/${id}`,
    };

    axios(config)
      .then(function (response) {
        setLoader(true);
        console.log(response);
        setVerficationResponse(response);
        console.log(response?.data?.data);
        setFirstname(response?.data?.data?.name)
        setEmail(response?.data?.data?.receiver)
        setPhone(response?.data?.data?.phone)
        // setLast_name(response?.data?.data?.name)
        // setToken(response?.data?.token);
        // localStorage.setItem("usertoken", response?.data?.token);
        // localStorage.setItem(
        //   "userDetail",
        //   JSON.stringify(response?.data?.data)
        // );
        if (response.data.status === true) {
          setLoader(false);
          Swal.fire({
            toast: true,
            icon: "success",
            title: "verified",
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
            title: "Link is not verified",
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

        Swal.fire({
          toast: true,
          icon: "success",
          title: error,
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
  console.log(loginres);
  useEffect(() => {
    verification();
  }, []);
  return (
    <>
      <>{loader ? <div className="loader"></div> : null}</>
      {verfication?.data?.status === true && registrationformShow === true ? (
        <Header />
      ) : null}
      <section className="bg-light " style={{ height: window.screen.height }}>
        <div className="container-fluid " style={{ maxWidth: "80%" }}>
          <div className="row">
            <div className="card custom_card bg-white my-5 ">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="mx-5 mt-3"
                    src="https://bankerbroker.dev-oa.xyz/app-assets/images/signup.png"
                  />
                </div>
                {verfication?.data?.status === true &&
                registrationformShow === true ? (
                  <div className="col-md-6 mt-4 px-5">
                    <div className="my-3 ">
                      <h5 className="fw-bold fs-4">Create Account</h5>
                      <small className="">Already have an account? </small>
                      <a href="/" class="privacy mx-2">
                        <small>
                        Sign In

                        </small>
                      </a>
                      <div className="row mt-3 fw-bold">
                        <div className="col-md-12">
                          <div className="form-group  col-12">
                            <label className="mb-2 fs-small" style={{color:"#34395e"}}>First name</label>
                            <div className="input-groups">
                              <input
                                onChange={(e) => setFirstname(e.target.value)}
                                required=""
                                value={firstname}
                                // value={""}
                                placeholder="Your First Name"
                                type="text"
                                className="form-control bg-light py-2"
                                style={{ backgroundColor: "gray" }}
                              />
                              {bund?.first_name
                                ? bund?.first_name.map((e) => (
                                    <p className="text-danger">{e}</p>
                                  ))
                                : null}
                            </div>
                          </div>
                        </div>

                        <div className="form-group  col-12 ">
                          <label className="mb-2 fs-small" style={{color:"#34395e"}}>Last Name</label>
                          <div className="input-group">
                            <input
                              onChange={(e) => setLast_name(e.target.value)}
                              required=""
                              // value={""}
                              placeholder="Your Last Name"
                              className="form-control bg-light py-2"
                              style={{ backgroundColor: "gray" }}
                              type="text"
                            />
                            {bund?.last_name
                              ? bund?.last_name.map((e) => (
                                  <p className="text-danger">{e}</p>
                                ))
                              : null}
                          </div>
                        </div>

                        <div className="form-group ">
                          <label className="mb-2 fs-small" style={{color:"#34395e"}}>Email</label>
                          <div className="input-groups">
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              required=""
                              value={email}
                              placeholder="Your Email Address"
                              className="form-control bg-light py-2"
                              style={{ backgroundColor: "gray" }}
                              type="email"
                            />
                            {bund?.email
                              ? bund?.email.map((e) => (
                                  <p className="text-danger">{e}</p>
                                ))
                              : null}
                          </div>
                        </div>

                        <div className="form-group ">
                          <label className="mb-2 fs-small" style={{color:"#34395e"}}>Password</label>
                          <div className="input-group">
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              required=""
                              // value={""}
                              className="form-control bg-light py-2"
                              style={{ backgroundColor: "gray" }}
                              type="password"
                            />
                            {bund?.password
                              ? bund?.password.map((e) => (
                                  <p className="text-danger">{e}</p>
                                ))
                              : null}
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <div className="form-group ">
                          <label className="mb-2 fs-small">Phone</label>
                          <div className="input-group">
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              required=""
                              value={phone}
                              className="form-control bg-light py-2"
                              style={{ backgroundColor: "gray" }}
                              type="number"
                            />
                            {bund?.phone
                              ? bund?.phone.map((e) => (
                                  <p className="text-danger">{e}</p>
                                ))
                              : null}
                          </div>

                          <p className="mt-3">
                            {" "}
                            <small>
                              By clicking 'Create Account' button you agree to
                              our <br /> <a href="3">Terms of Use </a> and{" "}
                              <a href="3">our Privacy Policy</a>{" "}
                            </small>
                          </p>
                        </div>
                        <br />
                        <br />
                        <br />
                      </div>
                      <div className="row mt-3">
                        <Link
                          to={"#"}
                          className="btn btn-primary w-auto ms-3"
                          onClick={() => Login()}
                        >
                          Create Account&nbsp;
                          {/* <i className="fa fa-arrow-right"></i> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : verfication?.data?.status === false ? (
                  <h1>Invalid Link</h1>
                ) : null}
                {registrationformShow === false ? (
                  <div className="col-md-12">
                    <div className="my-3 ">
                      <h3>Borrower Code Verification</h3>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <div className="form-group  ">
                            <label className="mb-2 fs-small">Code</label>
                            <div className="input-group">
                              <input
                                onChange={(e) => setCode(e.target.value)}
                                required=""
                                // value={""}
                                placeholder="Code Send You on Email"
                                className="form-control bg-light py-2"
                                style={{ backgroundColor: "gray" }}
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <Link
                          to={"#"}
                          className="btn btn-primary w-auto ms-3"
                          onClick={() => Verfiycode()}
                        >
                          Verify &nbsp;
                          {/* <i className="fa fa-arrow-right"></i> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BorrowerRegistration;
