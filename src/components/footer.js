import React from "react"
import Logo from "../images/gatsby-icon.png"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa"

import footerStyles from "./footer.module.scss"

const footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.firstFooter}>
        <div>
          <h2>About</h2>
          {/* <img src={Logo} alt="Logo" height="70px" /> */}
          <p>
            Crafting Looks since 1989. Reignting the best bridal makeover,
            luxury spa, premium haircut in Ahmedabad
          </p>
          <p>
            <a
              href="https://www.facebook.com/vaidehibeautycarenspa/"
              target="_blank"
              className={footerStyles.socialItem}
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/vaidehi_beauty_care/"
              target="_blank"
              className={footerStyles.socialItem}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UCtJeLijxZEQ1x1-Cbdk00Lg"
              target="_blank"
              className={footerStyles.socialItem}
            >
              <FaYoutube />
            </a>
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <h3>Naranpura</h3>
          <p>
            <a href="https://goo.gl/maps/igwaTVTJguu2Hk5q6" target="_blank">
              F9, Viharika Complex <br />
              Near Ankur Cross Road, Naranpura
              <br />
              Ahmedabad, Gujarat 380013
            </a>
          </p>
          <h3>New Ranip</h3>
          <p>
            <a href="https://goo.gl/maps/YNqy6ep99B5wkAvC9" target="_blank">
              Arya Villa <br />
              Anand Party Plot Road, New Ranip
              <br />
              Ahmedabad, Gujarat 382470
            </a>
          </p>
          <p>
            <a href="mailto:vaidehibeautycare@gmail.com">
              vaidehibeautycare@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919825411321‬">+91 98254 11321‬</a>
          </p>
        </div>
        <div>
          <h2>Business Hours</h2>
          <ul>
            <li>
              <span>Monday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Tuesday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Wednesday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Thursday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Friday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Saturday</span>
              <time>9AM - 8PM</time>
            </li>
            <li>
              <span>Sunday</span>
              <time>9AM - 8PM</time>
            </li>
          </ul>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Sign up to receive special goodies.</p>
          <form method="POST" action="">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input type="text" name="email" placeholder="Email" required />
            <input type="submit" value="Subscribe ✉️" />
          </form>
        </div>
      </div>
      <hr />
      <div className={footerStyles.secondFooter}>
        <small>
          &copy; 2019{" "}
          <a href="https://vaidehibeautycare.com">Vaidehi Beauty Care & Spa</a>.
          Designed by <a href="https://vikasbhavsar.com">Vikas Bhavsar</a>
        </small>
      </div>
    </footer>
  )
}

export default footer
