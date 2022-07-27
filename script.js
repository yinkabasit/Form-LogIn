const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   alert(form["first"].value);

  const firstName = form["first"].value;
  const lastName = form["last"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    const small = (form["first"].parentNode.querySelector(
      "small"
    ).small.innerText = "First name is required");
  }
});
