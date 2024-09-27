import React from 'react';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
 
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Health Cues</h1>
      </div>

      <nav>
        <Link to="/" className="hover:text-gray-200 text-lg">Home</Link>
      </nav>
    </header>
  );
};
