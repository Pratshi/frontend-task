const radios = document.querySelectorAll(".unit-radio");
const options = document.querySelectorAll(".option");

radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        options.forEach(opt => opt.querySelector(".content").style.display = "none");
        const selected = options[index];
        selected.querySelector(".content").style.display = "block";
    });
});
