import React from 'react'
import {SidebarContainer, Icons, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn,SidebarBtnLink} from './SidebarStyle'
import {FaBars} from 'react-icons/fa';
import * as Icon from 'react-feather';



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <CloseIcon />
            </Icons>
            <SidebarWrapper>
                <SidebarMenu>
                     <SidebarLink to="/" onClick={toggle}>
                     <Icon.Codesandbox size={16} />  <span className="pl-3">About <Icon.ChevronDown size={16}/> </span>
                     </SidebarLink>
                     <SidebarLink to="/" onClick={toggle}>
                     <Icon.Grid size={16} />  <span className="pl-3">Result <Icon.ChevronDown size={16}/> </span>
                     </SidebarLink>
                     <SidebarLink to="/syndicate" onClick={toggle}>
                    <Icon.Award size={16} />  <span className="pl-3">Syndicate  </span>
                     </SidebarLink>
                     <SidebarLink to="" onClick={toggle}>
                     <Icon.Layers size={16} />  <span className="pl-3"> Contact Us </span>
                     </SidebarLink>
                     <SidebarLink to="/login" onClick={toggle}>
                     <Icon.LogIn size={16} />  <span className="pl-3"> Login</span>
                     </SidebarLink>
                     
                     
                </SidebarMenu>
                <SidebarBtn>
                       <SidebarBtnLink to="/signup" onClick={toggle}>
                      Sign Up
                     </SidebarBtnLink>
               </SidebarBtn>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
