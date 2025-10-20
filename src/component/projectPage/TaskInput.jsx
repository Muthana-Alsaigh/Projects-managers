import { useRef } from "react";
import WhiteButton from "../buttons/WhiteButton";

export default function TaskInput({onAddingClick}) {
  const taskText = useRef()

  return( 
    <div className="flex justify-start">
      <input ref={taskText} type="text" className="bg-stone-300 h-8 w-80 rounded-sm px-3"/> 
      <WhiteButton 
        onClick={() => onAddingClick(taskText)} 
        hoverColor={"hover:text-stone-500"}
      >
        Add Task
      </WhiteButton>
    </div>
  )
}