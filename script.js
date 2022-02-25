const colorPicker = document.getElementById("color-picker")
const schemeSelector = document.getElementById("scheme")
const getScheme = document.getElementById("get-scheme")
const colorBoxes = document.getElementsByClassName("color")
const hexValues = document.getElementsByClassName("hex")


let hex = colorPicker.value
let mode = schemeSelector.value

let hexArray = []

setColors(colorPicker.value.slice(1), 5, "analogic")

getScheme.addEventListener("click", function () {

    setColors(colorPicker.value.slice(1), 5, schemeSelector.value.toLowerCase())
       
    }
)

for (let i = 0; i < colorBoxes.length; i++) {

    colorBoxes[i].addEventListener("click", function () {
        navigator.clipboard.writeText(hexArray[i])
       
    })

    hexValues[i].addEventListener("click", function () {
        navigator.clipboard.writeText(hexArray[i])
    })

}


// Send GET request to Color API and update data in DOM
function setColors(hex, count, mode) {

    hexArray = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&count=${count}&mode=${mode}&format=json`)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.colors.length; i++) {
                
                let hexValue = data.colors[i].hex.value

                hexArray.push(hexValue)
            
                colorBoxes[i].style.backgroundColor = hexValue
                hexValues[i].textContent = hexValue
                
                }
            }
    
    )
    
}