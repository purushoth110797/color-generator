const myColor = ["white", "#FF0000", "#0000FF", "#008000", "#800080", "#FFA500", "#008080"];

// Getting the background class to change the background colour
const myBackground = document.querySelector(".background");
const myColorName = document.querySelector(".color");
const myHeading = document.getElementsByTagName("h4");
const changeColorButton = document.getElementById("changeColorButton");

// Event listener to change the background color randomly
changeColorButton.addEventListener("click", function() {
    let randomColor = generateRandomColor();
    let randomColorString = generateRandomColorString();
    // Change the background color
    myBackground.style.backgroundColor = randomColor;
    // Change the text color
    myColorName.textContent = randomColorString;
});

function generateRandomColor() {
    // Generating random variable from 0 to 255 for Red
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${green})`;
}

function generateRandomColorString() {
    // Generating random variable from 0 to 255 for Red
    const red = Math.floor(Math.random() * 256).toString(16);
    const blue = Math.floor(Math.random() * 256).toString(16);
    const green = Math.floor(Math.random() * 256).toString(16);
    return `#${red}${blue}${green}`;
}