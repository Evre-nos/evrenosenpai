// Importing necessary dependencies and components
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoSkype,
  IoLogoTwitch,
  IoLogoTwitter,
  IoPhonePortrait,
} from "react-icons/io5"; // Importing specific icons from react-icons library

// Footer functional component
// This component doesn't receive any props
const Footer = () => {
  // Rendering the Footer component
  // The component is a footer element with the 'footer' class
  // The footer contains a container div, which contains three unordered lists
  // The first list contains contact information, the second list contains location information, and the third list contains social media links
  // Each social media link is represented by a list item in the third list
  // Each list item contains a link with a social media icon
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in touch</p>
          </li>

          <li>
            <a href="mailto:info@kwilliams.com" className="footer-link">
              avrenosenpai@gmail.com
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Locations</p>
          </li>

          <li>
            <a href="#" className="footer-link">
              Earth — Milky Way
            </a>
          </li>
        </ul>

        <ul className="social-list">
          <li>
            <a href="https://x.com/evrenos_sayeed" className="social-link">
              <IoLogoTwitter className="ion-icon" aria-hidden="true" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/zen_evrenos/"
              className="social-link"
            >
              <IoLogoInstagram className="ion-icon" aria-hidden="true" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/sayeed-mahmood-539028273/"
              className="social-link"
            >
              <IoLogoLinkedin className="ion-icon" aria-hidden="true" />
            </a>
          </li>

          <li>
            <a href="https://github.com/Evre-nos" className="social-link">
              <IoLogoGithub className="ion-icon" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

// Exporting the Footer component as the default export of this module
export default Footer;
