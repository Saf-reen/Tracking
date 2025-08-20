
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Dashboard = () => {
  const navigate = useNavigate();
  console.log(navigate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header showNav={true} isAuthenticated={true}/>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Project Management Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-1xl mx-auto">
            Streamline your project tracking and budget management in one unified platform
          </p>
        </div>

        {/* Main Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Project Tracking Module */}
          <Card className="group relative overflow-hidden cursor-pointer text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => navigate('/project-tracking')}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div 
              className="p-8 cursor-pointer h-full flex flex-col justify-between"
            >
              <div className='flex flex-col items-center'>
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  Project Tracking
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 Monitor progress, manage tasks, and align teams with real-time updates.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-1/2 mt-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-1 rounded-lg transition-all duration-200"
                  onClick={() => navigate('/project-tracking')}
                >
                  Access Project Tracking
                </Button>
              </div>
            </div>
          </Card>

          {/* Project Budgeting Module */}
          <Card className="group relative overflow-hidden cursor-pointer text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => navigate('/project-budgeting')}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div 
              className="p-8 cursor-pointer h-full flex flex-col justify-between"
            >
              <div className='flex flex-col items-center'>
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl " >💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Project Budgeting
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Control finances, track expenses, and keep projects on budget with detailed insights.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-1/2 mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                  onClick={() => navigate('/project-budgeting')}
                >
                  Access Project Budgeting
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats Section */}
       

        {/* Getting Started Section */}
       
      </div>
    </div>
  );
};

export default Dashboard;