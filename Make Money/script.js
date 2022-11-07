let form = document.querySelector("#mainForm");

form.addEventListener("submit", makeMoney);

coinArea.addEventListener(`click`, (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.remove();
});

function makeMoney(event) {
  event.preventDefault();

  let data = new FormData(form);

  let number = data.get("amount");
  let coins = data.get("moneyType");

  for (let i = 0; i < number; i++) {
    document.querySelector(
      "section"
    ).innerHTML += `<div class = "coinmaker ${coins}"></div>`;
  }
}
