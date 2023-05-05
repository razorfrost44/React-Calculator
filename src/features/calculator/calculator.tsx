import { useAppSelector, useAppDispatch } from "../../app/hooks"
import ControlPad from "./control-pad/ControlPad"
import CalculatorDisplay from "./display/CalculatorDisplay"
import {
  selectCurrent,
  setCurrentVal,
  selectPrevious,
  selectOperator,
} from "./calculatorSlice"
import "./calculator.css"

function Calculator() {
  const currentValue = useAppSelector(selectCurrent)
  const previousValue = useAppSelector(selectPrevious)
  const operator = useAppSelector(selectOperator)
  const dispatch = useAppDispatch()

  const handleDisplayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(setCurrentVal(e.target.valueAsNumber))
  }

  return (
    <div className="calculator">
      <CalculatorDisplay
        className="calculator-display"
        aria="Display for the current calculator number"
        value={currentValue}
        onChange={handleDisplayChange}
        savedValue={previousValue}
        operator={operator}
      />
      <ControlPad />
    </div>
  )
}

export default Calculator
