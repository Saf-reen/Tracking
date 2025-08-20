import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showNav={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-2">View and manage all your projects</p>
          </div>
          <Button onClick={() => console.log('Add Project')}>
            + Add Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {/* Empty State */}
          <Card className="p-12 text-center">
            <span className="text-6xl mb-4 block">📋</span>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Projects Yet</h2>
            <p className="text-gray-600 mb-6">
              Add your first project to start tracking budgets and expenses
            </p>
            <Button onClick={() => console.log('Create Project')}>
              Create Your First Project
            </Button>
          </Card>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/dashboard')}
          >
            ← Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;