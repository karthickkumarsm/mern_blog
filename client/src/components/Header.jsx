import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

const Header = () => {
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Karthick's
        </span>
        Blog
      </Link>
      <div className='flex items-center ml-auto'> 
        <TextInput
          type='text'
          placeholder='Search...'
          className='hidden lg:inline-block mr-2'
        />
        <Button color='gray' pill>
          <AiOutlineSearch className='w-6 h-6'/>
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;
