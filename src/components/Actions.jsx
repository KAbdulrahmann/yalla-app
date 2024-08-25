import React from "react";
import send from '../assets/send.svg';
import request from '../assets/request.svg';
import load from '../assets/load-balance.svg';
import card from '../assets/card-statement.svg';
import saving from '../assets/saving-box.svg';
import money from '../assets/money-circles.svg';

function Actions() {

const Card=({name,svg})=>{
  return    <button className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-md">
  <img
    src={svg} // Replace with the send icon source
    alt={name}
  />
  <span>{name}</span>
</button>
}

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
   <Card name='send' svg={send} />
   <Card name='request' svg={request} />
   <Card name='load Balance' svg={load} />
   <Card name='Card Statement' svg={card} />
   <Card name='Saving box' svg={saving} />
   <Card name='Money Circles' svg={money} />
  
    </div>
  );
}

export default Actions;
