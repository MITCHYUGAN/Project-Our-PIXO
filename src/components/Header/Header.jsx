import logo from './assets/logo.svg'
// import menubar from './assets/menu-bar.svg'
import './Header.css'

const Header = () => {
  return (
    <section className='header'>
      <img src={logo} className="logo" alt="" />
      <ul className="navbar">
        <li><a href=""></a>Pricing</li>
        <li><a href=""></a>Client Galleries</li>
        <li><a href=""></a>Login</li>
        <button>Try 1 month free</button>
      </ul>
    </section>
  )
}

export default Header