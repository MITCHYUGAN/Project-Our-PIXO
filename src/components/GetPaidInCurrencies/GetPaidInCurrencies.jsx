import triangle from "./assets/triangle.svg"
import circle from "./assets/circle.svg"

import "./GetPaidInCurrencies.css"

const GetPaidInCurrencies = () => {
  return (
    <section className="getpaidincurrencies">
      <img src={circle} className="circle1" alt="" />
      <img src={triangle} className="triangle1" alt="" />
      <img src={circle} className="circle2" alt="" />
      <h1>Get paid in different currencies!</h1>
      <p>Accept payments globally with support for multiple currencies added to the current local methods, making it easy for your international customers to pay.</p>
      <button>COMING SOON</button>
      <img src={circle} className="circle3" alt="" />
      <img src={triangle} className="triangle2" alt="" />
      <img src={circle} className="circle4" alt="" />
      <img src={triangle} className="triangle3" alt="" />
    </section>
  )
}

export default GetPaidInCurrencies