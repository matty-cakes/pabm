const DEBUG = false
const debug_log = (v) => (DEBUG ? console.log(v) : null)

const cheap_deep_copy = (item) => JSON.parse(JSON.stringify(item))

const create_step_entry = (
  starting_current_largest,
  compared_to,
  was_replaced,
) => ({
  starting_current_largest,
  compared_to,
  was_replaced,
})

const selection_sort = (items) => {
  const original_items = cheap_deep_copy(items)
  const sorted_items = []
  const steps = []
  let count = 0

  let current_largest = undefined
  while (items.length) {
    const step = {
      current_items: cheap_deep_copy(items),
      current_sorted_items: cheap_deep_copy(sorted_items),
      entries: [],
    }
    for (let i = 0; i < items.length; i++) {
      let was_replaced = false
      const item = items[i]
      const starting_current_largest = current_largest
      if (typeof current_largest === "undefined") {
        current_largest = { index: i, item: item }
        was_replaced = true
      }

      if (item > current_largest.item) {
        current_largest = { index: i, item: item }
        was_replaced = true
      }

      step.entries.push(
        create_step_entry(starting_current_largest, item, was_replaced),
      )
    }

    sorted_items.push(current_largest.item)
    items.splice(current_largest.index, 1)
    step["ending_items"] = cheap_deep_copy(items)
    step["ending_sorted_items"] = cheap_deep_copy(sorted_items)
    steps.push(step)
    count++
    current_largest = undefined
  }

  const result = {
    original_items,
    sorted_items,
    steps,
  }

  debug_log(result)

  return result
}

export default selection_sort
