const ALL = "all"

// Oh so much hack
const incrementDeg = (deg) => {
  if (deg < 360) {
    deg = deg + 2
    if (deg >= 360) {
      return 2
    }
    if (deg === 180) {
      return 182
    }
    return deg
  }
  return 2
}

// Oh so much hack
const getCurrentDeg = (s) => {
  const parts = s.split("deg")
  const onlyDegInt = parseInt(parts[0].replace("linear-gradient(", ""))
  return onlyDegInt
}

// Oh so much hack
const getCurrentRGB = (s) => {
  console.log(s)
  const parts = s.split("deg,")
  console.log(parts)
  const onlyRGBBlob = parts[1].replace(");", "").trim()
  return onlyRGBBlob
}

const createNewLinearGradient = (deg, rgb_set) =>
  `linear-gradient(${deg}deg, ${rgb_set}`

const getStylesById = (id, filter = ALL) =>
  getStyles(document.getElementById(id), filter)

const getStyles = (elem, filter) => {
  if (!elem) {
    console.log("caller attempted to get styles for unknown element")
    return []
  }

  const styleNodes = []
  const win = document.defaultView
  const style = win.getComputedStyle(elem, "")

  // Style is looped this way because it isn't a "real" collection
  for (let i = 0; i < style.length; i++) {
    if (filter === ALL || filter === style[i]) {
      styleNodes.push({ [style[i]]: style.getPropertyValue(style[i]) })
    }
  }

  return styleNodes
}

const getCurrentImage = () =>
  getStylesById("body", "background-image")[0]["background-image"]

const setStyle = (elem, filter, value) => {
  if (!elem || !filter) {
    console.log(
      "caller attempted to get styles for unknown element or unknown style",
    )
    return []
  }
  elem.style[filter] = value
}

// window.setInterval(function () {
//   const currImg = getCurrentImage()
//   const currDeg = getCurrentDeg(currImg)
//   const currRGB = getCurrentRGB(currImg)
//   const newDeg = incrementDeg(currDeg)

//   const newLG = createNewLinearGradient(newDeg, currRGB)

//   setStyle(document.getElementById("body"), "background-image", newLG)

// }, 25000);
