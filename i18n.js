// The site is English only. This file keeps the page in English (left to right)
// Light / dark is handled by theme.js.

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  root.lang = "en";
  root.dir = "ltr";
  try { localStorage.removeItem("lang"); } catch (e) {}

});
