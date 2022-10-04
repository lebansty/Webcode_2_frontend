import axios from 'axios'
import React, {  useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


function Userprofile() {
  const [questions,setQuestions] =useState([])
    const[user,setUser] =useState({
      firstName:'',
      lastName:''
    })
    useEffect(()=>{
      loadData()
    },[])


   let loadData = async ()=>{
try {
  let userDet = await axios.get('http://localhost:3000/userDet',{
    headers:{
      'auth':window.localStorage.getItem('app-token'),
      'userId':window.localStorage.getItem('userId')
    }
  })
  setUser(userDet.data.user)
  // console.log(userDet)
} catch (error) {
  console.log(error)
}
   }
 
   useEffect(()=>{
    quesData()
   },[])

   let quesData=async()=>{
let dataQ = await axios.get('http://localhost:3000/get-ques',{
  headers:{
    'auth':window.localStorage.getItem('app-token'),
    'userId':window.localStorage.getItem('userId')
  }
})

setQuestions(dataQ.data)
console.log(questions)
   }
let letter = user.firstName.split('')


  return (
    <>
    <div className="row">
    <div className="col-md-3 mt-5" ><div className='profile'>{letter[0]}</div>
     
    </div>
    <div className="col-md-6 nameFont">
   {`${user.firstName} ${user.lastName}`}
    </div>
    </div>
   {
questions ? questions.map((val,index)=>{

  return(
    <div className="row" >
    <div className="col-md-10 mt-5">
    <div key={index} class="card">
<div class="card-header">
  <Link to={`/home/qview/${val._id}`}>{val.title}</Link>
</div>
<div class="card-body">
  <blockquote class="blockquote  mb-3">
    <Link to={`/home/qview/${val._id}`}><p>{val.ques}</p></Link>
    <footer class="blockquote-footer">{val.tags}</footer>
  </blockquote>
</div>
</div>
    </div>
  </div>
  )
}):null

   }


    
    </>
  )
}

export default Userprofile