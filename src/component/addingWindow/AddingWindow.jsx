import { useRef } from "react"
import BrounButton from "../buttons/BrounButton"
import WhiteButton from "../buttons/WhiteButton"
import Input from "./Input"
import Modal from "../Modal"

export default function AddingWindow({projects, setters}) {
  const [setActiveProject, setIsAdding] = setters

  const title       = useRef()
  const description = useRef()
  const date        = useRef()
  const modal       = useRef()

  function handleSave() {
    const newTitle = title.current.pollText()
    const newDescription = description.current.pollText()
    const newDate = date.current.pollText()

    
    if (newTitle.trim() === '' || newDescription.trim() === '' || newDate.trim() === '') {
      modal.current.open()
      return
    }

    setIsAdding(false);

    projects.push({
      title: newTitle,
      description: newDescription,
      date: newDate,
      tasks:[]
    })
    setActiveProject(projects.length - 1)
  }

  function handleCansel() {
    setIsAdding(false)
  }

  return (
    <>
      <Modal ref={modal} btnCaption="Okay">
        <h2 className="mt-5 font-bold text-stone-800 text-2xl">Invalid Input</h2>
        <h3 className="mt-5 font-bold text-stone-600 text-lg">Oops ... looks like you forget to enter a value</h3>
        <h3 className="mt-5 font-bold text-stone-600 text-lg">Pleas make sure you provide a valid value for every input filed.</h3>
      </Modal>
      <div className="w-full h-full pt-20 pl-10 pr-20">
        <menu className="flex justify-end">
          <WhiteButton onClick={handleCansel} hoverColor="hover:text-stone-950">Cansel</WhiteButton>  
          <BrounButton onClick={handleSave} textColor="text-stone-50 font-normal">Save</BrounButton>
        </menu>
        <Input ref={title} inputType="input" type="text">title</Input>
        <Input ref={description} inputType="textarea">description</Input>
        <Input ref={date} inputType="input" type="date">due date</Input>
      </div>
    </>
  )
} 