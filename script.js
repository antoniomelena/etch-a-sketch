let buttonsContainer = document.querySelector('.buttons');
const container = document.querySelector(".container");

// creating all buttons 
const resetButton = document.createElement('button');
const buttonText = document.createTextNode('Reset');
resetButton.appendChild(buttonText);
buttonsContainer.appendChild(resetButton);

const greyButton = document.createElement('button');
const greyButtonText = document.createTextNode('Grey');
greyButton.appendChild(greyButtonText);
buttonsContainer.appendChild(greyButton);

const blackButton = document.createElement('button');
const blackButtonText = document.createTextNode('Black');
blackButton.appendChild(blackButtonText);
buttonsContainer.appendChild(blackButton);

const rainbowButton = document.createElement('button');
const rainbowButtonText = document.createTextNode('Rainbow');
rainbowButton.appendChild(rainbowButtonText);
buttonsContainer.appendChild(rainbowButton);


function createGrid(col, row){
   for (i = 0; i < (col * row); i++){
      const div = document.createElement('div');
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${row}, 1fr)`
      container.appendChild(div);
      div.classList.add("square");
   }
}

createGrid(16, 16);

function getNewGridSize(){
   let size = prompt("Enter A New Size For Grid");
   return size
}

function removeAllChildNodes(parent){
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
}

function resetPage(){
   // window.location.reload();
   // let div = container.getElementsByTagName(div);
   // container.removeChild(div);
   // let size = getNewGridSize();
   // createGrid(size, size);
   removeAllChildNodes(container);
}

resetButton.addEventListener('click', resetPage);

greyButton.addEventListener('click', function(){
   const divX = container.querySelectorAll(".square");
   divX.forEach(div => div.addEventListener('mouseover', () => {
      div.style.backgroundColor = `rgb(169, 169, 169)`;
   }));
})

blackButton.addEventListener('click', function(){
   const divX = container.querySelectorAll(".square");
   divX.forEach(div => div.addEventListener('mouseover', () => {
      div.style.backgroundColor = `rgb(0, 0, 0)`
   }));
})

rainbowButton.addEventListener('click', function () {
   const divX = container.querySelectorAll(".square");
   divX.forEach(div => div.addEventListener('mouseover', () => {
      let numberR = Math.floor(Math.random() * 256);
      let numberG = Math.floor(Math.random() * 256);
      let numberB = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${numberR}, ${numberG}, ${numberB})`
   }));
})