import React from 'react'
import { Outlet } from 'react-router-dom'

function Header() {
  return (
   <>
    <div className='head'>Stack Overflow</div>
   <Outlet/>

   </>
  )
}

export default Header