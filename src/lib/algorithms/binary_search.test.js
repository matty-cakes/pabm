import { expect, test } from "vitest"
import binary_search from "./binary_search"

test("binary_search", () => {
  const results = binary_search([1, 2, 3], 2)
  const results_final_entry = results[results.length - 1]
  expect(results_final_entry.desired_item_spot).toBe(1)
})

test("binary_search with at least 3 steps", () => {
  const results = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)
  const results_final_entry = results[results.length - 1]
  expect(results_final_entry.desired_item_spot).toBe(6)
  expect(results.length).toBe(3)
})

test("binary_search with a single number in search set", () => {
  const results = binary_search([5], 5)
  const results_final_entry = results[results.length - 1]
  expect(results_final_entry.desired_item_spot).toBe(0)
})

test("binary_search when item not in set", () => {
  const results = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)
  const results_final_entry = results[results.length - 1]
  expect(results_final_entry.desired_item_spot).toBe(undefined)
  expect(results.length).toBe(5)
})
