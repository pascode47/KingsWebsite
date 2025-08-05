import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import AdmissionPage from './pages/AdmissionPage';
import SchoolLifePage from './pages/SchoolLifePage';
import ContactPage from './pages/ContactPage';
import ApplicationSelector from './components/admission/ApplicationSelector';
import PrimaryApplicationForm from './components/admission/PrimaryApplicationForm';
import SecondaryApplicationForm from './components/admission/SecondaryApplicationForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/applications" element={<ApplicationSelector />} />
          <Route path="/application/nursery-primary" element={<PrimaryApplicationForm />} />
          <Route path="/application/secondary" element={<SecondaryApplicationForm />} />
          <Route path="/school-life" element={<SchoolLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="*" 
            element={
              <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
                  <Link 
                    to="/" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
