import React, {useEffect, useState} from 'react'
//import Layout from '../Pages/Layout'
import {signup} from '../auth'
import './Register.css';
import {Link,} from 'react-router-dom'
import {  BeatLoader} from 'react-spinners'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom'


const Register = () =>  {

    const[values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone:'',
        error: '',
        success:false,
        loading:false,
      
    })
    const [redirectTO, setRedirectTo] = useState(false)

    const [ check , setCheck]= useState(true)

    // Handle change in the form, we use higher-order function is a function that returns a function
    const handleChange  = firstname => event =>(
        setValues({  ...values, error: false, [firstname] : event.target.value })
    )


    // detructure values method
    const { firstname,lastname, username, email,phone, password, error, success,loading} = values;


    const notify = () => toast.success( ` Registration successfully. You can now login!`);

// Sign up buttom
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false , loading:true});
    signup({ firstname, lastname, username, email, password, phone})
    .then(data => {
        if(data.error){
            
       setValues({...values, error: data.error, success:false})
           
        }else{
            setValues({
                ...values,// ... is use to grap all the state properties and set them
                firstname:"",
                lastname:"",
                username:"",
                email:"",
                phone:"",
                password:"",
                error:'',
                success: true,
               
            })
            notify()
            setTimeout(()=> setRedirectTo(true), 2000)
        }
       
    })
  }

 

 

  const showLoading = () => {
    if(loading){
     return <BeatLoader  color="white"/>
    }else{
    return "SIGN UP"
    }
 }

 const redirectUser = ()=>{
    if(redirectTO){   
       if (!error) {    
           return  <Redirect to="/login" />           
       }
    }
   }
    //error alert

         const showError = () => (
            <div className="alert alert-dangerz" style={{ display: error ? '' : 'none', fontFamily:"poppins", fontSize: ".9rem", fontWeight:"600"}} >
             {error}*
            </div>
        )
   
        
// success alert
    const showSuccess = () => (
   
        <> 
        {/*<div className="alert alert-info" style={{ display: success ? '' : 'none', fontFamily:'poppins', fontWeight: '600'}} >
             Registration successfully. Please <Link to="/login">login!</Link>
    </div> */}
        
        </>
         
      )
    
      const handleCheck =()=>{
      
           setCheck(!check)
           console.log(check)
      

      }


  // registeration form UI
     const registerForm =()=>(
         <div className="registerwrapper">
              
            <div className="container-fluid register-form">
            
            <Link to="/"> <img src="/images/VestedMoney-Logo1.png" alt='logo' className="img-fluid image-size"  /></Link>
           
            <div className="form registerForm">
              
                <div className="note">
                {/* <h3>CREATE ACCOUNT</h3>*/}
                <h5>CREATE A FREE ACCOUNT</h5>
                </div>
                { showSuccess()}
             
                {showError()}
                <div className="form-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input onChange={handleChange('firstname')} type="text"  value={firstname} className="form-control" placeholder="Your First Name "  />
                        </div>       
                    </div>
                 
                    <div className="col-md-6">
                        <div className="form-group">
                            <input  onChange={handleChange('lastname')}  type="text" className="form-control"  value={lastname} placeholder="Your Last Name "  />
                        </div>
                   
                    </div>
                
                    <div className="col-md-12">
                        <div className="form-group">
                            <input onChange={handleChange('username')} type="text" className="form-control"  value={username} placeholder="Your Username "  />
                        </div>       
                    </div>
                   
                    <div className="col-md-12">
                        <div className="form-group">
                            <input onChange={handleChange('email')} value={email} type="email" className="form-control"  placeholder="Your Email "  />
                        </div>
                   
                    </div>
                   
                    <div className="col-md-12">
                        <div className="form-group">
                            <input onChange={handleChange('phone')} type="number" className="form-control"  value={phone} placeholder="Your Phone "  />
                        </div>       
                    </div>
               
                    <div className="col-md-12">
                        <div className="form-group">
                            <input onChange={handleChange('password')}  type="password" className="form-control" value={password} placeholder="Your password"  />
                        </div>
                   
                    </div>
                 
                    <div className="col-md-12">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={check} onChange={handleCheck} />
                        <label className="form-check-label checkLabel" htmlFor="gridCheck">
                      <small> I agree to VestedMoney <span><Link to="/">terms &amp; conditions</Link> </span></small>
                        </label>
                    </div>
                    </div>

                    </div>

                </div>
                
     <button type="button" className="btnSubmit" onClick={clickSubmit} disabled={!check}>{showLoading()}</button>
                </div>
                <div className="loginText">
                  <p> already have an account ? <Link to="/login">Login</Link></p>
                 
                </div>
            </div>
            <div className="loginText">
              
                <p ><Link to="/" style={{ color: "rgb(222 219 219)"}} > BACK TO HOME</Link></p>
             </div>
            </div>

         </div>
       
     )
        return (
          
           <div>
               
                 {registerForm()} 
                 <ToastContainer  autoClose={2000}/>
                 {redirectUser()}
           </div>
      )
   }


export default Register