import React from "react";
import card from '../assets/card.svg'
function Card() {
  return (
    <div className="">
      <img src={card} className="w-full mt-4"></img>
    </div>
    // <div className="p-6 mt-4 text-white bg-blue-600 rounded-lg shadow-lg">
    //   <h2 className="text-lg font-semibold">Yalla</h2>
    //   <div className="flex items-center justify-between mt-4">
    //     <div>
    //       <p>This Month</p>
    //       <p className="text-xl font-bold">July 2020</p>
    //     </div>
    //     <div className="text-right">
    //       <p>Balance</p>
    //       <p className="text-2xl font-bold">5,300.50 EGP</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between mt-4">
    //     <div className="text-red-400">Pay / Send</div>
    //     <div className="text-green-400">Request</div>
    //   </div>
    //   <div className="flex items-center justify-between mt-1">
    //     <div className="text-red-400">- 280 EGP</div>
    //     <div className="text-green-400">+ 450 EGP</div>
    //   </div>
    // </div>
  );
}

export default Card;
