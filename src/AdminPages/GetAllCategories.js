import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDasboard';
import { GetCategories} from './apiAdmin';
import moment from 'moment'
import ShowImage from '../Pages/ShowImage'
import Loader from '../FullPageLoader/Loader'


const GetAllCategories = () => {

  const [values, setValues] = useState({
    categories:[],
    error: "",
    formData:'',
    loading: false
  })

  //desconstruct state

  const { categories, error,formData, loading} = values


 
  const init = () =>{

    setValues({...values, loading:true})
    GetCategories().then(data =>{
        if(data.error){
            setValues({...values, error: data.error, loading:false})
        }else{
            setValues({...values, categories: data, laoding:false, formData: new FormData() })
        }
    })
  }


  const showLoading = () =>(
    loading && (<Loader />
    )
 )

    //useEffect works as ngOninit

    useLayoutEffect(() => {
    // onMount or onload set init
    init();
    }, [])

    const noOrder = ()=>(
      <div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/stats.gif" width="250px "className="img-fluid" />
                  <h3>Category not found!</h3>
                </div>
    )


   const categoryList = () =>(
       <section className="addCategory">
         {showLoading()}
       <div className="container-fluid">
       <div className="row py-3">
           
               <div className="col-6  ">
                 <div>
                 <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Investment Categories</h3>
                 </div>
               </div>
               <div className="col-6">
                 <div className="text-right">
                 <Link to="/dashboard/admin/add-category"
               className="btn py-2 px-3 my-0 "
                style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}><i className="fas fa-plus-circle"></i> Add New</Link>
                 </div>
               </div>
           </div> 
          <div className="row">
               <div className="col-12 ">
                 <div className="card">
                   <div className="card-body">
                     {categories.length < 1 ? <div>
                       {noOrder()}
                     </div>:
                   <table className="table table-bordered table-striped table-responsive-sm" >
                        <thead>
                            <tr style={{fontFamily:"poppins", fontSize:"14px"}}>
                            <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date published</th>
                            <th scope="col">Actions</th>
                           
                            </tr>
                        </thead>
                        <tbody style={{fontFamily:"poppins", fontSize:"15px"}}>
                            
                             { categories && categories.map((cat,i)=>( 
                                <tr  key={i}>
                                  <td className="text-center"><ShowImage  item={cat} url="categories"/></td>
                                 <td><Link to="">{cat._id}</Link></td>      
                                  <td>{cat.name}</td> 
                                  <td>{moment(cat.createdAt).format('LL')}</td> 
                                  <td><i className="fas fa-trash-alt text-danger"></i> <i className="fas fa-pencil-alt text-primary pl-2"></i></td>
                               </tr>
                               
                             ))}
                                  
                        </tbody>
                        <tfoot>
                        <tr style={{fontFamily:"poppins", fontSize:"14px"}}>
                            <th scope="col" className="text-center"><i className="fa fa-picture-o text-center"></i></th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date published</th>
                            <th scope="col">Actions</th>
                           
                            </tr>
                      </tfoot>
                        </table> }
                   </div>
                
                 </div>
               
              
                     </div>
               </div>
          </div>
          </section>
   )

    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
         {categoryList()}
       </AdminDashboard>
    )
}

export default GetAllCategories
