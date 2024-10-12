import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import './App.css'
import WhyOurPIXO from './components/WhyOurPIXO/WhyOurPIXO'
import GetStarted from './components/GetStarted/GetStarted'
import GetPaidInCurrencies from './components/GetPaidInCurrencies/GetPaidInCurrencies'
import EasyTools from './components/EasyTools/EasyTools'
import Testimonials from './components/Testimonials/Testimonials'
import GetStartedForFree from './components/GetStartedForFree/GetStartedForFree'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <LandingPage />
      <WhyOurPIXO />
      <GetStarted/>
      <GetPaidInCurrencies/>
      <EasyTools />
      <Testimonials/>
      <GetStartedForFree/>
      <Footer />
    </>
  )
}

export default App