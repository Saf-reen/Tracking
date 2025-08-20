// import {React, useEffect} from 'react';
// import Button from './Button';
// const Header = ({ showNav = false, onNavigate }) => {
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div 
//             className="flex items-center cursor-pointer"
//             onClick={() => onNavigate && onNavigate('home')}
//           >
//             <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
//               <span className="text-white font-bold text-lg">₹</span>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">Track</h1>
//             <h1 className="text-2xl font-bold text-green-600">Budget</h1>
//           </div>
          
//           {showNav && (
//             <nav className="flex space-x-4">
//               <Button 
//                 variant="outline" 
//                 size="sm"
//                 onClick={() => onNavigate('signin')}
//               >
//                 Sign In
//               </Button>
//               <Button 
//                 size="sm"
//                 onClick={() => onNavigate('signup')}
//               >
//                 Sign Up
//               </Button>
//             </nav>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Header = ({ showNav = false, isAuthenticated = false }) => {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     // Add your sign out logic here (clear tokens, etc.)
//     navigate('/');
//   };

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//             <div className="w-8 h-8 bg-transparent border border-green-600 rounded-lg flex items-center justify-center mr-3">
//               <span className="text-green-600 font-bold text-lg">₹</span>
//             </div>
//             <span className="text-xl font-bold text-gray-800">TrackBudget</span>
//           </div>
          
//           {showNav && isAuthenticated && (
//             <nav className="hidden md:flex space-x-8">
//               <button onClick={() => navigate('/')} className="text-gray-600 hover:text-green-600 transition-colors">
//                 Home
//               </button>
             
//             </nav>
//           )}
          
//           <div className="flex items-center space-x-4">
//             {isAuthenticated ? (
//               // Show user menu when authenticated
//               <>
//                 <button onClick={() => navigate('/profile')} className="text-gray-600 hover:text-green-600 transition-colors">
//                   Profile
//                 </button>
//                 <button 
//                   onClick={handleSignOut}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               // Show sign in/up buttons when not authenticated
//               <>
//                 <button onClick={() => navigate('/signin')} className="text-gray-600 hover:text-green-600 transition-colors">
//                   Sign In
//                 </button>
//                 <button 
//                   onClick={() => navigate('/signup')}
//                   className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ showNav = false, isAuthenticated = false }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add your sign out logic here (clear tokens, etc.)
    // For example: localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-transparent border border-green-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600 font-bold text-lg">₹</span>
            </div>
            <span className="text-xl font-bold text-gray-800">TrackBudget</span>
          </div>
          
          {/* {showNav && isAuthenticated && (
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/dashboard')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Dashboard
              </button>
              <button onClick={() => navigate('/project-tracking')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Project Tracking
              </button>
              <button onClick={() => navigate('/project-budgeting')} className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Project Budgeting
              </button>
            </nav>
          )} */}
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // Show user menu when authenticated
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleSignOut}
                  className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-700 transition-colors font-small"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // Show sign in/up buttons when not authenticated
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/signin')} 
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
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