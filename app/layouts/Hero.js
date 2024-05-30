// Importing necessary dependencies and components
import Img from "@/app/components/Image"; // Custom Image component
import {
  IoArrowForward,
  IoCloseOutline,
  IoDownloadOutline,
} from "react-icons/io5"; // Icons from react-icons library

// Hero functional component
const Hero = () => {
  // Render the Hero section
  return (
    // The section has an id of "home", which can be used for navigation
    // The aria-label attribute is used for accessibility, providing a label for screen readers
    <section id="home" className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Sayeed <br /> Mahmood
          </h1>

          <p className="hero-subtitle">Creative Web Developer</p>

          <div className="hero-banner">
            <Img
              src="hero-banner.jpg"
              width="800"
              height="800"
              alt="kane williams"
              className="w-100"
            />
          </div>

          <p className="section-text">
            I&apos;m Sayeed Mahmood, a maverick web developer who crafts
            mind-bending digital experiences. A FOSS and Linux aficionado, I
            march to the beat of my own drum, defying the rat race with every
            line of code I write. Prepare for a wild ride of creativity and
            innovation
          </p>

          <a href="#contact" className="btn has-before">
            <span className="span">Contact Me</span>

            <IoDownloadOutline className="ion-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Exporting the Hero component as the default export of this module
export default Hero;
