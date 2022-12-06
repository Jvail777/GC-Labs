function apiCall() {
  let url = "https://www.reddit.com/r/aww/.json";
  fetch(url)
    .then((Response) => Response.json())
    .then((redditData) => {
      console.log(redditData);

      for (let i = 0; i < 10; i++) {
        const post = redditData.data.children[i].data;

        const title = document.createElement("h1");
        title.classList.add("h1s");
        title.innerText = post.title;

        const img = document.createElement("img");
        img.classList.add("imgs");
        img.src = post.thumbnail;

        const url = document.createElement("a");
        url.innerText = post.url;
        url.href = post.url;

        document.body.appendChild(title);
        document.body.appendChild(img);
        document.body.appendChild(url);
      }
    });
}

apiCall();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////Form input section/////////////////////////////////////////////////////////////////////////////////

//Selector
let selection = document.querySelector("#redditInput");
//Listener
selection.addEventListener("submit", getInputName);
//function
function getInputName(e) {
  e.preventDefault();
  const post = redditData.data.children[i].data;
  let name = post.name;

  let input = document.querySelector("#submit");
}
