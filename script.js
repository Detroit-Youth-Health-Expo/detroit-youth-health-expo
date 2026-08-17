const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);

document.querySelectorAll(".external-placeholder").forEach(button => {
  button.addEventListener("click", (event) => {
    if (button.getAttribute("href") === "#") {
      event.preventDefault();
      toast.textContent = button.dataset.message || "This link will be added soon.";
      toast.classList.add("show");
      window.clearTimeout(window.__dyheToast);
      window.__dyheToast = window.setTimeout(() => toast.classList.remove("show"), 3500);
    }
  });
});
