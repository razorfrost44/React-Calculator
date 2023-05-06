import {
  numberButtonPress,
  clearButtonPress,
  flipButtonPress,
  percentButtonPress,
  operatorButtonPress,
  periodButtonPress,
  equalsButtonPress,
} from "../calculatorSlice"
import { AvailableOperations } from "../operations/operations"

type PossibleControls = {
  className: string
  aria: string
  onClick: any
  label: string
}

export const possibleControls: Array<PossibleControls> = [
  {
    className: "clear",
    aria: "Clear",
    onClick: clearButtonPress(),
    label: "CE",
  },
  {
    className: "flipSign",
    aria: "Flip Sign",
    onClick: flipButtonPress(),
    label: "+/-",
  },
  {
    className: "percent",
    aria: "Percent",
    onClick: percentButtonPress(),
    label: "%",
  },
  {
    className: "divide last-column",
    aria: "Divide",
    onClick: operatorButtonPress(AvailableOperations.divide),
    label: "/",
  },
  {
    className: "seven",
    aria: "Seven",
    onClick: numberButtonPress(7),
    label: "7",
  },
  {
    className: "eight",
    aria: "Eight",
    onClick: numberButtonPress(8),
    label: "8",
  },
  {
    className: "nine",
    aria: "Nine",
    onClick: numberButtonPress(9),
    label: "9",
  },
  {
    className: "multiply last-column",
    aria: "Multiply",
    onClick: operatorButtonPress(AvailableOperations.multiply),
    label: "X",
  },
  {
    className: "four",
    aria: "Four",
    onClick: numberButtonPress(4),
    label: "4",
  },
  {
    className: "five",
    aria: "Five",
    onClick: numberButtonPress(5),
    label: "5",
  },
  {
    className: "six",
    aria: "Six",
    onClick: numberButtonPress(6),
    label: "6",
  },
  {
    className: "subtract last-column",
    aria: "Subtract",
    onClick: operatorButtonPress(AvailableOperations.subtract),
    label: "-",
  },
  {
    className: "one",
    aria: "One",
    onClick: numberButtonPress(1),
    label: "1",
  },
  {
    className: "two",
    aria: "Two",
    onClick: numberButtonPress(2),
    label: "2",
  },
  {
    className: "three",
    aria: "Three",
    onClick: numberButtonPress(3),
    label: "3",
  },
  {
    className: "sum last-column",
    aria: "Sum",
    onClick: operatorButtonPress(AvailableOperations.sum),
    label: "+",
  },
  {
    className: "zero",
    aria: "Zero",
    onClick: numberButtonPress(0),
    label: "0",
  },
  {
    className: "period",
    aria: "Period",
    onClick: periodButtonPress(),
    label: ".",
  },
  {
    className: "equals last-column",
    aria: "Equals",
    onClick: equalsButtonPress(),
    label: "=",
  },
]
