document.addEventListener("astro:page-load", () => {
  const btn = document.getElementById("menu-mobile-btn");
  const nav = document.getElementById("header-nav");

  btn?.addEventListener("click", () => {
    nav?.classList.toggle("active");
  });
});
