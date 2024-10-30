import landingImg from './assets/landing-img.svg'
import './LandingPage.css'

import WhyOurPIXO from '../WhyOurPIXO/WhyOurPIXO'
import GetStarted from '../GetStarted/GetStarted'
import GetPaidInCurrencies from '../GetPaidInCurrencies/GetPaidInCurrencies'
import EasyTools from '../EasyTools/EasyTools'
import { EasyToolsData } from "../EasyTools/EasyToolsData"
import Testimonials from '../Testimonials/Testimonials'
import GetStartedForFree from '../GetStartedForFree/GetStartedForFree'


const LandingPage = () => {
  return (
    <>
      <section className="landingPage">
        <div className='landingPage-wrapper'>
          <div className='landingPage-content-wrapper'>
            <div className='landing-contents'>
              <h4>STAND OUT AS A CREATIVE</h4>
              <h1>The best way to deliver your work to clients in a professional manner</h1>
              <p>OurPixo gives you tools at the tip of your fingers to create, customize, and deliver your work to clients wherever they are.</p>
              <button>Try 1 month free</button>
            </div>
            <div className='landing-img'>
              <img src={landingImg} alt="" />
              <h1 className='landingBottomText'>Trusted <span>Across Africa</span> and <span>Beyond</span></h1>
            </div>
          </div>
        </div>
      </section>
      <WhyOurPIXO />
      <GetStarted />
      <GetPaidInCurrencies />
      <EasyTools easytoolsdata={EasyToolsData} displayBtn="true" />
      <Testimonials />
      <GetStartedForFree />
    </>
  )
}

export default LandingPage