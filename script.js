const button = document.querySelector("button");

button.onclick = () => {
    const red = document.querySelector("input:nth-child(1)");
    const green = document.querySelector("input:nth-child(2)");
    const blue = document.querySelector("input:nth-child(3)");
    const circle = document.querySelector(".circle");
    
    circle.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}



