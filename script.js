const mainContainer = document.querySelector(".mainContainer");

for (let i = 0; i < 16; i++) {
    mainContainer.innerHTML += '<div class="container"></div>'
    for (let j = 0; j < 16; j++) {
        let container = mainContainer.lastChild;
        container.innerHTML += '<div class="box"></div>'
    };
};

const box = document.querySelectorAll(".box");
box.forEach(div => div.addEventListener('mouseover', hover), {
    capture: false
});

function hover(e) {
    e.target.classList.add("boxHover");
    e.stopPropagation();
};