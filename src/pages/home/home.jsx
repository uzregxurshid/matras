import React from 'react'
import About from '../../components/about/about';
import Choose from '../../components/choose/choose';
import Contact from '../../components/contact/contact';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Location from '../../components/location/location';
import Products from '../../components/products/products';
import Stat from '../../components/stat/stat';
import Technology from '../../components/technology/technology';
const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Stat />
      <Products />
      <Technology />
      <About />
      <Choose />
      <Location />
      <Contact />
    </>
  )
}

export default Home