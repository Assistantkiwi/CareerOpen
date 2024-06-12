//import { useState } from 'react'
import careerOpen from '../../assets/logo.svg';

const navigation = [
  { name: 'Jobs' },
  { name: 'Job Seekers' },
  { name: 'Employers' },
  { name: 'About' },
]

function Logo() {
    return (
      <img
       src={careerOpen} className="logo" alt="CareerOpen logo"
      />
    );
  }


  export default function NavBar () {
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <div className="bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8 font-bold" aria-label="Global" >
            <a className="w-96 -m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <Logo />
            </a>
          <div className="lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} className="text-base font-bold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end px-3.5 space-x-9">
              <button type='button' className='w-28 h-12 border-2 border-[#008552]'>
                Sign In</button>
              <button type='button' className='w-28 h-12 bg-[#008552]'
              >Sign Up</button>
          </div>
        </nav>
        </div>    
    );
  }
