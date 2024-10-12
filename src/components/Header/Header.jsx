import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
// import menubar from './assets/menu-bar.svg'
import './Header.css'

const Header = () => {
  return (
    <section className="header">
      <Link to="/">
      <img src={logo} className="logo" alt="" />
      </Link>
      <ul className="navbar">
        <li>
          Pricing
        </li>
        <li>
          <Link to="/showcase">Client Galleries</Link>
        </li>
        <li>
          Login
        </li>
        <button>Try 1 month free</button>
      </ul>
    </section>
  );
}

export default Header