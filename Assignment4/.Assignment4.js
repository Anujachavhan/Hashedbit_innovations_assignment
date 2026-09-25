// code 1
function swapTheme() {
    const app = document.getElementById("app");
    const button = document.getElementById("swap");

    if (app.className === "day") {
        app.className = "night";
        button.className = "button_night";
    } else {
        app.className = "day";
        button.className = "button_day";
    }
}

// code 2

function createDiv(width, height, text) {
    const container = document.getElementById("container");

    const newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;

    container.appendChild(newDiv);
}
    
createDiv(200, 100, "Hello");

// code3

function toggleVisibility() {
  
    const paragraph = document.getElementById("useless-paragraph");

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }

    
}
// code 4
let text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = function() {
    text.style.color = document.getElementById("colorbox").value;
};

document.getElementById("fontsize").oninput = function() {
    text.style.fontSize = this.value + "px";
};

document.getElementById("italic").onclick = function() {
    text.style.fontStyle =
        text.style.fontStyle == "italic" ? "normal" : "italic";
};

document.getElementById("underline").onclick = function() {
    text.style.textDecoration =
        text.style.textDecoration == "underline" ? "none" : "underline";
};

document.getElementById("bold").onclick = function() {
    text.style.fontWeight =
        text.style.fontWeight == "bold" ? "normal" : "bold";
};

document.getElementById("list").onchange = function() {
    text.style.fontFamily = this.value;
};

document.getElementById("getstyle").onclick = function() {
    document.getElementById("css-props").innerText =
        "color: " + (text.style.color || "black") + "; " +
        "font-size: " + (text.style.fontSize || "55px") + "; " +
        "font-family: " + (text.style.fontFamily || "serif") + "; " +
        "text-decoration: " + (text.style.textDecoration || "none") + "; " +
        "font-style: " + (text.style.fontStyle || "normal") + "; " +
        "font-weight: " + (text.style.fontWeight || "normal") + ";";
};
