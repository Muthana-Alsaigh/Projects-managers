export default function BrounButton({textColor, children, ...props}) {
  return (
    <button 
      className={`rounded ${textColor} bg-stone-900 hover:bg-stone-950`} 
      {...props}
    >
      {children}
    </button>
  )
} 