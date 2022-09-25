import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
   <Fragment>
     <nav className=" bg-transparent w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
          <Link to={`/`}><div className='text-white text-2xl cursor-pointer font-semibold'>HSYSTEM</div></Link>
      </div>
    </nav>
    {children}
   </Fragment>
  )
}

export default Layout