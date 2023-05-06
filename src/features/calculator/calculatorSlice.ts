import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {
  setCurrentValReducer,
  setPreviousValReducer,
  setOperatorReducer,
  performLogicReducer,
} from "./calculatorReducers"

// Calculator State
export interface CalculatorState {
  currentValue: number | string
  previousValue: number | string
  operator: string
}

const initialState: CalculatorState = {
  currentValue: 0,
  previousValue: 0,
  operator: "",
}

// Calculator Slice
export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setCurrentVal: setCurrentValReducer,
    setPreviousVal: setPreviousValReducer,
    setOperator: setOperatorReducer,
    performLogic: performLogicReducer,
  },
})

// Selectors
export const selectCurrent = (state: RootState) => state.calculator.currentValue
export const selectPrevious = (state: RootState) =>
  state.calculator.previousValue
export const selectOperator = (state: RootState) => state.calculator.operator

// Exports
export const { setCurrentVal, setPreviousVal, setOperator, performLogic } =
  calculatorSlice.actions
export default calculatorSlice.reducer
