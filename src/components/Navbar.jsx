import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from './Theme';
import '../styles/About.css'


export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    // Agrega un retraso de 100 milisegundos antes de iniciar el desplazamiento
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

	return (
		<>
   <nav className="bg-[#14213D] fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className=" hidden sm:block sm:ml-6">
              <div className="flex">
              <a onClick={() => handleScroll('home')}
                  className=" cursor-pointer text-xl px-3 py-2 rounded-md font-medium text-white hover:text-[#f17406]"
                  >
                  Home
                </a>
                
                <a onClick={() => handleScroll('about')}
                  className=" cursor-pointer text-xl px-3 py-2 rounded-md font-medium text-white hover:text-[#f17406]"
                  >
                  About
                </a>

                <a onClick={() => handleScroll('skills')}
                  className=" cursor-pointer text-xl px-3 py-2 rounded-md font-medium text-white hover:text-[#f17406]"
                  >
                  Skills
                </a>
                
                <a onClick={() => handleScroll('projects')}
                  className=" cursor-pointer text-xl px-3 py-2 rounded-md font-medium text-white hover:text-[#f17406]"
                  >
                  Projects
                </a>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
      <div className="px-2 pt-2 pb-3" >
          <a
            href="#about"
            className="transition-colors duration-500 hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium text-white hover-text-gray-300 hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
          >
            About
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover-text-gray-300 hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
          >
            Services
          </a>

        </div>
      </div>
    </nav>

		</>
	)
}
