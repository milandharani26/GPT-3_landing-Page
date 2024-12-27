import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './componants';
import './App.css'
import Pricing from './containers/pricing/Pricing';

const App = () => {
  return (

    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      {/* <Possibility /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      <Pricing />
      <Footer />
    </div>

  )
}

export default App
