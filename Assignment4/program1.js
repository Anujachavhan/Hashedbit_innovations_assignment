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
