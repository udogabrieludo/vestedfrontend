
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
background:#02084e;
height:80px;
display:flex;
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
width:120px;
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
    transform: translate(-100%, 60%)
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
 font-size: .8rem;
 text-decoration:none !important;
font-weight: 500 !important;
padding: 0 3px;
text-transform: uppercase;
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
text-transform:uppercase;
font-size:14px;
color:#fff;
padding:10px 22px;
font-weight:500;
font-family:poppins;
transition: all .2s ease-in-out;

&:hover{
    color:#fff;
}


`
export const NavBtnLink = styled(LinkR)`

text-transform:uppercase;
color: #fff;
border-radius: 5px;
padding: 7px 25px 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: 13px;
border: 2px solid #fff;
text-transform: uppercase;
font-weight: 600;
background: transparent;
font-family: poppins; 
transition: all .2s ease-in-out;

&:hover{
    color:#0089ff;
    border: 2px solid #0089ff;
    background: transparent;
    transition: all .2s ease-in-out;
}


`