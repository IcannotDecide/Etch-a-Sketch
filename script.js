const gridContainer = document.querySelector(".gridContainer");


function createGrid(size) {
    for (let i = 0; i < size; i++) {
        gridContainer.innerHTML += '<div class="container"></div>'
        for (let j = 0; j < size; j++) {
            let container = gridContainer.lastChild;
            container.innerHTML += '<div class="box"></div>'
        };
    };
};

createGrid(16);