import React from 'react'
import {SidebarContainer, Icons, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn,SidebarBtnLink, SidebarLogo, SidebarImg} from './SidebarStyle'
import {FaBars} from 'react-icons/fa';
import * as Icon from 'react-feather';
import { isAuthenticated } from '../auth';




const Sidebar = ({isOpen, toggle}) => {

  const {user} = isAuthenticated()

    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <CloseIcon />
            </Icons>
            <SidebarLogo to='/'>
               <SidebarImg  src="/VestedMoney-Logo.png"   alt="logo" size="120px" />
            </SidebarLogo>
            
            <SidebarWrapper>
           
                <SidebarMenu>
                     <SidebarLink to="/who-we-are" onClick={toggle}>
                       <span className="pl-3">WHO WE ARE  </span>
                     </SidebarLink>
                     <SidebarLink to="/invest" onClick={toggle}>
                      <span className="pl-3">INVEST  </span>
                     </SidebarLink>
                     <SidebarLink to="/savings" onClick={toggle}>
                     <span className="pl-3">SAVINGS  </span>
                     </SidebarLink>
                     <SidebarLink to="easy-loan" onClick={toggle}>
                    <span className="pl-3"> EASY LOAN </span>
                     </SidebarLink>
                     <SidebarLink to="faqs" onClick={toggle}>
                         <span className="pl-3"> FAQS </span>
                     </SidebarLink>
                     {user && user._id ? null
                    : <SidebarLink to="/login" onClick={toggle}>
                    <span className="pl-3"> LOGIN</span>
                   </SidebarLink>}
                     
                     
                </SidebarMenu>
                 <SidebarBtn>
                    {user && user._id ?
                      <SidebarBtnLink to="/dashboard" onClick={toggle}>
                      Dashboard
                     </SidebarBtnLink>: <SidebarBtnLink to="/signup" onClick={toggle}>
                      SIGN UP
                     </SidebarBtnLink> }
               </SidebarBtn>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
