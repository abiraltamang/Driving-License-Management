import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-start items-center bg-sky-700 h-10 px-3 md:px-12 lg:px-20'>
        <div className='max-w-[90%] text-white font-medium flex gap-4'>
          <a href="/" className=''>Home</a>
          <a href="">User Manual</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
