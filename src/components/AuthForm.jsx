import React from 'react'; // Fixed import - React should be default import
import Input from './Input';
import Button from './Button';
import Card from './Card';

const AuthForm = ({ 
  title,
  fields, 
  onSubmit, 
  submitText, 
  switchText, 
  switchAction,
  errors = {},
  showForgotPassword = false,  // Changed default to false
  onForgotPassword            
}) => {
  return (
    <Card className="w-full max-w-md p-6 mx-auto sm:p-8">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl">
            <span className="text-2xl font-bold text-white">₹</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">Smart way to track your expenses!</p>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <Input
            key={index}
            {...field}
            error={errors[field.name]}
          />
        ))}
        
        {/* Show forgot password only when explicitly enabled and handler is provided */}
        {showForgotPassword && onForgotPassword && (
          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm font-medium text-green-600 transition-colors duration-200 hover:text-green-700 hover:underline"
            >
              Forgot your password?
            </button>
          </div>
        )}
        
        <div className="flex justify-center">
          <Button 
            type="submit" 
            className=""
            size="lg"
          >
            {submitText}
          </Button>
        </div>
      </form>
      
      {switchText && (
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {switchText.text}{' '}
            <button
              type="button"
              onClick={switchAction}
              className="font-semibold text-green-600 transition-colors duration-200 hover:text-green-700 hover:underline"
            >
              {switchText.action}
            </button>
          </p>
        </div>
      )}
    </Card>
  );
};

export default AuthForm;