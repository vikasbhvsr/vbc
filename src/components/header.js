import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoMdCall,
  IoMdMail,
} from "react-icons/io"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.navMenu}>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </li>
      </ul>
      {/* <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/services">Services</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/appointment">Appointment</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
      {/* <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <a href="https://www.facebook.com/vaidehibeautycarenspa/">
            <IoLogoFacebook />
          </a>
        </li>
        <li className={headerStyles.navItem}>
          <a href="https://www.instagram.com/vaidehi_beauty_care/">
            <IoLogoInstagram />
          </a>
        </li>
        <li className={headerStyles.navItem}>
          <a href="https://www.youtube.com/channel/UCtJeLijxZEQ1x1-Cbdk00Lg">
            <IoLogoYoutube />
          </a>
        </li>
        <li className={headerStyles.navItem}>
          <a href="tel:+919825411321‬">
            <IoMdCall />
          </a>
        </li>
        <li className={headerStyles.navItem}>
          <a href="mailto:vaidehibeautycare@gmail.com">
            <IoMdMail />
          </a>
        </li>
      </ul> */}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
