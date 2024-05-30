// Importing necessary dependencies and components
import React from 'react'; // React library
import { IoCheckmarkDoneSharp } from 'react-icons/io5'; // Icon from react-icons library

// Skills functional component
const Skills = () => {
  // Render the Skills section
  return (
    <section id="skills" className="section skills" aria-label="our skills">
      <div className="container">

        <p className="section-subtitle">I Make The Future</p>

        <h2 className="h2 section-title">I Develop & Create Digital Future.</h2>

        <div className="skills-wrapper">

          <div>
            <p className="section-text">
              I am a creative web and app developer. I have a passion for web design and love to create for web and mobile devices. I am always looking for new challenges and I am excited to work with you on your next project. Let’s work together and take your business to the next level.
            </p>

            <p className="section-text">
              I offer a wide range of digital services that will help you grow your business. I can help you with website design, SEO marketing, eCommerce, graphic design, digital marketing, social media, app development, and custom solutions. I am passionate about what I do and I am committed to delivering the best results for my clients.
            </p>

            <a href="#" className="btn has-before">avrenosenpai@gmail.com</a>
          </div>

          <div>

            <ul className="skills-list">

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Design</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp className="ion-icon" aria-hidden="true" />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: '100%' }}></div>
                </div>
              </li>

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Branding</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp className="ion-icon" aria-hidden="true" />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: '100%' }}></div>
                </div>
              </li>

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Web Design</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp className="ion-icon" aria-hidden="true" />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: '100%' }}></div>
                </div>
              </li>

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Social Media</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp className="ion-icon" aria-hidden="true" />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: '100%' }}></div>
                </div>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  )
}

// Exporting the Skills component as the default export of this module
export default Skills