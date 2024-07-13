import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
          <h2 className='text-2xl' >
            Want to see my other projects?
          </h2>
          <p className='text-gray-500 my-2'>
            Visit my Github profile
          </p>
          <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href='https://github.com/karthickkumarsm' target='_blank' rel='noopener noreferrer'>Way to my Github profile</a>
            </Button>
        </div>
        <div className="p-7 flex-1">
          <img src='https://th.bing.com/th/id/OIP.ByJh3uyy8l3bY5Mvhzd1QgAAAA?rs=1&pid=ImgDetMain'/>
        </div>
    </div>
  )
}

export default CallToAction