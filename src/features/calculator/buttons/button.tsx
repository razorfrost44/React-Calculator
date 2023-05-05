import { FC, ReactElement } from "react"
import "./button.css"

export type ButtonProps = {
  className: string
  aria: string
  onClick: () => void
  label: string
}

const Button: FC<ButtonProps> = ({
  className,
  aria,
  onClick,
  label,
}): ReactElement => {
  return (
    <button className={className} aria-label={aria} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
