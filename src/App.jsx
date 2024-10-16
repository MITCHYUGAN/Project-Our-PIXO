import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import MainComponent from './components/Gallery/MainComponent'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="showcase" element={<MainComponent />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App