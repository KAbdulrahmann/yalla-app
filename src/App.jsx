// src/App.jsx
import React from 'react';
import Money from './screens/Money'
import Contact from './screens/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router basename="/yalla-app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/money" element={<Money />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a fallback route to handle undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
     </Router>
  );
}

const NotFound = () => <h1>404 - Page Not Found</h1>;

export default App
