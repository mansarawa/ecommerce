import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

import Nav from '../layout css/navbar.module.css'
function Navbar() {
  

 






  return (
    <>
    <div className={Nav.container}>
        <div className={Nav.navlogo}>
            <img src={logo} className={Nav.logo} alt="" srcset="" />
        </div>
        <div className={Nav.menus}>
            <ul className={Nav.ul}>
                <li className={Nav.li}><Link to='/' className={Nav.item}>Home</Link></li>
                <li className={Nav.li}><Link to='/' className={Nav.item}>Products</Link></li>
                <li className={Nav.li}><Link to='/' style={{backgroundColor:'#201a44',color:'white',padding:'5px 15px 5px 15px',borderRadius:'20px'}} className={Nav.item}>Cart</Link></li>
                <li className={Nav.li}><Link to='/'  className={Nav.item}>Register</Link></li>
                <li className={Nav.li}><Link to='/login'  className={Nav.item}>Login</Link></li>
            </ul>
            <div className={Nav.burger}>
                    <RxHamburgerMenu/>
            </div>
        </div>
    </div>
    
  </>
  )
}

export default Navbar