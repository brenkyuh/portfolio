import { useState } from "react";
import "./App.scss";
import ProjectList from "./components/ProjectList/ProjectList";
import skills from "./json/skills.json";
import interests from "./json/interests.json";

function App() {
  //const encEmail = "YnJhbmRvbnl1aEBnbWFpbC5jb20=";
  const encEmail = "YnJlbmt5dWhAZ21haWwuY29t";
  const encPhone = "MTc3ODcwOTUyMzk=";

  const [filteredSkills, setFilteredSkills] = useState([]);

  return (
    <>
      <h1>Bren Yuh</h1>
      <div>
        <a href={"mailto:".concat(atob(encEmail))}>Email: {atob(encEmail)}</a>
      </div>
      <div>
        <a href={"tel:".concat(atob(encPhone))}>Phone: {atob(encPhone)}</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/brenkyuh" rel="noopener noreferrer" target="_blank">
          LinkedIn: https://www.linkedin.com/in/brenkyuh/
        </a>
      </div>
      <div>
        <a href="https://github.com/brenkyuh" rel="noopener noreferrer" target="_blank">
          GitHub: https://github.com/brenkyuh
        </a>
      </div>
      <div>🍁Canadian Citizen</div>
      <h2>
        TechStack = <span className="bracket">[</span>
      </h2>

      <div className="skill__container">
        {skills.sort().map((skill) => {
          return (
            <span className="skill__group" key={skill}>
              <input
                type="checkbox"
                id={skill}
                name={skill}
                value={skill}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilteredSkills([...filteredSkills, e.target.value]);
                  } else {
                    setFilteredSkills(filteredSkills.filter((item) => item !== e.target.value));
                  }
                }}
              />
              <label htmlFor={skill} className="skill__item">
                "{skill}"
              </label>
              ,{" "}
            </span>
          );
        })}
      </div>
      <h2>
        <span className="bracket">]</span>
      </h2>
      <ProjectList filteredSkills={filteredSkills} />
      <h2>
        Interests = <span className="bracket">[</span>
      </h2>
      <div className="skill__container">
        {interests.map((interest) => {
          return <span className="skill__item">{interest}, </span>;
        })}
      </div>
      <h2>
        <span className="bracket">]</span>
      </h2>
    </>
  );
}

export default App;
