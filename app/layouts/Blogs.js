// Importing necessary dependencies and components
import Img from "@/app/components/Image"; // Custom Image component
import { IoArrowDown, IoArrowForward } from "react-icons/io5"; // Icons from react-icons library

// Blogs functional component
const Blogs = () => {
  // Render the Blogs section
  return (
    <section id="blogs" className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <p className="section-subtitle" id="blog-label">
          Recent Articles
        </p>

        <h2 className="h2 section-title">Latest Blogs</h2>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "700", "--height": "470" }}
              >
                <Img
                  src="blog-1.jpg"
                  width="700"
                  height="470"
                  loading="lazy"
                  alt="Did Apple need Steve?"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <time className="time" dateTime="2024-01-25">
                  <span className="span text-lg">25</span>
                  Jan 2024
                </time>

                <div>
                  <h3 className="h3 card-title">Did Apple need Steve?</h3>

                  <p className="card-text">
                    Steve Jobs was a visionary, a genius, and a perfectionist.
                    He was also a tyrant, a bully, and a control freak. But did
                    Apple need him?
                  </p>

                  <a href="#" className="btn has-before">
                    <span className="span">Read more</span>

                    <IoArrowForward className="ion-icon" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "700", "--height": "470" }}
              >
                <Img
                  src="blog-2.jpg"
                  width="700"
                  height="470"
                  loading="lazy"
                  alt="Programming Guide 2024"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <time className="time" dateTime="2023-12-28">
                  <span className="span text-lg">28</span>
                  Dec 2023
                </time>

                <div>
                  <h3 className="h3 card-title">Programming Guide 2024</h3>

                  <p className="card-text">
                    The on face programming guide for 2024 and upcoming years.
                    This guide will help you to understand the programming
                    languages and their uses.
                  </p>

                  <a href="#" className="btn has-before">
                    <span className="span">Read more</span>

                    <IoArrowForward className="ion-icon" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" className="btn has-before read-more-blogs">
          <span className="span">Read more blogs</span>
          <IoArrowDown className="ion-icon" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Blogs;
