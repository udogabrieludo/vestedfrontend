import React,{useLayoutEffect,useState} from 'react'
import AdminDashboard from '../Pages/AdminDasboard';
import {Link} from 'react-router-dom'

import NextOfKin from './NextOfKin'
import BankDetails from './BankDetails'
import Security from './Security'
import KycAccount from './KycAccount'
import {readUser} from '../user/ApiUser'
import { isAuthenticated } from '../auth';
import Loader from '../FullPageLoader/Loader';

import TransparentLoader from '../FullPageLoader/TransparentLoader';
import moment from 'moment'

import {updateLocalStorage, updateUser, updateUserByAdmin} from '../user/ApiUser'
import bsCustomFileInput from 'bs-custom-file-input'
import { ToastContainer, toast} from 'react-toastify';
import {API} from '../config';

import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = (props) => {


 
  //const [picture, setPicture] = useState(null);
 // const [imgData, setImgData] = useState("/images/profile.png");


 // const onChangePicture = e => {
 //   if (e.target.files[0]) {
     
 //     setPicture(e.target.files[0]);
 //     const reader = new FileReader();
  //    reader.addEventListener("load", () => {
  //      setImgData(reader.result);
 //     });
 //     reader.readAsDataURL(e.target.files[0]);
//    }
 // };

//  const [startDate, setStartDate] = useState();

    const [values, setValues] = useState({
        firstname:"",
        lastname:"",
        username:'',
        email:'',
        phone:"",
        photo:"",
       
        address:"",
        dob: "",
        error:false,
        role:"",
        createdAt: '',
        password:"", 
        success:false,
        formData: ''
      })

      

      const [loading, setLoading] = useState(false)

      const [loadings, setLoadings] = useState(false)
   
      const{address, firstname,lastname,role,username,email, phone, error,password,dob, formData, createdAt} =values

      const {token} = isAuthenticated()
   
      const initUser = (userId)=>{
        // console.log(userId)
        setLoading(true)
        readUser(userId,token).then((res)=>{
           
          if(res.error){
             setValues({...values, error:false,  success:false})
          }else{
              setValues({
                  ...values,
                  firstname:res.firstname,
                  email:res.email,
                  lastname:res.lastname,
                  phone:res.phone,
                  dob:res.dob,
                  newdate:res.newdate,
                  username:res.username,
                  role:res.role,
                  address: res.address,
                  photo:res.photo,
                  formData: new FormData(),
                  createdAt: res.createdAt
                 
              });
              setLoading(false)
          }
        })
      }


     

     
      useLayoutEffect(()=>{
        const userId =props.match.params.userId
         initUser(userId);
         bsCustomFileInput.init()
      },[props])

      const notify = () => toast.success( `Update successfully !`);

      const handleChange = name => event=>{
        const value = name === 'photo'? event.target.files[0] : event.target.value;

        formData.set(name, value)
        setValues({...values, error: false, [name]:value})
      }
   
      const showLoading = ()=>(
        loading && (<Loader  />) 
    )

    
    const showLoadings = ()=>(
      loadings && (<TransparentLoader  />) 
  )

    

    const usersRole =[
      {_id: 0, name: 'Investor'},
      {_id: 1, name: 'Admin'},
      {_id: 2, name: 'Staff'},
      {_id: 3, name: 'Suspend User'}
     
    ]


      const clickSubmit = e =>{
        e.preventDefault();
        setLoadings(true)
       
        updateUserByAdmin(props.match.params.userId, token, formData).then((data)=>{
         if(data.error){
          setValues({...values, error:data.error})
           setLoadings(false)
         }else{
          updateLocalStorage(data, ()=>{
            setValues({
              ...values,
              firstname:data.firstname,
              email:data.email,
              lastname:data.lastname,
              phone:data.phone,
              username:data.username,
              role:data.role,
              dob:data.dob,
              address: data.address,
              photo:data.photo,
              formData: new FormData(),
              createdAt: data.createdAt
             
          });
          setLoadings(false)
          notify()

          })
         }
        })
      }
      const showError = () => (
        <div className="alert alert-dangerz" style={{ 
            display: error ? '' : 'none',
             fontFamily:"poppins", fontSize: ".9rem", fontWeight:"600"}}>
         {error}
        </div>
     )
  
    const userProfile = ()=>(
     
        
        <div className="container ">
        <div className="row py-3">
           
           <div className="col-6 ">
             <div>
             <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Account Settings</h3>
             </div>
           </div>
           <div className="col-6">
             <div className="text-right">
             <Link to="/dashboard/admin/users"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}><i className="fas fa-eye"></i> View All</Link>
             </div>
           </div>
       </div>   
        <div className="row pt-3">
    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
    
      <div className="card card-profile shadow">
        <div className="row justify-content-center">
          <div className="col-lg-3 order-lg-2">
            <div className="card-profile-image pb-5">
               
                <img src={`${API}/user/photo/${props.match.params.userId}?${new Date().getTime()}`} className="rounded-circle  use-profile" 
               
                onError={(e)=>{ if (e.target.src !==`${API}/user/photo/${props.match.params.userId}`){
                  e.target.src=`/images/profile.png` }
                }
              }  alt={firstname}
                
                />
            </div>
          </div>
        </div>
   
        <div className="card-body mt-5 pt-md-4">
          
          <div className="text-center">
           
            <h6>
              Role {role === 0 ?<span className="badge badge-btn badge-warning"> Investor</span>
              : <span className="badge badge-btn badge-success"> Admin</span> }
            </h6>
            <div className="profileText text-capitalize">
               <small>Name: {firstname}</small>
            </div>
            <div className="profileText">   
            <small>
            <i className="fa fa-check text-success" ></i> Membership - {moment(createdAt).format('LL')}       
            </small>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-8 order-xl-1">
      <div className="card bg-secondary shadow">
        {showError()}
        <div className="card-body">
        <nav className="tabbable">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active heading-small " id="nav-home-tab" data-toggle="tab" href="#nav-userinfo" role="tab" aria-controls="nav-home" aria-selected="true">User information</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-nextofkin" role="tab" aria-controls="nav-profile" aria-selected="false">Next Of Kin</a>
            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-bank" role="tab" aria-controls="nav-contact" aria-selected="false">Bank Account</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-kycaccount" role="tab" aria-controls="nav-profile" aria-selected="false">KYC Account</a>
            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-security" role="tab" aria-controls="nav-contact" aria-selected="false">Security</a>
            </div>
        </nav>
            <div className="tab-content pt-2" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-userinfo" role="tabpanel" aria-labelledby="nav-home-tab">
                {/* <UserInfo  props={props}/> */}
                <form  onSubmit={clickSubmit}>
            
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Username</label>
                    <input type="text" onChange={handleChange('username')} value={username} className="form-control form-control-alternative" placeholder="Username"  />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" >Email address</label>
                    <input type="email" disabled onChange={handleChange('email')} defaultValue={email} className="form-control form-control-alternative" placeholder="Joy@example.com" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >First name</label>
                    <input type="text" onChange={handleChange('firstname')} value={firstname} className="form-control form-control-alternative" placeholder="First name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Last name</label>
                    <input type="text"  onChange={handleChange('lastname')} value={lastname}   className="form-control form-control-alternative" placeholder="Last name"  />
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
                    <input type="text" onChange={handleChange('address')} defaultValue={address} className="form-control form-control-alternative"
                     placeholder="Home Address and State"  />
                  </div>
                </div>
                <div className="col-md-6">
                    
                  <div className="form-group focused">
                    <label className="form-control-label">Profile Image</label>
                
                    <div className="custom-file">
                    <input type="file" className="custom-file-input form-control-alternative" 
                     multiple   name="photo" accept="image/*"  onChange={
                      handleChange('photo') 
                      
                    }     />
                    <label className="custom-file-label" >Choose file</label>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="row">

                 

                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" >Date of birth</label>
                    <input type="date"
                   className="form-control form-control-alternative"  onChange={handleChange('dob')} defaultValue={dob}
                      />
                  </div>
               
            
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">

                  <label className="form-control-label">Change User Role</label>
                        <select className="form-control form-control-alternative" onChange={ handleChange("role")} >
                           <option>Select...</option>
                          { usersRole && usersRole.map((r,i)=>(
                               <option  key={i} value={r._id}>{r.name}</option>
                          ))}
                            
                        </select>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label"  >Phone</label>
                    <input type="number" onChange={handleChange('phone')} value={phone} className="form-control form-control-alternative" placeholder="Phone " />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-right">
             <button type="submit"className="btn py-2 px-3 my-0 "style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update Account</button>
             </div>
          </form>
                    
                </div>
                <div className="tab-pane fade" id="nav-nextofkin" role="tabpanel" aria-labelledby="nav-profile-tab">
                <NextOfKin  values={values}/>
                </div>
                <div className="tab-pane fade" id="nav-bank" role="tabpanel" aria-labelledby="nav-contact-tab">
                <BankDetails />
                </div>
                <div className="tab-pane fade" id="nav-kycaccount" role="tabpanel" aria-labelledby="nav-profile-tab">
                <KycAccount />
                </div>
                <div className="tab-pane fade" id="nav-security" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Security />
                </div>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</div>

  
            
        
    
    )

    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
        {userProfile()} 
        {showLoading()}
        {showLoadings()}
        <ToastContainer  autoClose={2000}/>
       
       </AdminDashboard>
    )
}

export default UserProfile
