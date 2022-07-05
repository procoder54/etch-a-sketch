const container = document.querySelector('.container');
let grid = 16;
for (let i = 1; i <= grid; i++) {
  const content = document.createElement('div');
  content.classList.add('content');
  for (let j = 1; j <= grid; j++) {
    let div = document.createElement('div');
    div.classList.add('box');
    content.appendChild(div);
  }
  container.appendChild(content);
}