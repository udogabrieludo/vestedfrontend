import React, { useState, useEffect, useLayoutEffect } from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { API } from "../config";
import { GetProducts, getUserInvestment } from "./ApiCore";
import NumberFormat from "react-number-format";
import TotalInvestment from './TotalInvestment'


import {BeatLoader} from "react-spinners";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Overview() {
  const [values, setValues] = useState({
    products: [],
    error: "",
    loading: false,
  });

  const [history, setHistory] = useState([]);

  const [topsale, setTopSale] = useState({
    productBySale: [],
    error: "",
    loading: false,
  });

  const {
    user: { firstname, _id }, token} = isAuthenticated();

  const { products, error, formData, loading } = values;
  const { productBySale} = topsale;


  


  const init = () => {
    setValues({ ...values, loading: true });

    GetProducts("createdAt").then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          products: data,
          loading: false,
          formData: new FormData(),
        });
      }
    });
  };

  const topSale = () => {
    setValues({ ...values, loading: true });

    GetProducts("sold").then((data) => {
      if (data.error) {
        setTopSale({ ...topsale });
      } else {
        setTopSale({
          ...topsale,
          productBySale: data,
          
        });
      }
    });
  };

  const getTotalAmount = ()=>{
   
    getUserInvestment(_id, token).then((amt)=>{
        if(amt.error){
         console.log('error')
       
        }else{
            setHistory(amt)
          
        }
    })
  }



  useLayoutEffect(() => {
    init();
    topSale();
    getTotalAmount();
   
  }, []);


  
  //useEffect works as ngOninit

  const contents = () => (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>VestedMoney | Overview</title> 
        </Helmet>
      </HelmetProvider>
     
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3" style={{ fontFamily: "poppins" }}>
              <h3 style={{ textTransform: "capitalize" }}>Hi {firstname},</h3>
              <p className="text-muted" style={{ fontWeight: "600" }}>
                Welcome to vestedmoney!
              </p>
            </div>
          </div>
          {/* Small boxes (Stat box) */}
         
            <div className="row">
            <div className="col-lg-3 col-12">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <p>Expected Returns</p>
                  <h3>
             
                   <TotalInvestment history={history} />
                  </h3>
                </div>
                <div className="icon">
                  <i className="fas fa-chart-line" />
                </div>
                <Link to="/dashboard/transaction" className="small-box-footer">
                  My Investment <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-12 ">
              {/* small box */}
              <div className="small-box bg-purple">
                <div className="inner">
                  <p>Total Saving</p>
                  <h3>
                    <span style={{ fontSize: "1.3rem" }}>₦</span>0
                  </h3>
                </div>
                <div className="icon">
                  <i className="fas fa-piggy-bank" />
                </div>
                <Link to="" className="small-box-footer">
                  My Savings <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              {/* small box */}
              <div className="small-box bg-warningz">
                <div className="inner">
                  <p>Total Loan</p>
                  <h3>
                    <span style={{ fontSize: "1.3rem" }}>₦</span>0
                  </h3>
                </div>
                <div className="icon">
                  <i className="fas fa-coins" />
                </div>
                <Link to="/dashboard/loan" className="small-box-footer">
                  Loan History <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner pb-3">
                  <p> KYC Application</p>
                  
                </div>
                <div className="icon">
                  <i className="fas fa-user" />
                </div>
                <Link to={`/dashboard/account/${_id}#nav-kycaccount`} className="small-box-footer">
                  View  <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
          </div>
       
        </div>
      </section>
      <section className="content-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 style={{ fontFamily: "poppins" }}>Quick Action</h6>
            </div>
            <div className="col-md-6">
              <div>
                <div
                  className="quickaction alert alert-info"
                  style={{
                    borderRadius: ".5rem",
                    backgroundColor: " #fff",
                  }}
                >
                  <div className="py-1 px-3 ">
                
                     <i className="fas fa-coins text-info"></i>
                    <div className="leadText">Investment</div>
                    <p style={{ fontFamily: "poppins", marginBottom:"1px"}}>
                     
                      Invest now for a comfortable tomorrow!
                    </p>
                    <hr className="my-1"/>
                    <Link
                      to="/dashboard/invest"
                      type="button"
                      className="btn py-2 px-3 my-0"
                      style={{
                        backgroundColor: "#0481b7",
                        fontWeight: "600",
                        fontSize: ".7rem",
                        marginLeft:"0"
                      }}
                    >
                      View Investment
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h6 style={{ fontFamily: "poppins" }}>Featured Project <sup><span className="badge badge-success">New</span></sup></h6>
                {featuredProduct()}
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <div
                  className="quickaction alert alert-info"
                  style={{
                    borderRadius: ".5rem",
                    background: "linear-gradient(to right, #056c98 , #07aee1)",
                    color: " #fff",
                  }}
                >
                  <div className="py-1 px-3 ">
                    {/*<img src="/images/savings.svg" alt="logo" width="30px"
                     style={{backgroundColor:"#fff", padding:"5px", borderRadius:"50%"}} />*/}
                      <i className=" fas fa-piggy-bank text-light"></i>

                    <div className="leadText">Savings</div> <div className="pull-right">
                     
                      <div style={{marginTop: "-30px",  fontFamily:"poppins", fontWeight:"600"}}>
                        <small style={{ fontWeight:"600"}}>Earn Up To</small>
                        <h1 style={{ fontSize:"3rem", fontWeight:"600", marginTop:" -.5rem"}}>
                        15%
                          </h1>
                         
                          </div>
                     
                      </div>
                    <p style={{ fontFamily: "poppins", marginBottom:"1px"}}>   
                       Let your money make profit for you every month. 
                    </p>
                    <hr className="my-1"/>
                    <Link
                      to="/dashboard/invest"
                      type="button"
                      className="btn py-2 px-3 my-0"
                      style={{
                        background: "#fff",
                        fontWeight: "600",
                        fontSize: ".7rem",
                        marginLeft:"0",
                        color:"#000"
                      }}
                    >
                      Save now
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h6 style={{ fontFamily: "poppins" }}>Top Sales</h6>
                {topSell()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const featuredProduct = () => {
    return (
      <div>
        {loading ? (
          <div className="text-center">
            <BeatLoader color="blue" />
          </div>
        ) : (
          <div
            className="quickaction alert alert-success alert-dismissible fade show"
            role="alert"
            style={{ borderRadius: ".5rem", paddingRight: "0" }}
          >
            <div className="px-3 overviewText">
              {products && products[0] && (
                <div className="row">
                  <div className="col-md-8  ">
                   {/* <img src="/images/invest1.svg" alt="logo" width="30px"
                    
                    style={{
                   background: "#ffffff",
                    border: "1px solid rgb(20 177 94)",
                    borderRadius: "50%",
                    padding:"5px" 
                    }}/> */}
                     <i className="fa fa-area-chart text-success"></i>
                    <div>
                      <h6>
                        {products[0].name} - {products[0].category.name}
                      </h6>

                      <div
                        className="mb-0"
                        style={{
                          fontFamily: "poppins",
                          fontWeight: "600",
                          fontSize: ".8rem",
                        }}
                      >
                        <NumberFormat
                          decimalScale={2}
                          value={(products[0].roi * 100) / products[0].price}
                          displayType={"text"}
                          suffix={"%"}
                          renderText={(value) => (
                            <div>
                              {value} returns in {products[0].duration} months{" "}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 pt-4 text-right">
                    <Link
                      to={`/dashboard/invest/${products[0]._id}`}
                      type="button"
                      className="btn py-2 px-3 mt-0 bvn"
                      style={{
                        backgroundColor: "#28a745",
                        fontWeight: "600",
                        fontSize: ".7rem",
                      }}
                    >
                      Invest Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const topSell = () => {
    return (
      <div>
        {loading ? (
          <div className="text-center">
            <BeatLoader color="blue" />
          </div>
        ) : (
          <div
            className="quickaction alert alert-light alert-dismissible fade show"
            role="alert"
            style={{ borderRadius: ".5rem", paddingRight: "0" ,backgroundColor: " #fff"}}
          >
            <div className="px-3 overviewText">
              {productBySale && productBySale[0] && (
                <div className="row">
                  <div className="col-md-8  ">
                     {/*<img src="/images/savings.svg" alt="logo" width="30px"
                     style={{backgroundColor:"#fff", padding:"5px", borderRadius:"50%"}} />*/}
                      <i className="fa fa-area-chart text-info"></i>

                    <div>
                      <h6>
                        {productBySale[0].name} - {productBySale[0].category.name}
                      </h6>

                      <div
                        className="mb-0"
                        style={{
                          fontFamily: "poppins",
                          fontWeight: "600",
                          fontSize: ".8rem",
                        }}
                      >
                        <NumberFormat
                          decimalScale={2}
                          value={(productBySale[0].roi * 100) / productBySale[0].price}
                          displayType={"text"}
                          suffix={"%"}
                          renderText={(value) => (
                            <div>
                              {value} returns in {productBySale[0].duration} months{" "}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 pt-4 text-right">
                    <Link
                      to={`/dashboard/invest/${productBySale[0]._id}`}
                      type="button"
                      className="btn py-2 px-3 mt-0 bvn"
                      style={{
                        backgroundColor: "rgb(4, 129, 183)",
                        fontWeight: "600",
                        fontSize: ".7rem",
                      }}
                    >
                      Invest Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
           
          </div>
        )}
      </div>
    );
  };

  return (
    <Dashboard className="content-wrapper" title="| Dashboard">
      {contents()}
    </Dashboard>
  );
}
