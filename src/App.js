import React from 'react';

import './styles/main.css';
import NavBar from './components/navbar/NavBar';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className="app">
      <UserAuthContextProvider>
        <NavBar />
      </UserAuthContextProvider>
    </div>

  );
}

export default App;