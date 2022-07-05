const container = document.querySelector('.container')
// const gridSize = document.querySelector('button');
// gridSize.addEventListener('click', () => {
//   size = parseInt(prompt(`Grid Size?`));
//   if((size < 100 && size > 0)){
//     // container.removeChild();
//     createGrid(size);
//   }
// })

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    for (let i = 0; i < gridSize; i++){
      const box = document.createElement('div');
      box.classList.add('box');
      line.appendChild(box);
    }
    container.appendChild(line);
  }
}

createGrid(20);

function changeColor() {
  color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  return color;
}

const boxes = document.querySelectorAll('.container > div > div');
boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.setAttribute('style', `background: ${changeColor()};`);
  })
})