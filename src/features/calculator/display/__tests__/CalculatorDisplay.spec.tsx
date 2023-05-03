import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import CalculatorDisplay from "../CalculatorDisplay"

const mockFn = vi.fn()

describe("Calculator Display", () => {
  const initialState = {
    className: "calculator-display",
    aria: "Display for Calculator",
    value: 5,
    onChange: mockFn,
  }

  const setup = () => {
    render(
      <CalculatorDisplay
        className={initialState.className}
        aria={initialState.aria}
        value={initialState.value}
        onChange={initialState.onChange}
      />,
    )
  }

  beforeEach(() => {
    setup()
  })

  it("should have type number", () => {
    // arrange
    // act
    const actual = screen.getByLabelText(initialState.aria)
    // assert
    expect(actual).toHaveAttribute("type", "number")
  })

  it("should have id calc-display", () => {
    // arrange
    // act
    const actual = screen.getByLabelText(initialState.aria)
    // assert
    expect(actual).toHaveAttribute("id", "calc-display")
  })

  it("should have class name", () => {
    // arrange
    // act
    const actual = screen.getByLabelText(initialState.aria)
    // assert
    expect(actual).toHaveClass(initialState.className)
  })

  it("should have aria label", () => {
    // arrange
    // act
    const actual = screen.getByLabelText(initialState.aria)
    // assert
    expect(actual).toHaveAttribute("aria-label", initialState.aria)
  })

  it("should have value", () => {
    // arrange
    const expected: string = String(initialState.value)
    // act
    const actual = screen.getByLabelText(initialState.aria)
    // assert
    expect(actual).toHaveAttribute("value", expected)
  })

  it("should accept a function", () => {
    // arrange
    // act
    const actual = screen.getByLabelText(initialState.aria)
    fireEvent.change(actual, { target: { value: "10" } })
    // assert
    expect(mockFn).toHaveBeenCalled()
  })
})
