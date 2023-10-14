import { expect, test } from "vitest"
import selection_sort from "~/lib/algorithms/selection_sort"

test("selection_sort", () => {
  let results = selection_sort([2, 1, 4, 3])
  expect(results.sorted_items).toEqual([4, 3, 2, 1])

  results = selection_sort([9, 8, 7, 6])
  expect(results.sorted_items).toEqual([9, 8, 7, 6])

  results = selection_sort([5, 6, 7, 8])
  expect(results.sorted_items).toEqual([8, 7, 6, 5])

  results = selection_sort([1, 1, 1, 1])
  expect(results.sorted_items).toEqual([1, 1, 1, 1])
})

test("selection_sort steps data", () => {
  let results = selection_sort([2, 1, 4, 3])
  expect(results.sorted_items).toEqual([4, 3, 2, 1])

  expect(results.steps[0].entries.length).toEqual(4)
  expect(results.steps[3].entries.length).toEqual(1)
  // Due to the working of the algorithm the starting value is
  // replaced with undefined at the start of each step
  // Note: "steps" contain "entries"
  // So, even on the last iteration we do replace the starting value
  // from undefined to be the lowest number.
  expect(results.steps[3].entries[0].was_replaced).toBe(true)
})
