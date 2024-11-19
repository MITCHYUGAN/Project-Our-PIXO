import { Link } from "react-router-dom"
import emailIcon from "./assets/emailIcon.svg"
import whatsappIcon from "./assets/whatsappIcon.svg"
import linkedInIcon from "./assets/linkedinIcon.svg"
import instagramIcon from "./assets/instagramIcon.svg"
import logo from "./assets/logo.svg"

import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerWrapper">
        <div className="footerheading">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div>
            <a href="mailto:support@ourpixo.com" target="_blank">
              <img src={emailIcon} alt="" />
            </a>
            <Link to="https://wa.me/+2348105420187?text=Hello" target="_blank">
              <img src={whatsappIcon} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/company/99833453/admin/dashboard/" target="_blank">
              <img src={linkedInIcon} alt="" />
            </Link>
            <Link to="https://www.instagram.com/ourpixo/" target="_blank">
              <img src={instagramIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footerContents">
          <div className="footerContent">
            <h3>Product</h3>
            <ul>
              <li>
                <Link to="/howitworks">How it Works</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/showcase?section=client-gallery">
                  Client Galleries
                </Link>
              </li>
              <li>
                <Link to="/showcase?section=marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/showcase?section=bookings">Bookings</Link>
              </li>
            </ul>
            {/* <p>How it Works</p>
            <p>Features</p>
            <p>Client Galleries</p>
            <p>Marketplace</p>
            <p>Bookings</p> */}
          </div>
          <div className="footerContent footerContent2">
            <div className="footerContent">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link to="faq">FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="https://ourpixo.com/policy/" target="_blank">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="footerText">Pixomatic © {new Date().getFullYear()}</p>
    </section>
  );
}

export default Footer