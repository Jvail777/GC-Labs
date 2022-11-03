const letters = document.querySelector("#letters");
const numbers = document.querySelector("#numbers");

letters.addEventListener("click", showLetters);
numbers.addEventListener("click", showNumbers);

function showLetters(event) {
  event.preventDefault();
  let letters1 = document.querySelector("#letters1");
  let numbers1 = document.querySelector("#numbers1");
  letters1.style.display = "block";
  numbers1.style.display = "none";
}
function showNumbers(event) {
  event.preventDefault();
  let letters1 = document.querySelector("#letters1");
  let numbers1 = document.querySelector("#numbers1");
  letters1.style.display = "none";
  numbers1.style.display = "block";
}
