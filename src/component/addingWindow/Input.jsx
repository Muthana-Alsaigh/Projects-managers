import { useImperativeHandle, useRef } from "react"

export default function Label({ref, children, inputType, ...props}) {
  const Type = inputType
  let styling = "w-full bg-stone-300 rounded-sm border-b-4 border-solid focus:border-stone-700 text-stone-700 px-2 "

  if (Type === "input") {
    styling += "h-8"
  }
  else {
    styling += "h-24"
  }

  const data = useRef()
  useImperativeHandle(ref,() => {return {
      pollText() {
        return data.current.value
      }
    }
  })

  return( 
    <p className="mt-4 mb-0">
      <label className="block text-stone-600 font-bold text-lg uppercase">{children}</label>
      <Type ref={data} type="text" className={styling} {...props}/>
    </p>
  )
}