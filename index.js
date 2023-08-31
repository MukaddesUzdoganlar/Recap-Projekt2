const toggleBookmarkButton = document.querySelector(".bookmark");

function toggleIcon() {
  toggleBookmarkButton.classList.toggle("bookmark--active");
}

toggleBookmarkButton.addEventListener("click", toggleIcon);

const toggleAnswerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer");

function toggleAnswer() {
  const wasToggled = answer.classList.toggle("card__answer--active");
  toggleAnswerButton.textContent = wasToggled ? "Hide answer" : "Show Answer";
}
toggleAnswerButton.addEventListener("click", toggleAnswer);
