import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Searchquestions() {

  const [final,setFinal] = useState([])

  useEffect(() => {
    
    searchLoad()
  }, [])

  let searchLoad = async () => {

    try {
      let keyWord = {
        tag: window.localStorage.getItem('search-word')
      }
      let searchTag = await axios.post('http://localhost:3000/search', keyWord, {
        headers: {
          'auth': window.localStorage.getItem('app-token')
        }
      })
      setFinal(searchTag.data)
      console.log(final)
      console.log(keyWord.tag)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className='mt-5'>Searchquestions</div>
    <hr/>
    
    <div class="container text-center">
  {
    final ? final.map((val,idx)=>{
      return (
       <>
        <div key={idx} class="row">
    
    <div className="col-md-10 align-self-center">
    {/* <Link to={`/home/qview/${val._id}`}>{val.title}</Link> */}
      <Link to={`/home/qview/${val._id}`}><h5>{val.title}</h5></Link>
      <Link to={`/home/qview/${val._id}`}><p>{val.ques}</p></Link>
      
      <p>Tags: {val.tags}</p>
    </div>
 
 
</div>
<hr/>
       </>

      )
    }):null
  }
    </div>
    </>
  )
}

export default Searchquestions