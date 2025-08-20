
import React from 'react';
import { AuthProvider } from './components/AuthContext';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Organizations from './pages/Dashboard/Organization';
import Projects from './pages/Dashboard/Project';
import Budgets from './pages/Dashboard/Budget';
import ProjectBudgeting from './pages/ProjectingBudgeting/ProjectBudgeting';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import EnterOTP from "./pages/ForgotPassword/EnterOTP";
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Reset from './pages/Reset';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/enter-otp" element={<EnterOTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/project-budgeting" element={<ProjectBudgeting />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;