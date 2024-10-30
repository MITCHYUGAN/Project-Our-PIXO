import EasyTools from "../../components/EasyTools/EasyTools"
import GetStartedForFree from "../../components/GetStartedForFree/GetStartedForFree"
import { FeaturesData } from "../Features/FeaturesData"
import helptogetstartedImg from "./assets/helptogetstartedImg.svg"
import vector from './assets/vector1.svg'

import "./HowItWorks.css"

const HowItWorks = () => {
    return (
      <main className="howitworks">
        <header className="howitworksHero">
          <h1>How It Works</h1>
        </header>
        <section className="startCreating" aria-label="Start Creating">
          <h1>
            In a few minutes you can start creating beautiful galleries and
            delivering professionally.
          </h1>
          <div className="steps">
            <div className="step">
              <div>
                <h2>1</h2>
                <img src={vector} className="vector" alt="" />
              </div>
              <div>
                <h3>Sign up and set up your profile.</h3>
                <p>
                  Create a free OurPixo account. Get 1 month free subscription
                  to enjoy our amazing features.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h2>2</h2>
                <img src={vector} className="vector" alt="" />
              </div>
              <div>
                <h3>Select and upload pictures to send.</h3>
                <p>
                  Select the pictures and videos you want to send to your
                  client.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h2>3</h2>
                <img src={vector} className="vector" alt="" />
              </div>
              <div>
                <h3>Fill in your client details.</h3>
                <p>
                  Fill in the client and payment details. Remember, the balance
                  payment amount is optional if the client has already paid you!
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h2>4</h2>
                <img src={vector} className="vector" alt="" />
              </div>
              <div>
                <h3>Share gallery link with your clients.</h3>
                <p>
                  The platform creates a gallery link for the uploaded files;
                  send it to your client so they can download their files.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="helpToGetStarted">
          <h1>Need help getting started?</h1>
          <p>
            A quick walk through of <span>OurPixo</span> to get you started
            creating beautiful galleries and presenting your works
            professionally to your clients.
          </p>
          {/* <img src={helptogetstartedImg} alt="" /> */}
          <iframe
            width="800"
            height="420"
            src="https://www.youtube.com/embed/GHXt6cQ7nt8?si=CX2dy65rFjLfipDD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
        <EasyTools easytoolsdata={FeaturesData} />
        <GetStartedForFree />
      </main>
    );
}

export default HowItWorks