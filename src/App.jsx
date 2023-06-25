import { useState } from "react";
import "./App.scss";
import ProjectList from "./components/ProjectList/ProjectList";
import skills from "./json/skills.json";
import interests from "./json/interests.json";
import { useEffect } from "react";

function App() {
  //let encEmail = "YnJhbmRvbnl1aEBnbWFpbC5jb20="; //default email
  //let encEmail = "YnJlbmt5dWhAZ21haWwuY29t";
  //const encPhone = "MTc3ODcwOTUyMzk=";

  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " Portfolio";
  }, []);

  return (
    <>
      <h1>{process.env.REACT_APP_NAME}</h1>
      <div>
        <a href={"mailto:" + process.env.REACT_APP_USERNAME + "@gmail.com"}>Email: {process.env.REACT_APP_USERNAME + "@gmail.com"}</a>
      </div>
      {/* <div>
        <a href={"tel:".concat(atob(encPhone))}>Phone: {atob(encPhone)}</a>
      </div> */}
      <div>
        <a href={"https://www.linkedin.com/in/" + process.env.REACT_APP_USERNAME} rel="noopener noreferrer" target="_blank">
          LinkedIn: https://www.linkedin.com/in/{process.env.REACT_APP_USERNAME}/
        </a>
      </div>
      <div>
        <a href={"https://github.com/" + process.env.REACT_APP_USERNAME} rel="noopener noreferrer" target="_blank">
          GitHub: https://github.com/{process.env.REACT_APP_USERNAME}
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
