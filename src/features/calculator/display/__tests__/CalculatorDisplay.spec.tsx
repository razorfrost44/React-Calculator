import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import CalculatorDisplay, { DisplayProps } from "../CalculatorDisplay"

const mockFn = vi.fn()

describe("Calculator Display", () => {
  const initialState: DisplayProps = {
    className: "calculator-display",
    aria: "Display for Calculator",
    value: 5,
    onChange: mockFn,
    savedValue: 6,
  }

  const setup = () => {
    render(
      <CalculatorDisplay
        className={initialState.className}
        aria={initialState.aria}
        value={initialState.value}
        onChange={initialState.onChange}
        savedValue={initialState.savedValue}
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

  it("should display NaN as an empty string", () => {
    // arrange
    const startState = {
      className: "calculator-display",
      aria: "Display for Calculator-NaN",
      value: NaN,
      onChange: mockFn,
    }
    render(
      <CalculatorDisplay
        className={startState.className}
        aria={startState.aria}
        value={startState.value}
        onChange={startState.onChange}
        savedValue={initialState.savedValue}
      />,
    )
    const expected: string = ""
    // act
    const actual = screen.getByLabelText(startState.aria)
    fireEvent.change(actual, { target: { value: NaN } })
    // assert
    expect(actual).toHaveAttribute("value", expected)
  })

  it("should display 0. as 0", () => {
    // arrange
    const startState = {
      className: "calculator-display",
      aria: "Display for Calculator-NaN",
      value: "0.",
      onChange: mockFn,
    }
    render(
      <CalculatorDisplay
        className={startState.className}
        aria={startState.aria}
        value={startState.value}
        onChange={startState.onChange}
        savedValue={initialState.savedValue}
      />,
    )
    const expected: string = "0"
    // act
    const actual = screen.getByLabelText(startState.aria)
    // assert
    expect(actual).toHaveAttribute("value", expected)
  })

  it("should show saved value", () => {
    // arrange
    // act
    const actual = screen.getByText(initialState.savedValue)
    // assert
    expect(actual).toBeInTheDocument()
  })

  it("should show saved value", () => {
    // arrange
    // act
    const actual = screen.getByTestId("saved-value")
    const expected = `${initialState.savedValue}`
    // assert
    expect(actual).toHaveTextContent(expected)
  })
  it("should show saved value without periods", () => {
    // arrange
    const startState = {
      className: "calculator-display",
      aria: "Display for Calculator-NaN",
      value: 5,
      onChange: mockFn,
      savedValue: "99.",
    }
    render(
      <CalculatorDisplay
        className={startState.className}
        aria={startState.aria}
        value={startState.value}
        onChange={startState.onChange}
        savedValue={startState.savedValue}
      />,
    )
    const expected: string = "99"
    // act
    const actual = screen.getByText(expected)
    // assert
    expect(actual).toBeInTheDocument()
  })
})
