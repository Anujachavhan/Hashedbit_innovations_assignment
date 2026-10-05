function createDiv(width, height, text) {
  const div = document.createElement("div");

  div.style.width = width + "px";
  div.style.height = height + "px";
  div.innerText = text;

  document.getElementById("container").appendChild(div);
}

createDiv(200, 100, "Hello"); 