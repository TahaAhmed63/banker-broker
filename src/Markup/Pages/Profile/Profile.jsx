import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";
import Profileimg from "../../../Images/profile1.png";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

const Profile = () => {
  const [loader, setLoader] = useState(false);
  const [array, SetArray] = useState();
  const [bund, setBund] = useState("");


  const Get_Profile = () => {
    setLoader(true);
    // console.log(bund2?.map((e)=>e),"bund2")
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "get",
      url: `${Baseurl.baseurl}get/borrower/profile/data`,
      // data: BorrowerData2,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        SetArray(
          response?.data?.data
        );
        console.log(response?.data?.data, "get");
      
        console.log(response?.data?.data, "res");
        if (response?.data?.status === true) {
          setLoader(false);

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
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setBund(error?.response?.data?.errors);
        console.log(error, "error");

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

// console.log(bund?.address?.map((e,i)=>i),"bund")
useEffect(() => {
  Get_Profile();
}, []);
  return (
    <>
          {loader ? <div className="loader"></div> : null}

      <Header />
      <section>
        <div className="container box_shadow mt-5" style={{ zIndex: "-1" }}>
          <div className="row">
            <div
              className="col-md-4 py-3"
              style={{ borderRight: "1px solid #dee2e6" }}
            >
              <div>
             { Baseurl.imgurl ?
                <img
                  className="w-50 rounded-circle mx-auto d-block"
                  src={ array?.image  == "default.jpeg" ? Profileimg : Baseurl.imgurl + array?.image_path + "/" + array?.image  }
                  // src={Profileimg}
                /> : "No Profile photo"}
                <p className="text-secondary text-center my-2">
                {array?.first_name}
                </p>
              </div>
            </div>
            <div className="col-md-8 py-3">
              <div>
                <div className="row mt-5 w-96 mx-auto">
                  <div className="col-md-6">
                    <input
                      className="form-control py-2"
                      type="text"
                      id=""
                      defaultValue={array?.first_name}
                      disabled

                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control py-2"
                      type="text"
                      id=""
                      defaultValue={array?.last_name
                      }
                      disabled

                    />
                  </div>
                </div>
                <div className="row mt-5 w-96 mx-auto">
                  <div className="col-md-12">
                    <input
                      className="form-control py-2"
                      type="email"
                      id=""
                      defaultValue={array?.email}
                                            disabled

                    />
                  </div>
                </div>
                <div className="row mt-5 w-96 mx-auto">
                  <div className="col-md-12">
                    <input
                      className="form-control py-2"
                      type="number"
                      id=""
                      defaultValue={array?.phone}
                      disabled

                    />
                  </div>
                </div>
                {/* <div className="row mt-5 w-96 mx-auto">
                  <div className="col-md-12">
                    <input
                      className="form-control py-2"
                      type="text"
                      id=""
                      defaultValue={array?.}
                    />
                  </div>
                </div> */}
                <div className="row mt-5">
                    <Link to="/updateprofile" className="btn btn-primary w-25 mx-auto d-block">
                      Edit Profile
                    </Link>
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

export default Profile;
