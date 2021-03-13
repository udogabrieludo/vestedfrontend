import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';  // Import css
import {signout} from '../auth'



import {isAuthenticated} from '../auth'
import IdleTimerContainer from '../IdleTimer/IdleTimerContainer';




const inActive =(history, path)=>{
  if(history.location.pathname===path){
    return console.log('')
  }else{
    return console.log('')
  }
}

const Menu = ({history}) => {

 

  const {user: {role, _id}} = isAuthenticated();
  


const loggedOut = () => {
    confirmAlert({
      title: 'Confirm!',
      message: 'Are you sure you want to logout?.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=>  signout(()=>{
          
            history.push('/login');
          })
         
        },
        {
          label: 'No',
          onClick: () => {

          }
        }
      ]
    });
  };

  
 

    return (

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  
  {/* Brand Logo */}
  { role === 0 ?
  <Link className="brand-link"  to="/"> 
    <span className="brand-text font-weight-light pl-3"><img src="/images/VestedMoney-Logo.png" alt="logo" width="100px" style={{  margin: "auto"}}/></span>
  </Link>
  :
  <Link className="brand-link"  to="/"> 
  <span className="brand-text font-weight-light pl-3"><img src="/images/VestedMoney-Logo.png" alt="logo" width="100px" style={{  margin: "auto"}}/></span>
  </Link>

   }
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) 
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Developer</a>
      </div>
    </div>*/}
 
    {/* Sidebar Menu */}
    <nav className="mt-4">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      
        <li className="nav-item  has-treeview menu-open">
        {role === 0 ?
        
         <NavLink to="/dashboard/overview" className="nav-link " style={inActive(history, "/dashboard/overview")}>
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard 
            </p>
          </NavLink> :

            <NavLink to="/dashboard/admin-overview" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
            </NavLink>
      
      
      }
         
        
        </li>
        <li className="nav-item">
        {role === 0 ?
           <></>
          :
          <NavLink to="/dashboard/admin/orders" className="nav-link">
            <i className="nav-icon  fas fa-shopping-basket" />
            <p>
           Investment
            </p>
          </NavLink>}
        </li>
        <li className="nav-item">
        {role === 0 ?
          <NavLink to="/dashboard/invest" className="nav-link">
            <i className="nav-icon  fas fa-chart-line" />
            <p>
              Invest
            </p>
          </NavLink>
          :
          <NavLink to="/dashboard/admin/investment" className="nav-link">
            <i className="nav-icon  fas fa-chart-line" />
            <p>
             Investment plan
            </p>
          </NavLink>}
        </li>
        <li className="nav-item">
        {role === 0 ?
          <NavLink to="/dashboard/save" className="nav-link">
            <i className="nav-icon  fas fa-piggy-bank" />
            <p>
               Quick Savings
            </p>
          </NavLink>
          :
          <NavLink to="/dashboard/admin/saving" className="nav-link">
            <i className="nav-icon  fas fa-piggy-bank" />
            <p>
               Savings plan
            </p>
          </NavLink>}
         </li>
        <li className="nav-item">
        {role === 0 ?
          <NavLink to="/dashboard/loan" className="nav-link">
            <i className="nav-icon fas fa-coins" />
            <p>
             Easy Loan
             
            </p>
          </NavLink>
          :
          <NavLink to="/dashboard/admin/loan-request" className="nav-link">
            <i className="nav-icon fas fa-coins" />
            <p>
             Loan & Credit
             
            </p>
          </NavLink>}

          </li>
          <li className="nav-item">
        {role === 0 ?
          <NavLink to="/dashboard/assets-finance" className="nav-link">
            <i className="nav-icon fas fa-coins" />
            <p>
            Assets Finance
             
            </p>
          </NavLink>
          :
          <NavLink to="/dashboard/admin/loan-request" className="nav-link">
            <i className="nav-icon fas fa-coins" />
            <p>
            Assets Requests
             
            </p>
          </NavLink>}

          </li>
          <li className="nav-item">
        {role === 0 ?
          <>
            
          </>
          :
          <NavLink to="/dashboard/admin/loan-request" className="nav-link">
            <i className="nav-icon fas fa-coins" />
            <p>
            Withdraw Requests
             
            </p>
          </NavLink>}

          </li>
          <li className="nav-item">
          { role === 0 ?
          
          <NavLink to="/dashboard/transaction" className="nav-link">
            <i className="nav-icon far fa-copy" />
            <p>
          My Investment
             
            </p>
          </NavLink> 
         
          :
          <>
          <Link to="" className="nav-link">
          <i className="nav-icon far fa-copy" />
            <p>
            Categories
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/dashboard/admin/categories" className="nav-link">
                <i className="nav-icon  fas fa-chart-line ml-4" />
                  <p>Investment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                <i className="nav-icon  fas fa-piggy-bank ml-4" />
                  <p>Savings</p>
                </Link>
              </li>
             </ul>
             </>
          
          }
          </li>
         
        <li className="nav-item">
        {role === 0 ?
          <NavLink to={`/dashboard/account/${_id}`} className="nav-link">
             
              <i className="nav-icon fas fa-user " />
            <p>
              Profile
            
            </p>
          </NavLink>:
          <NavLink to="/dashboard/admin/users" className="nav-link">
          <i className="nav-icon fas fa-users " />
          <p>
            Users
          
          </p>
        </NavLink>}

          </li>
          <li className="nav-item">
        {role === 0 ?
          <>
            
          </>:
          <NavLink to={`/dashboard/admin/user-account/${_id}`} className="nav-link">
          <i className="nav-icon fas fa-user " />
          <p>
           Account Settings
          
          </p>
        </NavLink>}

          </li>
       
        
      
        <li className="nav-item">
          <span style={{cursor:"pointer", color:"#fff"}} className="nav-link"
          onClick={loggedOut} >
            <i className="nav-icon fa fa-sign-out  " style={{ color:"#fff"}} />
            <p  className="" style={{ color:"#fff"}}>Logout </p>
          </span>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
    <IdleTimerContainer></IdleTimerContainer> 
    
  </div>
  {/* /.sidebar */}
 
</aside>

    )
}

export default withRouter(Menu);
