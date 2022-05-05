import React from 'react'
import Header from '../../components/header/header'
import Intro from '../../components/intro/Intro'
import Products from '../../components/products/products'
import Stat from '../../components/stat/Stat'
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