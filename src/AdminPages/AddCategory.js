import React, {useState, useEffect} from 'react'
import AdminDashboard from '../Pages/AdminDasboard'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth';
import {CreateCategory} from './apiAdmin'
import FullPageLoader from '../FullPageLoader';

const AddCategory = () => {

    const [values, setValues] = useState({
        name:"",
        photo:"", 
        error:"",
        loading:false,
        success:false,
        createdProduct:"",
        redirectTO:'',
        formData:""
       
    })
     //destructure user and token from localstorage

     const {user, token} = isAuthenticated();
     const {name,  photo,  error, loading, createdProduct, redirectTO,  success,formData} = values
    
     //useEffect works as ngOninit

     useEffect(()=>{

       setValues({...values, formData: new FormData()})
     }, [])

     const handleChange = name => event =>{
        const value = name === 'photo'? event.target.files[0] : event.target.value;
 
        formData.set(name, value)
        setValues({...values, [name]:value})
    }
 


    const clickSubmit = e =>{
        e.preventDefault();
 
        setValues({...values, error:"", loading:true});
 
        CreateCategory(user._id, token, formData).then(data =>{
          if(data.error){
              setValues({...values, error: data.error, loading:false})
          }else{
              setValues({
            ...values, 
              name:"",
              photo:"",
              loading:false,
              success:true,
              error:"",
              createdProduct: data.name})
          }
        })
    }

   
     const showError = () =>{
         if(error){
             return <div className="alert alert-danger" style={{fontFamily:"poppins", fontWeight:"500"}}>
            Category name already exist, please choose another name!
         </div>
         }
     }
     const showSuccess = () =>{
        if (success){
            return <div className="alert alert-success" style={{fontFamily:"poppins", fontWeight:"500"}}>
          <h6>{`${createdProduct} category created successfully!`}</h6> {/* <Link to="/dashboard/admin/add-investment-plan">Add investment plan</Link> */}
            </div>
        }
    }
    const showLoading = () =>(
        loading && (<FullPageLoader />
        )
     )

    const addCategoryForm= ()=>(

        
        <section className="addCategory">
            <div className="container-fluid">
           <div className="row" >
               <div  className="col-md-12 mt-5 pb-2">
                   <h4 className="text-center">Add New Category</h4>
               </div>
           <div className="col-md-8 offset-md-2 offset-sm-0 categoryCard " >
               
            <form onSubmit={clickSubmit}>
               {showSuccess()}
               {showError()}
                {showLoading()}
                <div className="col-12">
                <div className="form-group files">
                <label className="form-control-label">Upload Image </label>
                  <input type="file" className="form-control" multiple onChange={handleChange('photo')} name="photo" accept="image/*" />
                </div>
                </div>

                <div className="col-12">
                    <div>
                <label className="form-control-label">Name</label>
                <div className="input-group mb-2">
                   
                    <input type="text" className="form-control"  onChange={handleChange('name')} value={name} />
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
       </AdminDashboard>
    )
}

export default AddCategory
