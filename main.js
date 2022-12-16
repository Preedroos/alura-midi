function play(event, tecla) {
  const idElementAudio = `#som_${tecla.classList[1]}`;
  const audio = document.querySelector(idElementAudio);

  if (event.code === 'Space' || event.code === 'Enter') {
    tecla.classList.add('ativa');
    audio.play();
  } else if (event.pointerType === 'mouse') {
    audio.play();
  }
}

const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
  tecla.addEventListener('click', event => {
    play(event, tecla);
  });
  tecla.addEventListener('keydown', event => {
    play(event, tecla);
  });
  tecla.addEventListener('keyup', () => {
    tecla.classList.remove('ativa');
  });
});
