import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`

position:fixed;
z-index:999;
width:80%;
height:100%;
background: linear-gradient(90deg,#C70C0C, #5F0404);
display:grid;
align-items: center;
top:0;
left:0;
display:none;
transition: .3s ease-in-out;

opacity: ${({isOpen})=>(isOpen? '100%': '0')};
left: ${({isOpen})=>(isOpen? '0': "-100%")};


@media (max-width: 768px){
    display:flex;
    justify-content:center;
}

`

export const Icons = styled.div`

position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:1.5rem;
cursor:pointer;
outline:none;

`

export const CloseIcon = styled(FaTimes)`
color:#fff;

`


export const SidebarWrapper = styled.div`
color:#fff;

`

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,50px);
text-align:center;
padding-left:0px !important;

`
export const SidebarLink = styled(LinkR)`
display:flex;
align-items:center;
justify-content:flex-start;
font-size:1rem;
text-transform:uppercase;
text-decoration: none;
color:#fff;

font-family:poppins;
font-weight:400;
list-style:none;
transition: .2s ease-in-out;
cursor:pointer;

&:hover{
    transition: .2s ease-in-out;
    color:#d3d3d3;
}

@media (max-width: 480px){
    font-size: .8rem
}

`


export const SidebarBtn = styled.div`
display:flex;
align-items:center;
justify-content:center;

`


export const SidebarBtnLink = styled(LinkR)`
padding:0 1rem;
text-transform:uppercase;
font-size:14px;
color:#fff;
margin-top:1.5rem;
padding:10px 22px;
border-radius:30px;
font-weight:600;
font-family:poppins;
transition: all .2s ease-in-out;
background:#49A35A;

&:hover{
    color:#49A35A;
    background:#fff;
    transition: all .2s ease-in-out;
}

`

