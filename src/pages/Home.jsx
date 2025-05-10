import React from 'react'
import Herosection from "../component/Herosection";
import Serviceprovidersection from "../component/Serviceprovidersection";
import Navbar from '../component/Navbar';
import ApplyNow from '../component/ApplyNow';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Serviceprovidersection/>
    <ApplyNow/>
    </>
  )
}

export default Home