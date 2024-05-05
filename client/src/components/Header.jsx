import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa'; 
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
      <TextInput
         type='text'
         placeholder='Search...'
         rightIcon={AiOutlineSearch}
         className='hidden lg:inline'
      />
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch/>
        </Button>
      
      <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 sm:inline' color='gray' pill>
          <FaMoon/>
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>
      </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
