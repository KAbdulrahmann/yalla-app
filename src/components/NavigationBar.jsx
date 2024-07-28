
// src/components/NavigationBar.jsx
import React from 'react';
import homeIcon from '../assets/homeIcon.svg'; // Replace with your actual icon path
import moneyIcon from '../assets/moneyIcon.svg'; // Replace with your actual icon path
import socialIcon from '../assets/socialIcon.svg'; // Replace with your actual icon path
import helpIcon from '../assets/helpIcon.svg'; // Replace with your actual icon path
import logoIcon from '../assets/Yalla-logo.svg'; // Replace with your actual icon path

const NavigationBar = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 px-8 shadow-md rounded-t-3xl fixed bottom-0 w-full z-50">
      <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/home')}>
        <img src={homeIcon} alt="Home" className="w-6 h-6 mb-1 " />
        <div className="text-xs text-blue-600">Home</div>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/money')}>
        <img src={moneyIcon} alt="Yalla Money" className="w-6 h-6 mb-1" />
        <div className="text-xs text-gray-700">Yalla Money</div>
      </div>
      <div className="flex justify-center items-center relative top-[-40px] bg-white p-2 rounded-full shadow-lg">
        <img src={logoIcon} alt="Logo" className="w-12 h-12" />
      </div>
      <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/social')}>
        <img src={socialIcon} alt="Social" className="w-6 h-6 mb-1" />
        <div className="text-xs text-gray-700">Social</div>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/help')}>
        <img src={helpIcon} alt="Help" className="w-6 h-6 mb-1" />
        <div className="text-xs text-gray-700">Help</div>
      </div>
    </div>
  );
};

export default NavigationBar;