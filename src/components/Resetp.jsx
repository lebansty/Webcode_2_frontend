import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Resetp() {
    let navi =useNavigate()
  const queryParams = new URLSearchParams(window.location.search)
  const token = queryParams.get("code")

  const [stCode,setStcode] = useState({})
  
 
  
  useEffect(()=>{
    loadData()
  },[])

let loadData = async ()=>{
  
try {
  let verifiction = await axios.get("https://webcode2stackoverflow.herokuapp.com/token-verify",{
  headers:{
'authorization':token
  }

})

console.log(verifiction)
setStcode(verifiction.data.userF)





} catch (error) {
  console.log(error);
 
}
}
let formik =useFormik({
    initialValues:{
      password:""
     
    },
    validate:(values)=>{
let errors={};
if(values.email === ""){
  errors.email = "Enter email Id";
}

  return errors;


    },
    onSubmit: async (values)=>{
try {
  console.log(values)
await axios.put("https://webcode2-backend.vercel.app/update",values,{
headers:{
  'authorization':token
}
})
alert("Password updated")
navi("/")

} catch (error) {
  console.log(error)
}
    }
    
  })
  return (
    <>
    {
        stCode ? ( <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 col-sm-6  mailverify ">
                <form onSubmit={formik.handleSubmit}>
                <div className="mt-5">
  <label htmlFor="exampleInputPassword1" className="form-label">Enter new password</label>
  <input type="password" value={formik.values.password} onChange={formik.handleChange} name="password" className="form-control" id="exampleInputPassword1"/>
</div>
                  
                    <div className='bton'>
                        <button type="submit" style={{ backgroundColor: "dodgerblue", border: 'none' }} class="btn btn-primary mt-4">Verify</button>
                    </div>
        
                </form>
                
            </div>
        </div>
        </div> ):<div>Unauthorized</div>
    }
    </>
    
  )
}

export default Resetp

