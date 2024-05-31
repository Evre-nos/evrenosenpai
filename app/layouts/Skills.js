// Importing necessary dependencies and components
import React from "react"; // React library
import { IoCheckmarkDoneSharp } from "react-icons/io5"; // Icon from react-icons library

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
              I am a creative web and app developer with a passion for web
              design and creating for both web and mobile platforms. Always
              eager for new challenges, I am excited to collaborate on your next
              project and help elevate your business.
            </p>

            <p className="section-text">
              I offer a range of digital services, including website
              development, UI/UX design, and custom web applications. My
              commitment to delivering top-notch results ensures your business
              will thrive in the digital landscape.
            </p>

            <a href="#" className="btn has-before">
              avrenosenpai@gmail.com
            </a>
          </div>

          <div>
            <ul className="skills-list">
              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Web Development</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp
                      className="ion-icon"
                      aria-hidden="true"
                    />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </li>

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">UI/UX Design</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp
                      className="ion-icon"
                      aria-hidden="true"
                    />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </li>

              <li>
                <div className="progress-wrapper">
                  <p className="progress-label">Social Media</p>

                  <data className="progress-value" value="100">
                    <IoCheckmarkDoneSharp
                      className="ion-icon"
                      aria-hidden="true"
                    />
                  </data>
                </div>

                <div className="progress-bg">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the Skills component as the default export of this module
export default Skills;
