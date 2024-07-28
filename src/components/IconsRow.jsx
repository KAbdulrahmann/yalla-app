// src/components/IconsRow.jsx
import React from 'react';

const IconsRow = () => {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <section className="bg-blue-700 pt-20 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex clickabble items-center space-x-2 flex-col justify-center"
          onClick={() => navigate('/pay')}
        >
          <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 1024 1024" width="1.8em" xmlns="http://www.w3.org/2000/svg">
            <path d="M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
          </svg>
          <div className="text-white text-xs font-normal">Pay/Send</div>
        </div>
        <div
          className="flex clickabble items-center space-x-2 flex-col justify-center"
          onClick={() => navigate('/collect')}
        >
          <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 24 24" width="1.8em" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"></path>
            </g>
          </svg>
          <div className="text-white text-xs font-normal">Collect</div>
        </div>
        <div
          className="flex clickabble items-center space-x-2 flex-col justify-center"
          onClick={() => navigate('/transactions')}
        >
          <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 24 24" width="1.8em" xmlns="http://www.w3.org/2000/svg">
            <path strokeWidth="2" d="M2,7 L20,7 M16,2 L21,7 L16,12 M22,17 L4,17 M8,12 L3,17 L8,22"></path>
          </svg>
          <div className="text-white text-xs font-normal">Transactions</div>
        </div>
        <div
          className="flex clickabble items-center space-x-2 flex-col justify-center"
          onClick={() => navigate('/notifications')}
        >
          <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" width="1.8em" xmlns="http://www.w3.org/2000/svg">
            <path d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"></path>
          </svg>
          <div className="text-white text-xs font-normal">Notifications</div>
        </div>
        <div
          className="flex clickabble items-center space-x-2 flex-col justify-center"
          onClick={() => navigate('/points')}
        >
          <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" width="1.8em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 22.017l-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z"></path>
          </svg>
          <div className="text-white text-xs font-normal">6,930 Points</div>
        </div>
      </div>
    </section>
  );
};

export default IconsRow;