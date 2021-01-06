import React,{useState} from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)

// const [show, setShow] = useState(true)


const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Menu toggle={toggle} />
            
        </>
    )
}

export default NavBar