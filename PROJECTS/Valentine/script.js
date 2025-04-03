const messages = [
  "You are the missing piece of my heart. ❤️",
  "With you, every moment is magical. ✨",
  "You are my forever and always. 💖",
  "Loving you is the best thing I’ve ever done. 💘",
  "You light up my world like nobody else. 🔥",
  "If love was a programming language, you'd be my only function. 💻💖",
  "You are the best chapter in my book of life. 📖❤️",
  "Are you a shooting star? Because my wish came true when I met you. ⭐💞",
  "You are my dream come true, my forever valentine. 💝",
  "My heart beats only for you, and it will never stop. 💓"
];

function changeMessage() {
  let messageBox = document.getElementById("proposalMessage");
  messageBox.classList.add("fade");

  setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * messages.length);
      messageBox.innerText = messages[randomIndex];
      messageBox.classList.remove("fade");
  }, 600);
}

setInterval(changeMessage, 8000);
window.onload = changeMessage;

/* Floating Hearts Generator */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  document.querySelector(".hearts").appendChild(heart);

  let size = Math.random() * 20 + 10 + "px";
  let leftPos = Math.random() * window.innerWidth + "px";

  heart.style.fontSize = size;
  heart.style.left = leftPos;
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";

  setTimeout(() => {
      heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

/* Sparkle Generator */
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  document.querySelector(".sparkles").appendChild(sparkle);

  let size = Math.random() * 5 + 2 + "px";
  let leftPos = Math.random() * window.innerWidth + "px";

  sparkle.style.width = size;
  sparkle.style.height = size;
  sparkle.style.left = leftPos;
  sparkle.style.animationDuration = Math.random() * 3 + 5 + "s";

  setTimeout(() => {
      sparkle.remove();
  }, 8000);
}

setInterval(createSparkle, 500);