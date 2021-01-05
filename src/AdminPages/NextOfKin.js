import React,{useLayoutEffect,useState} from 'react'

import {readUser} from '../user/ApiUser'
import { isAuthenticated } from '../auth';

import TransparentLoader from '../FullPageLoader/TransparentLoader';

import {updateLocalStorage, updateUser} from '../user/ApiUser'

import {  toast} from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

const NextOfKin = (props) => {

  const [values, setValues] = useState({
    
    nextofkinfirstname:"",
    nextofkinlastname:"",
    nextofkinphone:"",
    nextofkinaddress:"",
    nextofkinemail:"",
    nextofkincity:"",
    error: false,
    formData: '',
    createdAt:'',
  })

  
  const [loading, setLoading] = useState(false)

  const [loadings, setLoadings] = useState(false)

  const{ nextofkincity, nextofkinlastname,nextofkinphone,nextofkinfirstname,nextofkinemail, nextofkinaddress,
 formData, createdAt} =values
 const {token, user:{_id}} = isAuthenticated()

      
 const initUser = (userId)=>{
   // console.log(userId)
   setLoading(true)
   readUser(userId,token).then((res)=>{
      
     if(res.error){
        setValues({...values, error:false,  success:false})
     }else{
         setValues({
             ...values,
            
             nextofkinaddress: res.nextofkinaddress,
             nextofkincity: res.nextofkincity,
             nextofkinlastname: res.nextofkinlastname,
             nextofkinphone: res.nextofkinphone,
             nextofkinfirstname: res.nextofkinfirstname,
             nextofkinemail: res.nextofkinemail,
             formData: new FormData(),
             createdAt: res.createdAt
            
         });
         setLoading(false)
     }
   })
 }





 useLayoutEffect(()=>{
  
    initUser(_id);
 },[props])

 const notify = () => toast.success( `Update successfully !`);

 const handleChange = name => event=>{
  
   formData.set(name, event.target.value)
   setValues({...values, error: false, [name]:event.target.value})
 }




const showLoadings = ()=>(
 loadings && (<TransparentLoader  />) 
)





 const clickSubmit = e =>{
   e.preventDefault();
   setLoadings(true)
  
   updateUser( _id,token, formData).then((data)=>{
    if(data.error){
     setValues({...values, error:data.error})
      setLoadings(false)
    }else{
     updateLocalStorage(data, ()=>{
       setValues({
         ...values,
         
         nextofkinaddress: data.nextofkinaddress,
         nextofkincity: data.nextofkincity,
         nextofkinlastname: data.nextofkinlastname,
         nextofkinphone: data.nextofkinphone,
         nextofkinfirstname: data.nextofkinfirstname,
         nextofkinemail: data.nextofkinemail,
        
         formData: new FormData(),
         createdAt: data.createdAt
        
     });
    setLoadings(false)
     notify()

     })
    }
   })
 }
    return (
        <div>
          {showLoadings()}
              <form onSubmit={clickSubmit}>
            
            <div className="pl-lg-4">
            <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">First name</label>
                    <input type="text"   onChange={handleChange('nextofkinfirstname')} defaultValue={nextofkinfirstname}  className="form-control form-control-alternative" placeholder="First name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Last name</label>
                    <input type="text" onChange={handleChange('nextofkinlastname')} defaultValue={nextofkinlastname} className="form-control form-control-alternative" placeholder="Last name"  />
                  </div>
                </div>
              </div>
              <div className="row">
            
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" >Phone</label>
                    <input type="number"  onChange={handleChange('nextofkinphone')} defaultValue={nextofkinphone}  className="form-control form-control-alternative" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" >Relationship</label>
                    <input type="text"  onChange={handleChange('nextofkinemail')} defaultValue={nextofkinemail}  className="form-control form-control-alternative" placeholder="Mother/ Brother..." />
                  </div>
                </div>
              </div>
             
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Address</label>
                    <input  onChange={handleChange('nextofkinaddress')} defaultValue={nextofkinaddress} className="form-control form-control-alternative" placeholder="Home Address" type="text" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >State</label>
                    <input type="text"  onChange={handleChange('nextofkincity')} defaultValue={nextofkincity} className="form-control form-control-alternative" placeholder="State" />
                  </div>
                </div>
              
              </div>
            
            </div>
            <hr className="my-4" />
            <div className="text-right">
             <button type="submit"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update Next of kin</button>
             </div>
          </form>
            
        </div>
    )
}

export default NextOfKin
