import { FC, ReactElement } from "react"

export type DisplayProps = {
  className: string
  aria: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  savedValue: number
}

const CalculatorDisplay: FC<DisplayProps> = ({
  className,
  aria,
  value,
  onChange,
  savedValue,
}): ReactElement => {
  const isLastCharAPeriod = (str: string) => str.slice(-1) === "."
  const trimPeriod = (str: string) => str.slice(0, str.length - 1)

  const generateSavedValue = () => {
    let newVal: string | number = savedValue
    if (newVal) {
      newVal = `${savedValue}`
    } else {
      newVal = ""
    }
    if (isLastCharAPeriod(newVal)) {
      newVal = trimPeriod(newVal)
    }
    return newVal
  }

  const generateValue = () => {
    if (Number.isNaN(value)) {
      return ""
    }
    if (typeof value === "string" && isLastCharAPeriod(value)) {
      return trimPeriod(value)
    }
    return value
  }

  return (
    <section>
      <span data-testid="saved-value">{generateSavedValue()}</span>
      <input
        type="number"
        id="calc-display"
        className={className}
        aria-label={aria}
        value={generateValue()}
        onChange={onChange}
      />
    </section>
  )
}

export default CalculatorDisplay
