import './App.css';
import AppLayout from './pages/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='app' element={<AppLayout />}>
               <Route index element={<ProjectsPage />} />
               <Route path='kanban/:projectId' element={<ProjectsPage />} />
            </Route>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
