// src/components/Bills.jsx
import React from 'react';

const bills = [
  { name: 'Recharge', icon: '$' },
  { name: 'Mobile Bills', icon: '📱' },
  { name: 'Internet', icon: '🌐' },
  { name: 'Landline', icon: '☎️' },
  { name: 'Electricity', icon: '💡' },
];

const Bills = () => {
  const navigate = (path) => {
    window.location.href = path;
  };
  return (
    <section className="mt-6 ">
      <div className="flex justify-between">

      <div className="flex content-center align-middle">
      <div className="w-2 h-6 my-1 bg-blue-600"></div>
      <h2 className="text-xl  font-semibold text-blue-600 mb-4 mx-4">Yalla Bills</h2>
      </div>
      <div className="flex mx-8 clickabble justify-center">
        <p className="" onClick={() => navigate('/viewAll')}> View All </p>
        <svg className='mt-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
      </div>
      </div>
      <div className="grid grid-cols-5 mx-4 section-padding gap-4">
        {bills.map((bill) => (
          <div key={bill.name} onClick={() => navigate(`/${bill.name}`)} className="  clickabble flex flex-col items-center">
            <div className="flex  border-gray-300 border  p-2 mx-2 rounded-full">
            <div className="text-4xl">{bill.icon}</div>
            </div>
            <div className="mt-2 text-center">{bill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bills;