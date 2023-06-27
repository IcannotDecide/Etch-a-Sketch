let gridSize = 16;

const mainContainer = document.querySelector(".mainContainer");

for (let i = 0; i < gridSize; i++) {
    mainContainer.innerHTML += '<div class="container"></div>'
    for (let j = 0; j < gridSize; j++) {
        let container = mainContainer.lastChild;
        container.innerHTML += '<div class="box"></div>'
    };
};

const box = document.querySelectorAll(".box");
box.forEach(div => div.addEventListener('mouseover', hover), {
    capture: false
});

function hover(e) {
    e.target.style.backgroundColor === "" ? 
    e.target.style.backgroundColor = "pink" :
    e.target.style.backgroundColor = "";
    e.stopPropagation();
};