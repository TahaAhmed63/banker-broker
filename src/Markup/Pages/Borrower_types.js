import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Logout from "../Layout/Logout";
import '../../css/style.css'
import Footer from "../Layout/Footer";

const Borrower_types = () => {
  const icon = require("../../Images/buy-icon.png");
  return (
    <>
      <Header />
      <section className="bor_types h-86">
        <div className="container" style={{marginTop: "-3rem"}}>
          <div className="row mt-3 pt-4">
            <div className="card custom_card mt-5 w-90 mx-auto px-5">
              <h3 className="text-center mt-3">Please Select your Option</h3>
              <div className="container">
                <div className="row my-5">
                  <div className="col-md-4 mt-3 mt-md-0">
                    <Link to={"/new_mortage"}>
                      <div className="card cardes  ">
                        <div className="text-center">
                          <img
                            src={icon}
                            alt=""
                            width={"40%"}
                            height={"100%"}
                            className="text-center "
                          />
                          <h5 className="mb-4 text-black">Mortgage</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4 mt-3 mt-md-0">
                    <Link to={"#"}>
                      <div className="card cardes rounded">
                        <div className="text-center">
                          <img
                            src={icon}
                            alt=""
                            width={"40%"}
                            height={"100%"}
                            className="text-center "
                          />
                          <h5 className="mb-4  text-black">Real State</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4 mt-3 mt-md-0">
                    <Link  to={"#"}>
                      <div className="card cardes rounded">
                        <div className="text-center">
                          <img
                            src={icon}
                            alt=""
                            width={"40%"}
                            height={"100%"}
                            className="text-center "
                          />
                          <h5 className="mb-4  text-black">Insurance</h5>
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
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Borrower_types;
