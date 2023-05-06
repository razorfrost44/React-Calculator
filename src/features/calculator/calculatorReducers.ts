import { PayloadAction } from "@reduxjs/toolkit"
import { CalculatorState } from "./calculatorSlice"
import {
  flipSign,
  percent,
  divide,
  multiply,
  subtract,
  sum,
  AvailableOperations,
} from "./operations/operations"
import { isZero, includesPeriod } from "./helpers/calculatorHelpers"

// Reducers
export const setCurrentValReducer = (
  state: CalculatorState,
  action: PayloadAction<number | string>,
) => {
  state.currentValue = action.payload
}

export const setPreviousValReducer = (
  state: CalculatorState,
  action: PayloadAction<number | string>,
) => {
  state.previousValue = action.payload
}

export const setOperatorReducer = (
  state: CalculatorState,
  action: PayloadAction<string>,
) => {
  state.operator = action.payload
}

export const numberButtonReducer = (
  state: CalculatorState,
  action: PayloadAction<number | string>,
) => {
  if (!isZero(state.currentValue)) {
    state.currentValue = `${state.currentValue}${action.payload}`
  } else {
    state.currentValue = action.payload
  }
}

export const clearButtonReducer = (state: CalculatorState) => {
  state.currentValue = "0"
  state.previousValue = 0
  state.operator = ""
}

export const flipButtonReducer = (state: CalculatorState) => {
  state.currentValue = flipSign(state.currentValue)
}

export const percentButtonReducer = (state: CalculatorState) => {
  state.currentValue = percent(state.currentValue)
}

export const operatorButtonReducer = (
  state: CalculatorState,
  action: PayloadAction<string>,
) => {
  if (state.currentValue) {
    state.previousValue = state.currentValue
    state.currentValue = 0
  }
  state.operator = action.payload
}

export const periodButtonReducer = (state: CalculatorState) => {
  const current = state.currentValue
  if (Number.isInteger(current) || !includesPeriod(current)) {
    state.currentValue += "."
  }
}

export const equalsButtonReducer = (state: CalculatorState) => {
  const current = parseFloat(state.currentValue)
  const previous = parseFloat(state.previousValue)
  switch (state.operator) {
    case AvailableOperations.divide:
      if (current && previous) {
        state.currentValue = divide(previous, current)
        state.previousValue = 0
        state.operator = ""
      }
      break
    case AvailableOperations.multiply:
      state.currentValue = multiply(previous, current)
      state.previousValue = 0
      state.operator = ""
      break
    case AvailableOperations.subtract:
      state.currentValue = subtract(previous, current)
      state.previousValue = 0
      state.operator = ""
      break
    case AvailableOperations.sum:
      state.currentValue = sum(previous, current)
      state.previousValue = 0
      state.operator = ""
      break
  }
}
