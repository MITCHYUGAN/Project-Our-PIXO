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
                    <img src={emailIcon} alt="" />
                    <img src={whatsappIcon} alt="" />
                    <img src={linkedInIcon} alt="" />
                    <img src={instagramIcon} alt="" />
                </div>
            </div>
            <div className="footerContents">
                <div className="footerContent">
                    <h3>Product</h3>
                    <p>How it Works</p>
                    <p>Features</p>
                    <p>Client Galleries</p>
                    <p>Marketplace</p>
                    <p>Bookings</p>
                </div>
                <div className="footerContent footerContent2">
                    <div className="footerContent">
                        <h3>Support</h3>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="footerText">Pixomatic copyright 2024</p>
    </section>
  )
}

export default Footer