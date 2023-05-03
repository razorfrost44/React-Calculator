import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "../button"

const mockFn = vi.fn()

describe("Button", () => {
  const initialState = {
    className: "button-class",
    aria: "Apples Button",
    onClick: mockFn,
    label: "Apples",
  }

  const setup = () => {
    render(
      <Button
        className={initialState.className}
        aria={initialState.aria}
        onClick={initialState.onClick}
        label={initialState.label}
      />,
    )
  }

  beforeEach(() => {
    setup()
  })

  it("should have class name", () => {
    // arrange
    // act
    const actual = screen.getByRole("button")
    // assert
    expect(actual).toHaveClass(initialState.className)
  })

  it("should have aria label", () => {
    // arrange
    // act
    const actual = screen.getByRole("button")
    // assert
    expect(actual).toHaveAttribute("aria-label", initialState.aria)
  })

  it("should accept a function", () => {
    // arrange
    // act
    const actual = screen.getByRole("button")
    fireEvent.click(actual)
    // assert
    expect(mockFn).toHaveBeenCalled()
  })

  it("should display label", () => {
    // arrange
    // act
    const actual = screen.getByText(initialState.label)
    // assert
    expect(actual).toBeInTheDocument()
  })
})
