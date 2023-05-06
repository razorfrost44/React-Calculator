export const isZero = (a: number | string): boolean => {
  if (a === 0 || a === "0") {
    return true
  }
  return false
}

export const isLastCharAPeriod = (str: string): boolean => str.slice(-1) === "."
export const trimPeriodFromEnd = (str: string): string =>
  str.slice(0, str.length - 1)

export const generateSavedValue = (
  savedValue: number | string,
): number | string => {
  let newVal: string | number = savedValue
  if (newVal) {
    newVal = `${savedValue}`
  } else {
    newVal = ""
  }
  if (isLastCharAPeriod(newVal)) {
    newVal = trimPeriodFromEnd(newVal)
  }
  return newVal
}

export const generateValue = (value: number | string): number | string => {
  if (Number.isNaN(value)) {
    return ""
  }
  if (typeof value === "string" && isLastCharAPeriod(value)) {
    return trimPeriodFromEnd(value)
  }
  return value
}

export const generateOperator = (operator: string) => {
  return operator ? ` ${operator}` : ""
}

export const includesPeriod = (str: string): boolean => {
  return str.includes(".")
}
