import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Questions() {
  let navigate =useNavigate()
  let formik=useFormik({
    initialValues:{
title:'',
ques:'',
tags:''
    },
    validate:(values)=>{
let errors ={}

return errors

    },
    onSubmit:async(values)=>{
try {
  let postQues=await axios.post('http://localhost:3000/ques-post',values,{
    headers:{
      'auth':window.localStorage.getItem('app-token'),
      'userid':window.localStorage.getItem('userId')
    }
  })
  console.log(postQues)
  navigate('/home')
} catch (error) {
  console.log(error)
}
    }
  })
  return (
    <>
    <div>Questions</div>
   <div className="container">
   <div className="row mt-5 align-self-center align-items-center "><b>Ask your question</b>
        <div className="col-md-10 mt-5 enterQ">
    <form onSubmit={formik.handleSubmit}>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Title</label>
  <div class="form-text">Be specific and imagine you are asking a question to another person</div>
  <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Enter your title here"/>
  
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Body</label>
  <div class="form-text">Include all the information someone would need to answer your question</div>
  <textarea class="form-control" name="ques" value={formik.values.ques} onChange={formik.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <label for="inputAddress2" class="form-label">Tags</label>
    <div class="form-text">Add up to 5 tags to describe what your question is about</div>
    
    <input type="text" name="tags" value={formik.values.tags} onChange={formik.handleChange} class="form-control" id="tags" placeholder="(e.g)c++,javaScript,java,phython"/>
  </div>
<button type='submit'  className='btn btn-primary  mt-4'>Post</button>
    </form>
        </div>
    </div>
   </div>
    </>
  )
}

export default Questions;