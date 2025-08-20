import React, { useState, useEffect } from 'react';

const Reset = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle clicking outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Simulate password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!oldPassword) {
      setMessage('Please enter your current password.');
      return;
    }
    if (!newPassword) {
      setMessage('Please enter a new password.');
      return;
    }
    if (newPassword.length < 6) {
      setMessage('New password must be at least 6 characters long.');
      return;
    }
    if (oldPassword === newPassword) {
      setMessage('New password must be different from current password.');
      return;
    }
    
    setIsLoading(true);
    setMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Password changed successfully!');
      setIsLoading(false);
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 1500);
  };

  const resetForm = () => {
    setOldPassword('');
    setNewPassword('');
    setMessage('');
    setIsLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/70 backdrop-blur-md"
      onClick={handleOverlayClick}
      style={{ zIndex: 9999 }}
    >
      <div className="relative w-full max-w-md p-6 mx-4 transition-all duration-300 transform scale-100 bg-white shadow-2xl rounded-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute p-2 text-gray-400 transition-colors duration-200 rounded-full top-4 right-4 hover:text-gray-600 hover:bg-gray-100"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Change Password</h2>
          <p className="text-sm text-gray-600">
            Enter your current password and choose a new one
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            message.includes('successful') 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : message.includes('error') || message.includes('not match') || message.includes('must be')
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {message}
          </div>
        )}

        {/* Password Change Form */}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 transition-colors duration-200 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 transition-colors duration-200 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isLoading}
              minLength={6}
              required
            />
            <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex items-center justify-center w-full px-4 py-3 space-x-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Changing Password...</span>
              </>
            ) : (
              <span>Change Password</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;