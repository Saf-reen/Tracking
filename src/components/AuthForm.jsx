import {React, useEffect} from 'react';
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
  errors = {}
}) => {
  return (
    <Card className="p-6 sm:p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">₹</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">Smart way to track your expenses!</p>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <Input
            key={index}
            {...field}
            error={errors[field.name]}
          />
        ))}
        
        <div className="flex justify-center"><Button 
          type="submit" 
          className="w-full sm:w-auto"
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
              onClick={switchAction}
              className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
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
