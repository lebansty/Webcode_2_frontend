import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Activation() {
   let navigate = useNavigate()
  const queryParams = new URLSearchParams(window.location.search)
  const token = queryParams.get('code')

  const [msg,setMsg] =useState('verifying...')
let loadData =async()=>{
try {
 let msgDis= await axios.get('https://webcode2stackoverflow.herokuapp.com/token-verifi',{
headers:{
  'auth':token
}

})
console.log("verify")
setMsg(msgDis.data.messege)
navigate('/')
} catch (error) {
  console.log(error)
}
}
useEffect(()=>{
  loadData();
  },[])
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6 acti">
            <div>{msg}</div>
            <div className='mt-5' ><Link style={{float:'left'}} to={'/'}>Login</Link></div>
        </div>
    </div>
</div>
  )
}

export default Activation