import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // Import the auth context
import { useNavigate } from 'react-router-dom';
import Reset from '../pages/Reset'; // Import the Reset modal component

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar, currentPath = '/dashboard' }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [showResetModal, setShowResetModal] = useState(false);

  const getUserInitials = (email) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
  };

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      )
    },
    {
      name: 'Project Tracking',
      path: '/project-tracking',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Budget Management',
      path: '/project-budgeting',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Profile Settings',
      path: '/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    logout(); // Use context logout function
    navigate('/');
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const handleResetPassword = () => {
    setShowResetModal(true);
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const closeResetModal = () => {
    setShowResetModal(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:shadow-none md:border-r md:border-slate-200
        w-72 flex flex-col
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80">
          <div className="flex items-center space-x-3">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="flex items-center justify-center w-8 h-8 mr-3 bg-transparent border border-green-600 rounded-lg">
                <span className="text-lg font-bold text-green-600">₹</span>
              </div>
              <span className="text-xl font-bold text-gray-800">TrackBudget</span>
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={toggleSidebar}
            className="p-2 transition-colors rounded-lg md:hidden hover:bg-slate-100"
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`
                group w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 font-medium text-sm
                ${currentPath === item.path 
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
            >
              <div className={`
                ${currentPath === item.path ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}
                transition-colors duration-200
              `}>
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
              {currentPath === item.path && (
                <div className="w-2 h-2 ml-auto bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-slate-200/60 bg-slate-50/50">
          {/* User Info */}
          <div className="flex items-center p-3 mb-4 space-x-3 bg-white border shadow-sm rounded-xl border-slate-100">
            <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-green-600 rounded-full">
              {getUserInitials(user?.email)}
            </div>
            <span className="hidden truncate sm:block max-w-24">
              {user?.email ? user.email.split('@')[0] : user?.name || 'User'}
            </span>
          </div>

          {/* Reset Password Button */}
          <button
            onClick={handleResetPassword}
            className="flex items-center justify-center w-full px-4 py-3 mb-2 space-x-2 text-sm font-medium transition-all duration-200 border text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl border-slate-200 hover:border-blue-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Reset Password</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-3 space-x-2 text-sm font-medium transition-all duration-200 border text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl border-slate-200 hover:border-red-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetModal && (
        <Reset onClose={closeResetModal} />
      )}
    </>
  );
};

export default Sidebar;