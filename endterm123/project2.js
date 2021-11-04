const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = ['phonk mix', 'anime mix', 'tiktok mix'];
const images = ['leletmedie', 'uwu', 'tiktok'];

let songIndex = 0;
let imageIndex = 0;

loadSong(songs[songIndex], images[imageIndex]);

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }
  
  // Pause song
  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

nextBtn.addEventListener("click", function(){
    songIndex = songIndex + 1;
    imageIndex = imageIndex + 1;

    if(songIndex >= songs.length && imageIndex >= images.length){
        songIndex = 0;
        imageIndex = 0;
    }

    loadSong(songs[songIndex], images[imageIndex]);
    playSong();
})

prevBtn.addEventListener("click", function(){
    songIndex = songIndex - 1;
    imageIndex = imageIndex - 1;

    if(songIndex < 0 && imageIndex < 0){
        songIndex = 2;
        imageIndex = 2;
    }

    loadSong(songs[songIndex], images[imageIndex]);
    playSong();
})


function loadSong(song, image) {
    title.innerText = song.charAt(0).toUpperCase() + song.slice(1);
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${image}.jpg`;
  }

  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  
  // Change song
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  // Song ends
audio.addEventListener('ended', nextSong);
