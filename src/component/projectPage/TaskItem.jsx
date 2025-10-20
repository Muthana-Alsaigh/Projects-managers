import WhiteButton from "../buttons/WhiteButton";

export default function TaskItem({children, itemIndex, onClear}) {

  return (
    <li className="w-full h-10 task-item items-center rounded">
      <div className="text-stone-900 items-star"> {children} </div>
      <WhiteButton hoverColor="hover:text-red-500" onClick={() => onClear(itemIndex)}> Clear </WhiteButton>
    </li>
  )
}