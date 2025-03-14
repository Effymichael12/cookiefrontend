import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Landing() {
  const [email, setEmail] = useState('')
  useEffect(() =>{
    const getEmail = async() =>{
      try {
        const response = await axios.get('https://cookiebackend.onrender.com/get-email', {
          withCredentials: true
        });
        if(response.status === 200){
          setEmail(response.data.email);
        }
      } catch (error) {
        if(error.response){
          alert(error.response.data.message)
        }
      }
    } 
    getEmail()
  }, [])
  return (
    <div>
      <h1> Landing </h1>
      <p>{email}</p>
    </div>
  )
}

export default Landing
