export default function ProjectItem({project, active, ...props}) {
  let buttonStyling = `pl-2 flex w-full h-8 rounded-sm hover:bg-stone-800 hover:text-slate-50 justify-start items-center `
  if (active) {
    buttonStyling += "text-stone-50 bg-stone-800"
  }
  else {
    buttonStyling += "text-stone-700"
  }

  return <li>
    <button 
      className={buttonStyling}
      {...props}
    >
      <span>{project.title}</span>
    </button>
  </li>
}