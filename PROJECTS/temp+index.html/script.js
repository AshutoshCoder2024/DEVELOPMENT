  const messages = [
  "You are the missing piece of my code; without you, my life wouldn’t run. ❤️",
    "With you, every moment feels like an infinite loop of happiness. ✨",
    "You are my forever 'true' boolean; my love for you will never be false. 💖",
    "Loving you is the most efficient algorithm; it always returns joy in constant time. 💘",
    "You light up my world like no other; you’re the highlight of my life. 🔥",
    "If love was a programming language, you'd be my main function—the one I always return to. 💻💖",
    "You are the best commit in my life’s repository; every moment with you is a milestone. 📖❤️",
    "Are you a stack overflow? Because my heart keeps overflowing with love for you. ⭐💞",
    "You are my dream come true, my forever valentine—the exception I never want to catch. 💝",
    "My heart beats only for you, like a perfectly optimized loop that never ends. 💓",
    "You are my favorite dependency; my life doesn’t run without you. 📦❤️",
    "You are the 'git push' to my heart; every day with you feels like a new release. 🚀💖",
    "You are the CSS to my HTML; you bring style and beauty to my life. 🎨✨",
    "You are the API to my heart; every request I make returns love. 💌💘",
    "You are the debugger to my soul; you fix every error in my life. 🛠️❤️",
    "You are the 'while(true)' loop in my life; my love for you will never break. 🔄💖",
    "You are the '404' page I never want to find; you complete my world. 🌍❤️",
    "You are the 'pull request' to my heart; I’ll always approve you. ✅💘",
    "You are the 'JSON' to my life; you make everything perfectly structured and beautiful. 📄✨",
    "You are the 'async' to my heart; my love for you will always resolve. ⏳💖",
    "You are the 'comment' in my code; you make everything clearer and more meaningful. 💬❤️",
    "You are the 'variable' in my life; you give meaning to everything I do. 📝💖",
    "You are the 'framework' of my heart; you provide the structure for my love. 🏗️❤️",
    "You are the 'database' of my soul; you store all my happiest memories. 🗄️💘",
    "You are the 'compiler' of my life; you turn my chaos into something beautiful. 🖥️✨",
    "You are the 'exception handler' of my heart; you catch me when I fall. 🤗❤️",
    "You are the 'IDE' of my life; you make everything easier and more enjoyable. 💻💖",
    "You are the 'source code' of my happiness; without you, nothing would work. 📜❤️",
    "You are the 'version control' of my heart; you keep track of all the love I’ve ever felt. 🔄💘",
    "You are the 'debugging tool' of my soul; you help me find peace in chaos. 🛠️✨"
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

  /* Floating Hearts Generator */
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.querySelector(".hearts").appendChild(heart);

    let size = Math.random() * 16 + 8 + "px"; // Smaller hearts
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

  /* Enhanced Celebration Animation */
  function startCelebration() {
    const proposalCard = document.querySelector(".proposal-card");
    proposalCard.classList.add("hide"); // Hide the proposal box

    const celebration = document.querySelector(".celebration");
    celebration.innerHTML = ""; // Clear previous celebration

    // Add heart-shaped confetti
    for (let i = 0; i < 150; i++) { // Fewer confetti hearts
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.innerHTML = "❤️";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.fontSize = Math.random() * 16 + 8 + "px"; // Smaller confetti hearts
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetti.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      celebration.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }

    // Add heart fireworks
    for (let i = 0; i < 8; i++) { // Fewer fireworks
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.innerHTML = "💖";
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 100 + "vh";
      celebration.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 3000);
    }

    // Add glowing text
    const glowingText = document.createElement("div");
    glowingText.classList.add("glowing-text");
    glowingText.innerText = "I Love You! 💖";
    document.body.appendChild(glowingText);

    setTimeout(() => {
      glowingText.remove();
    }, 5000);

    // Add romantic message
    const romanticMessage = document.createElement("div");
    romanticMessage.classList.add("romantic-message");
    romanticMessage.innerText = "You've made me the happiest person in the world! 🌟";
    document.body.appendChild(romanticMessage);

    setTimeout(() => {
      romanticMessage.remove();
    }, 5000);
  }

  /* Button Interactions */
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  // Function to check if two rectangles overlap
  function isOverlapping(rect1, rect2, padding = 20) {
    return !(
      rect1.right + padding < rect2.left || // rect1 is to the left of rect2
      rect1.left - padding > rect2.right || // rect1 is to the right of rect2
      rect1.bottom + padding < rect2.top || // rect1 is above rect2
      rect1.top - padding > rect2.bottom    // rect1 is below rect2
    );
  }

  // Function to position the "No" button without overlapping the "Yes" button
  function positionNoButton() {
    const maxX = window.innerWidth - noButton.offsetWidth; // Maximum X position
    const maxY = window.innerHeight - noButton.offsetHeight; // Maximum Y position

    const yesButtonRect = yesButton.getBoundingClientRect();
    let x, y;
    let overlap = true;
    const padding = 20; // Minimum padding between buttons

    // Keep generating new positions until there's no overlap
    while (overlap) {
      x = Math.random() * maxX; // Random X position within screen bounds
      y = Math.random() * maxY; // Random Y position within screen bounds

      // Define the "No" button's new rectangle
      const noButtonRect = {
        left: x,
        top: y,
        right: x + noButton.offsetWidth,
        bottom: y + noButton.offsetHeight,
      };

      // Check if the "No" button overlaps with the "Yes" button
      overlap = isOverlapping(noButtonRect, yesButtonRect, padding);
    }

    noButton.style.position = "fixed"; // Use fixed positioning
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
  }

  // Move the "No" button on hover
  noButton.addEventListener("mouseover", () => {
    positionNoButton();
  });

  // Click event for "Yes" button
  yesButton.addEventListener("click", () => {
    startCelebration();
    alert("Yay! You've made me the happiest person in the world! 💖");
  });

  // Click event for "No" button
  noButton.addEventListener("click", () => {
    alert("Aww, I'll keep trying until you say yes! 😢");
  });

  // Initialize the page
  window.onload = () => {
    changeMessage(); // Initialize the message box
  };