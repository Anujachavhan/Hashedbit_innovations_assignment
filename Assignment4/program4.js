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
