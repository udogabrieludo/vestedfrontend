import React from "react";

import NumberFormat from "react-number-format";


const Payment = ({products}) => {
  
    const getTotal =()=>{
        // Reduce menthod is use to sum up or calculate array so you can have an output

        return products.reduce((currentValue , nextValue)=>{
            return currentValue + nextValue.count * nextValue.price
        }, 0)
    }
    const getROI =()=>{
        // Reduce menthod is use to sum up or calculate array so you can have an output
        return products.reduce((currentValue , nextValue)=>{
            return currentValue + nextValue.count * nextValue.roi
        }, 0)
    }
   

    return (
        <div>
            <div className="quickaction alert alert-warning alert-dismissible fade show" role="alert" style={{ borderRadius:".5rem"}}>
         <div className="px-3 pb-0 reviewContent">             
               <div className="reviewText">Investment Summary</div> 
               <div style={{fontSize:".8rem"}}><NumberFormat value={getROI()}
                    displayType={'text'} thousandSeparator={true}  renderText={value => <div> <span style={{fontFamily:"arial"}}>Investment returns in amount -   ₦</span><strong>{value}</strong></div>} />
                
                <NumberFormat value={getTotal()}
                    displayType={'text'} thousandSeparator={true}  renderText={value => <div> <span style={{fontFamily:"arial"}}>Investment capital -   ₦</span><strong>{value}</strong></div>} />
                </div>
                 <hr />
                 <strong>
                 <NumberFormat value={getTotal() + getROI()}
                    displayType={'text'} thousandSeparator={true}  renderText={value => <div> <span style={{fontFamily:"arial"}}> Expected returns: ₦</span>{value}</div>} />
                  </strong>
               </div>                              
            </div>
           <div className="totalIvestment mx-0 mb-3">   
             <h2><small>Investment Capital :</small> <NumberFormat value={getTotal()}
                    displayType={'text'} thousandSeparator={true}  renderText={value => <div> <span style={{fontFamily:"arial"}}>₦</span>{value}</div>} /></h2>

             
                  
         </div>
           
           
            
        </div>
    )
}

export default Payment
