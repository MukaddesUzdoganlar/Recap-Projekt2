const QuestionInput = document.querySelector('[data-js="QuestionInput"]');
const AnswerInput = document.querySelector('[data-js="AnswerInput"]');
const remainingCharacters = document.querySelector(
  '[data-js="remaining-characters"]'
);
const remainingCharacters1 = document.querySelector(
  '[data-js="remaining-characters1"]'
);

QuestionInput.addEventListener("input", (event) => {
  console.log(event.target.value);
  console.log(event.target.value.length);
  remainingCharacters.textContent = 150 - event.target.value.length;
});

AnswerInput.addEventListener("input", (event) => {
  console.log(event.target.value);
  console.log(event.target.value.length);
  remainingCharacters1.textContent = 150 - event.target.value.length;
});
