import { whyOurPIXO } from './WhyOurPIXOData'
import icon from './assets/icon.svg'
import icon2 from './assets/icon2.svg'

import './WhyOurPIXO.css'

const WhyOurPIXO = () => {
  return (
    <section className='whyourpixo'>
      <div className='whyourpixoheading'>
        <div className='whyourpixoheadingcontents'>
          <img src={icon} alt="" />
          <h4>WHY OURPIXO</h4>
        </div>
        <h1>Specially designed for Creatives</h1>
      </div>
      <div className='whyourpixocontents'>
        {
          whyOurPIXO.map(({ id, heading, img, paragraph }) => {
            return (
              <div key={id} className='standouts'>
                <div>
                  <img src={img} alt="" />
                </div>
                <div>
                  <h4>{heading}</h4>
                  <p>{paragraph}</p>
                </div>
              </div>
            )
          })
        }
        <img src={icon2} className='icon2' alt="" />
      </div>
    </section>
  )
}

export default WhyOurPIXO