/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
  return (
    <>
      <header className="text-black bg-white body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <i className="fa-solid fa-circle-exclamation text-violet-600 text-xl lg:text-3xl hidden lg:block"></i>
            <span className="ml-3 text-sm lg:text-lg text-violet-800 tracking-wide font-poppins text-center">
              Suicidal Thoughts and Depression Predictor
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-sm lg:text-base justify-center font-poppins">
            <Tippy content="About the Project">
              <NavLink to="/aboutus">
                <span className="mr-5 text-violet-800 hover:text-violet-700 cursor-pointer animate duration-100">
                  AboutTheProject
                </span>
              </NavLink>
            </Tippy>
            <Tippy content="Prediction Form">
              <NavLink to='/voiceinputform'>
                <span className="mr-5 text-violet-800 hover:text-violet-700 cursor-pointer animate duration-100">
                  Predict
                </span>
              </NavLink>
            </Tippy>
            <Tippy content="GitHub link of this Project">
              <a className="mr-5 text-violet-800 hover:text-violet-700 cursor-pointer animate duration-100">
                <i className="fa-brands fa-github text-xl lg:text-3xl"></i>
              </a>
            </Tippy>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
