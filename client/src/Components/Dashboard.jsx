import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {

    axios.get('https://banao-api.vercel.app/auth/verify')
    .then(res => {
      console.log(res);
        if(res.data.status){
          
        }else{
        
            navigate('/')
        }
    })
    },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard