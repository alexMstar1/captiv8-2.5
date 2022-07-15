let tabButton = document.querySelectorAll(".home-solution__tab");
let tabContent = document.querySelectorAll(".home-solution__body");

tabButton.forEach(function (el) {
    el.addEventListener('click', tabActive);
});

function tabActive(el) {
    let btn = el.currentTarget;
    let dTarget = btn.dataset.target;
    tabContent.forEach(function (el) {
        el.classList.remove("_active");
    });
    tabButton.forEach(function (el) {
        el.classList.remove("active");
    });
    document.querySelector("#" + dTarget).classList.add("_active");
    btn.classList.add("active")
}

const player = document.querySelector("lottie-player");
player.addEventListener("rendered", (e) => {
    //Load via URL
    player.load('https://assets7.lottiefiles.com/packages/lf20_wjhtxine.json');
    // or load via a Bodymovin JSON string/object

});
const BurgerMenu = document.querySelector(".js-toggler");
if (BurgerMenu) {
    const e = document.querySelector(".header__burger");
    BurgerMenu.addEventListener("click", function (t) {
        document.body.classList.toggle("_lock"),
            BurgerMenu.classList.toggle("is-active"),
            e.classList.toggle("is-active");
    });
}

const Dropdown = document.querySelector("")