/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const renderCard = (users) => {
  const { login, avatar_url } = users;
  const card = document.createElement("div");
  const output = document.getElementById("output");
  const loginEl = document.createElement("h3");
  const avatarurlEl = document.createElement("img");

  card.className = "card";
  loginEl.textContent = login;
  avatarurlEl.src = avatar_url;

  avatarurlEl.alt = `${login} avatar`;
  avatarurlEl.style.width = "120px";

  card.append(loginEl, avatarurlEl);
  output.append(card);
};

fetch("https://api.github.com/users")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((users) => renderCard(users));
  })
  .catch((error) => {
    console.error(error, ": failed to load");
  });
