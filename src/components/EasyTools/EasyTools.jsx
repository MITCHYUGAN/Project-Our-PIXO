import { EasyToolsData } from "./EasyToolsData.js"
import arrow1 from './assets/arrow1.svg'
import arrow2 from './assets/arrow2.svg'
import "./EasyTools.css"

const EasyTools = () => {
    return (
        <section className="easytools">
            <img className="arrow1"  src={arrow1} alt="" />
            <h1>Easy to use tools</h1>
            <div className="easytoolswrapper">
                {
                    EasyToolsData.map(({ key, h3, img, p }) => {
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
            <button>See all features</button>
            <img  className="arrow2" src={arrow2} alt="" />
        </section>
    )
}

export default EasyTools