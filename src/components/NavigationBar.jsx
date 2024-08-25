
// src/components/NavigationBar.jsx
import React from 'react';
import homeIcon from '../assets/home.svg'; // Replace with your actual icon path
import moneyIcon from '../assets/money.svg'; // Replace with your actual icon path
import socialIcon from '../assets/near.svg'; // Replace with your actual icon path
import helpIcon from '../assets/help.svg'; // Replace with your actual icon path
import logoIcon from '../assets/Yalla-logo.svg'; // Replace with your actual icon path
import shape from '../assets/bottom-shape.svg'; // Replace with your actual icon path
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    navigate(url);
    console.log(url);
    // window.location.href = url;
    lastUrl
  };

  var lastUrl= '';
  return (
    <div className="fixed bottom-0 z-50 flex items-center justify-between w-full  shadow-md rounded-t-3xl">
<img src={shape} className='w-lvw'/>

    <div className="fixed bottom-[-4] z-50 flex items-center justify-between w-full p-4 px-1  shadow-md rounded-t-3xl">
      <div className="flex basis-1/5 flex-col items-center cursor-pointer" onClick={() => handleNavigation('/')}>
        <img src={homeIcon} alt="Home" className="w-6 h-6 mb-1 " />
        <div className={`text-xs ${lastUrl=='/'?'text-blue-600':'text-black'} `}>Home</div>
      </div>
      <div className="flex basis-1/5 flex-col items-center cursor-pointer" onClick={() => handleNavigation('/money')}>
        <img src={moneyIcon} alt="Yalla Money" className="w-6 h-6 mb-1" />
        <div className={`text-xs ${lastUrl=='/money'?'text-blue-600':'text-black'} `}>Money</div>
      </div>
      <div className="flex justify-center items-center relative top-[-35px] bg-white p-2  rounded-full shadow-lg">
        <img src={logoIcon} alt="Logo" className="w-12 h-12" />
      </div>
      <div className="flex basis-1/5 flex-col items-center cursor-pointer" onClick={() => handleNavigation('/social')}>
        <img src={socialIcon} alt="Social" className="w-6 h-6 mb-1" />
        <div className={`text-xs ${lastUrl=='/social'?'text-blue-600':'text-black'} `}>Social</div>
      </div>
      <div className="flex basis-1/5 flex-col items-center cursor-pointer" onClick={() => handleNavigation('/help')}>
        <img src={helpIcon} alt="Help" className="w-6 h-6 mb-1" />
        <div className={`text-xs ${lastUrl=='/help'?'text-blue-600':'text-black'} `}>Help</div>
      </div>
    </div>
    </div>
  );
};

export default NavigationBar;