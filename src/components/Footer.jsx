import {React, useEffect} from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-6 h-6 mr-2 bg-white border border-green-600 rounded-md">
              <span className="text-sm font-bold text-green-600">₹</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">Track</span>
            <span className="text-lg font-semibold text-green-800">Budget</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2025 TrackBudget. Smart way to track your expenses!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
