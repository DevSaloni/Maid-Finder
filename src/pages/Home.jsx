import React from 'react'
import Herosection from "../component/Herosection";
import Serviceprovidersection from "../component/Serviceprovidersection";
import Navbar from '../component/Navbar';
import ApplyNow from '../component/ApplyNow';
import BrownCard from '../component/Browncard';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Serviceprovidersection/>
    <ApplyNow/>
    <BrownCard/>
    </>
  )
}

export default Home