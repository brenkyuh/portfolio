import "./Project.scss";

function Project({ project, filteredSkills, reverse }) {
  if (filteredSkills) {
    if (reverse) {
      if (filteredSkills.some((skill) => project.skills.includes(skill))) {
        return null;
      }
    } else {
      if (!filteredSkills.some((skill) => project.skills.includes(skill))) {
        return null;
      }
    }
  }
  return (
    <div className="project__container">
      {project.name ? <h3 className="project__name">{project.name}</h3> : null}
      {project.link ? (
        <div>
          <a href={project.link} rel="noopener noreferrer" target="_blank">
            Link to Project
          </a>
        </div>
      ) : null}
      {project.image ? <img className="project__image" src={project.image} alt={project.name} /> : null}
      {project.github ? (
        <div>
          <a href={project.github}>Github</a>
        </div>
      ) : null}
      {project.description ? <div className="project__description">{project.description}</div> : null}
      {project.skills ? <div className="skill__item">Skills: {project.skills.join(", ")}</div> : null}
    </div>
  );
}

export default Project;
