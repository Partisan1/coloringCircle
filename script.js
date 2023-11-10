const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const red = document.querySelector("input:nth-child(1)");
const green = document.querySelector("input:nth-child(2)");
const blue = document.querySelector("input:nth-child(3)");
const circle = document.querySelector(".circle");

inputs.forEach(inp => {
    inp.addEventListener("input", () => {
        circle.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    })
})




/*
button.onclick = () => {
    const red = document.querySelector("input:nth-child(1)");
    const green = document.querySelector("input:nth-child(2)");
    const blue = document.querySelector("input:nth-child(3)");
    const circle = document.querySelector(".circle");
    
    circle.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
*/



