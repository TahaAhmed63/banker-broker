import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Error404() {
  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content">
        <div className="dez-bnr-inr overlay-black-middle"></div>
        <div className="section-full content-inner-3 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 error-page text-center">
                <h2 className="dz_error text-secondry">404</h2>
                <h3>OOPS!</h3>
                <h4 className="text-primary">Page Not Found</h4>
                <Link to={"/"} className="btn btn-primary">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Error404;
