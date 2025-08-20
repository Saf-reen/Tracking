import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">
      <Header showNav={true} />
      
      <main className="flex items-center justify-center flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-transparent border border-green-600 shadow-lg rounded-2xl">
                <span className="text-4xl font-bold text-green-600">₹</span>
              </div>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-gray-800 sm:text-6xl">
              Track<span className="text-green-600">Budget</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
              Smart way to track your project budgets! Take control of your organization's finances with our intuitive budget tracking app.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid gap-8 mb-12 md:grid-cols-3">
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg">
                <span className="text-2xl text-green-600">🏢</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Manage Organizations</h3>
              <p className="text-gray-600">Create and manage multiple organizations with their project budgets.</p>
            </Card>
            
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg">
                <span className="text-2xl text-green-600">📊</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Track Projects</h3>
              <p className="text-gray-600">Monitor project expenses and categorize spending across different projects.</p>
            </Card>
            
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg">
                <span className="text-2xl text-green-600">📈</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Budget Analysis</h3>
              <p className="text-gray-600">Get insights into project spending patterns and budget utilization.</p>
            </Card>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px] border-2 border-green-600"
              onClick={() => navigate('/signup')}
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;