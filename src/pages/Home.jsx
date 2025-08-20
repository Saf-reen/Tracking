// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Button from '../components/Button';
// import Card from '../components/Card';
// const Home = ({ onNavigate }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
//       <Header showNav={true} onNavigate={onNavigate} />
      
//       <main className="flex-1 flex items-center justify-center px-4 py-16">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Hero Section */}
//           <div className="mb-12">
//             <div className="flex items-center justify-center mb-6">
//               <div className="w-20 h-20 bg-transparent border border-green-600 rounded-2xl flex items-center justify-center shadow-lg">
//                 <span className=" text-green-600 font-bold text-4xl">₹</span>
//               </div>
//             </div>
//             <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
//               Track<span className="text-green-600">Budget</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Smart way to track your expenses! Take control of your finances with our intuitive budget tracking app.
//             </p>
//           </div>
          
//           {/* Features */}
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <Card className="p-6 hover:shadow-xl transition-all duration-300">
//               <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-600 text-2xl">📊</span>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Track Expenses</h3>
//               <p className="text-gray-600">Monitor your daily expenses and categorize your spending habits.</p>
//             </Card>
            
//             <Card className="p-6 hover:shadow-xl transition-all duration-300">
//               <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-600 text-2xl">💰</span>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Set Budgets</h3>
//               <p className="text-gray-600">Create monthly budgets and stay within your financial limits.</p>
//             </Card>
            
//             <Card className="p-6 hover:shadow-xl transition-all duration-300">
//               <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-600 text-2xl">📈</span>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Analyze Trends</h3>
//               <p className="text-gray-600">Get insights into your spending patterns and financial trends.</p>
//             </Card>
//           </div>
          
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button 
//               size="lg" 
//               className="w-full sm:w-auto min-w-[200px] border-2 border-green-600"
//               onClick={() => onNavigate('signup')}
//             >
//               Get Started Free
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               className="w-full sm:w-auto min-w-[200px]"
//               onClick={() => onNavigate('signin')}
//             >
//               Sign In
//             </Button>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Header showNav={true} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-transparent border border-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-green-600 font-bold text-4xl">₹</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
              Track<span className="text-green-600">Budget</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Smart way to track your project budgets! Take control of your organization's finances with our intuitive budget tracking app.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Manage Organizations</h3>
              <p className="text-gray-600">Create and manage multiple organizations with their project budgets.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Track Projects</h3>
              <p className="text-gray-600">Monitor project expenses and categorize spending across different projects.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Budget Analysis</h3>
              <p className="text-gray-600">Get insights into project spending patterns and budget utilization.</p>
            </Card>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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