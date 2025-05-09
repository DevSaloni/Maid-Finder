import React from 'react'
import Herosection from "../component/Herosection";
import Serviceprovidersection from "../component/Serviceprovidersection";
import Navbar from '../component/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Serviceprovidersection/>
    </>
  )
}

export default Home