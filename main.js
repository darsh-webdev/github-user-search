const API_URL = "https://api.github.com/search/users?q=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getGitHubProfile(user) {
  const resp = await fetch(API_URL + user);
  const respData = await resp.json();
  console.log(respData);
  main.innerHTML = "";
  respData.items.forEach((user) => {
    createUserCard(user);
  });
}

function createUserCard(user) {
  const { html_url, avatar_url, login } = user;
  console.log(user);
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="img-container">
    <img
    class="avatar"
      src=${avatar_url}
      alt=${login}
    />
    </div>
    <div>
    <h2>Username: ${login}</h2>
    <a class="link" href=${html_url}>GitHub Link</a>
  </div>`;
  main.appendChild(card);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  getGitHubProfile(user);
});
