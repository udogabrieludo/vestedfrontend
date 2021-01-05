import React,{useState, useLayoutEffect} from 'react'

import AdminDashboard from '../Pages/AdminDasboard';
import moment from 'moment'
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom'
import Loader from '../FullPageLoader/Loader';

import {isAuthenticated} from '../auth'
import Paginator from 'react-hooks-paginator';

import {getAllOrders, deleteOrder} from './apiAdmin'




const Orders = () => {

    const [orders, setOrders] =useState({
       
       error: "",
       loading: false,
      
    })

    const {user, token} = isAuthenticated()
   
    const pageLimit = 10;
 
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [allOrders, setAllOrders] =useState([]);
  const [currentData, setCurrentData] = useState([]);
  
  
 

  // destructure
  const {  loading} = orders

    const getOrders = ()=>{
        setOrders({ loading:true})
        getAllOrders(user._id, token).then((response)=>{
          if(response.error){
              setOrders({...orders, error:response.error, loading:false})
          }else{
            setOrders({...orders, loading: false,}) 
            setAllOrders(response)
          }
        })
    }

   const showLoading = ()=>(
       loading && (<Loader  />) 
   )

   

   useLayoutEffect(()=>{
    getOrders();
   }, [])



    useLayoutEffect(() => {
    setCurrentData(allOrders.slice(offset, offset + pageLimit));
        
    }, [offset, allOrders]);


    const noOrder = ()=>(
      <div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/stats.gif" width="250px "className="img-fluid" />
                  <h3>No Order Yet!</h3>
              
                  </div>
    )

   const ordersList = () =>(
    <section className="addCategory">
    {showLoading()}
    

    <div className="container-fluid">
    <div className="row py-3">
           
            <div className="col-6 ">
              <div>
              <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Users Orders</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="text-right">
                <input type="text" placeholder="Search..." className="form-control"/>
              </div>
            </div>
          
        </div> 
       <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  {allOrders.length < 1 ? <div>
                   {noOrder()}
                  </div>:

                <table className="table table-bordered table-striped  table-responsive-sm" >
                     <thead>
                         <tr style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col">Order Id</th>
                         <th scope="col">Investors</th>
                         <th scope="col">Email</th>
                         <th scope="col">Phone</th>
                         <th scope="col">Investment</th>  
                         <th scope="col">Unit(s)</th>     
                         <th scope="col">Status</th>
                         <th scope="col">Amount Invested</th>
                         <th scope="col">Date Created </th>
                         <th scope="col">View</th>
                        
                         </tr>
                     </thead>
                     <tbody style={{fontFamily:"poppins", fontSize:"15px"}}>
                         
                          { currentData && currentData.map((order,i)=>( 
                             <tr  key={i}>
                              <td><strong>#{order.transaction_id}</strong></td>
                               <td> {order.user.firstname} {""} {order.user.lastname}</td>
                              <td> {order.user.email}</td>
                              <td> {order.user.phone}</td>
                              
                               <td>{order.products.map((p,i)=>(
                                   <span key={i}> {p.name}</span>
                               ))}</td>
                                  <td className="text-center">
                                  {order.products.map((p,i)=>(
                                   <span key={i}  className="badge badge-secondaryz p-2"> {p.count}</span>
                               ))}
                                  </td>
                                <td>
                                  
                                { order.status === "Processing"
                                  ? <span  className="badge badge-secondaryz p-2">{ order.status }</span>
                                  : ( order.status === "Completed"
                                    ? <span  className="badge badge-success p-2">{ order.status }</span>
                                    : ( <span  className="badge badge-danger p-2">{ order.status }</span>
                                      
                                    )
                                  )
                                }
                                  
                          </td>
                               <td><span style={{fontFamily:"Arial"}} className="badge badge-info p-2"><NumberFormat value={order.amount}
                                displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div>{value}</div>} /></span></td>
                               
                               <td>{moment(order.createdAt).fromNow()}</td> 
                               <td>
                                <Link to={`/dashboard/admin/order/detail/${order._id}`}><i className="fas fa-eye" data-toggle="tooltip" title="View" ></i></Link>
                                </td>
                            </tr>
                            
                          ))}
                               
                     </tbody>
                     <tfoot>
                     <tr  style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col">Order Id</th>   
                         <th scope="col">Investors</th>
                         <th scope="col">Email</th>
                         <th scope="col">Phone</th>
                         <th scope="col">Investment</th> 
                         <th scope="col">Unit(s)</th>               
                         <th scope="col">Status</th>
                        
                         <th scope="col">Amount Invested</th>
                         <th scope="col">Date Created </th>
                         <th scope="col">View</th>
                        
                         </tr>
                   </tfoot>
                     </table>

                     }

                 <Paginator
                    totalRecords={allOrders.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageNextText='« Prev' 
                    pagePrevText="Next »"
                   
                   
                  />
                </div>
                

             
              </div>
           
                  </div>
            </div>
       </div>
       </section>
)

    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
            {ordersList()}
       
      {/* {JSON.stringify(allOrders)} */}
        </AdminDashboard>
      
    )
}

export default Orders
