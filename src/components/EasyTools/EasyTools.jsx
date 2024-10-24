import { Link } from 'react-router-dom'
import arrow1 from './assets/arrow1.svg'
import arrow2 from './assets/arrow2.svg'
import "./EasyTools.css"

// eslint-disable-next-line react/prop-types
const EasyTools = ({ easytoolsdata, displayBtn }) => {

    return (
        <section className="easytools">
            <img className="arrow1" src={arrow1} alt="" />
            <h1>Easy to use tools</h1>
            <div className="easytoolswrapper">
                {
                    // eslint-disable-next-line react/prop-types
                    easytoolsdata.map(({ key, h3, img, p }) => {
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
            {
                displayBtn &&
                <Link to="/features">
                    <button type='button'>See all features</button>
                </Link>
            }
            <img className="arrow2" src={arrow2} alt="" />
        </section>
    )
}

export default EasyTools