import { ReactElement } from "react"
import { possibleControls } from "./possibleControls"
import Button from "../buttons/button"
import { useAppDispatch } from "../../../app/hooks"
import { performLogic } from "../calculatorSlice"

const ControlPad = (): ReactElement => {
  const dispatch = useAppDispatch()

  const allButtons = possibleControls.map((controlButton) => {
    return (
      <Button
        className={controlButton.className}
        aria={controlButton.aria}
        onClick={() => {
          dispatch(performLogic(controlButton.onClick))
        }}
        label={controlButton.label}
        key={`key-${controlButton.className}`}
      />
    )
  })

  return <section className="control-pad">{allButtons}</section>
}

export default ControlPad
