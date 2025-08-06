import {React, useEffect} from 'react';
import Button from './Button';
const Header = ({ showNav = false, onNavigate }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate && onNavigate('home')}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">$</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">TrackBudget</h1>
          </div>
          
          {showNav && (
            <nav className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNavigate('signin')}
              >
                Sign In
              </Button>
              <Button 
                size="sm"
                onClick={() => onNavigate('signup')}
              >
                Sign Up
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
