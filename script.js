const intro = document.getElementById('intro');
const main = document.getElementById('mainContent');
const sound = document.getElementById('startSound');
const btn = document.getElementById('enterBtn');
const glitchTitle = document.getElementById('glitchTitle');

btn.addEventListener('click', () => {
  sound.play();
  intro.style.opacity = '0';
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 1000);
});

setInterval(() => {
  glitchTitle.classList.remove('glitch');
  void glitchTitle.offsetWidth;
  glitchTitle.classList.add('glitch');
}, 4000);

// Ocultar advertencia y mostrar intro real
document.getElementById('warningBtn').addEventListener('click', () => {
  document.getElementById('warningScreen').style.display = 'none';
  document.getElementById('intro').style.display = 'flex';
});
