import { whyOurPIXO } from './WhyOurPIXOData'
import icon from './assets/icon.svg'
import icon2 from './assets/icon2.svg'

import './WhyOurPIXO.css'

const WhyOurPIXO = () => {
  return (
    <section className="why-ourpixo">
      <div className="whyourpixoheading">
        <div className="whyourpixoheadingcontents">
          <img src={icon} alt="" className="first" />
          <div className="why-ourpixo-header">
            <p>WHY OURPIXO</p>
          </div>
        </div>
        <h2>Specially designed for Creatives</h2>
      </div>
      <div className="benefits-section">
        {whyOurPIXO.map(({ id, heading, img, paragraph }) => {
          return (
            // <div key={id} className="benefits-section">
            <div key={id} className="benefits-item">
              <img src={img} alt="" />
              <div>
                <h4 className="subhead">{heading}</h4>
                <p>{paragraph}</p>
              </div>
            </div>
            // </div>
          );
        })}
        <img src={icon2} className="second" alt="" />
      </div>
    </section>
  );
}

export default WhyOurPIXO