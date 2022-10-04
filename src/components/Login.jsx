// import axios from 'axios'
import axios from 'axios'
import { useFormik } from 'formik'

import { Link, useNavigate } from 'react-router-dom'


function Login() {
    
    let navigate =useNavigate();
  let formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validate: (values) => {
        let errors = {}
        if (values.email === '') {
            errors.email = "Enter email address"
        }
        if(values.password === ''){
            errors.password ='Enter the password'
        }
        return errors
    },
    onSubmit:async(values) => {
        try {
           let tok = await axios.post('http://localhost:3000/loginc',values)
           if(tok.data.userId){
            window.localStorage.setItem('app-token',tok.data.token)
          window.localStorage.setItem('userId',tok.data.userId)
        
           
navigate('/home')
           }else{
            console.log('something went wrong')
           }
           console.log(tok)
        } catch (error) {
            console.log(error,"its me")
            
        }
    }
})
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 col-sm-6  login">
            <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email'value={formik.values.email} onChange={formik.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Enter your registered email id.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input name="password" value={formik.values.password} onChange={formik.handleChange} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div>
                    <Link style={{ marginTop: '32px' }} to={'/forgotpasscode'}>Forgot password</Link>
                </div>
                <div className='bton'>
                    <button type="submit" style={{ backgroundColor: "dodgerblue", border: 'none' }} class="btn btn-primary mt-4">Login</button>
                </div>

            </form>
            <div className="signuplnk mt-5">
                <p>Doesn't have an account?&nbsp;<Link to={'/Signup'}>Signup now</Link></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login