const mainContainer = document.querySelector(".mainContainer");


function createGrid(size) {
    for (let i = 0; i < size; i++) {
        mainContainer.innerHTML += '<div class="container"></div>'
        for (let j = 0; j < size; j++) {
            let container = mainContainer.lastChild;
            container.innerHTML += '<div class="box"></div>'
        };
    };
};

createGrid(16);


function createBoxOnHover() {
const box = document.querySelectorAll(".box");
box.forEach(div => div.addEventListener('mouseover', hover), {
    capture: false
})
};

function hover(e) {
    e.target.style.backgroundColor === "" ?
        e.target.style.backgroundColor = "pink" :
        e.target.style.backgroundColor = "";
    e.stopPropagation();
};

function removeContainer() {
    let container = document.querySelectorAll('.container');
    for (let i = 0; i < container.length; i++) {
        container[i].remove()
    }
}

function changeGridSize() {
    const value = prompt("Enter a number that you want the grid size to be")


    if (+value && +value < 100) {

        removeContainer()
        createGrid(+value);
        createBoxOnHover();
    } else {
      alert("please enter a value that is a number and less than 100")
    }
}



const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);