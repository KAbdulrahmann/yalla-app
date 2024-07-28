// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MiniApps from './components/MiniApps';
import Bills from './components/Bills';
import Offers from './components/Offers';
import IconsRow from './components/IconsRow';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
        <IconsRow />
      <main className="">
        <MiniApps />
        <Bills />
        <Offers />
      </main>
      <NavigationBar />
    </div>
  );
}
export default App
