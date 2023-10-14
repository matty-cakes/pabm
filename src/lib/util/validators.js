export const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v)
export const isNumbers = (arr) => arr.every((el) => Number.isInteger(el))
