import React from 'react'
import buy from '../../../../Images/buy-icon.png'
import { Link } from 'react-router-dom';
import Header from '../../../Layout/Header';
import Logout from '../../../Layout/Logout';
import Footer from '../../../Layout/Footer';


const Heloc = () => {
  return (
    <>
      <Header />
      <section className='bor_types h-81'>
      <div className="container " style={{ cursor: "pointer" }}>
        <div className="row pt-2">
          <div className="card custom_card mt-5 w-90 mx-auto px-5">
            <h3 className="text-center mt-3">Please Select your Option</h3>
            <div className="container">
              <div className="row my-5">
                <div className="col-md-2" />
                <div className="col-md-4">
                  <Link to={'heloc/lanlord/mortgageinfo'}>
                    <div
                      className="card cardes rounded "
                      style={{ cursor: "pointer" }}
                    >
                      <div className="text-center">
                        <img
                          src={buy}
                          alt=""
                          width={"40%"}
                          height={"100%"}
                          className="text-center "
                        />
                        <h5 className="mb-4 text-black">Landlord</h5>
                      </div>
                </div>
                  </Link>
              </div>
              <div className="col-md-4">
                <Link to={'/heloc/tanent/personalinfo'}>
                <div className="card cardes rounded">
                  <div className="text-center">
                    <img
                      src={buy}
                      alt=""
                      width={"40%"}
                      height={"100%"}
                      className="text-center "
                    />
                    <h5 className="mb-4  text-black">Tanent</h5>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-2" />

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
    <Footer />



    </>
  );
};

export default Heloc