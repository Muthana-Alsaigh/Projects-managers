import { useState } from "react"
import TaskInput from "./TaskInpute"
import TaskItem from "./TaskItem"
import WhiteButton from "../buttons/WhiteButton"

export default function ProjectPage({project, projectIndex, onDelete}) {
  const date = new Date(project.date)

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const [flip, setflip] = useState(false)

  function onTaskAddition(ref) {
    if (ref.current.value !== '') {
      project.tasks = [ref.current.value, ...project.tasks]
      ref.current.value = ''
      setflip(f => !f)
    }
  }

  function onItemClear(key) {
    project.tasks = project.tasks.filter((v,i) => i !== key)
    setflip(f => !f)
  }

  return (
    <div className="w-full h-full text-stone-900 pt-20 pl-10 pr-20">
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
        {MONTHS[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()}
      </p>
      <p className="text-stone-800 font-medium">
        {project.description}
      </p>
      <div className="w-full h-1 rounded-sm bg-stone-400 mb-6 block"></div>
      <h2 className="text-stone-800 mb-2">Tasks</h2>
      <TaskInput onAddingClick={onTaskAddition}/>
      {project.tasks.length === 0 && <p className="text-stone-800 font-medium mt-4">
          this project does not have any tasks yet
        </p>}
      {project.tasks.length > 0 && <div className="text-stone-800 font-medium mt-4 bg-stone-200 rounded-md py-4 pl-4">
          {project.tasks.map((task, ix) => <TaskItem key={ix} itemIndex={ix} onClear={onItemClear}>{task}</TaskItem>)}
        </div>}
    </div>
  )
} 
