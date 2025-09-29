function login() {
    window.location.href = "html.html";
}

const toggleImg = document.querySelector(".img1");
toggleImg.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        toggleImg.src = "day.png";
        toggleImg.alt = "Light Mode";
    } else {
        toggleImg.src = "night-mode.png";
        toggleImg.alt = "Dark Mode";
    }
});
