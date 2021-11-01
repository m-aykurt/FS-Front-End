function initButton() {
  var body = document.body;
  let button;
  let i;
  for (i = 0; i < 7; i++) {
    console.log(i);
    button = document.createElement("button");
    button.innerHTML = `Button ${i}`;
    button.addEventListener("click", (e) => {
      alert(i);
    });
    body.appendChild(button);
  }
}
initButton();
