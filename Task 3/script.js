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

const renderUser = (users) => {
  const { login, avatar_url } = users;
  const card = document.createElement("div");
  card.style.width = "20%";
  card.style.height = "200px";
  card.style.borderRadius = "1rem";
  card.style.padding = "20px";
  card.style.border = "2px solid #474747";
  card.style.margin = "20px";
 

  const output = document.getElementById("output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";

  const loginEl = document.createElement("h3");
  loginEl.style.textAlign = "center";
  loginEl.style.fontSize = "24px";

  const avatarurlEl = document.createElement("img");
  avatarurlEl.style.borderRadius = "12px";

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
    response.forEach((users) => renderUser(users));
  })
  .catch((error) => {
    console.error(error, ": failed to load");
  });
