var song = document.getElementById("myAudio");
ct = 0;

function playAudio() {
  if (ct == 0) {
    ct = 1;
    song.play();
  } else {
    ct = 0;
    song.pause()
  }
}
