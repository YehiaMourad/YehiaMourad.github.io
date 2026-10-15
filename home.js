// Homepage interactions: tile filter, copy email, Cairo clock.

document.addEventListener("DOMContentLoaded", () => {
  // Filter pills: fade out tiles that don't match
  const pills = document.querySelectorAll(".pill");
  const tiles = document.querySelectorAll(".bento .t");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const f = pill.dataset.filter;
      pills.forEach(p => p.classList.toggle("on", p === pill));
      tiles.forEach(t => t.classList.toggle("dim", f !== "all" && t.dataset.cat !== f));
    });
  });

  // Copy email
  const copyBtn = document.getElementById("copy-email");
  const label = document.getElementById("copy-label");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        const dict = STRINGS[document.documentElement.lang] || STRINGS.en;
        label.textContent = dict["b.copied"];
        setTimeout(() => { label.textContent = dict["b.copy"]; }, 1800);
      } catch (e) {
        window.location.href = "mailto:" + email;
      }
    });
  }

  // Live Cairo time
  const timeEl = document.getElementById("cairo-time");
  const tick = () => {
    if (!timeEl) return;
    timeEl.textContent = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Cairo"
    }).format(new Date());
  };
  tick();
  setInterval(tick, 15000);
});
