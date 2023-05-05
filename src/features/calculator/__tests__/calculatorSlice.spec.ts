import calculatorReducer, {
  CalculatorState,
  setCurrentVal,
  setPreviousVal,
  setOperator,
  performLogic,
  selectCurrent,
  selectPrevious,
  selectOperator,
} from "../calculatorSlice"
import { LogicActionsObject } from "../logic/LogicActions"

const state = {
  calculator: {
    currentValue: 101,
    previousValue: 253,
    operator: "+",
  },
}

describe("Calculator Slice", () => {
  const initialState: CalculatorState = {
    currentValue: 101,
    previousValue: 253,
    operator: "+",
  }

  it("should handle initial state", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 568,
      previousValue: 936,
      operator: "+",
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
      operator: "+",
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
      operator: "+",
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
      operator: "-",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      setOperator("-"),
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
      currentValue: 1010,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.zero),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic one", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1011,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.one),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic two", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1012,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.two),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic three", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1013,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.three),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic four", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1014,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.four),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic five", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1015,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.five),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic six", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1016,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.six),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic seven", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1017,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.seven),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic eight", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1018,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.eight),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle perform logic nine", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 1019,
      previousValue: 253,
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.nine),
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
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.period),
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
      operator: "/",
    }
    const expected: CalculatorState = {
      currentValue: 10,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      performLogic(LogicActionsObject.equals),
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
      operator: "*",
    }
    const expected: CalculatorState = {
      currentValue: 64,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      performLogic(LogicActionsObject.equals),
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
      operator: "-",
    }
    const expected: CalculatorState = {
      currentValue: 7,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      performLogic(LogicActionsObject.equals),
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
      operator: "+",
    }
    const expected: CalculatorState = {
      currentValue: 16,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      starting,
      performLogic(LogicActionsObject.equals),
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
      performLogic(LogicActionsObject.equals),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })

  it("should handle clear", () => {
    // arrange
    const expected: CalculatorState = {
      currentValue: 0,
      previousValue: 0,
      operator: "",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.clear),
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
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.flip),
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
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.percent),
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
      operator: "/",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.divide),
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
      operator: "*",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.multiply),
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
      operator: "-",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.subtract),
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
      operator: "+",
    }
    const actual: CalculatorState = calculatorReducer(
      initialState,
      performLogic(LogicActionsObject.sum),
    )
    // act
    // assert
    expect(actual).toEqual(expected)
  })
})
