import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import loGin from '../layout css/login.module.css'
import { toast } from 'react-toastify'
function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {    
      const res = await fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      
      const result = await res.json();
      if (result.success) {
      
         navigate('/')
        console.log('success')
        localStorage.setItem('user',JSON.stringify(result.user))
        localStorage.setItem('token',JSON.stringify(result.token))
        console.log(result.token)
        console.log(result.user)
        toast.success('login success')
      }
      else if(result.message=="invalid password")
      {
        toast.error('invalid password')
      }

       else {
        toast.error('Account not found')
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={loGin.container}>
      <form onSubmit={handleSubmit} >
        <div className={loGin.form}>
        <div className={loGin.content}>
          Email:
        <input type="email" value={email} className={loGin.inp}  onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={loGin.content}>
          Password:
        <input type="password" value={password}  className={loGin.inp} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className={loGin.content}>
        <button type="submit" style={{textAlign:'center',cursor:'pointer',marginLeft:'35%', padding: '10px 15px 10px 15px',marginBottom:'5%',fontSize:'18px' ,border:'none',color:'white',backgroundColor:'#201a44',borderRadius:'10px',marginTop:'5px'}}>Login</button> {/* Change type to "submit" */}
        </div>
        <div className={loGin.content}>
            <Link to='/register' style={{marginTop:'5%',width:'80%',marginLeft:'20%'}}>Not have an account?</Link>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login
