const body = document.querySelector('body');
const h = document.querySelector('.container');

body.addEventListener('mousemove',(e)=>{
  const xpos = e.offsetX;
  const ypos = e.offsetY;
  const dimension = randomSizeGenerator();
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = ypos + 'px';
  heart.style.left = xpos + 'px';
  heart.style.height = dimension + 'px';
  heart.style.width = dimension + 'px';
  h.appendChild(heart);

setTimeout(()=>{
  heart.remove();
},3000)

})

const randomSizeGenerator = () => {
  return Math.floor(Math.random()*100);
}