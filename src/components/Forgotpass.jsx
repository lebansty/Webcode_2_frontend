import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'


function Forgotpass() {
    let formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            let errors = {}
            if (values.email === '') {
                errors.email = "Enter email address"
            }
           
            return errors
        },
        onSubmit:async(values) => {
            try {
                let verify = await axios.post('http://localhost:3000/verify-email',values)
               console.log(verify)
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 col-sm-6  mailverify ">
            <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email'value={formik.values.email} onChange={formik.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Enter your registered email id.</div>
                </div>
              
              
                <div className='bton'>
                    <button type="submit" style={{ backgroundColor: "dodgerblue", border: 'none' }} class="btn btn-primary mt-4">Verify</button>
                </div>

            </form>
            
        </div>
    </div>
</div>
  )
}

export default Forgotpass