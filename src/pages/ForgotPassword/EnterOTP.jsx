import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';

const EnterOTP = ({ onNavigate, email }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // Format timer display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last character
    setOtp(newOtp);

    // Clear errors when user starts typing
    if (errors.otp) {
      setErrors({});
    }

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(digit => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      newErrors.otp = 'Please enter the complete 6-digit OTP';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Navigate to reset password with email
        onNavigate('reset-password', { email });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleResendOTP = () => {
    setTimeLeft(900); // Reset timer to 15 minutes
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    setErrors({});
    
    // Focus first input
    inputRefs.current[0]?.focus();
    
    // Here you would typically make an API call to resend OTP
    console.log('Resending OTP to:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      <Header onNavigate={onNavigate} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <Card className="p-6 sm:p-8 w-full max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Enter Verification Code</h2>
            <p className="text-gray-600 mt-2">
              We've sent a 6-digit code to<br />
              <strong className="text-gray-800">{email}</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input */}
            <div>
              <div className="flex justify-center space-x-3 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={e => handleOtpChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg transition-all duration-200 focus:outline-none ${
                      errors.otp 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-green-600 focus:ring-green-200'
                    }`}
                  />
                ))}
              </div>
              
              {errors.otp && (
                <p className="text-sm text-red-600 text-center">{errors.otp}</p>
              )}
            </div>

            {/* Timer */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {timeLeft > 0 ? (
                  <>
                    Code expires in <span className="font-semibold text-green-600">{formatTime(timeLeft)}</span>
                  </>
                ) : (
                  <span className="text-red-600">Code has expired</span>
                )}
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting || timeLeft === 0}
                className="w-full"
              >
                {isSubmitting ? "Verifying..." : "Verify Code"}
              </Button>
            </div>
          </form>

          {/* Resend Section */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-gray-600">
              Didn't receive the code?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <button
                onClick={handleResendOTP}
                disabled={!canResend}
                className={`font-semibold transition-colors duration-200 ${
                  canResend 
                    ? 'text-green-600 hover:text-green-700 cursor-pointer' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                Resend Code
              </button>
              
              <button
                onClick={() => onNavigate('forgot-password')}
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 border-l border-gray-300 pl-3"
              >
                Try Different Email
              </button>
            </div>
          </div>

          {/* Back to Sign In */}
          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('signin')}
              className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm"
            >
              ← Back to Sign In
            </button>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnterOTP;