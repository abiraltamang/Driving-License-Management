import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-start bg-sky-700 h-10'>
        <div className='pl-40 pt-1.5 text-white font-medium flex gap-4'>
          <a href="" className=''>Home</a>
          <a href="" className=''>License Search</a>
          <a href="" className=''>Quota Overview</a>
          <a href="" className=''>License Print Check</a>
          <a href="" className=''>FAQ</a>
          <a href="">User Manual</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
