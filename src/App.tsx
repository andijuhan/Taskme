import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import Todos from './components/Todos';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
   return (
      <Router>
         <Routes>
            <Route path='app' element={<HomePage />}>
               <Route index element={<Dashboard />} />
               <Route path='projects' element={<ProjectsPage />} />
               <Route path='todos' element={<Todos />} />
            </Route>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
