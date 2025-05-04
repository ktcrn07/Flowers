// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ooh-ooh, ooh-ooh, ooh-ooh", time: 5 },
  { text: "Ooh-ooh, ooh-ooh, ooh-ooh", time: 18 },
  { text: "You've changed since you met me and I feel I've done the same", time: 27 },
  { text: "Our friends, they all notice and your siblings think it's strange", time: 33 },
  { text: "That I wanna be with you every single day", time: 37 },
  { text: "For the rest of our lives", time: 41 },
  { text: "I can't help but feel guilty when I'm taking up your time", time: 48 },
  { text: "So I'll take out my old notebook and I'll put this and write", time: 53 },
  { text: "Oh, I wanna be with you every single day", time: 58 },
  { text: "For the rest of our lives", time: 63 },
  { text: "Someday I'll make a home with you", time: 67 },
  { text: "It may be big, it may be small", time: 72 },
  { text: "We'll make a space where all the kids can run around and safely fall", time: 77 },
  { text: "But if the dreams don't happen right away, that's okay", time: 82 },
  { text: "I just wanna be with you every single day", time: 87 },
  { text: "For the rest of our lives", time: 92 },
  { text: "Ooh, ooh, ooh", time: 95 },
  { text: "Ooh, ooh, ooh", time: 102 },
  { text: "You've changed since you met me and I feel I've done the same", time: 115 },
  { text: "But I've changed for the better, and you're the one to blame", time: 120 },
  { text: "That's why I wanna be with you every single day", time: 125 },
  { text: "We've had our share of sorrows and pain that keeps us up at night", time: 130 },
  { text: "Sometimes I wish we'd stand down instead of putting up a fight", time: 135 },
  { text: "But still I wanna be with you every single day", time: 140 },
  { text: "'Til the day that we die", time: 145 },
  { text: "Someday I'll take you 'round the world", time: 149 },
  { text: "And visit places where you stayed", time: 154 },
  { text: "I'll place some shows on radios, listen close, I'll sing your name", time: 159 },
  { text: "But if the dreams don't happen right away, that's okay", time: 164 },
  { text: "I just wanna be with you every single day", time: 169 },
  { text: "For the rest of our lives", time: 174 },
  { text: "I'm gonna work on my temper", time: 178 },
  { text: "While you learn to speak your mind some more", time: 182 },
  { text: "I'll be more of a shelter and less of a storm", time: 186 },
  { text: "While we both are working on ourselves in our own ways", time: 190 },
  { text: "I just wanna be with you every single day", time: 194 },
  { text: "Oh, I wanna be with you every single day", time: 199 },
  { text: "For the rest of our lives", time: 204 },
  { text: "For the rest of our lives", time: 209 },
  { text: "(Ooh-ooh, ooh-ooh, ooh-ooh) 'til the day that we die", time: 214 }
 ];


// Animate the lyrics
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 26
  );

  if (currentLine) {
    // Calculate the opacity based on the current line's time
    var fadeInDuration = 5; // Duration of the fade-in effect in seconds
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Apply the fade-in effect
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Reset the opacity and content if there is no current line
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
function updateLyrics() {
  var time = audio.currentTime;
  for (let i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time && (!lyricsData[i + 1] || time < lyricsData[i + 1].time)) {
      lyrics.innerHTML = lyricsData[i].text;
      lyrics.style.opacity = 1;
      return;
    }
  }
  lyrics.innerHTML = "";
  lyrics.style.opacity = 0;
}

// Function to hide the title after 216 seconds
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duration and timing function of the disappearance */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Wait 3 seconds before completely hiding
}

// Call the function after 216 seconds (216,000 milliseconds)
setTimeout(ocultarTitulo, 216000);
