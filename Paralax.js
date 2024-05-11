document.addEventListener("DOMContentLoaded", function() {
    let text = document.getElementById("paralaxText");
    let img1 = document.getElementById("image01");
    let img2 = document.getElementById("image02");
    let img3 = document.getElementById("image03");
    let img4 = document.getElementById("image04");
    let img5 = document.getElementById("image05");
    let img6 = document.getElementById("image06");

    window.addEventListener("scroll", () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2 + "px";
        img2.style.left = value * -0.5 + "px";
        img3.style.left = value * -1 + "px";
        img5.style.left = value * 0.3 + "px";
        img6.style.left = value * 1 + "px";
    });
});