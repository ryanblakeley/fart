const playIcon = document.getElementById('play-icon');

playIcon.addEventListener('click', () => {
  const audioFilename = location.hash.replace('#','') || 'fart-1.mp3';
  const audioUrl = 'audio/' + audioFilename;
  const audio = new Audio(audioUrl);
  audio.play();
});
