let btn = document.querySelector("button");
let div = document.querySelector("#color");

btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
    let randomColor = getRandomColor();
    h1.style.color = randomColor;
    h1.textContent = randomColor;
    div.style.backgroundColor = randomColor;

    console.log(randomColor);
});




function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

