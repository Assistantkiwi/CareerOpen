
import careerOpen from '../../assets/logo.svg';
import Buttons from './Buttons.jsx';

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


  const NavBar = () => {

    
    return (
      
      <div className="bg-white md:max-w-full mb-3 -mt-5">

        <nav className="flex items-center justify-between p-6 px-8 font-bold" aria-label="Global" >
              <Logo />
          <div className="lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} className="text-base font-medium leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <Buttons />
          </div>
        </nav>
        </div>    
    );
  }

export default NavBar