import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDasboard';

import { GetProducts} from '../Pages/ApiCore'
import moment from 'moment'
import NumberFormat from 'react-number-format';
import ShowImage from '../Pages/ShowImage'
import Loader from '../FullPageLoader/Loader';
import {isAuthenticated} from '../auth'
import { deleteProduct} from './apiAdmin'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';




const GetAllProducts = () => {



    const [values, setValues] = useState({
        products:[],
        error: "",
        loading:false,
        formData:''
      })

    const {user, token} = isAuthenticated();
    
      //desconstruct state
    
      const { products, error,formData, loading} = values
    
      const init = () =>{
        setValues({...values, loading:true})

        GetProducts('createdAt').then(data =>{ 
            if(data.error){
                setValues({...values, error: data.error, loading:false})
            }else{
                setValues({...values, products: data, loading:false, formData: new FormData() })
            }
        })
      }


      const deleteProductID = (productId)=>{
          deleteProduct(productId, user._id, token).then((response)=>{
            if(response.error){
              console.log(error)
            }else{
              init()
            }
          })
      }
       //useEffect works as ngOninit

       const noInvestmentPlan = ()=>(
        <div className="text-center " style={{fontFamily:"poppins"}}>
                    <img src="/images/stats.gif" width="250px "className="img-fluid" />
                    <h3>Investment plan not found!</h3>
                  </div>
      )
    
       useLayoutEffect(()=>{
        init();
        }, [])
    
        const showLoading = () =>(
          loading && (<Loader />
          )
       )
    
   const productList = () =>(
    <section className="addCategory">
    {showLoading()}

    <div className="container">
    <div className="row py-3">
           
            <div className="col-6 ">
              <div>
              <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Investment Plans</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="text-right">
              <Link to="/dashboard/admin/add-investment-plan"
            className="btn py-2 px-3 my-0 "
             style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}><i className="fas fa-plus-circle"></i> Add New</Link>
              </div>
            </div>
        </div> 
       <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  {products.length < 1 ? <div>
                    {noInvestmentPlan()}
                  </div> :
                <table className="table table-bordered table-striped  table-responsive-sm" >
                     <thead>
                         <tr style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                         <th scope="col">Name</th>
                         <th scope="col">Price</th>
                         <th scope="col">ROI</th>
                         <th scope="col">ROI(%)</th>
                         <th scope="col">Duration</th>
                         <th scope="col">Catgories</th>
                         <th scope="col">Date published</th>
                         <th scope="col">Actions</th>
                        
                         </tr>
                     </thead>
                     <tbody style={{fontFamily:"poppins", fontSize:"15px"}}>
                         
                          { products && products.map((product,i)=>( 
                             <tr  key={i}>
                              <td className="text-center"><ShowImage  item={product} url="products"/></td>
                              <td>{product.name}</td>
                               <td><span className="badge badge-info" style={{fontFamily:"Arial"}}><NumberFormat value={product.price}
                                displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div>{value}</div>} /></span></td>
                                <td><span style={{fontFamily:"Arial"}} className="badge badge-success"><NumberFormat value={product.roi}
                                displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div>{value}</div>} /></span></td> 
                                <td><NumberFormat  decimalScale={2} value={product.roi * 100/product.price} displayType={'text'} 
                                    suffix={'%'} renderText={value => <div>{value} </div>} /> </td> 
                                <td><span className="badge badge-warning">{product.duration} Months</span></td>
                               <td>{product.category.name}</td>
                               
                               <td>{moment(product.createdAt).format('LL')}</td> 
                               <td>
                                 <i className="fas fa-trash-alt text-danger actionButton" data-toggle="tooltip" title="Delete" onClick={()=>confirmAlert({
                                    title: 'Confirm!',
                                    message: `Are you sure you want to delete ${product.name}?`,
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: ()=> deleteProductID(product._id)
                                      
                                      },
                                      {
                                        label: 'No',
                                        onClick: () => {

                                        }
                                      }
                                    ]
                                  })}>
                                </i> 
                                 <Link to={`/dashboard/admin/investment/${product._id}`}><i className="fas fa-pencil-alt text-primary px-2" data-toggle="tooltip" title="Edit"></i></Link>
                                <Link to={`/dashboard/admin/investment/view/${product._id}`}><i className="fas fa-eye" data-toggle="tooltip" title="View" ></i></Link>
                                </td>
                            </tr>
                            
                          ))}
                               
                     </tbody>
                     <tfoot>
                     <tr  style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                         <th scope="col">Name</th>
                         <th scope="col">Price</th>
                         <th scope="col">ROI</th>
                         <th scope="col">ROI(%)</th>
                         <th scope="col">Duration</th>
                         <th scope="col">Catgories</th>
                         <th scope="col">Date published</th>
                         <th scope="col">Actions</th>
                        
                         </tr>
                   </tfoot>
                     </table>
                     }
                </div>
                

             
              </div>
           
                  </div>
            </div>
       </div>
       </section>
)


    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
          {productList()}
      </AdminDashboard>
    )
}

export default GetAllProducts
