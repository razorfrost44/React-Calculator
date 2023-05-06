import { FC, ReactElement } from "react"
import "./CalculatorDisplay.css"

export type DisplayProps = {
  className: string
  aria: string
  value: number | string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  savedValue: number | string
  operator: string
}

const CalculatorDisplay: FC<DisplayProps> = ({
  className,
  aria,
  value,
  onChange,
  savedValue,
  operator,
}): ReactElement => {
  return (
    <section className="calculator-display-section">
      <span className="previous-value-span" data-testid="saved-value">
        {`${savedValue} ${operator}`}
      </span>
      <input
        type="number"
        id="calc-display"
        className={className}
        aria-label={aria}
        value={value}
        onChange={onChange}
      />
    </section>
  )
}

export default CalculatorDisplay
