import React from "react";
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import Actions from "../components/Actions";
import Tabs from "../components/Tabs";

 function Money (){
    return (
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-4">
        <Card />
        <Actions />
        <Tabs />
      </div>
    </div>
    );
}

export default Money