import landingImg from './assets/landing-img.svg'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <section className="landingPage">
      <div className='landing-contents'>
        <h4>STAND OUT AS A CREATIVE</h4>
        <h1>The best way to deliver your work to clients in a professional manner</h1>
        <p>OurPixo gives you tools at the tip of your fingers to create, customize, and deliver your work to clients wherever they are.</p>
        <button>Try 1 month free</button>
      </div>
      <div className='landing-img'>
        <img src={landingImg} alt="" />
      </div>
    </section>
  )
}

export default LandingPage