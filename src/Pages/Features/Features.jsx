import features from "./FeaturesData"

import "./Features.css"

const Features = () => {
  return (
    <section className="features">
        <div className="featuresHero">
            <h1>The Perfect Tools For You</h1>
        </div>
        <div>
            <h1>Easy to use tools</h1>
            <div>
                {
                    features.map(({key, img, h3, p}) => {
                        return (
                            <div className="tool" key={key}>
                                <div>
                                    <img src={img} alt="" />
                                </div>
                                <div>
                                    <h3>{h3}</h3>
                                    <p>{p}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Features