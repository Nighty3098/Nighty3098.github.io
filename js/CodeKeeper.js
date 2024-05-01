const container = document.querySelector('.perspective-container');
const image = document.querySelector('.perspective-image');

container.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  const angleX = (x - centerX) / centerX * 30;
  const angleY = (y - centerY) / centerY * 30;

  image.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});