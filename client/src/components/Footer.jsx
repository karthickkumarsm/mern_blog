import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub, BsInstagram, BsLinkedin, BsMedium} from 'react-icons/bs' 

const FooterCon = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link
                        to='/'
                        className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                    >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                      Karthick's
                    </span>
                    Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='Projects' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://threejsshop.netlify.app/' target='_blank' rel='noopener noreferrer'>
                            3D T-shirt Design
                        </Footer.Link>
                        <Footer.Link href='https://www.amazon.com/gp/product/B0CVS77DNZ' target='_blank' rel='noopener noreferrer'>
                           Habit Tracker
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://github.com/karthickkumarsm' target='_blank' rel='noopener noreferrer'>
                            GitHub
                        </Footer.Link>
                        <Footer.Link href='https://www.linkedin.com/in/karthick-kumar-sm' target='_blank' rel='noopener noreferrer'>
                           LinkedIn
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='/privacy'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='/terms'>
                           Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='/about' by="Karthick's Blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='https://www.linkedin.com/in/karthick-kumar-sm' icon={BsLinkedin}/>
                    <Footer.Icon href='https://medium.com/@sivakumarkarthickkumar' icon={BsMedium}/>
                    <Footer.Icon href='https://github.com/karthickkumarsm' icon={BsGithub}/>
                    <Footer.Icon href='https://instagram.com/sm__karthick' icon={BsInstagram}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCon