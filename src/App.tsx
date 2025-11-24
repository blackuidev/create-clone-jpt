import React from 'react';
import Header from '@/components/layout/Header'; // Import the Header component
import './App.css';
import { Outlet } from 'react-router-dom'; // Assuming react-router-dom for routing

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Render the Header component here */}
      <main className="flex-grow container mx-auto p-4">
        {/* Outlet renders the current route's component */}
        <Outlet />
      </main>
      {/* A Footer component could be added here later */}
    </div>
  );
}

export default App;
