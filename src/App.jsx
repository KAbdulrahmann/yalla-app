// src/App.jsx
import React from 'react';
import Money from './screens/Money'
import Contact from './screens/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/money" element={<Money />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a fallback route to handle undefined paths */}
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
     </Router>
  );
}

const NotFound = () => <h1>404 - Page Not Found</h1>;

export default App
