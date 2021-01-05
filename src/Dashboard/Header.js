import React from 'react'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../auth'
import {API} from '../config';

export default function Header() {


  const {user: {role, _id}} = isAuthenticated()
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="" className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars" /></Link>
          </li>
          {/*  <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
          </li> */}
        
        </ul>
       
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
         
         
          <li className="nav-item" >
           {role === 0 ?
            <Link  to={`/dashboard/account/${_id}`} className="nav-link" data-widget="control-sidebar" data-slide="true" to="" role="button">
           
            <div className="image">
            <img src={`${API}/user/photo/${_id}?${new Date().getTime()}`} width="30px" height="30px" className="img-circle elevation-2" alt="User Image"
               
               onError={(e)=>{ if (e.target.src !==`${API}/user/photo/${_id}`){
                 e.target.src=`/images/profile.png` }
               }
             } 
               
               />
             
           </div>
          </Link>
            :
            <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="" role="button">
           
            <div className="image">
             
           
             <img src={`${API}/user/photo/${_id}?${new Date().getTime()}`} width="30px" height="30px" className="img-circle elevation-2" alt="User Image"
               
               onError={(e)=>{ if (e.target.src !==`${API}/user/photo/${_id}`){
                 e.target.src=`/images/profile.png` }
               }
             } 
               
               />
            
            
           </div>
          </Link>
          }
          </li>
        </ul>
      </nav>
      
          )
}
