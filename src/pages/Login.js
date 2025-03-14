import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async() =>{
    try {
      const response = await axios.post('http://localhost:5200/login', {email, password}, {
        withCredentials: true
      });
      if(response.status === 200){
        alert(response.data.message)
        window.location.href = '/landing'
      }
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }
    }
  }
  return (
    <div className='login'>
      <h1> Login</h1>
      <input onChange={(e) =>setEmail(e.target.value)} placeholder='email' />
      <input onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
      <button onClick={()=>handleSubmit()} className="submit">Submit</button>
    
    </div>
  )
}

export default Login