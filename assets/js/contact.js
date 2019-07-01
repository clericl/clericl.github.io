const textBox = document.querySelector(".contact-info");

const icons = document.querySelectorAll(".myicons");
icons.forEach(icon => {
    icon.addEventListener("mouseenter", e => {
        textBox.innerHTML = icon.querySelector(".label").innerHTML;
    });

    icon.addEventListener("mouseleave", e => {
        textBox.innerHTML = "";
    });
});