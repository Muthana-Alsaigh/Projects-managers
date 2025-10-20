import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import BrounButton from "./buttons/BrounButton"

export default function Modal({children, ref, btnCaption}) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <BrounButton textColor="text-stone-50">{btnCaption}</BrounButton>
      </form>
    </dialog>, 
    document.querySelector("#modal-root")
  )
}