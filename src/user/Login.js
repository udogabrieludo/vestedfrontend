import React,{useState, } from 'react';

import {Link, Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../auth';
import { BounceLoader, BeatLoader, BarLoader} from 'react-spinners'
import * as Icon from 'react-feather';

//React fragment is use to wrap multiple block of code, instead of using div

const Login = () => {

    const[values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading:false,
        redirectToReferer: false
    })

    // Handle change in the form
    const handleChange  = email => event => {
        setValues({
            ...values, error: false, [email]: event.target.value
        })
    }


    // destructure values method
    const {  email, password, error, loading, redirectToReferer } = values;

    //destructure so we can check for user role
    const {user} = isAuthenticated()


// Sign up buttom
    const clickSubmit = event => {
         event.preventDefault();
         setValues({...values, error: false , loading:true});
         signin({email,password}).then(data => {
             if(data.error){
                setValues({...values, error: data.error, loading :false }) 
             }else {
                authenticate(data, ()=>{
                setValues({
                    ...values, 
                    loading :true,
                   redirectToReferer:true
                });
               });
            }
         })
       
    }

    //error alert

    const showError = () => (
            <div className="alert alert-dangerz" style={{ 
                display: error ? '' : 'none',
                 fontFamily:"poppins", fontSize: ".9rem", fontWeight:"600"}}>
             {error}*
            </div>
        )
   
        
// success alert
    const showLoading = () => {
       if(loading){
        return <BeatLoader  color="white"/>
       }else{
       return "LOGIN"
       }
    }
        
    

    
const redirectUser = ()=> {
    if(redirectToReferer){
      if(user && user.role === 1){
        return <Redirect to="/dashboard/admin-overview" />;
      }else{
        return <Redirect to="/dashboard/overview" />; 
      }
    }

    if(isAuthenticated()){
        return <Redirect to="/dashboard/overview" />
    }

  
}




//LOGIN UI

   const loginForm =()=>(
      <div className="registerwrapper">
          
           <div className="container register-form">
           <Link to="/"> <img src="/images/VestedMoney-Logo1.png" alt='logo' className="img-fluid image-size"  /></Link>
              
            
         <div className="form registerForm">
             <div className="note">
            
             {/*<h3>MEMBER LOGIN</h3>*/}
             
             <h5>LOGIN TO YOUR account</h5>
             {showError()}
             </div>
             <div className="form-content">
             <div className="row">
                
                 <div className="col-md-12">
                     <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text font"><Icon.User  size={18}/></span>
                       </div>
                         <input type="email" onChange={handleChange('email')} value={email}  className="form-control" placeholder="Your Email "  />
                     </div>
                 </div>
                 <div className="col-md-12">
                     <div className="input-group mb-3">
                       <div className="input-group-prepend">
                          <span className="input-group-text font"><Icon.Key  size={18}/></span>
                       </div>
                         <input type="password"onChange={handleChange('password')} value={password}  className="form-control" placeholder="**************"  />
                     </div>       
                 </div>
                

                 
             </div>
             
             <button type="button" className="btnSubmit" onClick={clickSubmit}> {showLoading()}</button>
             </div>
             <div className="loginText">
               <p> don't have an account  ? <Link to="/register">Sign up</Link></p>
                
             </div>
            
         </div>
             <div className="loginText">
              
                <p ><Link to="/password-reset" style={{ color: "rgb(222 219 219)"}} > Forgot password?</Link></p>
             </div>
         </div>

      </div>
    
  )

    return(
      <div>
         
            {loginForm()}
            {redirectUser()}
          

        
     </div>
    )
} 




export default Login