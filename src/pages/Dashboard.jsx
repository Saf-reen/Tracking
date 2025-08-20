
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Dashboard = () => {
  const navigate = useNavigate();
  console.log(navigate)

  return (
    <div className="w-screen min-h-screen bg-cover bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header showNav={true} isAuthenticated={true}/>
      
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Project Management Dashboard
          </h1>
          <p className="mx-auto text-xl text-gray-600 max-w-1xl">
            Streamline your project tracking and budget management in one unified platform
          </p>
        </div>

        {/* Main Modules */}
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {/* Project Tracking Module */}
          <Card className="relative overflow-hidden text-center transition-all duration-300 transform bg-white shadow-xl cursor-pointer group hover:shadow-2xl hover:-translate-y-2"
              onClick={() => navigate('/project-tracking')}>
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-5"></div>
            <div 
              className="flex flex-col justify-between h-full p-8 cursor-pointer"
            >
              <div className='flex flex-col items-center'>
                <div className="flex items-center justify-center w-20 h-20 mb-6 transition-transform duration-300 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl group-hover:scale-110">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                  Project Tracking
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                 Monitor progress, manage tasks, and align teams with real-time updates.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-1/2 px-1 py-3 mt-6 font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-blue-600 hover:to-blue-700"
                  onClick={() => navigate('/project-tracking')}
                >
                  Access Project Tracking
                </Button>
              </div>
            </div>
          </Card>

          {/* Project Budgeting Module */}
          <Card className="relative overflow-hidden text-center transition-all duration-300 transform bg-white shadow-xl cursor-pointer group hover:shadow-2xl hover:-translate-y-2"
              onClick={() => navigate('/project-budgeting')}>
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:opacity-5"></div>
            <div 
              className="flex flex-col justify-between h-full p-8 cursor-pointer"
            >
              <div className='flex flex-col items-center'>
                <div className="flex items-center justify-center w-20 h-20 mb-6 transition-transform duration-300 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl group-hover:scale-110">
                  <span className="text-3xl text-white " >💰</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-green-600">
                  Project Budgeting
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  Control finances, track expenses, and keep projects on budget with detailed insights.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-1/2 py-3 mt-6 font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
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
      <Footer />
    </div>
  );
};

export default Dashboard;