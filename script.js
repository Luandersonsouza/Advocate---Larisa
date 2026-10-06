document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = "https://wa.me/message/ADBXAILNJDSCJ1";
});

document.querySelector("#year").textContent = new Date().getFullYear();

const button = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav");
button.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}));
