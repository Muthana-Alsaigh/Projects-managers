import image from "../assets/no-projects.png"
import BrounButton from "./buttons/BrounButton"

export default function NoSelectionWindow({onAdding}) {
  const sharedStyles = "mt-5 font-bold"

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={image} alt="No projects image" className="w-20 h-20 object-cover"/>
      <h2 className={sharedStyles+" text-stone-600 text-2xl"}>No Project Selected</h2>
      <h3 className={sharedStyles+" text-stone-400 text-lg"}>Select a project or get started with a new one</h3>
      <BrounButton 
        textColor={sharedStyles+" text-stone-400 font-medium"}
        onClick={onAdding}
      >
        Create new project
      </BrounButton>
    </div>
  )
}