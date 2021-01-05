import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import NumberFormat from "react-number-format";
import Loader from "../FullPageLoader/Loader";
import { isAuthenticated } from "../auth";
import { getUserInvestment } from "./ApiCore";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Dashboard from "./Dashboard";
import { InvestmentCycle } from "./InvestmentCycle";
import CreatedDate from "./CreatedDate";

export default function Transaction() {
  const [values, setValues] = useState({

    error: "",
    loading: false,
  });
  const dates = new Date()
  const options = {  year: 'numeric', month: 'long', day: 'numeric' };

  dates.setMonth(dates.getMonth() + 1, 1)


  const [history, setHistory] = useState([]);

  const { user:{_id}, token } = isAuthenticated();
  
  const { loading } = values;

  const init = (userId,token)=>{
    setValues({...values, loading:true})
    getUserInvestment(userId, token).then((data)=>{
        if(data.error){
         console.log('error')
         setValues({...values, loading:false})
        }else{
            setHistory(data)
            setValues({...values, loading:false})
        }
    })
  }

  //desconstruct state


  useLayoutEffect(() => {
    init(_id, token)
  }, []);

  const showLoading = () => loading && <Loader />;

  const transaction = () => (
    <>
   <HelmetProvider>
      <Helmet>
          <title>VestedMoney | My Investment</title> 
      </Helmet>
   </HelmetProvider>
   
    <section className="addCategory">
      {showLoading()}

      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-6 ">
            <div>
              <h3
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                My Investments
              </h3>
            </div>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link
                to="/dashboard/invest"
                className="btn py-2 px-3 my-0 "
                style={{
                  backgroundColor: "rgb(7 37 113)",
                  fontWeight: "600",
                  fontSize: ".7rem",
                }}
              >
                <i className="fas fa-plus-circle"></i> Invest
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="card">
              <div className="card-body">
                {history && history.length > 0 ? 
                <table className="table table-bordered table-striped  table-responsive-sm">
                  <thead>
                    <tr style={{ fontFamily: "poppins", fontSize: "14px" }}>
                      <th scope="col">Order Id</th>
                      <th scope="col">Investment</th>
                      <th scope="col">Amount Invested</th>
                      <th scope="col">ROI(%)</th>
                      <th scope="col">ROI</th>
                      <th scope="col">Unit(s)</th>
                      <th scope="col">Status</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontFamily: "poppins", fontSize: "15px" }}>
                    {history &&
                      history.map((product, i) => (
                        <tr key={i}>
                            <td>#{product.transaction_id}</td>
                          <td>{product.products.map((p,i)=>(
                              <span key={i}>{p.name}</span>
                          ))}</td>
                          <td style={{ fontFamily: "Arial",fontWeight:"600" }}>
                          <NumberFormat
                                value={product.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₦"}
                                renderText={(value) => <div>{value}</div>}
                              />
                          </td>
                          <td>
                            <span
                              className="badge badge-info p-2"
                              style={{ fontFamily: "lato" }}
                            >
                              <NumberFormat
                              decimalScale={2}
                              value={(product.returns * 100) / product.amount}
                              displayType={"text"}
                              suffix={"%"}
                              renderText={(value) => <div>{value} </div>}
                            />{" "}
                            </span>
                          </td>
                          <td>
                            <span
                              style={{ fontFamily: "Arial", fontWeight:"600" }}
                              
                            >
                              <NumberFormat
                                value={product.returns}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₦"}
                                renderText={(value) => <div>{value}</div>}
                              />
                            </span>
                          </td>
                          <td>
                          {product.products.map((p,i)=>(
                              <span className="badge badge-secondaryz p-2" key={i}>{p.count}</span>
                          ))}
                          </td>
                          <td>
                          { product.status === "Processing"
                                  ? <span  className="badge badge-secondaryz p-2">{ product.status }</span>
                                  : ( product.status === "Completed"
                                    ? <span  className="badge badge-success p-2">{ product.status }</span>
                                    : ( <span  className="badge badge-danger p-2">{ product.status }</span>
                                      
                                    )
                                  )
                                }
                          </td>
                          <td>
                          {product.products.map((p,i)=>(
                              <span className="badge badge-warning p-2" key={i}>{p.duration} Months</span>
                          ))}
                          </td>

                          <td>
                              <CreatedDate product={product}/> 
                          </td>
                          <td >
                          {product.products.map((p,i)=>(
                             <InvestmentCycle key={i} p={p} product={product} />
                          ))}
                          </td>
                          <td className="dueDate">
                          <span
                             
                              style={{ fontFamily: "Arial", fontWeight:"600" }}
                            >
                              <NumberFormat
                              decimalScale={2}
                              value={product.returns + product.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                              renderText={(value) => <div>{value} </div>}
                            />{" "}
                            </span>
                          </td>
                          <td className="text-center"><Link to={`/dashboard/transaction/${product._id}`}><i className="fa fa-eye"></i></Link></td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ fontFamily: "poppins", fontSize: "14px" }}>
                      <th scope="col">Order Id</th>
                      <th scope="col">Investment</th>
                      <th scope="col">Amount Invested</th>
                      <th scope="col">ROI(%)</th>
                      <th scope="col">ROI</th>
                      <th scope="col">Unit(s)</th>
                      <th scope="col">Status</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>
                    </tr>
                  </tfoot>
                </table>
                :<div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/stats.gif" width="250px "className="img-fluid" />
                  <h3>Start Investing!</h3>
                  <p>Start investing in a verified opportunities. </p>
                  <Link
                to="/dashboard/invest"
                className="btn py-2 px-3 my-0 "
                style={{
                  backgroundColor: "rgb(7 37 113)",
                  fontWeight: "600",
                  fontSize: ".7rem",
                }}
              >
                <i className="fas fa-plus-circle"></i> Invest Now
              </Link>
              <Link
                to="/dashboard/invest"
                className="btn py-2 px-3 my-0 "
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "600",
                  fontSize: ".7rem",
                  border: "1px solid rgb(7, 37, 113)",
                  color:"rgb(7, 37, 113)"
                }}  data-toggle="modal" data-target="#myModal"
              >
                Learn more
              </Link>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );


  const newModal = ()=>(
    <div className="container">
  
   {/* The Modal */}
   <div className="modal fade" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
         {/* Modal Header */}
         <div className="modal-header">
           <center>  <span className="modal-title">Login form</span></center>
           <button type="button" className="close btn  btn-circle" style={{color:"#000",fontSize:'1.2rem', background:"#fff", padding:"10px", width:"40px", height:"40px"}}  data-dismiss="modal">×</button>
         </div>
         {/* Modal body */}
         <div className="modal-body">
           <div className="text-intro" style={{fontFamily:"poppins"}}>
             <h5>What is Vestedmoney?</h5>
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
              
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             
              </div>
          
         </div>
       </div>
     </div>
   </div>
 </div>
 
   
  )
 

  return <Dashboard className="content-wrapper">
      {transaction()}
      {newModal()}
     {/*   {JSON.stringify(history)}*/}
      </Dashboard>;
}
