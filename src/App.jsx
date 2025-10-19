import SideBar from "./component/sideBar/sidebar";
import NoSelectionWindow from "./component/NoSelectionWindow";
import { useState } from "react";
import AddingWindow from "./component/addingWindow/AddingWindow";
import ProjectPage from "./component/projectPage/ProjectPage";

let projects = []

function App() {
  // Making the projects list
  // The Active Project will be one of the states that will derive this app
  // It takes the number of selected project
  const [activeProject, setActiveProject] = useState(undefined)
  // isAdding flag is Another State used to endicate adding new project
  const [isAdding, setIsAdding] = useState(false)

  function handleStateChange() {
    setIsAdding(true) 
    setActiveProject(undefined)
  }

  function handleProjectDelete(index) {
    setActiveProject(undefined)
    setIsAdding(false)
    projects = projects.filter((p,i) => i !== index)
  }

  return (
    <> 
      {(!isAdding && activeProject===undefined) && <NoSelectionWindow onAdding={handleStateChange}/>}

      {(isAdding) && <AddingWindow projects={projects} setters={[setActiveProject, setIsAdding]}/>}

      {(activeProject >= 0) && 
      <ProjectPage 
        project={projects[activeProject]}
        projectIndex={activeProject}
        onDelete={handleProjectDelete}/>}

      <SideBar 
        onAdding={handleStateChange} 
        projects={projects} 
        activeProject={activeProject}
        setters={[setActiveProject,setIsAdding]}
      />
    </>
  );
}

export default App;
