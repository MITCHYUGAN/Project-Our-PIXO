import { Link } from "react-router-dom"
import arrow1 from "./assets/arrow1.svg"
import arrow2 from "./assets/arrow2.svg"
import arrow3 from "./assets/arrow3.svg"
import arrow4 from "./assets/arrow4.svg"
import arrowBig from "./assets/arrowBig.svg"
import "./GetStartedForFree.css"

const GetStartedForFree = () => {
  return (
    <section className="getStartedForFree">
      <img src={arrow1} className="arrow1" alt="" />
      <img src={arrow2} className="arrow2" alt="" />
      <h1>
        Get Started <span>TODAY</span>
      </h1>
      <p>
        Let’s help bring out your creative side, ease your workload and grow
        your business. Start creating beautiful galleries today with OurPixo!
      </p>
      <img src={arrowBig} className="arrowBig" alt="" />
      <div className="getStartedForFreeButtons">
        <Link to="https://app.pixomaticc.com/auth/signup" target="_blank">
          <button>Get Started</button>
        </Link>
        <Link to="/howitworks#get-started-demo">
          <button className="seeDemoBtn">See a demo</button>
        </Link>
      </div>
      <img src={arrow3} className="arrow3" alt="" />
      <img src={arrow4} className="arrow4" alt="" />
    </section>
  );
}

export default GetStartedForFree