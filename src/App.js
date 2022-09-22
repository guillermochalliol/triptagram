import React from 'react';


import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/home" 
                element={
                  <ProtectedRoute >
                    <Home />
                  </ProtectedRoute> 
                }/>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </div>
        </div >
      </div >
    </div>
  );
}

export default App;