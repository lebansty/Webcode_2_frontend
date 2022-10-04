import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
   
        
          <p className='mt-3'><Link className='sidebarNav' to={'/home'} >Home</Link></p>
          <p>Public</p>
          <ul className='lists'><FontAwesomeIcon icon={faGlobe} />&nbsp;<Link className='sidebarNav' to={'/home/question'}>Questions</Link>
            <li><Link className='sidebarNav' to={'/home/searchques'}>Tags</Link></li>
            <li><Link className='sidebarNav' to={'/home/userprofile'}>Users</Link></li>
            <li> <Link className='sidebarNav' to={'/home/companies'}>Companies</Link></li>
          </ul>
 
        {/* <div className="col-md-7" >
          <span>Top Questions</span>
        </div>
        <div className="col-md-3">
          hw r u
        </div> */}
   
    </>
  )
}

export default Home