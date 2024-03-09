import React from 'react'
import { MdGroups } from "react-icons/md";
import Achi from '../layout css/achi.module.css'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GrAchievement } from "react-icons/gr";
import { CiPercent } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
function Achivement() {
  return (
    <div className={Achi.container}>

        <div className={Achi.heading}>
            <GrAchievement size={40} style={{color:'white',marginRight:'10px'}}/>
            <h1>Achivement</h1>
        </div>
        <div className={Achi.box}>
            <div className={Achi.item}>
                <FaBoxOpen size={40}/>
                <h2>400000+ order</h2>
            </div>
            <div className={Achi.item}>
                <MdGroups size={40}/>
                <h2>14000+ Customer</h2>
            </div>
            <div className={Achi.item}>
                <CiPercent size={40}/>
                <h2>No Cos EMI</h2>
            </div>
            <div className={Achi.item}>
                <AiFillSafetyCertificate style={{color:'#201a44'}} size={80}/>
                <h2>Certified</h2>
            </div>
        </div>
    </div>
  )
}

export default Achivement