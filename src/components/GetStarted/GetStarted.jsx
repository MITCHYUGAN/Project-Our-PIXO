import { getStarted } from "./GetStartedData"
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="getStarted">
            <h1 className="getStartedheadingtext">Get started in <span>4 easy</span> steps</h1>
            <div className="getStaredContents">
                {
                    getStarted.map(({ key, text, img, hash }) => {
                        return (
                            <div className="step" key={key}>
                                <h1>{hash}<span>{key}</span></h1>
                                <p>{text}</p>
                                <img src={img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <button>Find out More</button>
        </section>
    )
}

export default GetStarted