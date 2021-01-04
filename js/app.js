document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  verify(e.target["first-name"]);
  verify(e.target["last-name"]);
  verify(e.target["email"]);
  verify(e.target["password"]);
});

function verify(input) {
  let msg = "";
  if (!input.checkValidity()) {
    input.classList.add("error");
    input.parentElement.querySelector("img").classList.add("show");
    input.parentElement.querySelector(".msg").classList.add("show");
    if (input.id === "email") {
      msg = "Looks like this is not an email";
    } else {
      const inputName = input.id
        .split("-")
        .map((item) => capitalize(item))
        .join(" ");
      msg = `${inputName} cannot be empty`;
    }
  } else {
    input.classList.remove("error");
    input.parentElement.querySelector("img").classList.remove("show");
    input.parentElement.querySelector(".msg").classList.remove("show");
  }
  input.parentElement.querySelector(".msg").textContent = msg;
}

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
