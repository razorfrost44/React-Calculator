import { isZero } from "../calculatorHelpers"

describe("Helpers", () => {
  it("isZero should handle checking is zero", () => {
    // arrange
    // act
    const actualZeroNum = isZero(0)
    const notActualZeroNum = isZero(2)
    const actualZeroString = isZero("0")
    const notActualZeroString = isZero("2")
    // assert
    expect(actualZeroNum).toBe(true)
    expect(notActualZeroNum).toBe(false)
    expect(actualZeroString).toBe(true)
    expect(notActualZeroString).toBe(false)
  })
})
