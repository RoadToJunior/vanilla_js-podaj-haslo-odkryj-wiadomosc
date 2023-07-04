const input = document.querySelector("#pass");
const div = document.querySelector(".message");

const password = "marcin";
const message = "Have a nice day!";

input.addEventListener("input", (e) => {
  if (e.target.value === password) {
    div.textContent = message;
    e.target.value = "";
  } else {
    div.textContent = "";
  }
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
