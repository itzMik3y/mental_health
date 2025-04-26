import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import Layout and Page Components
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HelpHubPage from './pages/HelpHubpagte';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryPage';
import EducationPage from './pages/EducationPage';
import ConfessionsPage from './pages/ConfessionsPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Child routes that will render inside Layout's <Outlet /> */}
        <Route index element={<HomePage />} />
        <Route path="help-hub" element={<HelpHubPage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="stories/:slug" element={<StoryDetailPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="confessions" element={<ConfessionsPage />} />
        
        {/* Add other page routes here as needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;