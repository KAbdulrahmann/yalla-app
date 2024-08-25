import React from "react";
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import Actions from "../components/Actions";
import Tabs from "../components/Tabs";

 function Money (){
    return (
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-4 ">
        <div className="h-24"></div>
        <Card />
        <div className="p-4 h-[134px] w-auto bg-white shadow-md mt-4 rounded-2xl ">
            <div className="grid gap-4 grid-cols-2">
              <div className=" flex flex-col ">
                <div className="text-[10px]">This Month</div>
                <div className="">July 2020</div>
              </div>
              <div className=" flex flex-col">
                <div className="text-[10px]">Balance</div>
                <div className="text-[]">5,300.50 EGP</div>
              </div>
            </div>
            <div className="h-[1px]  mt-2 mb-2 bg-gray-300"></div>
            <div className="grid gap-4 grid-cols-2">
              <div className=" flex flex-col ">
                <div className="text-[10px]">Pay / Send</div>
                <div className="text-red-500">-280 EGP</div>
              </div>
              <div className=" flex flex-col">
                <div className="text-[10px]">Request</div>
                <div className="text-green-500">+450 EGP</div>
              </div>
            </div>
            <div className="flex mt-1 gap-1">
            <div className="h-[4px] w-svw rounded basis-1/2 bg-red-500"></div>
            <div className="h-[4px] w-svw rounded bg-green-500"></div>
            </div>

        </div>
        <Actions />
        <div className="h-32"></div>
        {/* <Tabs /> */}
      </div>
    </div>
    );
}

export default Money