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

function toggleMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  // Toggle the light mode class
  body.classList.toggle("light-mode");

  // Check and update the icon
  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// ✅ On page load, apply saved theme
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    toggleBtn.textContent = "🌙";
  }
};


