const playIcon = document.getElementById('play-icon');

playIcon.addEventListener('click', () => {
  const audioUrl = 'audio/' + location.hash.replace('#','');
  const audio = new Audio(audioUrl);
  audio.play();
});
