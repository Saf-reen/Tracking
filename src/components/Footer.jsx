import {React, useEffect} from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">₹</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">Track</span>
            <span className="text-lg font-semibold text-green-800">Budget</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 TrackBudget. Smart way to track your expenses!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
