import calculatorReducer, {
  CalculatorState,
  setCurrentVal,
  setPreviousVal,
  setOperator,
  selectCurrent,
  selectPrevious,
  selectOperator,
  numberButtonPress,
  clearButtonPress,
  flipButtonPress,
  percentButtonPress,
  operatorButtonPress,
  periodButtonPress,
  equalsButtonPress,
} from "../calculatorSlice"
import { AvailableOperations } from "../operations/operations"

const state = {
  calculator: {
    currentValue: 101,
    previousValue: 253,
    operator: AvailableOperations.sum,
  },
}

describe("Calculator Slice", () => {
  const initialState: CalculatorState = {
    currentValue: 101,
    previousValue: 253,
    operator: AvailableOperations.sum,
  }

  it("should handle initial state", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 568,
      previousValue: 936,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(expected, {
      type: "unknown",
    })
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should set current value", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 50,
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      setCurrentVal(50),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should set previous value", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 101,
      previousValue: 95,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      setPreviousVal(95),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should set operator", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 101,
      previousValue: 253,
      operator: AvailableOperations.subtract,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      setOperator(AvailableOperations.subtract),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should select current value", () => {
    // arrange
    // act
    const expected = state.calculator.currentValue
    const actual = selectCurrent(state)
    // assert
    expect(actual).toBe(expected)
  })

  it("should select previous value", () => {
    // arrange
    // act
    const expected = state.calculator.previousValue
    const actual = selectPrevious(state)
    // assert
    expect(actual).toBe(expected)
  })

  it("should select operator", () => {
    // arrange
    // act
    const expected = state.calculator.operator
    const actual = selectOperator(state)
    // assert
    expect(actual).toBe(expected)
  })

  it("should handle perform logic zero", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1010",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(0),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic one", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1011",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(1),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic two", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1012",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(2),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic three", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1013",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(3),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic four", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1014",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(4),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic five", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1015",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(5),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic six", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1016",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(6),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic seven", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1017",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(7),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic eight", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1018",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(8),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic nine", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "1019",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      numberButtonPress(9),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle period", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "101.",
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      periodButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle equals divide", () => {
    // arrange
    const starting: CalculatorState = {
      currentValue: 10,
      previousValue: 100,
      operator: AvailableOperations.divide,
    }
    const expected: CalculatorState = {
      currentValue: 10,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      equalsButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle equals multiply", () => {
    // arrange
    const starting: CalculatorState = {
      currentValue: 8,
      previousValue: 8,
      operator: AvailableOperations.multiply,
    }
    const expected: CalculatorState = {
      currentValue: 64,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      equalsButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle equals subtract", () => {
    // arrange
    const starting: CalculatorState = {
      currentValue: 3,
      previousValue: 10,
      operator: AvailableOperations.subtract,
    }
    const expected: CalculatorState = {
      currentValue: 7,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      equalsButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle equals sum", () => {
    // arrange
    const starting: CalculatorState = {
      currentValue: 5,
      previousValue: 11,
      operator: AvailableOperations.sum,
    }
    const expected: CalculatorState = {
      currentValue: 16,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      equalsButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle equals blank", () => {
    // arrange
    const starting: CalculatorState = {
      currentValue: 5,
      previousValue: 11,
      operator: "",
    }
    const expected: CalculatorState = {
      currentValue: 5,
      previousValue: 11,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      equalsButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle clear", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: "0",
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      clearButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle flip", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: -101,
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      flipButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle percent", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1.01,
      previousValue: 253,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      percentButtonPress(),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle divide", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 0,
      previousValue: 101,
      operator: AvailableOperations.divide,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      operatorButtonPress(AvailableOperations.divide),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle multiply", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 0,
      previousValue: 101,
      operator: AvailableOperations.multiply,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      operatorButtonPress(AvailableOperations.multiply),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle subtract", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 0,
      previousValue: 101,
      operator: AvailableOperations.subtract,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      operatorButtonPress(AvailableOperations.subtract),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle sum", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 0,
      previousValue: 101,
      operator: AvailableOperations.sum,
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      operatorButtonPress(AvailableOperations.sum),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })
})
