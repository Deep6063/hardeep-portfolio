const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
const yearEl = document.querySelector("#year");
const messageField = document.querySelector('textarea[name="message"]');
const charLimit = document.querySelector(".char-limit");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (messageField && charLimit) {
  const maxChars = messageField.getAttribute("maxlength")
    ? Number(messageField.getAttribute("maxlength"))
    : null;

  const updateCounter = () => {
    const current = messageField.value.length;
    charLimit.textContent = maxChars ? `${current}/${maxChars}` : `${current}`;
  };

  updateCounter();
  messageField.addEventListener("input", updateCounter);
}

