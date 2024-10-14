import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import menubar from './assets/menu-bar.svg'
import menubarcancel from './assets/menubar-cancel.svg'
import './Header.css'
import { useState } from 'react'

const Header = () => {

  const [activeNav, setActiveNav] = useState("")
  const [menuBar, setMenuBar] = useState(menubar)

  function openNav() {
    if (activeNav === "") {
      setActiveNav("active")
      setMenuBar(menubarcancel)
    } else {
      setActiveNav("")
      setMenuBar(menubar)
    }
  }

  return (
    <section className="header">
      <div className='headerWrapper'>
        <Link to="/" >
          <img src={logo} className="logo" alt="" />
        </Link>
        <img src={menuBar} className='menu' alt="" onClick={openNav} />
        <ul className={`navbar ${activeNav}`}>
          <li>
            Pricing
          </li>
          <li>
            <Link to="/showcase" onClick={openNav}>Client Galleries</Link>
          </li>
          <li>
            Login
          </li>
          <button>Try 1 month free</button>
        </ul>
      </div>
    </section>
  );
}

export default Header