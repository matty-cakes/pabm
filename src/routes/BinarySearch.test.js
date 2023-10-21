import { render, screen } from "@testing-library/svelte"
import userEvent from "@testing-library/user-event"

import BinarySearch from "~/routes/BinarySearch.svelte"

test("shows correct titles for panes", () => {
  render(BinarySearch)
  const heading = screen.getByText(/Binary Search/)
  const input = screen.getByText(/Input/)
  const demo = screen.getByText(/Demonstration/)
  const conclusion = screen.getByText(/Conclusion/)
  const titles = [heading, input, demo, conclusion]
  titles.forEach((f) => expect(f).toBeVisible())
})

test("it shows the expected conclusion in 'normal' immediate mode when data is submitted", async () => {
  const user = userEvent.setup()
  render(BinarySearch)
  const sorted_numbers_field = screen.getByLabelText(/Sorted Numbers/i)
  const number_to_find_field = screen.getByLabelText(/Number To Find/i)
  const submit_button = screen.getByText(/Submit$/i)

  await user.clear(sorted_numbers_field)
  await user.type(sorted_numbers_field, "1,2,3")

  await user.clear(number_to_find_field)
  await user.type(number_to_find_field, "2")

  await user.click(submit_button)

  const msg = /The value 2 was found at index 1/
  const conclusion = screen.getByTestId("value-found-conclusion")

  expect(conclusion).toHaveTextContent(msg)
})

test("it shows the expected number of entry info panels when submitted in immediate mode", async () => {
  const user = userEvent.setup()
  render(BinarySearch)
  const sorted_numbers_field = screen.getByLabelText(/Sorted Numbers/i)
  const number_to_find_field = screen.getByLabelText(/Number To Find/i)
  const submit_button = screen.getByText(/Submit$/i)

  await user.clear(sorted_numbers_field)
  await user.type(sorted_numbers_field, "1,2,3")

  await user.clear(number_to_find_field)
  await user.type(number_to_find_field, "2")

  await user.click(submit_button)

  const entries = screen.getAllByTestId("result-entry")

  expect(entries).toHaveLength(1)
})

test("it shows the expected conclusion in interactive mode when data is submitted", async () => {
  const user = userEvent.setup()
  render(BinarySearch)
  const sorted_numbers_field = screen.getByLabelText(/Sorted Numbers/i)
  const number_to_find_field = screen.getByLabelText(/Number To Find/i)
  const submit_button = screen.getByText(/Submit Interactive$/i)

  await user.clear(sorted_numbers_field)
  await user.type(sorted_numbers_field, "1,2,3")

  await user.clear(number_to_find_field)
  await user.type(number_to_find_field, "2")

  await user.click(submit_button)

  const msg = /The value 2 was found at index 1/
  const conclusion = screen.getByTestId("value-found-conclusion")

  expect(conclusion).toHaveTextContent(msg)
})
