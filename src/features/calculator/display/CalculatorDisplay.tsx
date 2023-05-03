import { FC, ReactElement } from "react"

type DisplayProps = {
  className: string
  aria: string
  value: number
  onChange: () => void
}

const CalculatorDisplay: FC<DisplayProps> = ({
  className,
  aria,
  value,
  onChange,
}): ReactElement => {
  return (
    <input
      type="number"
      id="calc-display"
      className={className}
      aria-label={aria}
      value={value}
      onChange={onChange}
    />
  )
}

export default CalculatorDisplay
