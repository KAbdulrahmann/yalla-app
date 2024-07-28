// src/components/Header.jsx
import React from 'react';
import logoIcon from '../assets/Yalla-logo.svg'; // Replace with your actual icon path

const Header = () => {
    const navigate = (path) => {
        window.location.href = path;
      };
  return (
    <header className="bg-white absolute top-0 right-0 left-0 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex clickabble items-center">
        <svg stroke="#2563eb" fill="#2563eb" stroke-width="1" viewBox="0 0 20 20"  width='2em'  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>        </div>
        <div className="flex items-center space-x-4">
          <img src={logoIcon} className="w-24" alt="" />
        </div>
        <div className="flex">

        <div className="flex items-center mx-2 clickabble  flex-col justify-between h-13" onClick={() => navigate('/chat')}>
        <svg className='my-1' stroke="#2563eb" fill="#2563eb" stroke-width="0" viewBox="0 0 16 16" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
    
          <div className="text-blue-600 text-xs">Chat</div>
        </div>
        
        <div  className="flex items-center mx-2 clickabble flex-col justify-between h-13 "onClick={() => navigate('/shortcuts')}>
        <svg stroke="#2563eb" fill="#2563eb" stroke-width="0" viewBox="0 0 512 512"  width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path></svg> 
                 <div className="text-blue-600 text-xs">Shortcuts</div>
        </div>
        
        </div>
        {/* <div className="flex items-center space-x-6">
          <div>Points: 6,930</div>
          <div className="relative">
            <button className="text-blue-600">
              <i className="fas fa-bell"></i>
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

