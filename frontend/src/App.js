// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import PopularServices from './components/PopularServices';
// import HowItWorks from './components/HowItWorks';
// import FeaturedProfessionals from './components/FeaturedProfessionals';
// import JoinProvider from './components/JoinProvider';
// import StatsSection from './components/StatsSection';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <PopularServices />
//       <FeaturedProfessionals />
//       <HowItWorks />
//        <StatsSection />
//       <JoinProvider />
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import BrowseServicesPage from './pages/BrowseServicesPage';
import HelpPage from './pages/HelpPage';
import BookingPage from './pages/BookingPage'; // 1. Import the new page
import AdminMessages from './pages/AdminMessages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/providers/:id" element={<ProviderProfilePage />} />
          <Route path="/providers" element={<BrowseServicesPage />} />
          <Route path="/book/:providerId" element={<BookingPage />} /> {/* 2. Add the new route */}
          <Route path="/services" element={<BrowseServicesPage />} /> {/* Add this route for the navbar link */}
          <Route path="/admin/messages" element={<AdminMessages />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;