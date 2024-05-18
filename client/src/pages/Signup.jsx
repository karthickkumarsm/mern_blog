import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto'>
        {/**left*/}
        <div className="">
        <Link
        to='/'
        className='font-bold dark:text-white text-4xl'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Karthick's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        This is Blog website. Feel free to sign up with your email and password or with your google account.
      </p>
        </div>
        {/**right*/}
        <div className="">
          
        </div>
      </div>
    </div>
  )
}

export default Signup