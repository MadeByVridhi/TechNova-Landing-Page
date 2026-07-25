window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0b1120";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});