let buttonsContainer = document.querySelector('.buttons');
const resetButton = document.createElement('button', 'reset')
const container = document.getElementById("container");

function createGrid(col, row){
   for (i = 0; i < (col * row); i++){
      let div = document.createElement('div');
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${row}, 1fr)`
      container.appendChild(div);
      div.classList.add("square");
   }
}

function resetPage(){
   window.location.reload();
}

resetButton.addEventListener('click', resetPage);