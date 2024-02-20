import {  IoLogoDribbble, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoSkype, IoLogoTwitch, IoLogoTwitter, IoPhonePortrait } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Get in touch</p>
        </li>

        <li>
          <a href="mailto:info@kwilliams.com" className="footer-link">info@sorenblank.com</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Locations</p>
        </li>

        <li>
          <a href="#" className="footer-link">Earth — Milky Way</a>
        </li>

      </ul>

      <ul className="social-list">

        <li>
          <a href="https://twitter.com/soren_blank/" className="social-link">
            <IoLogoTwitter className="ion-icon" aria-hidden="true"/>
          </a>
        </li>

        <li>
          <a href="https://instagram.com/soren_blank/" className="social-link">
            <IoLogoInstagram className="ion-icon" aria-hidden="true"/>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/siyam-afroz/" className="social-link">
            <IoLogoLinkedin className="ion-icon" aria-hidden="true"/>
          </a>
        </li>

        <li>
            <a href="https://github.com/sorenblank/" className="social-link">
                <IoLogoGithub className="ion-icon" aria-hidden="true"/>
            </a>
        </li>

      </ul>

    </div>
    </footer>
  )
}

export default Footer