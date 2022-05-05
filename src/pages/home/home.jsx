import React from 'react'
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Products from '../../components/products/products';
import Stat from '../../components/stat/stat';
const Home = () => {
  return (
    <>
    <Header />
    <Intro/>
    <Stat/>
    <Products/>
    </>
  )
}

export default Home