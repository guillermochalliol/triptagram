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
    const [navbarOpen, setNavbarOpen] = useState(false)
    
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
          <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src="logo.png"  className="mr-2" width="40px" alt="logo"/>
                        <span className="self-center text-xl font-semibold text-primary whitespace-nowrap">Triptagram</span>
                </a>
                <div className="inline-flex items-center md:order-2">
                    {user ? <>
                        <Link className="hidden md:flex py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100"
                        to="/profile">Profile</Link>
                        <button className="hidden md:flex py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100" onClick={handleLogout}>LogOut</button>
                    </>
                    :<>
                        <Link className="hidden md:flex py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100"
                        to="signup">Register</Link>
                        <Link className="hidden md:flex py-2 px-4 mx-2 text-sm text-gray-700 hover:bg-gray-200 bg-gray-100"
                        to="login">Login</Link>
                    </>
                      }
                 
                      <button onClick={() => {
                          setNavbarOpen(!navbarOpen); console.log(navbarOpen)
                      }} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                  <div className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${navbarOpen ? "translate-x-0 " : "hidden" }`} id="mobile-menu-2">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link href="#" className="block py-2 pr-4 pl-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 " aria-current="page"
                            to="/">Home</Link>
                        </li>
                        {user ?
                        <>
                            <li>
                                      <Link className="block py-2 y-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                to="/gallery">Gallery</Link>
                            </li>
                            <Link className="block md:hidden py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                to="/profile">Profile</Link>
                            <li className="m-0">
                                <button className="block md:hidden py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={handleLogout}>LogOut</button>
                            </li>
                        </>:
                        <>
                            <li>
                                <Link className="block md:hidden py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                to="signup">Register</Link>
                            </li>
                            <li>
                                <Link className="block md:hidden py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                                to="login">Login</Link>
                            </li>
                        </>
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