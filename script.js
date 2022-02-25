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

function setColors(hex, count, mode) {

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&count=${count}&mode=${mode}&format=json`)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.colors.length; i++) {
                
                let hexValue =  data.colors[i].hex.value
            
                colorBoxes[i].style.backgroundColor = hexValue
                hexValues[i].textContent = hexValue

                colorBoxes[i].addEventListener("click", function () {
                    copyValue(hexValue)
                })

                hexValues[i].addEventListener("click", function () {
                    copyValue(hexValue)
                })
                
                }
            }
    
    )
    
}

function copyValue(value) {
    navigator.clipboard.writeText(value)
    alert(`Copied: ${value}`)
}