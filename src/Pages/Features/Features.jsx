import { FeaturesData } from "./FeaturesData"
import featureBanner1 from "./assets/featureBanner1.svg"
import featureBanner2 from "./assets/featureBanner2.svg"
import featureBanner3 from "./assets/featureBanner3.svg"

import "./Features.css"
import GetStartedForFree from "../../components/GetStartedForFree/GetStartedForFree"
import EasyTools from "../../components/EasyTools/EasyTools"

const Features = () => {
  return (
    <main className="features">
        <header className="featuresHero">
            <h1>The Perfect Tools For You</h1>
        </header>
        <EasyTools easytoolsdata={FeaturesData} />
        <section className="giveBusinessProfTouch">
            <h1 className="giveBusinessProfTouchH1">Give your business a professional touch</h1>
            <div className="giveBusinessProfTouchContents">
                <div className="profTouch">
                    <h3>Gallery Creation and Customization</h3>
                    <p>Create unique and beautiful cover photos and galleries for your client. You are given full customization rights to be as creative as you wish.</p>
                    <img src={featureBanner1} alt="Gallery Creation and Customization Image" />
                </div>
                <div className="profTouch">
                    <h3>Creation of Sets</h3>
                    <p>Gather all the memories of weddings, events and parties into one file, with different folders. Create a set and arrange all parts of the event accordingly, making it easier to access files.</p>
                    <img src={featureBanner2} alt="Creation of Sets Image" />
                </div>
                <div className="profTouch">
                    <h3>Business Tracking</h3>
                    <p>Track projects, manage bookings, see payments, and get updates on how your business is doing. It makes your work easier, saves time, and helps you stay organized.</p>
                    <img src={featureBanner3} alt="Business Tracking Image" />
                </div>
            </div>
        </section>
        <GetStartedForFree />
    </main>
  )
}

export default Features