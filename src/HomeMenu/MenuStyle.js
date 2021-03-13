
import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
background:${({scrollNav})=>(scrollNav ? "#02084e" : "transparent")};
height:80px;
display:flex;
margin-top: -80px;
justify-content: center;
align-items : center;
position: sticky;
top:0;
z-index:10;
width:100%;

@media (max-width:960px){
    transition: 0.8s all ease;
}

`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100% ;
height: 80px;

z-index:1;
padding:0 24px;
 max-width:1400px; 

`

export const NavLogo = styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
width:150px;

display:flex;
align-items:center;

@media (max-width: 480px){
    width:120px;
}

`
export const ImgLogo = styled.img`
  width: 100%;
  display:flex;
  justify-self:flex-start;

`

 export const MobileIcon = styled.div`
  display:none;

  @media (max-width: 768px){
    display:block; 
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    font-size:1.5rem;
    transform: translate(-100%, 60%);
    color:#fff;
  }
 `

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style: none;
margin-bottom:0px !important;
text-align:center;

@media (max-width: 768px){
    display:none; 

  }

`

export const NavItems = styled.li`
 height:80px;
 display:flex;
 align-items:center;
`

export const NavLinks =styled(LinkR)`
 display: flex;
 align-items: center;
 color:#fff  ;
 font-family:poppins;
 font-size: .9rem;
 text-decoration:none !important;
font-weight: 600 !important;
padding: 0 3px;

transition: all .2s ease-in-out;
border-bottom:3px solid transparent;

 
 padding:0 1rem;
 cursor:pointer;
 height:100%;

 &:active{
     border-bottom: 3px solid #BA0B0B;
 }
 &:hover{
    color:#0089ff;
    transition: all .2s ease-in-out;
    /* border-bottom: 3px solid #BA0B0B; */

}


`

export const NavBtn = styled.nav`
display:flex;
align-items:center;


@media (max-width:768px){
    display:none;
}

`

export const NavBtnLinkL = styled(LinkR)`
padding: 7px 25px 8px 25px;

font-size:.9rem;
color:#fff;
padding:10px 22px;
 font-weight:600;
font-family:poppins;
transition: all .2s ease-in-out;

&:hover{
    color:#fff;
}


`
export const NavBtnLink = styled(LinkR)`


color: #040da0;
font-weight:600;
border-radius: 10px;
padding: 7px 25px 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: .9rem;
border: 2px solid transparent;

font-weight: 600;
background: #fff;
font-family: poppins; 
transition: all .2s ease-in-out;

&:hover{
    color:#fff;
    border: 2px solid #fff;
    background: transparent;
    transition: all .2s ease-in-out;
}


`