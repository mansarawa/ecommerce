import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      } else {
        console.log('failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button> {/* Change type to "submit" */}
      </form>
    </div>
  )
}

export default Login
