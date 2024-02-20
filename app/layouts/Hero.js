import Img from "@/app/components/Image";
import { IoArrowForward, IoCloseOutline, IoDownloadOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <section id="home" className="section hero" aria-label="home">
    <div className="container">

      <div className="hero-content">

        <h1 className="h1 hero-title">Soren < br /> Blank</h1>

        <p className="hero-subtitle">
          Creative Web & App Developer
        </p>

        <div className="hero-banner">
          <Img src="hero-banner.jpg" width="800" height="800" alt="kane williams" className="w-100" />
        </div>

        <p className="section-text">
          Hi, I’m Soren Blank and I’m a creative web and app developer. And I have a team who are your one-stop solution for all your digital needs on the Internet.
        </p>

        <a href="#contact" className="btn has-before">
          <span className="span">Contact Me</span>

            <IoDownloadOutline className="ion-icon" aria-hidden="true" />
          
        </a>

      </div>

    </div>
    </section>
  )
}

export default Hero