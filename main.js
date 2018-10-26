document.addEventListener('DOMContentLoaded', function() {
  // #edebf0
  let color = ""
  let pixelAmount= 3036
  for (let i = 0 ; i < pixelAmount ; i++) {
    let div = document.querySelector('.grid')
    let pixel = document.createElement("div")
    pixel.style.width = "1.5%"
    pixel.style.paddingBottom = "1.5%"
    pixel.style.float = "left"
    pixel.style.border = "1px solid"
    pixel.style.borderColor = "#edebf0"
    pixel.style.backgroundColor = "white"

    div.appendChild(pixel)
  }

  event.target.addEventListener('click', function() {
    let selectedPixel = event.target

    if (selectedPixel.style.borderColor == "gray") {
      console.log(selectedPixel.style.backgroundColor)
      color = selectedPixel.style.backgroundColor

    } else {
      if (selectedPixel.style.borderColor == "rgb(237, 235, 240)") {

        selectedPixel.style.backgroundColor = color
        selectedPixel.style.borderColor = color

      } else {

        selectedPixel.style.backgroundColor = "white"
        selectedPixel.style.borderColor = "rgb(237, 235, 240)"

      }

    }

  })

})
