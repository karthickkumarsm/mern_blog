import useState from 'react'
import {Link} from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>
        {/**left*/}
        <div className="flex-1">
        <Link
        to='/'
        className='font-bold dark:text-white text-4xl'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
         Fulto
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        Feel free to sign up with your email and password<br/> or with your google account.
      </p>
        </div>
        {/**right*/}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username'/>
              <TextInput
               type='text'
               placeholder='Username'
               id='username'
               onChange={handleChange}
               />
            </div>
            <div>
              <Label value='Your E-mail'/>
              <TextInput
               type='email'
               placeholder='E-mail'
               id='email'
               onChange={handleChange}
               />
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput
               type='password'
               placeholder='Password'
               id='password'
               onChange={handleChange}
               />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup