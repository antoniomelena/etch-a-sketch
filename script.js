let buttonsContainer = document.querySelector('.buttons');

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

const container = document.getElementById("container");

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

function resetPage(){
   window.location.reload();
}

resetButton.addEventListener('click', resetPage);

const divX = container.querySelectorAll(".square");
divX.forEach(div => div.addEventListener('mouseover', function(){
   div.classList.add("grey");
}));
