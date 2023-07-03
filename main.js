const input = document.querySelector("input");
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
