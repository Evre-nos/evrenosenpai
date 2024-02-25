// Importing necessary dependencies and components
import Img from "@/app/components/Image"; // Custom Image component

// ProjectsSlider functional component
// The component receives a 'projects' prop, which is an array of project objects
const ProjectsSlider = ({ projects }) => {
  // Render the ProjectsSlider component
  return (
    // The component is a list with the 'slider-container' class and a 'data-slider-container' attribute
    <ul className="slider-container" data-slider-container>
      {projects.map((project, index) => (
        <li key={index} className="slider-item">
          <div className="portfolio-card img-holder" style={{ "--width": "600", "--height": "600" }}>
            <Img src={project.image} width="600" height="600" priority="true" alt="portfolio" className="img-cover" />
            <div className="card-content">
              <h3 className="h3 card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
            </div>
            <a href={project.link} className="layer-link"></a>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Exporting the ProjectsSlider component as the default export of this module
export default ProjectsSlider;