var song = document.getElementById("myAudio");
ct = 0;

// Alex: I like your succint way of implementating the music on and off feature, good job 

function playAudio() {
  if (ct == 0) {
    ct = 1;
    song.play();
  } else {
    ct = 0;
    song.pause()
  }
}
