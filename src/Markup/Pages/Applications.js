import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Table from "react-bootstrap/Table";
import ProfileInfo from "./mortage_type/Profile/ProfileInfo";
import { FaArrowRight, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import Baseurl from "../../Baseurl";
import { useHistory } from "react-router-dom";

function Applications() {
  const history = useHistory();
  const tableData = [
    { type: "Purchase" },
    { type: "Refinance" },
    { type: "Tanent" },
  ];
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const Assign_id = localStorage.getItem("assignId");
  const [loader, setLoader] = useState(false);
  const [fieldsError, setFieldsError] = useState();
  const [resurl, setResurl] = useState();

  const [dataFromREsponse, setDataFromResponse] = useState({});
  const { mortgage_purchase, mortgage_refinance, real_estate_rent__tenant } =
    dataFromREsponse;

  const getData = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "get",
      url: `${Baseurl.baseurl}all/in-completed/applications`,
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
          console.log(response?.data?.data, "response?.data?.message");
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
  const getUrl = (id, type) => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "get",
      url: `${Baseurl.baseurl}redirect/borrower/url/${id}/${type}`,
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
          if (
            response?.data?.data?.url === null &&
            type === "mortgage_purchase"
          ) {
            history.push("/mortage_info");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/personal/info") {
            history.push("/personal_info");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/mortgage/info") {
            history.push("/mortage_info");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/mortgage/info") {
            history.push("/mortage_info");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/declaration") {
            history.push("/declaration");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/all/co_borrowers") {
            history.push("/Co-Borrowers");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/credit") {
            history.push("/Credit");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/all/incomes") {
            history.push("/Income");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/all/real/estate") {
            history.push("/Real_state");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "api/get/all/asset") {
            history.push("/assets");
            localStorage.setItem("assignId", id);
          } else if (response?.data?.data?.url === "review/application") {
            history.push("/purchase/review");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url === null &&
            type === "mortgage_refinance"
          ) {
            history.push("/ref/mortageinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/mortgage/info"
          ) {
            history.push("/ref/mortageinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/personal/info"
          ) {
            history.push("/ref/personalinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/all/co_borrowers"
          ) {
            history.push("/ref/Co-Borrowers");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url === "api/mortgage/refinance/get/all/asset"
          ) {
            history.push("/ref/assets");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/all/incomes"
          ) {
            history.push("/ref/income");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/all/real/estate"
          ) {
            history.push("/ref/realstate");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/demographic"
          ) {
            history.push("/ref/demographic");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/get/declaration"
          ) {
            history.push("/ref/declaration");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url === "api/mortgage/refinance/get/credit"
          ) {
            history.push("/ref/credit");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/mortgage/refinance/review/application"
          ) {
            history.push("/ref/refreviewandsubmit");
            localStorage.setItem("assignId", id);
          }
          if (
            response?.data?.data?.url === null &&
            type === "real_estate_rental_tenant"
          ) {
            history.push("/heloc/tanent/personalinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/personal/info"
          ) {
            history.push("/heloc/tanent/personalinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/additional/info"
          ) {
            history.push("/heloc/tanent/additionalinfo");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/all/incomes"
          ) {
            history.push("/heloc/tanent/income");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/all/co-signer"
          ) {
            history.push("/heloc/tanent/cosigner");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/background"
          ) {
            history.push("/heloc/tanent/background");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/demographic"
          ) {
            history.push("/heloc/tanent/demographic");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url ===
            "api/real-estate/rent/tenant/get/document"
          ) {
            history.push("/heloc/tanent/document");
            localStorage.setItem("assignId", id);
          } else if (
            response?.data?.data?.url === "api/real-estate/rent/tenant/review"
          ) {
            history.push("/heloc/tanent/review");
            localStorage.setItem("assignId", id);
          }
          setResurl(response?.data?.data?.url);
          console.log(response?.data?.data, "URl Rsponse");

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
  console.log(resurl === "api/get/personal/info", "URl Rsponse");
  console.log(resurl, "URl Rsponse");
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData2 = tableData.filter(item => item.type.includes("Refinance"));

console.log(filteredData2,"filteredData2"); // []

  useEffect(() => {
    const filtered = inputValue
      ? tableData.filter((item) =>
          item.type.toLowerCase().includes(inputValue.toLowerCase())
        )
      : tableData;
    setFilteredData(filtered);
  }, [inputValue]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(filteredData, "filteredData");
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />

      <div className="container-fluid ps-5">
        <div className="row">
          <div className="col-md-8 my-5 ps-lg-5 ">
            <div className="row">
              <h2>Welcome</h2>
              <h6>Start a new transaction and view in progress</h6>
              <div className="row card rounded box_shadow border-0">
                {/* <div className="card rounded box_shadow border-0"> */}
                <div className="card-header border-0 bg_light_blue py-3 fs-5">
                  Applications
                </div>
                <div className="py-2 d-flex justify-content-end">
                  <input
                    type="text"
                    className="form-control w-auto py-2 me-2"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                <Table striped hover size="sm" className="mt-2 responsive">
                  <thead>
                    <tr>
                      <th className="">Application No</th>
                      <th className="">Application Type </th>
                      <th className="">Application Date </th>
                      <th className="">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData[0]?.type === "Purchase" ||
                    (filteredData[0]?.type === "Purchase" && mortgage_purchase)
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
                                <td className="">{e?.id}</td>
                                <td className="">{filteredData[0]?.type}</td>
                                <td className="">{formattedDate}</td>
                                <td className="">
                                  <button
                                    className="btn btn-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      getUrl(e?.id, "mortgage_purchase");
                                    }}
                                  >
                                    Resume
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : null}

                    {filteredData[1]?.type === "Refinance" ||
                    (filteredData[0]?.type === "Refinance" &&
                      mortgage_refinance)
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
                                <td className="">{e?.id}</td>
                                <td className="">{tableData[1].type}</td>
                                <td className="">{formattedDate}</td>
                                <td className="">
                                  <button
                                    className="btn btn-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      getUrl(e?.id, "mortgage_refinance");
                                    }}
                                  >
                                    Resume
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : null}
                    {filteredData[2]?.type === "Tanent" ||
                    (filteredData[0]?.type === "Tanent" &&
                      real_estate_rent__tenant)
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
                                <td className="">{e?.id}</td>
                                <td className="">{tableData[2].type}</td>
                                <td className="">{formattedDate}</td>
                                <td className="">
                                  <button
                                    className="btn btn-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      getUrl(e?.id, "real_estate_rental_tenant")
                                    }
                                  >
                                    Resume
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : null}
                  </tbody>
                </Table>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

export default Applications;
