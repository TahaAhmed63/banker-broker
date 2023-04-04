import React from "react";
import footerlogo from '../../Images/footer-logo.svg'

const Footer = () => {
  return (
    <>
      <footer className="main-footer pt-3 fixed-bottom d-flex justify-content-between align-items-center bg-white flex-wrap">
        <div className="footer-left">
            <ul className="d-flex">
                <li>Privacy Policy</li>
                <li className="ms-4">Term of Use</li>
                <li className="ms-4">Company abc</li>
            </ul>
        </div>
        <div className="footer-right">
            <ul className="d-flex align-items-center">
                <li className="border-right pe-2">
                Powered by Bankerbroker.com
                </li>
                <li className="mx-3">
                    <img width='30px' src={footerlogo} alt="" />
                </li>
            </ul>
        </div>
      </footer>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Footer;
