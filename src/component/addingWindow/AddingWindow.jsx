import { useRef } from "react"
import BrounButton from "../buttons/brounButton"
import WhiteButton from "../buttons/WhiteButton"
import Input from "./Input"

export default function AddingWindow({projects, setters}) {
  const [setActiveProject, setIsAdding] = setters

  const title       = useRef()
  const description = useRef()
  const date        = useRef()

  function handleSave() {
    setIsAdding(false)
    projects.push({
      title: title.current.pollText(),
      description: description.current.pollText(),
      date: date.current.pollText(),
      tasks:[]
    })
    setActiveProject(projects.length - 1)
  }

  function handleCansel() {
    setIsAdding(false)
  }

  return (
    <div className="w-full h-full pt-20 pl-10 pr-20">
      <menu className="flex justify-end">
        <WhiteButton onClick={handleCansel} hoverColor="hover:text-stone-950">Cansel</WhiteButton>  
        <BrounButton onClick={handleSave} textColor="text-stone-50 font-normal">Save</BrounButton>
      </menu>
      <Input ref={title} inputType="input" type="text">title</Input>
      <Input ref={description} inputType="textarea">description</Input>
      <Input ref={date} inputType="input" type="date">due date</Input>
    </div>
  )
} 