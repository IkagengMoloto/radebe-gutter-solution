
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Images, X, MapPin } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Residential Gutter Installation",
    location: "Soshanguve, Pretoria",
    category: "Residential",
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Modern Home Guttering",
    location: "Centurion",
    category: "Residential",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Commercial Gutter Installation",
    location: "Midrand",
    category: "Commercial",
    image: "/images/project3.jpg"
  },
  {
    id: 4,
    title: "Gutter Repairs",
    location: "Pretoria",
    category: "Repairs",
    image: "/images/project4.jpg"
  },
  {
    id: 5,
    title: "Townhouse Gutter Installation",
    location: "Johannesburg",
    category: "Residential",
    image: "/images/project5.jpg"
  },
  {
    id: 6,
    title: "Commercial Rainwater Drainage",
    location: "Gauteng",
    category: "Commercial",
    image: "/images/project6.jpg"
  }
];

const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Repairs"
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="projects-page">

      <section className="projects-banner">
        <span>OUR PORTFOLIO</span>
        <h1>Our Completed Projects</h1>
        <p>
          Discover quality gutter installations,
          repairs and maintenance by Radebe Gutter Solution.
        </p>
      </section>

      <section className="projects-content">

        <div className="projects-heading">
          <span>QUALITY WORKMANSHIP</span>
          <h2>Explore Our Work</h2>
          <p>
            Professional gutter solutions for residential
            and commercial properties.
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>

              <button
                type="button"
                className="project-image-button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className="project-image-overlay">
                  <Images size={28} />
                  View Project
                </span>
              </button>

              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>

                <p>
                  <MapPin size={15} />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-cta">
        <h2>Your Property Could Be Our Next Project</h2>
        <p>
          Contact us for a free on-site quotation.
        </p>

        <Link to="/contact">
          Request a Free Quote
          <ArrowRight size={18} />
        </Link>
      </section>

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <div className="project-modal-details">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.location}</p>
              <p>{selectedProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
