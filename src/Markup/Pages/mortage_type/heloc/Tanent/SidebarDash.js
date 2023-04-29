import React, { useState, useEffect } from "react";
import "./TanSideBar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBars } from "react-icons/fa";
import { Progress } from "antd";
import axios from "axios";
import Baseurl from "../../../../../Baseurl";
import Swal from "sweetalert2";
import { NavLink } from "react-bootstrap";
// import usamajr from "../../purchase/Personalinfo";

const SidebarDash = () => {
    const [loader, setLoader] = useState(false);
    const [Mortgage, setMortgage] = useState(false);
    const [Mortgages, setMortgages] = useState(false);
    const [Realstate, setRealstate] = useState(false);
    const [Realstates, setRealstates] = useState(false);
    const [Insureance, setInsureance] = useState(false);
    const [Insureances, setInsureances] = useState(false);
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


    return (
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
                <div className="px-4 my-3 mr-5">
                    <Link to="#">Dashboard</Link>
                    <br />
                    {/* <span>Tanent</span> */}
                    {/* <Progress percent={allPostData} status="actice" /> */}
                </div>
                {/* <div className="tangreyline"></div> */}

                <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 ${Mortgage ? `sidecirclemain` : null}`} onClick={() => { setMortgage(!Mortgage); setRealstate(false); setInsureance(false) }}>
                    <div className="sidecircle ">

                        {Mortgage ? <FaCheckCircle className="checkicon" /> : null}
                        {/*  */}
                        <div className="mort grey_color fw-500" selected>Mortage
                        </div>

                    </div>
                    <div></div>
                </div>
                {Mortgage ?
                    <>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                        <Link to="/ref/mortageinfo"className="mort grey_color fw-500" selected>purchase</Link>
                        

                            <div></div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <Link to="/ref/mortageinfo" className="mort grey_color fw-500" selected>Refinance</Link>
                            

                            <div>
                                
                            </div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <Link  to={"/heloc/lanlord/mortgageinfo"}  className="mort grey_color fw-500"selected> Heloc
                            </Link>

                            <div></div>
                        </div>
                    </>
                    : null}
                <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 ${Realstate ? `sidecirclemain` : null}`} onClick={() => { setMortgage(false); setRealstate(!Realstate); setInsureance(false) }}>
                    <div className="sidecircle ">

                        {Realstate ? <FaCheckCircle className="checkicon" /> : null}
                        {/*  */}
                        <div className="mort grey_color fw-500" selected> RealState
                        </div>

                    </div>
                    <div></div>
                </div>
                {Realstate ?
                    <>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Purchase
                            </div>

                            <div></div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Refinance
                            </div>

                            <div></div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Heloc
                            </div>

                            <div></div>
                        </div>
                    </>
                    : null}
                <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 ${Insureance ? `sidecirclemain` : null}`} onClick={() => { setMortgage(false); setRealstate(false); setInsureance(!Insureance) }}>
                    <div className="sidecircle ">

                        {Insureance ? <FaCheckCircle className="checkicon" /> : null}
                        {/*  */}
                        <div className="mort grey_color fw-500" selected> Insuracne
                        </div>

                    </div>
                    <div></div>
                </div>
                {Insureance ?
                    <>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Purchase
                            </div>

                            <div></div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Refinance
                            </div>

                            <div></div>
                        </div>
                        <div className={`sidecolheight d-flex justify-content-around align-items-center w-100 mb-1 bg-hovering`}>


                            <div className="mort grey_color fw-500" selected> Heloc
                            </div>

                            <div></div>
                        </div>
                    </>
                    : null}
            </div >
        </>
    );
};

export default SidebarDash;
