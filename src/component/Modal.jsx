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
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <BrounButton>{btnCaption}</BrounButton>
      </form>
    </dialog>, 
    document.querySelector("#modal-root")
  )
}