import { expect, test } from "vitest"
import binary_search from "./binary_search"

test("binary_search", () => {
  const results = binary_search([1, 2, 3])
  const results_final_entry = results[results.length - 1]
  expect(results_final_entry.desired_item_spot).toBe(1)
})
