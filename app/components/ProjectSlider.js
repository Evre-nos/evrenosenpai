import Img from "@/app/components/Image";


const ProjectsSlider = ({ projects }) => {
  return (
    <ul className="slider-container" data-slider-container>
      {projects.map((project, index) => (
        <li key={index} className="slider-item">
          <div className="portfolio-card img-holder" style={{"--width":"600", "--height":"600"}}>
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

export default ProjectsSlider;