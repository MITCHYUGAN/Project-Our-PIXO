import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import MainComponent from './Pages/Gallery/MainComponent'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Features from './Pages/Features/Features';
import FAQ from './Pages/Faq/Faq';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import ScrollToTop from './ScrollToTop';


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="showcase" element={<MainComponent />} />
          <Route path='features' element={<Features/>} />
          <Route path='faq' element={<FAQ/>} />
          <Route path="features" element={<Features/>} />
          <Route path="howitworks" element={<HowItWorks/>} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App