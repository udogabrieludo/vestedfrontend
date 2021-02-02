import React,{useState, useEffect, useLayoutEffect} from 'react'
import {getAllUsers} from './apiAdmin'
import AdminDashboard from '../Pages/AdminDasboard';
import moment from 'moment'
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom'
import Loader from '../FullPageLoader/Loader';
import { confirmAlert } from 'react-confirm-alert'; 
import {isAuthenticated} from '../auth'
import Paginator from 'react-hooks-paginator';
import {useMemo} from 'react'
import UserProfileImage from '../Pages/UserProfileImage';

import {API} from '../config'


const AllUsers = () => {

    const [users, setUsers] =useState({
       
       error: "",
       loading: false,
       formData: ''
    })

    const {user, token} =isAuthenticated()
   
    const pageLimit = 10;
 
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [allusers, setAllusers] =useState([]);
  const [currentData, setCurrentData] = useState([]);

 

  
  const { error, loading, formData} = users

    const getUsers = ()=>{
        setUsers({ loading:true})
        getAllUsers( user._id, token,'createdAt').then((response)=>{
          if(response.error){
              setUsers({...users, error:response.error, loading:false})
          }else{
            setUsers({...users, loading: false, formData: new FormData()}) 
            setAllusers(response)
          }
        })
    }

   const showLoading = ()=>(
       loading && (<Loader  />) 
   )

   useLayoutEffect(()=>{
    getUsers();
   }, [])

   useEffect(() => {
    setCurrentData(allusers.slice(offset, offset + pageLimit));
    
  }, [offset, allusers]);

   const usersList = () =>(
    <section className="addCategory">
    {showLoading()}

    <div className="container-fluid">
    <div className="row py-3">
           
            <div className="col-6 ">
              <div>
              <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>All Users</h3>
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
                <table className="table table-bordered table-striped  table-responsive-sm" >
                     <thead>
                         <tr style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                         <th scope="col">First-Name</th>
                         <th scope="col">Last-Name</th>
                         <th scope="col">Email</th>     
                         <th scope="col">Users Role</th>
                         <th scope="col">Phone</th>
                         <th scope="col">Joined <i className="fa fa-check-circle text-success"></i></th>
                         <th scope="col">Actions</th>
                        
                         </tr>
                     </thead>
                     <tbody style={{fontFamily:"poppins", fontSize:"15px"}}>
                         
                          { currentData && currentData.map((product,i)=>( 
                             <tr  key={i}>
                              <td className="text-center">
                                

                            <img src={`${API}/user/photo/${product._id}?${new Date().getTime()}`} className="rounded-circle 
                               use-profile  productImgAdmin" 
                                
                                onError={(e)=>{ if (e.target.src !==`${API}/user/photo/${product._id}`){
                                  e.target.src=`/images/profile.png` }
                                }
                              }  alt="pic" />
                              </td>
                              <td>{product.firstname}</td>
                               <td>{product.lastname}</td>
                                <td> {product.email}</td> 
                                <td>{ product.role === 0 ? <span className="badge badge-warning">Investor</span>:
                                <span className="badge badge-success">Admin</span>
                                }</td>
                               <td>{product.phone}</td>
                               
                               <td>{moment(product.createdAt).format('LL')}</td> 
                               <td>
                                 <i className="fas fa-trash-alt text-danger actionButton" data-toggle="tooltip" title="Delete" onClick={()=>confirmAlert({
                                    title: 'Confirm!',
                                    message: `Are you sure you want to delete ${product.firstname}?`,
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: ()=> console.log()
                                      
                                      },
                                      {
                                        label: 'No',
                                        onClick: () => {

                                        }
                                      }
                                    ]
                                  })}>
                                </i> 
                                 <Link to={`/dashboard/admin/user-account/${product._id}`}><i className="fas fa-pencil-alt text-primary px-2" data-toggle="tooltip" title="Edit"></i></Link>
                               
                                </td>
                            </tr>
                            
                          ))}
                               
                     </tbody>
                     <tfoot>
                     <tr  style={{fontFamily:"poppins", fontSize:"14px"}}>
                         <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                         <th scope="col">First-Name</th>
                         <th scope="col">Last-Name</th>
                         <th scope="col">Email</th>
                         <th scope="col">Users Role</th>
                        
                         <th scope="col">Phone</th>
                         <th scope="col">Joined <i className="fa fa-check-circle text-success"></i></th>
                         <th scope="col">Actions</th>
                        
                         </tr>
                   </tfoot>
                     </table>

                 <Paginator
                    totalRecords={allusers.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageNextText={'« Prev'} 
                    pagePrevText={"Next »"}
                   
                   
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
          {usersList()}
          {/* {JSON.stringify(allusers)} */}
        </AdminDashboard>
      
    )
}

export default AllUsers
