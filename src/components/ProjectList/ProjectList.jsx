import "./ProjectList.scss";
import Projects from "../../json/projects.json";
import Project from "../Project/Project";

function ProjectList({ filteredSkills }) {
  if (filteredSkills.length === 0) {
    return (
      <>
        <h2>All Projects</h2>
        <div className="project__list">
          {Projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>
          Projects with:
          {filteredSkills.map((skill) => {
            return (
              <span key={skill}>
                <span className="skill__item">"{skill}"</span>,{" "}
              </span>
            );
          })}
        </h2>
        <div className="project__list">
          {Projects.map((project) => {
            return <Project project={project} filteredSkills={filteredSkills} />;
          })}
        </div>
        <h2>
          Projects without:
          {filteredSkills.map((skill) => {
            return (
              <span key={skill}>
                <span className="skill__item">"{skill}"</span>,{" "}
              </span>
            );
          })}
        </h2>
        <div className="project__list">
          {Projects.map((project) => {
            return <Project project={project} filteredSkills={filteredSkills} reverse="1" />;
          })}
        </div>
      </>
    );
  }
}

export default ProjectList;
