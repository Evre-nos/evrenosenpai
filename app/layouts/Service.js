"use client";

// Importing necessary components
import Slider from "@/app/components/Slider";

// Service functional component
const Service = () => {
  // Render the Service section
  return (
    <section id="services" className="service" aria-labelledby="service-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Services That I Provide</p>

            <h2 className="h2 section-title" id="service-label">
              Services
            </h2>
          </div>

          <p className="section-text">
            I am currently in the process of learning development. Although I
            possess the ability to build websites, I am continuously improving
            my skills. My expertise includes designing interactive user
            interfaces that enhance user engagement. Additionally, I am adept at
            creating user experiences that are both intuitive and visually
            appealing. Despite my progress, I remain committed to further honing
            my abilities. This dedication ensures that I stay at the forefront
            of technological advancements in web development.
          </p>
        </div>

        <Slider
          slides={[
            {
              icon: "IoDesktopOutline",
              title: "Website Design",
              text: "We provide modern and responsive website design services.",
              number: "01",
              link: "#",
            },
            {
              icon: "IoPodiumOutline",
              title: "UI/UX Design",
              text: "I design engaging and visually appealing user interfaces and experiences.",
              number: "02",
              link: "#",
            },
            {
              icon: "IoBasketOutline",
              title: "Custom Web Applications",
              text: "I develop custom web applications tailored to your specific business needs.",
              number: "03",
              link: "#",
            },
          ]}
        />
      </div>
    </section>
  );
};

// Exporting the Service component as the default export of this module
export default Service;
