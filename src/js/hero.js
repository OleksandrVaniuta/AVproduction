const playVideoBtn = document.querySelector('.hero_playVideoBtn');
const playVideoContainer = document.querySelector('.play-video');
const closeVideoBtn = document.querySelector('.close_video ');

playVideoBtn.addEventListener('click', () => {
  playVideoContainer.classList.add('active');
});

closeVideoBtn.addEventListener('click', () => {
  playVideoContainer.classList.remove('active');
});

playVideoContainer.addEventListener('click', e => {
  console.log(e);
  if (!playVideoContainer.contains(e.currentTarget)) {
    playVideoContainer.classList.remove('active');
  }
});
