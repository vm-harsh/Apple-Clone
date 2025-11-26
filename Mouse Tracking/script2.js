const body = document.querySelector('body');
const h = document.querySelector('.container');


setInterval(()=>{
  const xpos = Math.random()*window.innerWidth;
  const dimension = randomSizeGenerator();
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = xpos + 'px';
  heart.style.height = dimension + 'px';
  heart.style.width = dimension + 'px';
  h.appendChild(heart);
  setInterval(()=>{
  heart.remove();
},3000)
},50);

const randomSizeGenerator = () => {
  return Math.floor(Math.random()*100);
}