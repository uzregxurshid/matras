import React from 'react'
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Products from '../../components/products/products';
import Stat from '../../components/stat/stat';
import Technology from '../../components/technology/technology';
const Home = () => {
  return (
    <>
    <Header />
    <Intro/>
    <Stat/>
    <Products/>
    <Technology/>
    </>
  )
}

export default Home