import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
// import Baseurl from "../../../../Baseurl";
import Swal from "sweetalert2";
import axios from "axios";

// import {useState} from "react"

function Dropzone({ setfiledata }) {

  // const [fileData,setfiledata] = useState([])
  const [loader, setLoader] = useState(false);
  const [bund, setBund] = useState("");


  const props = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/jpeg';
      if (file.type !== 'image/jpg' || file.type !== 'image/jpeg') {
        console.log(file.type, "file.type ")
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/jpeg' || "image/jpg" || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      setfiledata([info]);
      // console.log(info.fileList,"info");
    },
  };
  // console.log(fileList,"info");

  // const Data = new FormData();
  // fileList.map((e,i)=>{
  //   Data.append(`file[${i}]`,e?.name)
  //   console.log(`file[${i}]`,e?.name,"abcd")

  // })
  // const AddBaseIncome = ()=>{
  //   setLoader(true)
  //   let token = localStorage.getItem("usertoken");
  //   var config = {
  //     method: "post",
  //     url: `${Baseurl.baseurl}add/real/estate`,
  //     data: Data,
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios(config)
  //   .then(function (response) {
  //     console.log(response);
  //     console.log(response?.data?.message);
  //     if (response?.data?.status === true) {

  //       console.log(response?.data?.message,"response?.data?.message")
  //     // history.push('/assets')
  //       setLoader(false);
  //       // setshowfirstform(false);
  //       Swal.fire({
  //         toast: true,
  //         icon: "success",
  //         title: response?.data?.message,
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
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       setLoader(false);
  //     }
  //   })
  //   .catch(function (error) {
  //     setLoader(false);
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //     setBund(error?.response?.data?.errors);
  //     Swal.fire({
  //       toast: true,
  //       icon: "error",
  //       title: error?.response?.data?.message,
  //       animation: true,
  //       position: "top-right",
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true,
  //       didOpen: (toast) => {
  //         toast.addEventListener("mouseenter", Swal.stopTimer);
  //         toast.addEventListener("mouseleave", Swal.resumeTimer);
  //       },
  //     });
  //   });
  // }


  // const fileList = [

  // ];
  // console.log(fileList,"filelist")
  return (
    <>
      <Upload
        {...props}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        multiple
        // defaultFileList={[...fileList]}
        accept='JPG, JPEG'
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>

    </>

  )
};
export default Dropzone;