import React from 'react';
import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, NavItems,NavLinks, NavBtn, NavBtnLink, NavBtnLinkL} from './MenuStyle'

const Menu = ({toggle}) => {
    
    return (
        <>
       <Nav>
        <NavbarContainer>
                <NavLogo to="/">
                  <ImgLogo src="/images/VestedMoney-Logo.png"  alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItems>
                      <NavLinks to="/">About</NavLinks>
                      <NavLinks to="/login">Invest</NavLinks>
                      <NavLinks to="/">FAQs </NavLinks>
                      {/* <NavLinks to="/">Contact Us</NavLinks> */}
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkL to="/login"><Icon.LogIn size={13}/> Login</NavBtnLinkL>
                    <NavBtnLink to='/register'><Icon.UserPlus size={13}/> Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
           
        </Nav> 
        </>
    )
}

export default Menu