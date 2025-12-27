document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".navbar button");
  const pages = document.querySelectorAll(".page");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      pages.forEach((p) => p.classList.remove("active"));
      const target = document.getElementById(btn.dataset.page);
      if (target) target.classList.add("active");
    });
  });
});
