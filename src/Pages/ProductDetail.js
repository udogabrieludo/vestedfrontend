import React, { useState, useLayoutEffect,  } from "react";
import Dashboard from "./Dashboard";
import { Link , Redirect} from "react-router-dom";
import { GetProducts, read, ProductRelated } from "./ApiCore";
import NumberFormat from "react-number-format";
import Loader from "../FullPageLoader/Loader";
import ShowProductImage from "./ShowProductImage";
import {addItem} from './CartHelper'
import moment from 'moment'
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
 

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const loadSingleProduct = (productId) => {
    setLoading(true);
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
        setLoading(false);
      } else {
        setProduct(data);
        ProductRelated(data._id).then((data)=>{
            if(data.error){
                setError(data.error);
            }else{
                setRelatedProduct(data)
            }
        })
        setLoading(false);
      }
    });
  };

  const showLoading = () =>(
    loading && (<Loader />
    )
 )

 const addToCart = () =>{
     addItem(product, ()=>(
         setRedirect(true)
     ))
 }


 const shouldRedirect = redirect => {
    if(redirect){
        return <Redirect to="/dashboard/review" />
    }
 }

 const showInvestButton = ( quantity) =>{

    if(quantity > 0){
     return <button
     
     type="button"
    
     onClick={addToCart}
     className="btn py-2 px-3 my-0 mx-0"
     style={{
       backgroundColor: "rgb(4, 129, 183)",
       fontWeight: "600",
       fontSize: ".7rem",
       
     }}
   >
     Invest Now
   </button>
    }else{
     return    <button
        to=""
        type="button"
        disabled
        className="btn py-2 px-3 my-0 mx-0"
        style={{
          backgroundColor: "#cc1f1fc4",
          fontWeight: "600",
          fontSize: ".7rem",
          cursor:"not-allowed",
          pointerEvents:"none",
          color:"#fff"
        }}
      >
      Close
      </button>

    }
    
 }
  useLayoutEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  const productPage = () => (
    <div className="container">
      <HelmetProvider>
          <Helmet>
           <title>VestedMoney | Investment-Detail</title> 
         </Helmet>
      </HelmetProvider>
        
        {shouldRedirect(redirect)}
        {showLoading()}
         <div className="row pt-2">
            <div className="col-12 ml-1">
              <h6>
                <Link
                  to="/dashboard/invest"
                  style={{ textDecoration: "none", color: "rgb(4, 129, 183)" }}
                >
                  <i className="fa fa-arrow-left"></i> Back
                </Link>
              </h6>
            </div>
            <div className="col-md-4 mt-3 pl-0 productdetail"></div>
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
                      By  {product.brand}{" "}
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
                       
                          <p> {product.insurance}</p>
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
                      <small style={{ fontFamily: "poppins" }}>
                        Offer Closing Date
                      </small>
                      <h6 style={{ marginBottom: "0", fontFamily: "poppins", paddingTop:"0"}}>
                      {moment(product.closedate).format('LL')}
                      </h6>
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
                     <div className="col-12">

                        {showInvestButton(product.quantity)}
                     
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
                <div
                  className="col-md-6 mt-3 pl-0 productdetail"
                  style={{ fontFamily: "poppins" }}
                >
                  <h5
                    style={{ textTransform: "capitalize", marginBottom: "0", paddingBottom:".5rem"}}
                  >
                   Investment Plan you may also be interested in.
                  </h5>
                </div>
                <div className="col-md-12 pl-0">
                 
                   <div className="row">
                       { relatedProduct.length > 0 ? 


                        <>
                         { relatedProduct && relatedProduct.map((p, i)=>(
                       
                      
                       <div className="col-md-3 relatedProductCard" key={i}>
                       <Link to={`/dashboard/invest/${p._id}`}>
                          <div className="card card-info" >
                             <div className="card-body">
                           <span>
                           <ShowProductImage item={p} url="products" />
                           <h6>
                            {p.name}</h6>
                                   <div className="mb-0" style={{fontFamily:"Arial", fontWeight:"600", fontSize:".8rem"}}>
                                   <NumberFormat  decimalScale={2} value={p.roi * 100/p.price} displayType={'text'} 
                   
                                   suffix={'%'} renderText={value => <div>{value} returns in {p.duration} months </div>} />   
                   
                                   </div> 
                             </span>
                             </div>
                          </div>
                          </Link>
                        </div> 
                   
                       
                    ))}
                        </>



                       :<div className="col-md-12">
                            <div className="text-center text-muted pt-1" style={{fontFamily:"poppins"}}>
                           <h6 className="text-muted pt-1">No Related Investment Plan Found!</h6>
                       </div>
                        </div>}
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
    <Dashboard className="content-wrapper" title="| Dashboard">
      {productPage()}
     
    </Dashboard>
  );
};

export default ProductDetail;
