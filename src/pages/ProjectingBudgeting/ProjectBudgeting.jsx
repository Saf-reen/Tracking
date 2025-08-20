import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Card from '../../components/Card';

const ProjectBudgeting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showNav={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your organizations, projects, and budgets</p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/organizations')}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Organizations</h3>
                <p className="text-gray-600 text-sm">Manage your organizations</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/projects')}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                <p className="text-gray-600 text-sm">View and manage projects</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/budgets')}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-yellow-600 text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Budgets</h3>
                <p className="text-gray-600 text-sm">Track project budgets</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Organizations</h2>
            <div className="space-y-3">
              <div className="text-center text-gray-500 py-8">
                <span className="text-4xl mb-2 block">🏢</span>
                <p>No organizations created yet</p>
                <Button 
                  className="mt-3" 
                  size="sm"
                  onClick={() => navigate('/organizations')}
                >
                  Add Organization
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Projects</h2>
            <div className="space-y-3">
              <div className="text-center text-gray-500 py-8">
                <span className="text-4xl mb-2 block">📋</span>
                <p>No projects created yet</p>
                <Button 
                  className="mt-3" 
                  size="sm"
                  onClick={() => navigate('/projects')}
                >
                  Add Project
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectBudgeting; 