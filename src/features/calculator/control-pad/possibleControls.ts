import { LogicActionsObject } from "../logic/LogicActions"

type PossibleControls = {
  className: string
  aria: string
  onClick: string
  label: string
}

export const possibleControls: Array<PossibleControls> = [
  {
    className: "clear",
    aria: "Clear",
    onClick: LogicActionsObject.clear,
    label: "CE",
  },
  {
    className: "flipSign",
    aria: "Flip Sign",
    onClick: LogicActionsObject.flip,
    label: "+/-",
  },
  {
    className: "percent",
    aria: "Percent",
    onClick: LogicActionsObject.percent,
    label: "%",
  },
  {
    className: "divide last-column",
    aria: "Divide",
    onClick: LogicActionsObject.divide,
    label: "/",
  },
  {
    className: "seven",
    aria: "Seven",
    onClick: LogicActionsObject.seven,
    label: "7",
  },
  {
    className: "eight",
    aria: "Eight",
    onClick: LogicActionsObject.eight,
    label: "8",
  },
  {
    className: "nine",
    aria: "Nine",
    onClick: LogicActionsObject.nine,
    label: "9",
  },
  {
    className: "multiply last-column",
    aria: "Multiply",
    onClick: LogicActionsObject.multiply,
    label: "X",
  },
  {
    className: "four",
    aria: "Four",
    onClick: LogicActionsObject.four,
    label: "4",
  },
  {
    className: "five",
    aria: "Five",
    onClick: LogicActionsObject.five,
    label: "5",
  },
  {
    className: "six",
    aria: "Six",
    onClick: LogicActionsObject.six,
    label: "6",
  },
  {
    className: "subtract last-column",
    aria: "Subtract",
    onClick: LogicActionsObject.subtract,
    label: "-",
  },
  {
    className: "one",
    aria: "One",
    onClick: LogicActionsObject.one,
    label: "1",
  },
  {
    className: "two",
    aria: "Two",
    onClick: LogicActionsObject.two,
    label: "2",
  },
  {
    className: "three",
    aria: "Three",
    onClick: LogicActionsObject.three,
    label: "3",
  },
  {
    className: "sum last-column",
    aria: "Sum",
    onClick: LogicActionsObject.sum,
    label: "+",
  },
  {
    className: "zero",
    aria: "Zero",
    onClick: LogicActionsObject.zero,
    label: "0",
  },
  {
    className: "period",
    aria: "Period",
    onClick: LogicActionsObject.period,
    label: ".",
  },
  {
    className: "equals last-column",
    aria: "Equals",
    onClick: LogicActionsObject.equals,
    label: "=",
  },
]
