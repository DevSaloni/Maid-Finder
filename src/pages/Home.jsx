import React from 'react'
import Herosection from "../component/Herosection";
import Serviceprovidersection from "../component/Serviceprovidersection";
import Navbar from '../component/Navbar';
import ApplyNow from '../component/ApplyNow';
import BrownCard from '../component/Browncard';
import AboutCardSection from '../component/AboutCardSection';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Serviceprovidersection/>
    <ApplyNow/>
    <BrownCard/>
    <AboutCardSection/>
    <Footer/>
    </>
  )
}

export default Home