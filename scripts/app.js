let menuOpen = false;
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function onSubmit() {
  alert("Your message has been sent!");
}

function toggleMenu() {
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuButton.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
  }
}

window.addEventListener("load", function () {
  menuButton.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});
