document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const card = document.querySelector(".card");
  const audio = document.getElementById("friendship-audio");

  button.addEventListener("click", function () {
    // Play the audio
    if (audio) {
      audio.currentTime = 0; // Optional: restart audio if already playing
      audio.play().catch((e) => {
        console.log("Audio play was prevented:", e);
      });
    }

    setTimeout(() => {
      card.classList.add("pop");
    }, 4000);

    
  });
});
