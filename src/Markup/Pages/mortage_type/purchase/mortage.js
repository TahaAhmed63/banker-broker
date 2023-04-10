import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Baseurl from "../../../../Baseurl";
import Footer from "../../../Layout/Footer";
import Header from "../../../Layout/Header";
import Logout from "../../../Layout/Logout";

const Mortage = () => {
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const icon = require("../../../../Images/buy-icon.png");
  const [assignid, setAssignid] = useState("");
  const GettingidPurchase = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}assign/application/id`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        localStorage.setItem("assignId", response?.data?.data?.id);
        localStorage.removeItem("newid");
        if (response.data.status === true) {
          setLoader(false);
          history.push("/mortage_info");

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
          icon: "error",
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
  const GettingidRef = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}mortgage/refinance/assign/application/id`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        localStorage.setItem("assignId", response?.data?.data?.id);
        localStorage.removeItem("newid");
        if (response.data.status === true) {
          setLoader(false);
          history.push("/ref/mortageinfo");

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
          icon: "error",
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
  const GettingidTanent = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/assign/application-id`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        localStorage.setItem("assignId", response?.data?.data?.id);
        localStorage.removeItem("newid");

        if (response.data.status === true) {
          setLoader(false);
          history.push("/heloc");

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
          icon: "error",
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

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <section className="bor_types">
        <div className="container">
          <div className="row mb-5 pt-4">
            <div className="card custom_card mt-5 py-4 w-90 mx-auto px-5">
              <h3 className="text-center mt-2">Please Select your Option</h3>
                <div className="row  justify-content-center">
                  <div className="col-md-3 my-3">
                    <div
                      className="card cardes rounded py-4"
                      onClick={() => GettingidPurchase()}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <img
                          src={icon}
                          alt=""
                          width={"35%"}
                          // height={"100%"}
                          className="text-center "
                        />
                        <h6 className="text-black">Purchase</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 my-3">
                    <div
                      className="card cardes rounded py-4"
                      onClick={() => GettingidRef()}
                    >
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <img
                          src={icon}
                          alt=""
                          width={"35%"}
                          // height={"100%"}
                          className="text-center "
                        />
                        <h6 className="text-black">Refinance</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 my-3">
                    <Link>
                      <div
                        className="card cardes rounded py-4"
                        onClick={() => GettingidTanent()}
                      >
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                          <img
                            src={icon}
                            alt=""
                            width={"35%"}
                            // height={"100%"}
                            className="text-center "
                          />
                          <h6 className="text-black">Heloc</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="text-center">
                      <Logout classes="btn btn-outline-primary fw-bolder" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      <Footer />
      </section>
    </>
  );
};

export default Mortage;
