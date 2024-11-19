import './LandingPage.css'

import WhyOurPIXO from '../WhyOurPIXO/WhyOurPIXO'
import GetStarted from '../GetStarted/GetStarted'
import GetPaidInCurrencies from '../GetPaidInCurrencies/GetPaidInCurrencies'
import EasyTools from '../EasyTools/EasyTools'
import { EasyToolsData } from "../EasyTools/EasyToolsData"
import Testimonials from '../Testimonials/Testimonials'
import GetStartedForFree from '../GetStartedForFree/GetStartedForFree'
import HeroPageImage from "./assets/hero page img.png";
import circle from "./assets/circle.svg"
import triangle from "./assets/triangle.svg"


const LandingPage = () => {
  return (
    <>
      <section className="hero-page">
        <div className='background-shapes'>
          <img src={circle} className='shape shape1' alt="" />
          <img src={triangle} className='shape shape2' alt="" />
          <img src={circle} className='shape shape3' alt="" />
          {/* <img src={shapes} className='shapes' alt="" /> */}
        </div>
        <h4>STAND OUT AS A CREATIVE</h4>
        <h1>The ultimate platform for <span>African</span> photographers</h1>
        <p>Professional photo galleries, client selections & seamless payments. <b>Start free, upgrade anytime.</b></p>
        <div className='background-shapes'>
          <img src={circle} className='shape shape4' alt="" />
          <img src={triangle} className='shape shape5' alt="" />
          <img src={circle} className='shape shape6' alt="" />
          <img src={circle} className='shape shape7' alt="" />
          <img src={circle} className='shape shape8' alt="" />
        </div>
        <a href="#">
          <button className="button">Try 1 month free</button>
        </a>
        <div className='images-shapes'>
          <img src={HeroPageImage} className="hero-page-img" />
          <img src={circle} className='shape shape9' alt="" />
          <img src={circle} className='shape shape10' alt="" />
        </div>
        <div className="hero-footer"><p>Trusted <span className="highlight">Across Africa</span> and <span className="highlight">Beyond</span></p></div>
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