import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';

// Import Layout and Page Components
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HelpHubPage from './pages/HelpHubpagte'; // Adjust path if needed

function App() {
  // Remove the useState if not used globally

  return (
    <Routes> {/* Define all application routes */}
      <Route path="/" element={<Layout />}> {/* Parent route using the Layout */}
        {/* Child routes that will render inside Layout's <Outlet /> */}
        <Route index element={<HomePage />} /> {/* index route for "/" */}
        <Route path="help-hub" element={<HelpHubPage />} /> {/* Route for "/help-hub" */}

        {/* Add other page routes here as needed */}
        {/* <Route path="stories" element={<StoriesPage />} /> */}
        {/* <Route path="contact" element={<ContactPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;