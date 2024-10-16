import img1 from "./assets/img1.svg"
import arrowLeft from "./assets/arrow-left.svg"
import arrowRight from "./assets/arrow-right.svg"
import styledArrow1 from "./assets/styledArrow1.svg"
import styledArrow2 from "./assets/styledArrow2.svg"
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <section className="testimonial">
      <img src={styledArrow1} className="styledArrow1" alt="" />
      <h1 className="testimonialHeadingText">What our Clients are saying</h1>
      <div className="slides">
        <div className="slide">
          <div className="slideWrapper">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="slidesContents">
              <div className="slidesHeading">
                <h4>Isaac Saleh</h4>
                <p>
                  Creative Director at Zk Photography
                </p>
              </div>
              <p>“My favorite OurPixo feature is the selection feature. I actually find it frustrating most time sitting down with clients to select their pictures. The selection feature helps me save time and gives me more time to do other things.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialControls">
        <div className="slidesArrow">
          <img src={arrowLeft} alt="" />
          <img src={arrowRight} alt="" />
        </div>
        <div className="slidesCircles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <img src={styledArrow2} className="styledArrow2"  alt="" />
    </section>
  )
}

export default Testimonials