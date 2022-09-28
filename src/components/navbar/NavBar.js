import React, { useState } from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "../../components/home/Home";
import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";
import Gallery from '../../components/gallery/Gallery';
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import { useUserAuth } from '../../context/UserAuthContext';
import Profile from '../profile/Profile';

function NavBar() {
    const { user, logOut} = useUserAuth();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleLogout = async () => {
        try {
            await logOut();
            Navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
  return (
      <div>
        <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Triptagram</span>
                </a>
                <div className="inline-flex items-center md:order-2">
                      {user ? <>
                        <Link className="block py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100 dark:text-gray-200 dark:hover:text-white"
                            to="/profile">Profile</Link>
                          <button className="block py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100 dark:text-gray-200 dark:hover:text-white" onClick={handleLogout}>LogOut</button>
                      </>
                      :<>
                          
                              <Link className="block py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100 dark:text-gray-200 dark:hover:text-white"
                                  to="signup">Register</Link>
                         
                              <Link className="block py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100 dark:text-gray-200 dark:hover:text-white"
                                  to="login">Login</Link>
                          </>
                      }
                 
                    <button data-collapse-toggle="mobile-menu-2" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
                            to="/">Home</Link>
                        </li>
                        {user &&
                        <li>
                            <Link className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            to="/gallery">Gallery</Link>
                        </li>
                        }
                            
                        
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/gallery"
                element={
                    <ProtectedRoute >
                        <Gallery />
                    </ProtectedRoute>
                } />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>

  )
}

export default NavBar