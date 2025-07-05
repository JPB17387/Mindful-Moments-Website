function showMessage(mood) {
  const messages = {
    happy: "Keep smiling and spread that good energy!",
    sad: "It’s okay to feel sad. You're not alone.",
    anxious: "Take deep breaths. You are doing your best.",
    tired: "Rest is also productive. Be kind to yourself.",
    motivated: "Great! Use your energy to help someone today!"
  };

  document.getElementById("message").textContent = messages[mood];
}

const text = "Small check-ins. Big peace of mind.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 90); // typing speed
  }
}
window.onload = typeEffect;
