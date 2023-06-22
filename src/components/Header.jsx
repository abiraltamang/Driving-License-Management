import React from 'react'


const Header = () => {
  return (
    <div className='mt-3 ml-2'>
      <header className='flex justify-center'>
        <div>
          <img src="/nepal-govt.png" alt="Government official photo" className='h-32 w-32 mr-3' />
        </div>
        <div className='mt-3 font-medium'>
          <p className='text-sm lg:text-base'>Government of Nepal</p>
          <p className='text-blue-600 text-sm lg:text-base'>Ministry of Physical Infrastructure and Transport</p>
          <p className='text-sm lg:text-base'>Department of Transport Management</p>
          <p className='text-red-600 text-sm lg:text-base'>Online Driving License System</p>
        </div>
      </header>
    </div>
  )
}

export default Header
