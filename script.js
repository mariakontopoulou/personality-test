document.addEventListener("DOMContentLoaded", () => {

  const quizzes = {
    "quiz-food": "https://form.typeform.com/to/bzvDK3HF",
    "quiz-superpower": "https://form.typeform.com/to/G6UbMtEX",
    "quiz-travel": "https://form.typeform.com/to/NrFA5iOZ",
    "quiz-career": "https://form.typeform.com/to/IkcDDwDn"
  };

  const overlay = document.getElementById("quiz-overlay");
  const frame = document.getElementById("quiz-frame");
  const closeButton = document.getElementById("close-quiz");
  
  const body = document.body;

  Object.keys(quizzes).forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("click", () => {
      frame.src = quizzes[id];
      overlay.classList.add("is-visible");
      body.classList.add("body-no-scroll");
    });
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.remove("is-visible");
    body.classList.remove("body-no-scroll");
    frame.src = "";
  });
});