let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");
let noButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

//console.dir(backdrop);
//console.dir(selectPlanButtons);
//console.dir(noButton);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    //modal.style.display = "block";
    //backdrop.style.display = "block";
    //modal.className = "open"; // This will actually overwrite classes.
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

const closeModal = () => {
  //modal.style.display = "none";
  //backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
};

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  //mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

toggleButton.addEventListener("click", () => {
  //mobileNav.style.display = "block";
  //backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
