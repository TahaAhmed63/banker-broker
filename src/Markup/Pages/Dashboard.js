import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Table from "react-bootstrap/Table";
import ProfileInfo from "./mortage_type/Profile/ProfileInfo";
import { FaArrowRight, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../Baseurl";
// import TanSideBar from "./mortage_type/heloc/Tanent/TanSideBar";
import { useHistory } from "react-router-dom";
import SidebarDash from "./mortage_type/heloc/Tanent/SidebarDash";

function Dashboard() {
  const history = useHistory();

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();

  const [dataFromREsponse, setDataFromResponse] = useState({});
  const { mortgage_purchase, mortgage_refinance, real_estate_rent__tenant } =
    dataFromREsponse;

  const getData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "Get",
      url: `${Baseurl.baseurl}all/completed/applications`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        if (response?.data?.status === true) {
          setLoader(false);
          console.log(response?.data?.message, "response?.data?.message");
          setDataFromResponse(response?.data?.data);
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
        console.log(error);
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setFieldsError(error?.response?.data?.errors);
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

  useEffect(() => {
    getData();
  }, []);




  

  const Data = new FormData();
  Data.append("Application_id", Assign_id);

  console.log(mortgage_purchase, "data");
  console.log(mortgage_refinance, "data");
  console.log(real_estate_rent__tenant, "data");

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <hr />
      <div className="container-fluid ps-4">
        <div className="row">
          <SidebarDash />
          <div className="col-md-8 new-mr1">
            <div className="row">
              <div className="">
                <button className="btn btn-primary px-4">
                  New <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="row">
              <Table striped bordered hover className="m-2">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Type</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* for map */}
                  {/* purchase */}
                  {mortgage_purchase
                    ? mortgage_purchase?.map((e, i) => {
                      const date = new Date(e?.created_at.toString());
                      const options = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      };
                      const formattedDate = date.toLocaleString(
                        "en-US",
                        options
                      );
                      return (
                        <>
                          <tr>
                            <td className="text-center">{e?.id}</td>
                            <td className="text-center">Purchase</td>
                            <td className="text-center">{formattedDate}</td>
                            <td>
                              <p
                                className="text-center"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  history.push(
                                    `/reviewapplication/review/${e.id}/mpa`
                                  )
                                }
                              >
                                View <FaEye />
                              </p>
                            </td>
                          </tr>
                        </>
                      );
                    })
                    : null}
                  {/* refinance */}
                  {/* for map */}
                  {mortgage_refinance
                    ? mortgage_refinance?.map((e, i) => {
                      const date = new Date(e?.created_at.toString());
                      const options = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      };
                      const formattedDate = date.toLocaleString(
                        "en-US",
                        options
                      );
                      return (
                        <>
                          <tr>
                            <td className="text-center">{e?.id}</td>
                            <td className="text-center">Refinance</td>
                            <td className="text-center">{formattedDate}</td>
                            <td>
                              <p
                                className="text-center"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  history.push(
                                    `/reviewapplication/review/${e.id}/mra`
                                  )
                                }
                              >
                                View <FaEye />
                              </p>
                            </td>
                          </tr>
                        </>
                      );
                    })
                    : null}
                  {real_estate_rent__tenant
                    ? real_estate_rent__tenant?.map((e, i) => {
                      const date = new Date(e?.created_at.toString());
                      const options = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      };
                      const formattedDate = date.toLocaleString(
                        "en-US",
                        options
                      );
                      return (
                        <>
                          <tr>
                            <td className="text-center">{e?.id}</td>
                            <td className="text-center">Tenant</td>
                            <td className="text-center">{formattedDate}</td>
                            <td>
                              <p
                                className="text-center"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  history.push(
                                    `/reviewapplication/review/${e.id}/new`
                                  )
                                }
                              >
                                View <FaEye />
                              </p>
                            </td>
                          </tr>
                        </>
                      );
                    })
                    : null}
                </tbody>
              </Table>
            </div>
          </div>
          {/* <div className="col-md-2"></div> */}
          <ProfileInfo/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
