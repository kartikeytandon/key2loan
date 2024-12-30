import React from 'react';
import '../src/index.css'
import Navbar from '../src/components/Navbar';
import Slideshow from './components/Slideshow';
import EMICalculator from './components/EMICalculator';
import AboutUs from './components/AboutUs';
import WhyKey2Loan from './components/WhyKey2Loan';
import ChannelPartners from './components/ChannelPartners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <EMICalculator />
      <AboutUs />
      <WhyKey2Loan />
      <ChannelPartners />
      <Testimonials />
      <Footer/ >
    </>
  );
};

export default App;