import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import signup from '../layout css/register.module.css'
import { toast } from 'react-toastify';
function Register() {
    const navigate=useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
       
    const res=await fetch('http://localhost:3000/signup',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    })
    const result=await res.json();
    if(result.success)
    {
      navigate('/')
      toast.success('Register successfull')
      console.log('success')
    }
    else{
      toast.error('Already Signup')
    }
} catch (error) {
        console.log(error)
}
  }
  return (
    <div className={signup.container}>
        <form onSubmit={handlesubmit}>
          <div className={signup.form}>
            <div className={signup.content}>
              Name:
            <input type="text" className={signup.inp} name="" value={name} onChange={(e)=>setName(e.target.value)} id="" />
            </div>
            <div className={signup.content}>
              Email:
              <input type="email" className={signup.inp} name="" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            </div>
            <div className={signup.content}>
              Password:
              <input type="password" className={signup.inp} value={password} onChange={(e)=>setPassword(e.target.value)}  name="" id="" />
            </div>
            <div className={signup.content}>
            <button type="submit"  style={{textAlign:'center',cursor:'pointer',marginLeft:'30%',marginBottom:'5%', padding: '10px 15px 10px 15px',fontSize:'18px' ,border:'none',color:'white',backgroundColor:'#201a44',borderRadius:'10px',marginTop:'5px'}} >Register</button>
            </div>
            <div className={signup.content}>
            <Link to='/login' style={{marginTop:'5%',width:'80%',marginLeft:'20%'}}>Already have an account?</Link>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Register