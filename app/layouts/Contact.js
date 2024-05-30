// Importing necessary dependencies and components
import {
  IoArrowForward,
  IoHomeSharp,
  IoLogoDeviantart,
  IoMailOpenSharp,
  IoMoon,
  IoPhonePortrait,
} from "react-icons/io5"; // Icons from react-icons library

// Contact functional component
const Contact = () => {
  // Render the Contact section
  return (
    <section id="contact" className="contact" aria-labelledby="contact-label">
      <div className="title-wrapper container">
        <div>
          <p className="section-subtitle" id="portfolio-label">
            Wanna contact me?
          </p>

          <h2 className="h2 section-title">Get In Touch</h2>
        </div>
      </div>

      <div className="contact-content container">
        <form action="./index.html" method="post" className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            autoComplete="off"
            required
            className="input-field"
          />

          <input
            type="email"
            name="email_address"
            placeholder="Email address"
            autoComplete="off"
            required
            className="input-field"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            className="input-field"
          />

          <textarea
            name="message"
            placeholder="Enter massges"
            required
            className="input-field"
          ></textarea>

          <a href="#" className="btn has-before">
            <span className="span">Get a Quote</span>

            <IoArrowForward className="ion-icon" aria-hidden="true" />
          </a>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>

        <ul className="contact-list">
          <li className="contact-item">
            <div className="item-icon">
              <IoPhonePortrait
                className="item-icon"
                aria-hidden="true"
                size={32}
              />
            </div>

            <div>
              <span className="title h6">869. 368. 456. 56</span>

              <span className="title h6">789 (569) 126 35</span>
            </div>
          </li>

          <li className="contact-item">
            <div className="item-icon">
              <IoHomeSharp className="item-icon" aria-hidden="true" size={32} />
            </div>

            <div>
              <address className="title h6">
                123, New Lenox, Chicago, IL, 60606 USA
              </address>
            </div>
          </li>

          <li className="contact-item">
            <div className="item-icon">
              <IoMailOpenSharp
                className="item-icon"
                aria-hidden="true"
                size={32}
              />
            </div>

            <div>
              <span className="title h6">avrenosenpai@gmail.com</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

// Exporting the Contact component as the default export of this module
export default Contact;
