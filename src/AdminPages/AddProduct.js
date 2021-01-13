import React, {useState, useEffect}  from 'react';
import AdminDashboard from '../Pages/AdminDasboard';
import { isAuthenticated } from '../auth';
import { CreateProduct, GetCategories} from './apiAdmin';
import FullPageLoader from '../FullPageLoader';
import {Link} from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const {user, token} = isAuthenticated();

    const [values, setValues] = useState({
        name:"",
        price:"",
        quantity:"",
        roi:"",
        brand:'',
        closedate:"",
        insurance:"",
        description:"",
        photo:"",
        duration:"",
        categories:[],
        category:"",
        location: "",
        error:"",
        loading:false,
        createdProduct:"",
        redirectTO:'',
        formData:""
       
    })

   const {name, price, quantity,
     roi,duration, description, photo, categories, insurance, brand,
      category, location, error, loading,closedate, createdProduct, redirectTO,formData} = values
    

    // load categories and se form data

   const init = () =>{
     GetCategories().then(data =>{
         if(data.error){
             setValues({...values, error: data.error})
         }else{
             setValues({...values, categories: data, formData: new FormData() })
         }
     })
   }
     //useEffect works as ngOninit

     useEffect(() => {
     // onMount or onload set init
     init();
     }, [])



   const handleChange = name => event =>{
       const value = name === 'photo'? event.target.files[0] : event.target.value;

       formData.set(name, value)
       setValues({...values, error: false, [name]:value})
   }

   const clickSubmit = e =>{
       e.preventDefault();
       setValues({...values, error:"", loading:true});

       CreateProduct(user._id, token, formData).then(data =>{

         if(data.error){
             setValues({...values, error: data.error, })
         }else{
             setValues({...values, name:"",
             price:"",
             quantity:"",
             roi:"",
             description:"",
             photo:"",
             brand:"",
             closedate:"",
             insurance:"",
             duration:"",
             category:"",
             location: "",
             loading:false,
             createdProduct: data.name })
         }
         notify();
       })
   }

   const showError = () => (
    <div className="alert alert-dangerz" style={{ 
        display: error ? '' : 'none',
         fontFamily:"poppins", fontSize: ".9rem", fontWeight:"600"}}>
     {error}*
    </div>
 )

 const showSuccess = () =>(
     <div className=" alert alert-success" style={{display: createdProduct  ? '' : 'none', fontFamily:"poppins", fontWeight:"500"}}>
         {`${createdProduct} created successfully!`}
     </div>
  )

  const notify = () => toast.success(<>{` ${createdProduct} created successfully!`}</>);
  
 const showLoading = () =>(
    loading && (<FullPageLoader />
    )
 )

    const addCategoryForm= ()=> (

        
        <section className="addCategory">
            <div className="container-fluid">
            <div className="row pt-2">
            <div className="col-6 ">
              <h6>
                <Link
                  to="/dashboard/admin/investment/"
                  style={{ textDecoration: "none", color: "rgb(4, 129, 183)" }}
                >
                  <i className="fa fa-arrow-left"></i> Back
                </Link>
              </h6>
            </div>
            <div className="col-6">
              <div className="text-right">
              <Link to="/dashboard/admin/investment"
            className="btn py-2 px-3 my-0 "
             style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}><i className="fas fa-eye"></i> View All</Link>
              </div>
            </div>

            <div className="col-md-4 mt-3 pl-0 productdetail"></div>
          </div> 
           <div className="row" >
               <div  className="col-md-12 mt-5 pb-2">
                   <h4 className="text-center">Add New Investment Plan</h4>
               </div>
           <div className="col-md-8 offset-md-2 offset-sm-0 categoryCard " >
               
            <form onSubmit={clickSubmit} >
                 {/* {showSuccess()}*/}
                  {showError()}
                 
                  {showLoading()}
                 <div className="row">
                    <div className="col-6">  
                        <label className="form-control-label">Name</label>
                     
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" onChange={ handleChange("name")}  value={name}  />
                        </div>

                   </div>
                   <div className="col-6">  
                        <label className="form-control-label" >Price <span style={{fontFamily:"arial"}}>(₦)</span></label>
                        <div className="input-group mb-2">
                            <input type="number" min="1"  className="form-control" onChange={ handleChange("price")}   value={price} />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">ROI <span style={{fontFamily:"arial"}}>(₦)</span></label>
                        <div className="input-group mb-2">
                            <input type="number" min="1" className="form-control" onChange={ handleChange("roi")}  value={roi}  />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Duration <span style={{fontSize:".7rem"}}>(Months)</span></label>
                        <div className="input-group mb-2">
                            <input type="number" min="1" className="form-control" onChange={handleChange("duration")} value={duration}  />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Insurance partner</label>
                        <div className="input-group mb-2">
                            <input type="text" min="1" className="form-control" onChange={ handleChange("insurance")}  value={insurance}  />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Brand Name</label>
                        <div className="input-group mb-2">
                            <input type="text" min="1" className="form-control" onChange={handleChange("brand")} value={brand}  />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Quantity</label>
                        <div className="input-group mb-2">
                            <input type="number" min="1"  className="form-control" onChange={handleChange("quantity")}  value={quantity} />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Category</label>
                        <select className="form-control" onChange={ handleChange("category")} >
                           <option>Choose...</option>
                          { categories && categories.map((cat,i)=>(
                               <option  key={i} value={cat._id}>{cat.name}</option>
                          ))}
                            
                        </select>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Location</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" onChange={handleChange("location") } value={location}  />
                        </div>
                   </div>
                   <div className="col-6">  
                        <label className="form-control-label">Offer Closing Date</label>
                        <div className="input-group mb-2">
                            <input type="date" className="form-control" onChange={handleChange("closedate") } value={closedate}  />
                        </div>
                   </div>
                   <div className="col-12">  
                       <div className="form-group filez">
                        <label className="form-control-label">Upload Image</label>
                         <input type="file" className="form-control" multiple onChange={handleChange("photo")}  name="photo" accept="image/*" />
                   </div>
                        
                   </div>
                   <div className="col-12">
                       <div className="form-group">
                            <label className="form-control-label">Description</label>
                            <textarea className="form-control"  rows="3" onChange={handleChange("description")}  value={description}></textarea>
                        </div>
                   </div>
                </div>
              
              <div className="col-12 text-center">
                <button type="submit" className="btn  mb-2" style={{background:"rgb(7 37 113)"}}>Create</button>
                </div>
            </form>
        </div>
           </div>
       </div>

    
        </section>

    )

    
      


    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
            
         {addCategoryForm()}
         <ToastContainer  autoClose={3000}/>
        
       </AdminDashboard>
    )
}

export default AddProduct
