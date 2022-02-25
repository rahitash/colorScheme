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

            for (let i = 0; i < data.colors.length ; i++) {
            
                colorBoxes[i].style.backgroundColor = data.colors[i].hex.value
                hexValues[i].textContent = data.colors[i].hex.value

                }
            }
    
        )
    
}


