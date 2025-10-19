export default function WhiteButton({hoverColor,children, ...props}) {
  const style = `text-stone-900 ${hoverColor}`
  return <button className={style} {...props}>{children}</button>
}