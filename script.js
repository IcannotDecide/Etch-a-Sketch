const gridContainer = document.querySelector(".gridContainer");
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
const input = document.querySelector('input');
let mousedown = false;
let lastUsed;

window.onmousedown = () => mousedown = true;

window.onmouseup = () => mousedown = false;

function createGrid(size) {
    const widthHeight = 500 / size;
    for (let i = 0; i < size; i++) {
        gridContainer.innerHTML += '<div class="container"></div>'
        for (let j = 0; j < size; j++) {
            let container = gridContainer.lastChild;
            container.innerHTML += `<div style="width: ${widthHeight}px; height: ${widthHeight}px" class="box"></div>`
        };
    };
};

createGrid(16);

function addInputListener() {
    input.addEventListener('input', selectColour);
};

addInputListener()

function selectColour() {
    lastUsed = selectColour;

    const box = document.querySelectorAll(".box");

    box.forEach(div => div.removeEventListener('mouseover', rainbowHover));
    box.forEach(div => div.removeEventListener('mousedown', rainbowHover));
    box.forEach(div => div.removeEventListener('mouseover', eraseHover))
    box.forEach(div => div.removeEventListener('mousedown', eraseHover));


    box.forEach(div => div.addEventListener('mouseover', selectColourHover));
    box.forEach(div => div.addEventListener('mousedown', selectColourHover));
};

selectColour()

function selectColourHover(e) {
    if (e.type === 'mouseover' && !mousedown) return;
    const colour = input.value;
    console.log("this");

    e.target.style.backgroundColor = `${colour}`;
};

input.value = "#f086e0";

function changeGridSize() {
    const value = prompt("Enter a number that you want the grid size to be")
    if (+value && +value < 100) {
        removeContainer()
        createGrid(+value);
        lastUsed();
    } else if (value === null) {
        return
    } else {
        alert("please enter a value that is a number and less than 100")
    }
};


function removeContainer() {
    let container = document.querySelectorAll('.container');
    for (let i = 0; i < container.length; i++) {
        container[i].remove()
    }
};

function drawRainbows() {
    lastUsed = drawRainbows;

    const box = document.querySelectorAll(".box");

    box.forEach(div => div.removeEventListener('mouseover', selectColourHover));
    box.forEach(div => div.removeEventListener('mousedown', selectColourHover));
    box.forEach(div => div.removeEventListener('mouseover', eraseHover))
    box.forEach(div => div.removeEventListener('mousedown', eraseHover));

    box.forEach(div => div.addEventListener('mouseover', rainbowHover));
    box.forEach(div => div.addEventListener('mousedown', rainbowHover));
};

function rainbowHover(e) {
    if (e.type === 'mouseover' && !mousedown) return;
    console.log(e.type)
    const randomNum = Math.floor(Math.random() * 6)
    e.target.style.backgroundColor = colours[randomNum];
};

function erase() {
    lastUsed = erase;

    const box = document.querySelectorAll(".box");

    box.forEach(div => div.removeEventListener('mouseover', rainbowHover));
    box.forEach(div => div.removeEventListener('mousedown', rainbowHover));
    box.forEach(div => div.removeEventListener('mouseover', selectColourHover));
    box.forEach(div => div.removeEventListener('mousedown', selectColourHover));

    box.forEach(div => div.addEventListener('mouseover', eraseHover))
    box.forEach(div => div.addEventListener('mousedown', eraseHover));

};

function eraseHover(e) {
    if (e.type === 'mouseover' && !mousedown) return;
    e.target.style.backgroundColor = "black";
}

function clearGridFunc() {
    const box = document.querySelectorAll(".box");
    box.forEach(div => div.style.backgroundColor = "black")
};



const newGrid = document.querySelector('button[data-btn="newGrid"]');
newGrid.addEventListener('click', changeGridSize);

const colourSelect = document.querySelector('button[data-btn="colourSelect"]');
colourSelect.addEventListener('click', () => input.click());

const rainbow = document.querySelector('button[data-btn="rainbow"]');
rainbow.addEventListener('click', drawRainbows);

const eraser = document.querySelector('button[data-btn="eraser"]');
eraser.addEventListener('click', erase);

const clearGrid = document.querySelector('button[data-btn="clearGrid"]');
clearGrid.addEventListener('click', clearGridFunc);

