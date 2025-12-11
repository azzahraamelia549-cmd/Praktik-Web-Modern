import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userData = {
    name: "Azhara Amelia H",
    email: "azharaamelia549@gmail.com",
    avatar: "/vite.svg",
    joinDate: "2025-10-16",
  };

  return (
    <div className="App">
      <h1>Demo JSX dan Rendering</h1>

      {/* Toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Component dengan conditional rendering */}
      <UserProfile user={userData} isLoggedIn={isLoggedIn} />

      {/* Dynamic styling */}
      <div 
        style={{
          padding: '20px',
          margin: '10px 0',
          backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
          border: isLoggedIn ? '2px solid #3c6cb' : '2px solid #f5c6cb',
          borderRadius: '5px',
        }}
      >
        Status: {isLoggedIn ? '✅ Berhasil login' : '❌ Belum login'}
      </div>
    </div>
  );
}

export default App;