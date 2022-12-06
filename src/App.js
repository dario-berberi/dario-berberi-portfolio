import Nav from "./Nav";
import Landing from "./Landing";
import Aboutme from "./Aboutme";
import ProjectsIntro from "./ProjectsIntro";
import Certifications from "./Certifications";
import Contacts from "./Contacts";
import ReactTooltip from "react-tooltip";
import Tile from "./Tile";
import projects_data from "./data";

function App() {
  const project_tile = projects_data.map((project) => <Tile key={project.id} specs={project} />);
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Aboutme />
      <ProjectsIntro />
      <div className="projects-wrap">{project_tile}</div>
      <Certifications />
      <Contacts />
      <ReactTooltip place="bottom" effect="solid" type="light" />
    </div>
  );
}

export default App;
