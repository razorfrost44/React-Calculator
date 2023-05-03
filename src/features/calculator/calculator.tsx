import { useAppSelector, useAppDispatch } from "../../app/hooks"
import ControlPad from "./control-pad/ControlPad"
import CalculatorDisplay from "./display/CalculatorDisplay"
import { selectCurrent, setCurrentVal } from "./calculatorSlice"

function Calculator() {
  const currentValue = useAppSelector(selectCurrent)
  const dispatch = useAppDispatch()

  const handleDisplayChange = (e) => {
    dispatch(setCurrentVal(e.target.valueAsNumber))
  }

  return (
    <div className="calculator">
      <CalculatorDisplay
        className="calculator-display"
        aria="Display for the current calculator number"
        value={currentValue}
        onChange={handleDisplayChange}
      />
      <ControlPad />
    </div>
  )
}

export default Calculator
