import React, { Component } from 'react'
import Header from '../components/Header'
import IconsRow from '../components/IconsRow'
import MiniApps from '../components/MiniApps'
import Bills from '../components/Bills'
import Offers from '../components/Offers'
import NavigationBar from '../components/NavigationBar'

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
        <Header />
        <IconsRow />
        <main className="">
          <MiniApps />
          <Bills />
          <Offers />
          <div className="h-32"></div>
        </main>
        <NavigationBar />
      </div>
    )
}

export default Home