import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around py-2">
        <Link to="/" className="flex flex-col items-center text-green-700">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/results" className="flex flex-col items-center text-green-700">
          <ChartBarIcon className="h-6 w-6" />
          <span className="text-xs">Results</span>
        </Link>
        <Link to="/stats" className="flex flex-col items-center text-green-700">
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">Stats</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center text-green-700">
          <CogIcon className="h-6 w-6" />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;