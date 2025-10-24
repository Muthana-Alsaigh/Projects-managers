import { useState } from "react"
import TaskItem from "./TaskItem"
import TaskInput  from "./TaskInput"
import WhiteButton from "../buttons/WhiteButton"

export default function ProjectPage({project, projects, projectIndex, onDelete}) {
  const date = new Date(project.date).toLocaleDateString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  const [flip, setflip] = useState(false)

  function onTaskAddition(ref) {
    if (ref.current.value !== '') {
      project.tasks = [ref.current.value, ...project.tasks]
      ref.current.value = ''
      setflip(f => !f)

      localStorage.setItem("projects", JSON.stringify(projects))
    }
  }

  function onItemClear(key) {
    project.tasks = project.tasks.filter((v,i) => i !== key)
    localStorage.setItem("projects", JSON.stringify(projects))
    setflip(f => !f)
  }

  return (
    <div className="w-full h-full text-stone-900 pt-20 pl-10 pr-20">
      <header className="mb-4 border-b-[3px] border-stone-300">
        <div className="flex justify-between">
          <h1 className="text-stone-800">{project.title}</h1>
          <WhiteButton 
            hoverColor="hover:text-stone-500" 
            onClick={() => onDelete(projectIndex)}
            >
            Delete
          </WhiteButton>
        </div>
        <p className="text-stone-500 mt-3 font-medium">
          {date}
        </p>
        <p className="text-stone-800 font-medium whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <h2 className="text-stone-800 mb-2">Tasks</h2>
      <TaskInput onAddingClick={onTaskAddition}/>

      {project.tasks.length === 0 && (
        <p className="text-stone-800 font-medium mt-4">
          this project does not have any tasks yet
        </p>
      )}

      {project.tasks.length > 0 && (
        <ul className="text-stone-800 font-medium mt-4 bg-stone-200 rounded-md py-4 pl-4">
          {project.tasks.map((task, ix) => <TaskItem key={ix} itemIndex={ix} onClear={onItemClear}>{task}</TaskItem>)}
        </ul>
      )}

    </div>
  )
} 
