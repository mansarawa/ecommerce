import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'
import { RiMenu4Fill } from "react-icons/ri"; 

import Nav from '../layout css/navbar.module.css'

function Navbar() {
  const [resp, setResp] = useState(false); 

  const hamclick = () => {
    setResp(!resp); 
    console.log(resp)
  }

  return (
    <>
      <div className={Nav.container}>
        <div className={Nav.navlogo}>
          <img src={logo} className={Nav.logo} alt="" srcSet="" />
        </div>
        <div className={Nav.menus}>
          <div className={Nav.def}>
          <ul className={Nav.ul}>
            <li className={Nav.li}><Link to='/' className={Nav.item}>Home</Link></li>
            <li className={Nav.li}><Link to='/' className={Nav.item}>Products</Link></li>
            <li className={Nav.li}><Link to='/' style={{ backgroundColor: '#201a44', color: 'white', padding: '5px 15px 5px 15px', borderRadius: '20px' }} className={Nav.item}>Cart</Link></li>
            <li className={Nav.li}><Link to='/register' className={Nav.item}>Register</Link></li>
            <li className={Nav.li}><Link to='/login' className={Nav.item}>Login</Link></li>
          </ul>
          </div>
          
          <div className={Nav.burger} onClick={hamclick}>
           
            <RiMenu4Fill />
          </div>
        </div>
       
      </div>
      {resp &&
            <div className={Nav.response}>
              <ul className={Nav.ul} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <li className={Nav.li} ><Link to='/' className={Nav.item}>Home</Link></li>
                <li className={Nav.li} style={{marginTop:'1%'}}><Link to='/' className={Nav.item}>Products</Link></li>
                <li className={Nav.li} style={{marginTop:'2%'}}><Link to='/' style={{ backgroundColor: '#201a44', color: 'white', padding: '5px 15px 5px 15px', borderRadius: '20px' }} className={Nav.item}>Cart</Link></li>
                <li className={Nav.li} style={{marginTop:'1%'}}><Link to='/register' className={Nav.item}>Register</Link></li>
                <li className={Nav.li} style={{marginTop:'1%'}}><Link to='/login' className={Nav.item}>Login</Link></li>
              </ul>
            </div>
          }
    </>
  )
}

export default Navbar;
