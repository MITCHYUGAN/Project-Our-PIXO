import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import menubar from "./assets/menu-bar.svg";
import menubarcancel from "./assets/menubar-cancel.svg";
import "./Header.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const [menuBar, setMenuBar] = useState(menubar);
  const [navButtonAriaText, setNavButtonAriaText] = useState("Nav List Open");

  const location = useLocation();
  const navRef = useRef(null); // Ref for the navigation menu

  // Dynamic header background
  const getBackgroundColor = () => {
    if (location.pathname === "/") {
      return "#fff";
    } else if (location.pathname === "/howitworks") {
      return "#B4ECCD";
    } else if (location.pathname === "/features") {
      return "#FFECBA";
    }
  };

  function openNav() {
    if (activeNav === "") {
      setActiveNav("active");
      setMenuBar(menubarcancel);
      setNavButtonAriaText("Nav List Close");
    } else {
      setActiveNav("");
      setMenuBar(menubar);
      setNavButtonAriaText("Nav List Open");
    }
  }

  // Close the navigation menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveNav("");
        setMenuBar(menubar);
        setNavButtonAriaText("Nav List Open");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      id="label"
      aria-label="Main Navigation"
      className="header"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="headerWrapper" ref={navRef}>
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <button
          className="menu"
          type="button"
          aria-label={navButtonAriaText}
          onClick={openNav}
        >
          <img src={menuBar} alt="" />
        </button>
        <ul className={`navbar ${activeNav}`}>
          <li>
            <Link to="https://pricing.pixomaticc.com/" target="_blank">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/showcase" onClick={openNav}>
              Client Galleries
            </Link>
          </li>
          <li>
            <Link to="https://app.pixomaticc.com/auth/signin" target="_blank">
              Login
            </Link>
          </li>
          <Link to="https://app.pixomaticc.com/auth/signup" target="_blank">
            <button
              type="button"
              id="try-free-btn"
              aria-labelledby="label try-free-btn"
            >
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
