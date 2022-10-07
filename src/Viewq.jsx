import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewq() {
    let params = useParams();
    const [details, setDetails] = useState({})
    const [comment, setComment] = useState([])
    const [long, setLong] = useState([])
    const [nView , setNview] = useState([])
    const [rend,setRend] = useState(0)
    useEffect(() => {
        loadData();
    }, [])
    let loadData = async () => {
        try {

            let uData = await axios.get(`https://webcode2stackoverflow.herokuapp.com/ques/${params.id}`, {
                headers: {
                    'auth': window.localStorage.getItem('app-token'),
                }
            })
            setDetails(uData.data.question)
            setComment(uData.data.question.comments)
            setLong(uData.data.question.votes)
            setNview(uData.data.question.views)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        viewedCount()
    },[rend])
    let viewedCount =async ()=>{
        try {
          let viewedC = await axios.get(`https://webcode2stackoverflow.herokuapp.com/view-count/${params.id}`,{
            headers:{
              'auth':window.localStorage.getItem('app-token'),
                  'userid':window.localStorage.getItem('userId')
            }
          })
          console.log(viewedC)
        } catch (error) {
          console.log(error)
        }
            }
    let formik = useFormik({
        initialValues: {
            lines: ''
        },
        validate: () => {
            let errors = {}

            return errors
        },
        onSubmit: async (values) => {

            values.userid = window.localStorage.getItem('userId')

            try {
                await axios.put(`https://webcode2stackoverflow.herokuapp.com/cmtpost/${params.id}`, values, {
                    headers: {
                        'auth': window.localStorage.getItem('app-token'),

                    }
                })
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        }

    })
    let vote = async () => {
        try {
            let val = await axios.get(`https://webcode2stackoverflow.herokuapp.com/positive-vote/${params.id}`, {
                headers: {
                    'auth': window.localStorage.getItem('app-token'),
                    'userId': window.localStorage.getItem('userId')
                }
            })
            
            console.log(val)
            setRend(rend+1)
            // window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    let nVote = async () => {
        try {
            let val = await axios.delete(`https://webcode2stackoverflow.herokuapp.com/negative-vote/${params.id}`, {
                headers: {
                    'auth': window.localStorage.getItem('app-token'),
                    'userId': window.localStorage.getItem('userId')
                }
            })
        //    window.location.reload();
           setRend(rend+1)
            console.log(val)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(long ? long.length:null)
    console.log(comment)
    return (
        <>
           <div className="container">
           <h4 className='mt-5'>{details.title}</h4>
            <p>Viewed {nView?nView.length:0} times</p>
            <hr />
            <div className="row text-center">

                <div className="col-md-3">
                    <div><FontAwesomeIcon icon={faCircleChevronUp} style={{fontSize:'30px',color:"#8A8A8A"}} onClick={vote} className='mb-3'/></div>
                    <b>votes{long ? long.length:0}</b>
                    <div><FontAwesomeIcon onClick={nVote} style={{fontSize:'30px',color:'#8A8A8A'}} className="mt-3"  icon={faCircleChevronDown}  /></div>
                </div>
                <div className="col-md-8">
                    {details.ques}
                </div>
            </div>
            <div className="row mt-5 comment-show-case">
                
                    {
                        comment ? comment.map((arr, idx) => {
                            return (
                                <>
                                   <div className="col-md-8  g-2">
                                    <div key={idx}>
                                      comment {idx+1} : {arr.lines}
                                    </div>
                                    </div>
                                </>
                            )
                        }) :null
                    }
                
            </div>
            <div className="row">
                <div className="col-md-12 mb-5 mt-5">
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments (Answer)</label>
                        <textarea className="form-control" name='lines' value={formik.values.lines} onChange={formik.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type='submit' className='btn btn-primary mt-4'>Post your answer</button>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}

export default Viewq