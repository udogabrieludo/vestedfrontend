import React, {useState, useLayoutEffect} from 'react'
import NumberFormat from "react-number-format";

import {updateItem, removeItem} from './CartHelper'

const CartLayout = ({
  product, 
  setRun = f => f, // default value of function
  run = undefined 
}) => {

    const [count, setCount] = useState(product.count)
   
    
    const dates = new Date()
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    dates.setMonth(dates.getMonth() + product.duration, 31)
 
   

    

    const handleChange = (productId)=> event =>{
        setRun(!run);
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if(event.target.value >= 1){
            updateItem(productId, event.target.value)
        }
    }
    
   

    return (
         <div className="col-md-12 " >
        <div className="card border-primary pb-0 productImg">
          <div
            className="card-header"
            style={{
              fontFamily: "poppins",
              color: "rgb(54 115 179)",
            }}
          >
             
            <div className="row">
              <div className="col-md-9">
               <h5>{product.name}</h5>
              </div>
              <div className="col-md-3 text-right">
                <h6 className="text-danger deleteItem">
                  <i className="fas fa-trash" onClick={
                    ()=> {
                      removeItem(product._id);
                      setRun(!run);
                    }
                  }></i>
                </h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="row"
             
            >
              <div className="col-md-6 cartDescription">
                <span>Investment Capital </span>
              </div>
              <div className="col-md-6 tright text-right text-success">
             <NumberFormat value={product.price}
                    displayType={'text'} thousandSeparator={true}  renderText={value => <div> <span style={{fontFamily:"arial"}}>₦</span>{value}</div>} />
              </div>
              <div className="col-md-6 cartDescription">
                <span>Returns </span>
              </div>
              <div className="col-md-6 tright text-right">
              
              <NumberFormat  decimalScale={2} value={product.roi * 100/product.price} displayType={'text'} 
                  suffix={'%'} renderText={value => <div>{value} </div>} />
              </div>
              <div className="col-md-6 col-xs cartDescription">
                <span>Investment Cycle</span>
              </div>
              <div className="col-md-6 col-xs tright text-right">
               {product.duration} months
              </div>
             <div className="col-md-6 cartDescription">
                <span>Due Date</span>
              </div>

              <div className="col-md-6 tright text-right">
                 {dates.toLocaleDateString('en-US', options)}
              </div> 
              <div className="col-md-8 cartDescription">
                <span>Number of units you wish to invest</span>
              </div>

              <div className="col-md-4 tright text-right">
                 <div className="input-group mb-3">
                    
                    <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
                    </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    )
}

export default CartLayout

