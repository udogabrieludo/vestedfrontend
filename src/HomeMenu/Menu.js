import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, NavItems,NavLinks, NavBtn, NavBtnLink, NavBtnLinkL} from './MenuStyle'

const Menu = ({toggle}) => {
    
  const[scrollNav, setScrollNav] = useState(false)

  const changeNavBarBgColor = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarBgColor)
  }, [])


    return (
        <>
       <Nav scrollNav={scrollNav}>
        <NavbarContainer>
                <NavLogo to="/">
                  <ImgLogo src="/VestedMoney-Logo.png"  alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItems>
                      <NavLinks to="/who-we-are">WHO WE ARE</NavLinks>
                      <NavLinks to="/savings">INVEST</NavLinks>
                      <NavLinks to="/login">SAVINGS</NavLinks>
                      <NavLinks to="/login">EASY LOAN</NavLinks>
                      <NavLinks to="/">FAQs </NavLinks>
                      {/* <NavLinks to="/">Contact Us</NavLinks> */}
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkL to="/login"><Icon.LogIn size={13}  style={{strokeWidth:"4"}}/> LOGIN</NavBtnLinkL>
                    <NavBtnLink to='/register'> SIGN UP</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
           
        </Nav> 
        </>
    )
}

export default Menu