import ProjectItem from "./ProjectItem"

export default function SideBar({onAdding,projects,activeProject, setters}) {
  const [setActiveProject, setIsAdding] = setters

  function handleProjectClick(activePoject) {
    setIsAdding(false)
    setActiveProject(activePoject)
  }

  return (
    <aside className="pr-8 absolute pt-14 pl-10 top-10 bottom-0 left-0 w-1/3 md:w-72 bg-stone-900 rounded-tr-xl">
      <h2 className="text-stone-300 text-lg md:text-2xl font-bold uppercase">Your Projects</h2>
      <p>
        <button 
          className="text-stone-400 bg-opacity-20 bg-stone-100 hover:bg-opacity-30 hover:text-stone-100"
          onClick={onAdding}
        >
          + Add Project
        </button>
      </p>
      <ul className="flex flex-col">
        {
          projects.map((p, pi) => (
            <ProjectItem 
              key={pi} 
              project={p} 
              active={activeProject === pi} 
              onClick={() => handleProjectClick(pi)}
            />
          ))
        }
      </ul>
    </aside>
  )
}