import React from 'react'
import {Link} from  'react-router-dom'
import NumberFormat from 'react-number-format';
import ShowProductImage from './ShowProductImage';

export const NewCard = (products) => {
    return (
        <div>
            <div className="container">
                            <div className="row">
                            

                            { products && products.map((product, i)=>(
                          
                            <div className=" col-sm-6 col-md-4 mycard " key={i}>
                                <Link to="" >
                                <div className="card"   >
                              <ShowProductImage  item={product} url="products"/>
                                <div className="px-3">
                                    <h6>{product.name}</h6>
                                 
                                   <NumberFormat  decimalScale={2} value={product.roi * 100/product.price} displayType={'text'} 
                   
                                  suffix={'%'} renderText={value => <div className="mb-1 roi" ><span style={{color:"#087d42", 
                                  fontSize:"1rem", fontWeight:"600"}}>{value}</span> returns in {product.duration} months </div>} />   
                                 
                                    <div className="row">
                                    <div className="col-md-12">
                                      <h5 style={{color:"rgb(31 32 33)", fontWeight:'700'}}><NumberFormat value={product.price}
                                    displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div>{value}</div>} /></h5>
                                    </div>
                                  
                                  </div>
                                </div>
                             </div> 
                                </Link>
                            </div> 
                         
                        ))}
                       
                                     
                            </div>
                         </div> 
            
        </div>
    )
}

export default NewCard