// The site is English only. This file keeps the page in English (left to right)
// and handles the light / dark toggle.

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  root.lang = "en";
  root.dir = "ltr";
  try { localStorage.removeItem("lang"); } catch (e) {}

  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const dark = root.dataset.theme !== "light";
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  });
});
