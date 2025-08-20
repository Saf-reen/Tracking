import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', budget: 5000, spent: 3200, status: 'In Progress' },
    { id: 2, name: 'Mobile App', budget: 8000, spent: 2100, status: 'Planning' },
    { id: 3, name: 'Marketing Campaign', budget: 3000, spent: 2850, status: 'Almost Complete' }
  ]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
        <p className="text-gray-600">Manage and track your project budgets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget:</span>
                <span className="font-semibold">₹{project.budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Spent:</span>
                <span className="font-semibold">₹{project.spent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Remaining:</span>
                <span className="font-semibold text-green-600">₹{(project.budget - project.spent).toLocaleString()}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(project.spent / project.budget) * 100}%` }}
              ></div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

