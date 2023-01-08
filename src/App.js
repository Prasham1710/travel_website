import React from 'react'
import Destinations from './components/Destinations'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Select from './components/Select'
import Footer from './components/Footer'; 
import Carousel from './components/Carousel'
import { BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Hero/>}/>
        <Route path='/destination' element= {<Destinations/>}/>
        </Routes>
        <Search />
        <Select />
        <Carousel />
        <Footer />
        </BrowserRouter>
      </div>
    );
  }

export default App;