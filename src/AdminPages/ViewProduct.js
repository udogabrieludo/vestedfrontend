import React, {useState, useLayoutEffect}  from 'react';
import AdminDashboard from '../Pages/AdminDasboard';
import Loader from '../FullPageLoader/Loader';
import NumberFormat from "react-number-format";
import ShowProductImage from "../Pages/ShowProductImage";
import { Link } from "react-router-dom";
import {  read } from "../Pages/ApiCore";

const ViewProduct = (props) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadSingleProduct = (productId) => {
        setLoading(true);
        read(productId).then((data) => {
          if (data.error) {
            setError(data.error);
            setLoading(false);
          } else {
            setProduct(data);
            
            setLoading(false);
          }
        });
      };
    
 const showLoading = () =>(
    loading && (<Loader />
    )
 )
 useLayoutEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);


  const showErr = ()=>{
    if(error){
      console.log('error')
    }
  }

 const productView = () => (
    <div className="container">
       
        {showLoading()}
        <div className="row py-3">
           
            <div className="col-6 ">
              <div>
              <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Preview Plan</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="text-right">
              <Link to={`/dashboard/admin/investment/${product._id}`}
            className="btn py-2 px-3 my-0 "
             style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}><i className="fas fa-pencil-alt"></i> Edit</Link>
              </div>
            </div>
        </div> 
      <div className="card">
       <div className="card-body">
       <div className="container">
         
          <div className="row">
            <div className=" col-sm-6 col-md-12 mycard ">
              <div className="row">
                <div className="span4 ">
                  { product && (<ShowProductImage item={product} url="products" />)}
                </div>
                <div className="col-md-6 mt-3 pl-2 productdetail">
                  <div style={{ fontFamily: "poppins" }}>
                    <h3
                      style={{ textTransform: "capitalize", marginBottom: "0", color:'#052048' }}
                    >
                      {product.name}
                    </h3>
                    <p>
                      By {product.brand} {""}
                      <span>
                        verified <i className="fa fa-check-circle"></i>
                      </span>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                     
                      <h6
                        style={{
                          textTransform: "capitalize",
                          marginBottom: "0",
                          fontFamily: "poppins",
                        }}
                      >
                       <small style={{ fontFamily: "poppins" }}>
                        Investment Type
                      </small>
                      <p style={{fontSize:"1.1rem"}}>{product.category && product.category.name}</p>
                      </h6>
                      <div>
                      <h6>
                        <small style={{ fontFamily: "poppins" }}>
                          Insurance partner
                        </small>
                       
                          <p>{product.insurance}</p>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <small style={{ fontFamily: "poppins" }}>
                        Expected Returns
                      </small>
                      <h5 style={{ marginBottom: "0", fontFamily: "poppins" }}>
                        <NumberFormat
                          decimalScale={2}
                          value={(product.roi * 100) / product.price}
                          displayType={"text"}
                          suffix={"%"}
                          renderText={(value) => (
                            <div className="mb-1 roi">
                              <span >{value}</span> ROI in {product.duration}{" "}
                              months{" "}
                            </div>
                          )}
                        />
                      </h5>
                      <div>
                        <small style={{ fontFamily: "poppins" }}>
                          Amount per unit
                        </small>
                        <h2
                          style={{ color:'#052048', fontWeight: "700" }}
                        >
                          <NumberFormat
                            value={product.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => <div>{value}</div>}
                          />
                        </h2>
                      </div>
                    </div>
                     
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-4 mt-3 pl-0 productdetail"
                  style={{ fontFamily: "poppins" }}
                >
                  <h5
                    style={{ textTransform: "capitalize", marginBottom: "0", paddingBottom:".5rem"}}
                  >
                    Investment Description
                  </h5>
                </div>
                <p>
                  {product.description}
                </p>
            
               
                
              </div>
                
            </div>
          </div>
        </div>
      </div>

       </div>

       <div className="row ">
           
           <div className="col-12 ">
             <div>
             <h5 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Expected Returns</h5>
             </div>
           </div>
         
       </div>

       <div className="card" style={{borderTop: "2px solid rgb(12, 89, 144)"}}>
       <div className="card-body">
       <div className="container">
         
          <div className="row">
            <div className=" col-sm-6 col-md-12 mycard ">
              <div className="row">
               
                <div className="col-md-12 mt-3 pl-2 productdetail">
                  
                  <div className="row">
                    
                    <div className="col-md-3 ">
                      <small style={{ fontFamily: "poppins", fontWeight:"600" }}>
                        Duration
                      </small>
                      <h2 style={{ marginBottom: "0", color:"rgb(12 89 144)", fontWeight:"700"}}>
                      {product.duration}{" "}  months{" "}
                      </h2>
                   
                    </div>
                    <div className="col-md-3 ">
                      <small style={{ fontFamily: "poppins", fontWeight:"600" }}>
                        ROI
                      </small>
                      <h2 style={{ color:'#052048', fontWeight: "700" }}>
                      <NumberFormat
                            value={product.roi}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => <div>{value}</div>}
                          />
                      </h2>
                      
                    </div>

                    <div className="col-md-3 ">
                        <small style={{ fontFamily: "poppins", fontWeight:"600" }}>
                          Amount / unit
                        </small>
                        <h2
                          style={{ color:'#052048', fontWeight: "700" }}
                        >
                          <NumberFormat
                            value={product.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => <div>{value}</div>}
                          />
                        </h2>
                      </div>
                      <div className="col-md-3 ">
                        <small style={{ fontFamily: "poppins", fontWeight:"600" }}>
                          Total Payment
                        </small>
                        <h2
                          style={{ color:'#06905d', fontWeight: "700" }}
                        >
                          <NumberFormat
                            value={(product.price)+(product.roi)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => <div>{value}</div>}
                          />
                        </h2>
                      </div>
                     
                  </div>
                </div>
              </div>
             
                
            </div>
          </div>
        </div>
      </div>

       </div>
    </div>
  );
  


    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
            
        {productView()}
        {showErr()}
        
       </AdminDashboard>
    )
}

export default ViewProduct
