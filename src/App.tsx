import './App.css';
import AppLayout from './pages/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import Todos from './components/Todos';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';

const App: React.FC = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='app' element={<AppLayout />}>
               <Route index element={<Dashboard />} />
               <Route path='projects' element={<ProjectsPage />} />
               <Route path='projects/:projectId' element={<ProjectDetails />} />
               <Route path='todos' element={<Todos />} />
            </Route>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
