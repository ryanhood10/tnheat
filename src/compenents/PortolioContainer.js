import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Schedule from './Schedule';
import News from './News';

export default function PortfolioContainer({ page }) {
  const renderPage = () => {
    if (page === 'Home') {
      return <Home />;
    }
    if (page === 'Schedule') {
      return <Schedule />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
    if (page === 'News') {
      return <News />;
    }
  };

  return <div className="landing">{renderPage()}</div>;
}
