function main() {
  let hide = document.querySelector("#hide-me");
  let show = document.querySelector("#show-me");
  let grow = document.querySelector("#grow-me");
  let shrink = document.querySelector("#shrink-me");
  let li = document.querySelectorAll("li");
  let link = document.querySelector(".link");
  let newName = document.querySelector("h1");
  let name = document.querySelector("#name");

  grow.classList.add("big");
  shrink.classList.remove("big");

  for (i of li) {
    console.log(i.innerText);
  }
  link.setAttribute("href", "https://www.example.com");
  link.innerText = "somewhere";
  hide.style.display = "none";
  show.style.display = "block";
  newName.innerText = `Welcome ${name.value}!`;
}
