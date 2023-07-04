const input = document.querySelector("#pass");
const div = document.querySelector(".message");

const passwords = ["marcin", "wiosna", "lato"];
const messages = ["Have a nice day!", "trochę zimy trochę lata", "wakacje"];

input.addEventListener("input", (e) => {
  div.textContent = "";
  passwords.forEach((password, i) => {
    if (password === e.target.value) {
      div.textContent = messages[i];
      e.target.value = "";
    }
  });
  //   if (e.target.value === password) {
  //     div.textContent = message;
  //     e.target.value = "";
  //   } else {
  //     div.textContent = "";
  //   }
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
