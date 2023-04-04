import React, { useState, useEffect, useCallback } from 'react';
import Header from "../../../../Layout/Header";
import ProfileInfo from "../../Profile/ProfileInfo";
import TanSideBar from "./TanSideBar";
import { MdPlayArrow } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Dropzone from '../../../UploadImage/Dropzone'
import Baseurl from "../../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress, Upload } from "antd";
import { DollarOutlined, PlusOutlined } from '@ant-design/icons';
import { Title } from '@material-ui/icons';



export const TanDocument = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [nic, Setnic] = useState('');
  const [passport, Setpassport] = useState('');

  const [fileList, setFileList] = useState([]);
  console.log("fileList", fileList);
  const handlePreview = async (file) => {
    Setnic("nic")
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = useCallback((type, e) => {
    console.log(e, "req")
    // const data  = [...fileList]
    // const newFiles = e.fileList.map(file => ({ image: file, type }));
    // setFileList([...fileList, ...newFiles]);
    if (e.file.status == "done") {

      const newFileList = [...fileList, { image: e?.fileList, type }];
      setFileList((perv) => [...perv, { image: e?.fileList, type }]);
      console.log(e?.fileList, type, "hello ")
    } else {
      setFileList((perv) => perv);

    }
  }, [])
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );



  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const [allPostData, setAllPostData] = useState();
  const [bund, setBund] = useState("");

  const application_id = localStorage.getItem("assignId");
  const reviewData = new FormData();
  reviewData.append("application_id", application_id);

  const location = useLocation();
  const pers =
    location.pathname === "/heloc/tanent/personalinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100 ";
  const addit =
    location.pathname === "/heloc/tanent/additionalinfo"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const cosi =
    location.pathname === "/heloc/tanent/Co-Borrowers"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const inc =
    location.pathname === "/heloc/tanent/Income"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const back =
    location.pathname === "/heloc/tanent/background"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const demo =
    location.pathname === "/heloc/tanent/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const docu =
    location.pathname === "/heloc/tanent/declaration"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";

  const review =
    location.pathname === "/heloc/tanent/demographic"
      ? "sidecolheight d-flex justify-content-around align-items-center w-100 sidecirclemain"
      : "sidecolheight d-flex justify-content-around align-items-center w-100";
  const postData = () => {
    const token = localStorage.getItem("usertoken");

    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/progress`,
      data: reviewData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setAllPostData(response?.data?.data);
        console.log(response?.data?.data, "sidebar response");
        if (response?.data?.status === true) {
          console.log(response?.data?.message, "response?.data?.message");
          // history.push('/new_mortage')
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
        // console.log(allGet, "all data");
        console.log(response, "my response");
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
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
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    postData();
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      console.log(isOpen, "hui");
    }
    console.log(isOpen, "huihui");
  };

  const Assign_id = localStorage.getItem("assignId");
  const [fileData, setfiledata] = useState([]);
  const [array, SetArray] = useState([]);




  //   const Data = new FormData();



  //   // fileList?.map((e,i)=>
  //   // {
  //   //   Data.append(`files[${i}][image]`, e?.image?.map((e,i)=>e?.originFileObj));
  //   //   console.log(`files[${i}][image]`, e?.image?.map((e,i)=>e?.originFileObj.length));

  //   //   console.log(e,"req append")
  //   //   Data.append(`files[${i}][type]`,e?.type)
  //   // }

  //   // )





  //   const arr  =  fileList?.map((ele,i)=>ele?.image?.map((e,i)=>({file:e?.originFileObj,type:ele.type})))
  //   arr[0].map((ele,i)=>{Data.append(`files[${i}][image]`,ele?.file);Data.append(`files[${i}][type]`,ele?.type)})
  // console.log(arr,"arr")
  //   //  arr.map((e,i)=>{ Data.append(`files[${i}][image]`, arr.map((e,i)=>e?.file)});

  //   Data.append("application_id", Assign_id)
  //   // Data.append("type", nic == "nic" ? "nic" : passport)
  //   console.log(nic,"nic")
  //   // image uplaod library


  const AddBaseIncome = () => {
    const Data = new FormData();



    // fileList?.map((e,i)=>
    // {
    //   Data.append(`files[${i}][image]`, e?.image?.map((e,i)=>e?.originFileObj));
    //   console.log(`files[${i}][image]`, e?.image?.map((e,i)=>e?.originFileObj.length));

    //   console.log(e,"req append")
    //   Data.append(`files[${i}][type]`,e?.type)
    // }

    // )





    const arr = fileList?.map((ele, i) => ele?.image?.map((e, i) => ({ file: e?.originFileObj, type: ele.type })))
    arr[0].map((ele, i) => { Data.append(`files[${i}][image]`, ele?.file); Data.append(`files[${i}][type]`, ele?.type) })
    arr.map((element, i) => { element?.map((ele, i) => { Data.append(`files[${i}][image]`, ele?.file); Data.append(`files[${i}][type]`, ele?.type) }) })
    console.log(arr, "arr")

    Data.append("application_id", Assign_id)
    console.log(nic, "nic")

    setLoader(true)
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}real-estate/rent/tenant/store/document`,
      data: Data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        console.log(response?.data?.message);
        if (response?.data?.status === true) {

          console.log(response?.data?.message, "response?.data?.message")
          history.push('/heloc/tanent/Review')
          setLoader(false);
          // setshowfirstform(false);
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
  }
  console.log(fileData, "fileData")
  // const Get_Borrower = () => {
  //   setLoader(true);
  //   // console.log(bund2?.map((e)=>e),"bund2")
  //   let token = localStorage.getItem("usertoken");
  //   var config = {
  //     method: "post",
  //     url: `${Baseurl.baseurl}real-estate/rent/tenant/get/document`,
  //     data: Data,
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {

  //       console.log(response?.data?.data, "res");
  //       // console.log(getborrower, "getborrower");
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
  //       setBund(error?.response?.data?.errors);
  //       console.log(error, "error");

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
  //   Get_Borrower()
  // }, [])
  return (
    <>
      <Header />
      {loader ? <div className="loader"></div> : null}

      <div className="container-fluid">
        <div className="row">
          <>
            <FaBars
              class=" none"
              onClick={() => {
                handleToggle();
              }}
            />

            <FaBars
              class=" block"
              id="topnav-hamburger-icon"
              onClick={() => {
                handleToggle();
              }}
            />
            <div
              className={
                isOpen === true
                  ? "col-md-2 ps-0 sidebarmain fixed_side sidebar-nav open "
                  : "d-none"
              }
            >
              <div className="px-4 my-3">
                <Link to="#">Dashboard</Link>
                <br />
                <span>Tanent</span>
                <Progress percent={allPostData} status="actice" />
              </div>
              <div className="tangreyline"></div>'
              <Link to="/heloc/tanent/personalinfo">
                <div className={pers}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/personalinfo" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Personal Info</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/additionalinfo"}>
                <div className={addit}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/additionalinfo" ? (
                      <>
                        <FaCheckCircle className="checkicon" />
                      </>
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">
                    Additional Info
                  </div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/cosigner"}>
                <div className={cosi}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/cosigner" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Co Singers</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/Income"}>
                <div className={inc}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/Income" ? (
                      <>
                        <FaCheckCircle className="checkicon" />
                      </>
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Income</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/background"}>
                <div className={back}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/background" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Background</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/demographic"}>
                <div className={demo}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/demographic" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Demographic</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/document"}>
                <div className={docu}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/document" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">Document</div>
                  <div></div>
                </div>
              </Link>
              <Link to={"/heloc/tanent/review"}>
                <div className={review}>
                  <div className="sidecircle">
                    {location.pathname === "/heloc/tanent/review" ? (
                      <FaCheckCircle className="checkicon" />
                    ) : null}
                  </div>
                  <div className="mort grey_color fw-500">
                    Review And Submit
                  </div>
                  <div></div>
                </div>
              </Link>
            </div>
          </>

          <div className={
            isOpen === true
              ? "col-md-8 open he mt-5 mb-2 ps-lg-5"
              : isOpen === false
                ? "col-md-10 open nhi he mt-5 mb-2 ps-lg-5"
                : ""
          }>
            <div className="row">
              <div className="col-10">
                <h4 className='text-black fw-bold stated-ln1' id='uploadhdg1'>Upload your following documents:</h4>
                <div className="row">
                <p className='pl-md-3'>
                  You can upload a photo of the document taken with a camera or
                  a PDF or scanned image.
                </p>

                  <div className="col-md-8" id='government-lf1'>
                    <ul>
                      <p className="text-black">
                        {/* <MdPlayArrow className="fs-4" /> */}
                        ➤ Government issued photo-id (e.g driver's license,
                        passport, military ID, etc )
                      </p>
                      <li className="mt-2 text-secondary">
                        For a full application, the following items need to be
                        uploaded:
                      </li>
                      <p className="text-black">
                        {/* <MdPlayArrow className="fs-4" /> */}
                        ➤ Proof of income / employment (eg, paystub, bank
                        statement, social security, etc.)
                      </p>
                      <p className="text-black">
                        {/* <MdPlayArrow className="fs-4" /> */}
                        ➤ Any other documents requested by the landlord
                      </p>
                    </ul>

                    <div className="icon-lf3">
                    {/* <Dropzone setfiledata={setfiledata}/> */}
                    <Title level={4}>Nic Upload</Title>
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList ? fileList.image : null}
                      // onPreview={handlePreview}  
                      onChange={(e) => handleChange("nic", e)}
                      accept={"image/jpeg,image/png"}
                    >
                      {uploadButton}
                    </Upload>

                    </div>


                  </div>
                  <div className="col-md-4">
                    <p className="h6 text-black">Take pictures with your phone!</p>
                    <p className="text-secondary">
                      Select "Upload Documents Later" and receive an email on
                      your phone. Open the email and click to upload any photos
                      of documents saved on your phone.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>For a Stated Income Purchase or Refinance Loan:</h4>
                    <ul className="mt-3 text-secondary">
                      <li className="mt-2 text-secondary">
                        12 to 24 months copies of personal bank statements
                        verifying 60 days seasoned down payment
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        onPreview={handlePreview}
                        onChange={(e) => handleChange("passport", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Fill out and send in 12 month Deposit Average form
                      </li>
                      <li className="mt-2 text-secondary">
                        Asset Statement (401K, Brokerage Accounts, Mutual Funds,
                        Stocks, etc) if applicable CPA Letter (CPA Sample
                        letter)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        onPreview={handlePreview}
                        onChange={(e) => handleChange("other 1", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        12 to 24 months copies of personal bank statements
                        verifying 60 days seasoned down payment
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        onPreview={handlePreview}
                        onChange={(e) => handleChange("other 2", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Fill out and send in 12 month Deposit Average form
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Deposit Average ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Asset Statement (401K, Brokerage Accounts, Mutual Funds,
                        Stocks, etc) if applicable CPA Letter (CPA Sample
                        letter)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        onPreview={handlePreview}
                        onChange={(e) => handleChange("Asset Statement", e)}
                        accept={"image/jpeg,image/png"}

                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        Click here for cheat cheat on income guide for stated
                        income documentation loans & mortgages
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" income documentation loans & mortgages", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        Signed loan application or click the apply now - Top
                        right button in menu bar - and complete our secure
                        online application
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Signed loan application or click the apply now", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Mortgage Statement or Coupons/rental agreements (if
                        Applicable)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Mortgage Statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">HOA Documents</li>
                      <li className="mt-2 text-secondary">
                        Home Owner Insurance provider info & dec. page
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Home Owner Insurance provider info & dec. page", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Sign: Borrower's authorization
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Borrower's authorization", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Driver's License and Social Security Card
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Driver's License and Social Security Card", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        $25 Credit Card payment for each borrower on the loan
                        payable at this link:
                        http://www.bankerbroker.com/credit-report-fee-paid-here
                      </li>
                    

                    </ul>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>
                      For a Full Doc. Purchase Loan (All Conventional &
                      Government loans like USDA & FHA):
                    </h4>
                    <ul className="mt-3">
                      <li className="mt-2 text-secondary">
                        Signed Purchase Agreement
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("All Conventional and Government loans like USDA & FHA", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Last 2 years Tax Returns
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Last 2 years Tax Returns", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 years W-2 and current paystubq
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  2 years W-2 and current paystubq", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        12 months cancelled checks for verification of
                        rent/mortgage
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  12 months cancelled checks for verification of rent/mortgage", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 months copies of personal bank statements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  2 months copies of personal bank statements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Asset Statement (401K, Brokerage Accounts, Mutual Funds,
                        Stocks, etc)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Asset Statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        Signed loan application or click the apply now - Top
                        right button in menu bar - and complete our secure
                        online application
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Signed loan application or click the apply now - Top right button in menu bar - and complete our secure online application", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Mortgage Statement or Coupons/rental agreements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Mortgage Statement or Coupons/rental agreements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        Sign: Borrower's authorization
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Sign: Borrower's authorization", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        Driver's License and Social Security Card
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Driver's License and Social Security Card", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">HOA Documents</li>
                      <li className="mt-2 text-secondary">
                        Home Owner Insurance provider info & dec. page
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Home Owner Insurance provider info & dec. page", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                      <li className="mt-2 text-secondary">
                        $25 Credit Card payment for each borrower on the loan
                        payable at this link:
                        http://www.bankerbroker.com/credit-report-fee-paid-here
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" $25 Credit Card payment for each borrower on the loan", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Full Doc Self Employed income click Here
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Full Doc Self Employed income click Here", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>

                    </ul>
                  </div>
                </div>
                {/* <Title level={4}>passport Upload</Title> */}

                <div className="row mt-3">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>
                      For a Full Doc Refinance (for all conventional &
                      government loans like FHA & USDA):
                    </h4>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">
                        Last 2 years Tax Returns
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Last 2 years Tax Returns", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 years W-2 and current paystub
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 2 years W-2 and current paystub", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 months copies of personal bank statements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 2 months copies of personal bank statements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Asset Statement (401K, Brokerage Accounts, Mutual Funds,
                        Stocks, etc)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Asset Statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Signed loan application or click the apply now - Top
                        right button in menu bar - and complete our secure
                        online application
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Signed loan application or click the apply now ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Mortgage Statement or Coupons/rental agreements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Mortgage Statement or Coupons/rental agreements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Sign: Borrower's authorization
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Sign: Borrower's authorization", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Trust if property is in a Trust
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("   Copy of Trust if property is in a Trust", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Driver's License and Social Security Card
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Driver's License and Social Security Card", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Trust if property is in a Trust
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("    Copy of Trust if property is in a Trust", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">HOA Documents</li>
                      <li className="mt-2 text-secondary">
                        Home Owner Insurance provider info & dec. page
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Home Owner Insurance provider info & dec. page", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                 
                      <li className="mt-2 text-secondary">
                        Full Doc Self Employed income click Here
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Full Doc Self Employed income click Here", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>For a HARP Refinance:</h4>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">
                        2 months copies of personal bank statements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("2 months copies of personal bank statements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        One page Verification of Employment form signed by
                        employer
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("   One page Verification of Employment form signed byemployer", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Original Note for Existing loan
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Copy of Original Note for Existing loan", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Signed loan application or click the apply now - Top
                        right button in menu bar - and complete our secure
                        online application
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Signed loan application ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Sign: Borrower's authorization
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("   Sign: Borrower's authorization", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Mortgage Statement or Coupons/rental agreements
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Mortgage Statement or Coupons/rental agreements", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Borrower's signed Disclosures
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Borrower's signed Disclosures", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Driver's License and Social Security Card
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Driver's License and Social Security Card", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Trust if property is in a Trust
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Copy of Trust if property is in a Trust", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        HOA Documents (if applicable)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" HOA Documents ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Home Owner Insurance provider info & dec. page
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Home Owner Insurance provider info & dec. page", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        $25 Credit Card payment for each borrower on the loan
                        payable at this link:
                        http://www.bankerbroker.com/credit-report-fee-paid-here
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("nic", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>For VA & CalVet Refinance or Purchase</h4>
                    <span className='text-black'>
                      (refer to refinance or purchase checklists above and in
                      addition send the following) :
                    </span>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">Form DD-214</li>
                      <li className="mt-2 text-secondary">
                        Certificate of Eligibility
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Certificate of Eligibility", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                    <p className="text-secondary">
                      If you have questions regarding any of these documents
                      please Contact Massey Kouhssari 949-244-1880
                    </p>
                    <h5 className="text-black">Checklist</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4 className='text-black stated-ln1'>Items Required to Purchase or Refinance:</h4>
                    <h5 className='text-black'>
                      Salaried Employees{" "}
                      <span className="text-danger">
                        {" "}
                        (copies-no originals):{" "}
                      </span>
                    </h5>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">
                        Credit Authorization Form (sign and return with the
                        itmes below).
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Credit Authorization Form ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Social Security and Drivers License (Patriot
                        Act)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Copy of Social Security and Drivers License", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 most recent Bank Statements (all pages)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  2 most recent Bank Statements ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 most recent W2′s for all borrowers
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("2 most recent W2 s for all borrowers", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 most recent Federal 1040 Tax Returns
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 2 most recent Federal 1040 Tax Returns", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Current mortgage statement
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Current mortgage statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Hazard policy dec page (refinance)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Hazard policy dec page ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        1 month of current pay stubs showing year-to-date for
                        all borrowers (1 month or a full 30 day worth is usually
                        2 pay stubs)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 1 month of current pay ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of the purchase and sale agreement (purchase only)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Copy of the purchase and sale agreement ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        If you are currently renting, either 12 months canceled
                        rent checks or the name and address of your current
                        landlord
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("nic", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className='text-black'>
                      Self-Employed Individuals{" "}
                      <span className="text-danger">
                        (copies-no originals):
                      </span>
                    </h5>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">
                        Credit Authorization Form (sign and return with the
                        items below).
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Credit Authorization Form", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of Social Security and Drivers License (Patriot
                        Act)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Copy of Social Security and Drivers License ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 most recent Bank statements for the past two months
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 2 most recent Bank statements for the past two months", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        2 most recent Federal 1040 Tax Returns
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" 2 most recent Federal 1040 Tax Returns", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        CPA Letter stating self-employment for the last 2 years
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("CPA Letter stating self-employment for the last 2 years", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Current business license for the last 2 years
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Current business license for the last 2 years", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Current Mortgage Statement
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Current Mortgage Statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Property tax statement
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" Property tax statement", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Hazard policy dec page (refinance)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Hazard policy dec page (refinance)", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Copy of the purchase and sale agreement (purchase only)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Copy of the purchase and sale agreement (purchase only)", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        If you are currently renting, either 12 months canceled
                        rent checks or the name and address of your current
                        landlord
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" If you are currently renting, either 12 months canceled rent checks or the name and address of your current landlord", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        K-1 for any partnerships or trusts or Subchapter S
                        corporations
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" K-1 for any partnerships or trusts or Subchapter corporations", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        1120 Corporate or 1065 Partnership Tax Returns –
                        complete copies for the past 2 years with your signature
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange(" complete copies for the past 2 years with your signature", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">
                        Year-to-Date Profit & Loss Statement with your signature
                        and date.
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("  Year-to-Date Profit & Loss Statement with your signature and date.", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className='text-black'>
                      Retired Individuals:
                    </h5>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">Award letter for Social Security and Pension income stating the dollar amount and how long the income will last.</li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Award letter for Social Security ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className='text-black'>
                      Rental Income
                    </h5>
                    <ul className="mt-2">
                      <li className="mt-2 text-secondary">Copy of the rental agreements for any rental units owned.</li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Copy of the rental agreements for any rental units owned.", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                      <li className="mt-2 text-secondary">Rental Income on full documentation loans can only be used if reflected on your taxes Schedule E’s from Fed. 1040s Contracts (Rental income calculation tip: 2 years average of in comparison to market rate X 75%)
                      </li>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList ? fileList.image : null}
                        // onPreview={handlePreview}  
                        onChange={(e) => handleChange("Rental Income on full documentation loans ", e)}
                        accept={"image/jpeg,image/png"}
                      >
                        {uploadButton}
                      </Upload>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className='text-black'>
                      Comments
                    </h5>
                    <p className="text-secondary">You do not have permission to add comments.</p>
                  </div>
                </div>


                <div className="row">
                  <div className="col">
                    <input type="checkbox" />&nbsp;<span>Upload Documents Later</span>
                  </div>
                  <p>We will send you a reminder email to upload your documents. Most landlord will not review your application until your documents are added.</p>
                </div>



                {/* next section */}

                <div>
                  <div className="row mt-4">
                    <label className="text-scolor fontsbtn">
                      Next is <span className="fontsbtncobor">Review</span>
                    </label>
                  </div>
                  <button className="btn btn-primary rounded" 
                  id="btn-save-con1"
                  onClick={AddBaseIncome}>
                    Save & Continue &nbsp;
                    <AiOutlineArrowRight />
                  </button>
                </div>


              </div>
            </div>
        <div className="footerimage">
                <img src="https://bankerbroker.developer-oa.xyz/assets/img/footercity.svg" width="100%" alt="" />
              </div>
          </div>
          <ProfileInfo />
      </div>
        </div>
    </>
  );
};

export default TanDocument;
