const modalBtn = document.getElementById("modalaç");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modalx");
const girisBtn = document.getElementById("formbutton");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
  modal.style.display = "none";
});
