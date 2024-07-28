// src/components/MiniApps.jsx
import React from 'react';

const miniApps = [
  { name: 'Yalla Money', icon: '💰' },
  { name: 'Yalla Food', icon: '🍔' },
  { name: 'Yalla Mart', icon: '🛒' },
];

const MiniApps = () => {
  const navigate = (path) => {
    window.location.href = path;
  };
  return (
    <section className="mt-6">
      <div className="flex justify-between ">

      <div className="flex content-center align-middle">
      <div className="w-2 h-6 my-1 bg-blue-600"></div>
      <h2 className="text-xl  font-semibold text-blue-600 mb-4 mx-4">Yalla Mini-Apps</h2>
      </div>
      <div className="flex mx-8 clickabble justify-center " onClick={() => navigate('/viewAll')}>
        <p className="mx-1"> View All </p>
        <svg className='mt-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
      </div>
      </div>
      <div className="grid grid-cols-3  mx-4 section-padding gap-4">
        {miniApps.map((app) => (
          <div key={app.name} onClick={() => navigate(`/${app.name}`)} className="bg-white clickabble p-4 rounded-2xl shadow-lg flex flex-col justify-between items-center">
            <div className="text-4xl">{app.icon}</div>
            <div className="mt-2 text-center">{app.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniApps;