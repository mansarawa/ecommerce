import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      console.log('success')
    }
    else{
      console.log('faild')
    }
} catch (error) {
        console.log(error)
}
  }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} id="" />
            <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  name="" id="" />
            <button type="submit"  >Register</button>
        </form>
    </div>
  )
}

export default Register