// 🌙 Theme Toggle Function
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// 🖊 Typing Animation on Load
window.onload = function () {
  const text = "a Web Developer.";
  let i = 0;
  const speed = 100;
  const target = document.getElementById("type-text");

  function typeEffect() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();
  
  // Trigger scroll animations if ScrollReveal is loaded
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.project-card', {
      delay: 200,
      distance: '40px',
      origin: 'bottom',
      duration: 800
    });

    ScrollReveal().reveal('.card', {
      delay: 300,
      interval: 200,
      origin: 'top',
      distance: '30px',
      duration: 700
    });
  }
};
