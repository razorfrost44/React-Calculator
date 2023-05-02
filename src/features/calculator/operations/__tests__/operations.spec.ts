import {
  flipSign,
  percent,
  divide,
  multiply,
  subtract,
  sum,
} from "../operations"

describe("Operations", () => {
  it("should flip sign to positive", () => {
    expect(flipSign(-321)).toBe(321)
  })

  it("should flip sign to positive", () => {
    expect(flipSign(123)).toBe(-123)
  })

  it("should flip sign to negative", () => {
    expect(percent(500)).toBe(5)
  })

  it("should flip sign to negative", () => {
    expect(divide(100, 10)).toBe(10)
  })

  it("should flip sign to negative", () => {
    expect(multiply(8, 8)).toBe(64)
  })

  it("should flip sign to negative", () => {
    expect(subtract(8, 3)).toBe(5)
  })

  it("should flip sign to negative", () => {
    expect(sum(11, 29)).toBe(40)
  })
})
