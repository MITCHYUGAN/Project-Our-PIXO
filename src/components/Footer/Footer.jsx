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
          <img src={logo} alt="" />
          <div>
            <Link to="/">
              <img src={emailIcon} alt="" />
            </Link>
            <Link to="/">
              <img src={whatsappIcon} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/company/99833453/admin/dashboard/">
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
                <Link to="/how-it-works">How it Works</Link>
              </li>
              <li>
                <Link to="/how-it-works">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works">Client Galleries</Link>
              </li>
              <li>
                <Link to="/showcase">Marketplace</Link>
              </li>
              <li>
                <Link to="/showcase">Bookings</Link>
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
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="footerText">Pixomatic copyright 2024</p>
    </section>
  );
}

export default Footer