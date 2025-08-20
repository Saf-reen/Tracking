// Header.js - Updated to use Auth Context
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"; 
import { useAuth } from './AuthContext'; // Import the auth context

const Header = ({ showNav = false }) => {
  const muser=useSelector((state)=>state.auth.user);
  console.log(muser);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Get auth state from context
  const { isAuthenticated, user, logout } = useAuth();

  const handleSignOut = () => {
    logout(); // Use context logout function
    setIsDropdownOpen(false);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get user initials for avatar
  const getUserInitials = (email) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-transparent border border-green-600 rounded-lg">
              <span className="text-lg font-bold text-green-600">₹</span>
            </div>
            <span className="text-xl font-bold text-gray-800">TrackBudget</span>
          </div>
          
          {/* Navigation can be uncommented when needed */}
          {/* {showNav && isAuthenticated && (
            <nav className="hidden space-x-8 md:flex">
              <button onClick={() => navigate('/dashboard')} className="font-medium text-gray-600 transition-colors hover:text-green-600">
                Dashboard
              </button>
              <button onClick={() => navigate('/project-tracking')} className="font-medium text-gray-600 transition-colors hover:text-green-600">
                Project Tracking
              </button>
              <button onClick={() => navigate('/project-budgeting')} className="font-medium text-gray-600 transition-colors hover:text-green-600">
                Project Budgeting
              </button>
            </nav>
          )} */}
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // Show profile dropdown when authenticated
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-green-600 rounded-full">
                    {getUserInitials(user?.email)}
                  </div>
                  <span className="hidden truncate sm:block max-w-24">
                    {user?.email ? user.email.split('@')[0] : user?.name || 'User'}
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="py-1">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Signed in as</p>
                        <p className="text-sm text-gray-600 truncate">{user?.email || 'user@example.com'}</p>
                      </div>
                      
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/profile');
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </button>
                      
                      <div className="border-t border-gray-100"></div>
                      
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Show sign in/up buttons when not authenticated
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/signin')} 
                  className="font-medium text-gray-600 transition-colors hover:text-green-600"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className="px-4 py-2 font-medium text-white transition-colors bg-green-600 rounded-md hover:bg-green-700"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;