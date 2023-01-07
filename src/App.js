import React from 'react'
import Destinations from './components/Destinations'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Select from './components/Select'
import Footer from './components/Footer'; 
import Carousel from './components/Carousel'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Select />
      <Carousel />
      <Footer />

    </div>
  );
}

export default App;