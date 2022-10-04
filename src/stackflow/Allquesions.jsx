import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Allquesions() {
    
    const [questions,setQuestions] =useState([])
    
useEffect(()=>{
loadData()
},[])
    let loadData=async()=>{
try {
    let data = await axios.get('https://webcode2stackoverflow.herokuapp.com/all-ques',{
        headers:{
          'auth':window.localStorage.getItem('app-token'),
          'userid':window.localStorage.getItem('userId')
        }
      })
      setQuestions(data.data.questions)
      
     
   
 
} catch (error) {
   console.log(error) 
}

    }
  
  return (
   <>

   <div className="container-fluid mt-4 ">
    <div className="row">
        <div className="col-md-6">
        Top questions
        </div>
        <div className="col-md-6 text-center col-auto me-auto btnQ" >
        <Link type="button" to={'/home/question'} class="btn btn-primary">Ask question</Link>
        </div>
    </div>
    <div style={{height:'50px'}}>

    </div>
    
    
           
          {

            questions.map((val,idx)=>{

                return(
                 <>
                 <div className="row mt-3 all-ques">
        <div className="col-md-12">
                   
                    <div className="row" style={{paddingTop:'30px'}} key={idx}>
                    <div className="col-md-3" >
                       <div className="row">
                        <div className="col-md-12">
  {val.votes.length} voted
                        </div>
                       </div>
                       <div key={idx+"s"} className="row">
                        <div className="col-md-12">
                       {val.comments.length} comments
                        </div>
                       </div>
                       <div key={idx+"l"} className="row">
                        <div className="col-md-12">
                         {val.views.length} viewed
                        </div>
                       </div>
                    </div>
                    <div  className="col-md-8">
                    <Link className='sing-ques' to={`/home/qview/${val._id}`} >{val.ques}</Link>
                    <div className='mt-3'>Asked by {val.userName}</div>
                    </div>
                </div>
                </div>
    </div>
                 </>
                )
            })
          }
     
    
   </div>
   </>
  )
}

export default Allquesions