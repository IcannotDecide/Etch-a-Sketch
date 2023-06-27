const gridContainer = document.querySelector(".gridContainer");
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
const input = document.querySelector('input');


function createGrid(size) {
    const widthHeight = 500/size;
    for (let i = 0; i < size; i++) {
        gridContainer.innerHTML += '<div class="container"></div>'
        for (let j = 0; j < size; j++) {
            let container = gridContainer.lastChild;
            container.innerHTML += `<div style="width: ${widthHeight}px; height: ${widthHeight}px" class="box"></div>`
        };
    };
};

createGrid(16);

selectColour()

function changeGridSize() {
    const value = prompt("Enter a number that you want the grid size to be")
    if (+value && +value < 100) {
        removeContainer()
        createGrid(+value);
        createBoxOnHover();
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

function createBoxOnHover() {
    const box = document.querySelectorAll(".box");
    box.forEach(div => div.addEventListener('mouseover', hover), {
        capture: false
    })
};

createBoxOnHover();

function addInputListener() {
    input.addEventListener('change', selectColour);
    console.log("on")
};

addInputListener()

function selectColour() {
    const box = document.querySelectorAll(".box");

    box.forEach(div => div.removeEventListener('mouseover', rainbowHover));
    box.forEach(div => div.removeEventListener('mouseover', hover));
    box.forEach(div => div.removeEventListener('mouseover', eraseHover))

    
    box.forEach(div => div.addEventListener('mouseover', selectColourHover))
}

function selectColourHover(e) {
    const colour = input.value;
    e.target.style.backgroundColor = `${colour}`;
}

function drawRainbows() {
    const box = document.querySelectorAll(".box");

    box.forEach(div => div.removeEventListener('mouseover', selectColourHover));
    box.forEach(div => div.removeEventListener('mouseover', hover));
    box.forEach(div => div.removeEventListener('mouseover', eraseHover))

    box.forEach(div => div.addEventListener('mouseover', rainbowHover));
};

function rainbowHover(e) {
    const randomNum = Math.floor(Math.random() * 6)
    e.target.style.backgroundColor = colours[randomNum];
};

function erase() {
    const box = document.querySelectorAll(".box");

    // For removing event listeners
    box.forEach(div => div.removeEventListener('mouseover', rainbowHover));
    box.forEach(div => div.removeEventListener('mouseover', selectColourHover));
    box.forEach(div => div.removeEventListener('mouseover', hover));

    box.forEach(div => div.addEventListener('mouseover', eraseHover))
};

function eraseHover(e) {
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

