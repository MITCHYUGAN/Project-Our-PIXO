import landingImg from './assets/landing-img.svg'
import './LandingPage.css'

import WhyOurPIXO from '../WhyOurPIXO/WhyOurPIXO'
import GetStarted from '../GetStarted/GetStarted'
import GetPaidInCurrencies from '../GetPaidInCurrencies/GetPaidInCurrencies'
import EasyTools from '../EasyTools/EasyTools'
import { EasyToolsData } from "../EasyTools/EasyToolsData"
import Testimonials from '../Testimonials/Testimonials'
import GetStartedForFree from '../GetStartedForFree/GetStartedForFree'
import HeroPageImage from "./assets/hero page img.png";


const LandingPage = () => {
  return (
    <>
      {/* <section className="landingPage">
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
      </section> */}
      <section class="hero-page">
        <h4>STAND OUT AS A CREATIVE</h4>
        <h1>The ultimate platform for <span>African</span> photographers</h1>
        <p>Professional photo galleries, client selections & seamless payments. <b>Start free, upgrade anytime.</b></p>
        <a href="#">
          <button class="button">Try 1 month free</button>
        </a>
        <img src={HeroPageImage} class="hero-page-img" />
        <div class="hero-footer"><p>Trusted <span class="highlight">Across Africa</span> and <span class="highlight">Beyond</span></p></div>
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