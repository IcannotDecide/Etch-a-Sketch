const gridContainer = document.querySelector(".gridContainer");


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

function createBoxOnHover() {
    const box = document.querySelectorAll(".box");
    box.forEach(div => div.addEventListener('mouseover', hover), {
       
    })
};

function hover(e) {
        e.target.style.backgroundColor = "pink"
};

function changeGridSize() {
    const value = prompt("Enter a number that you want the grid size to be")
    if (+value && +value < 100) {
        removeContainer()
        createGrid(+value);
        createBoxOnHover();
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

const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);