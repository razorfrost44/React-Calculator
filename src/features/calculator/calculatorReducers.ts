import { PayloadAction } from "@reduxjs/toolkit"
import { CalculatorState } from "./calculatorSlice"
import { LogicActionsObject } from "./logic/LogicActions"
import {
  flipSign,
  percent,
  divide,
  multiply,
  subtract,
  sum,
  AvailableOperations,
} from "./operations/operations"
import { isZero } from "./helpers/calculatorHelpers"

// Reducers
export const setCurrentValReducer = (
  state: CalculatorState,
  action: PayloadAction<number>,
) => {
  state.currentValue = action.payload
}

export const setPreviousValReducer = (
  state: CalculatorState,
  action: PayloadAction<number>,
) => {
  state.previousValue = action.payload
}

export const setOperatorReducer = (
  state: CalculatorState,
  action: PayloadAction<string>,
) => {
  state.operator = action.payload
}

export const performLogicReducer = (
  state: CalculatorState,
  action: PayloadAction<string>,
) => {
  switch (action.payload) {
    case LogicActionsObject.zero:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}0`
      } else {
        state.currentValue = 0
      }
      break
    case LogicActionsObject.one:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}1`
      } else {
        state.currentValue = 1
      }
      break
    case LogicActionsObject.two:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}2`
      } else {
        state.currentValue = 2
      }
      break
    case LogicActionsObject.three:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}3`
      } else {
        state.currentValue = 3
      }
      break
    case LogicActionsObject.four:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}4`
      } else {
        state.currentValue = 4
      }
      break
    case LogicActionsObject.five:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}5`
      } else {
        state.currentValue = 5
      }
      break
    case LogicActionsObject.six:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}6`
      } else {
        state.currentValue = 6
      }
      break
    case LogicActionsObject.seven:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}7`
      } else {
        state.currentValue = 7
      }
      break
    case LogicActionsObject.eight:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}8`
      } else {
        state.currentValue = 8
      }
      break
    case LogicActionsObject.nine:
      if (!isZero(state.currentValue)) {
        state.currentValue = `${state.currentValue}9`
      } else {
        state.currentValue = 9
      }
      break
    case LogicActionsObject.period:
      const current = state.currentValue
      if (Number.isInteger(current) || !current.includes(".")) {
        state.currentValue += "."
      }
      break
    case LogicActionsObject.equals:
      switch (state.operator) {
        case AvailableOperations.divide:
          if (state.currentValue && state.previousValue) {
            state.currentValue = divide(
              parseFloat(state.previousValue),
              parseFloat(state.currentValue),
            )
            state.previousValue = 0
            state.operator = ""
          }
          break
        case AvailableOperations.multiply:
          state.currentValue = multiply(
            parseFloat(state.previousValue),
            parseFloat(state.currentValue),
          )
          state.previousValue = 0
          state.operator = ""
          break
        case AvailableOperations.subtract:
          state.currentValue = subtract(
            parseFloat(state.previousValue),
            parseFloat(state.currentValue),
          )
          state.previousValue = 0
          state.operator = ""
          break
        case AvailableOperations.sum:
          state.currentValue = sum(
            parseFloat(state.previousValue),
            parseFloat(state.currentValue),
          )
          state.previousValue = 0
          state.operator = ""
          break
        default:
          // Nothing
          break
      }
      break
    case LogicActionsObject.clear:
      state.currentValue = "0"
      state.previousValue = 0
      state.operator = ""
      break
    case LogicActionsObject.flip:
      state.currentValue = flipSign(state.currentValue)
      break
    case LogicActionsObject.percent:
      state.currentValue = percent(state.currentValue)
      break
    case LogicActionsObject.divide:
      if (state.currentValue) {
        state.previousValue = state.currentValue
        state.currentValue = 0
      }
      state.operator = AvailableOperations.divide
      break
    case LogicActionsObject.multiply:
      if (state.currentValue) {
        state.previousValue = state.currentValue
        state.currentValue = 0
      }
      state.operator = AvailableOperations.multiply
      break
    case LogicActionsObject.subtract:
      if (state.currentValue) {
        state.previousValue = state.currentValue
        state.currentValue = 0
      }
      state.operator = AvailableOperations.subtract
      break
    case LogicActionsObject.sum:
      if (state.currentValue) {
        state.previousValue = state.currentValue
        state.currentValue = 0
      }
      state.operator = AvailableOperations.sum
      break
    default:
      // Do Nothing
      break
  }
}
