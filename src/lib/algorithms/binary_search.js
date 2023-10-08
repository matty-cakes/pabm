const DEBUG = false
const debug_log = (v) => (DEBUG ? console.log(v) : null)

const get_half_way_index = (l, window_open, window_close) => {
  if (l.length) {
    if (l.length === 1) {
      return 0
    }

    const mid = Math.floor((window_open + window_close) / 2)
    debug_log(
      `The mid point of (${window_open} + ${window_close} = ${
        window_open + window_close
      }) is ${mid}`,
    )
    return mid
  }
}

const create_result_entry = (
  count,
  current_half_way_index,
  current_half_way_value,
  last_window_open,
  last_window_close,
  window_open,
  window_close,
  desired_item_spot,
  at_end_of_step,
) => {
  const entry = {
    count,
    current_half_way_index,
    current_half_way_value,
    last_window_open,
    last_window_close,
    window_open,
    window_close,
    desired_item_spot,
    at_end_of_step,
  }
  return entry
}

const binary_search = (sorted_items, desired_item_value) => {
  const results = []
  let desired_item_spot

  let count = 0
  let window_open = 0
  let window_close = sorted_items.length
  let last_window_open = null
  let last_window_close = null
  let current_half_way_index = null
  let current_half_way_value = null

  while (!desired_item_spot && sorted_items.length && count < 100) {
    current_half_way_index = get_half_way_index(
      sorted_items,
      window_open,
      window_close,
    )
    current_half_way_value = sorted_items[current_half_way_index]

    debug_log(
      `The current_half_way_index is ${current_half_way_index}, and the current_half_way_value is ${current_half_way_value}`,
    )

    last_window_open = window_open
    last_window_close = window_close

    if (current_half_way_value < desired_item_value) {
      window_open = current_half_way_index
      debug_log(
        `Since the The current_half_way_value (${current_half_way_value}) is less than the desired_item_value (${desired_item_value}) we will change the window_open to be the current_half_way_index ${current_half_way_index}`,
      )
    } else if (current_half_way_value > desired_item_value) {
      window_close = current_half_way_index
      debug_log(
        `Since the The current_half_way_value (${current_half_way_value}) is greater than the desired_item_value (${desired_item_value}) we will change the window_close to be the current_half_way_index ${current_half_way_index}`,
      )
    } else {
      desired_item_spot = current_half_way_index
      debug_log(
        `The desired spot and the half way spot is ${desired_item_spot}`,
      )
    }

    results.push(
      create_result_entry(
        count,
        current_half_way_index,
        current_half_way_value,
        last_window_open,
        last_window_close,
        window_open,
        window_close,
        desired_item_spot,
        true,
      ),
    )
    count = count + 1

    if (
      !desired_item_spot &&
      last_window_open === window_open &&
      last_window_close === window_close
    ) {
      return results
    }
  }

  return results
}

export default binary_search
