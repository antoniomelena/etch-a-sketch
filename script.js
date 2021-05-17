let resetButton = document.querySelector('.reset');

let numOne = document.createElement('div');
let container = document.getElementById("container");
container.appendChild(numOne);

function resetPage(){
   window.location.reload();
}

resetButton.addEventListener('click', resetPage);