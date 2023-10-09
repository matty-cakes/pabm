import { render, screen } from "@testing-library/svelte"

import BinarySearch from "~/routes/BinarySearch.svelte"

test("shows correct titles for panes", () => {
  render(BinarySearch)
  const heading = screen.getByText(/Binary Search/)
  const input = screen.getByText(/Input/)
  const demo = screen.getByText(/Demonstration/)
  const conclusion = screen.getByText(/Conclusion/)
  const titles = [heading, input, demo, conclusion]
  titles.forEach((f) => expect(f).toBeInTheDocument())
})
