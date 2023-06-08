import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './compenents/Footer';
import Header from './compenents/Header';
import PortfolioContainer from './compenents/PortolioContainer';
// import SplashScreen from './components/SplashScreen'; // import SplashScreen component
import './compenents/assets/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // change this to control how long the splash screen is visible

    return () => clearTimeout(timer); // this will clean up the timer if the component unmounts before the timer fires
  }, []);

  return (
    <Router>
      <div className="main-container">
        {/* {loading ? <SplashScreen /> : null} */}
        <Header />
        <Routes>
          <Route path="/" element={<PortfolioContainer page="Home" />} />
          <Route path="/schedule" element={<PortfolioContainer page="Schedule" />} />
          <Route path="/contact" element={<PortfolioContainer page="Contact" />} />
          <Route path="/news" element={<PortfolioContainer page="News" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
