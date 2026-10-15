// Case study interactions: Detailed / TL;DR switch, design option demo, Esc to close.

document.addEventListener("DOMContentLoaded", () => {
  // Detailed / TL;DR
  const segBtns = document.querySelectorAll(".seg button");
  const setMode = mode => {
    document.body.dataset.mode = mode;
    segBtns.forEach(b => b.classList.toggle("on", b.dataset.mode === mode));
    try { localStorage.setItem("csMode", mode); } catch (e) {}
  };
  segBtns.forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  let saved = "detailed";
  try { saved = localStorage.getItem("csMode") || "detailed"; } catch (e) {}
  setMode(saved);

  // Option demo (A / B / C)
  document.querySelectorAll("[data-demo]").forEach(demo => {
    const tabs = demo.querySelectorAll(".demo-tabs button");
    const notes = demo.querySelectorAll(".demo-note");
    tabs.forEach(tab => tab.addEventListener("click", () => {
      const v = tab.dataset.v;
      demo.dataset.variant = v;
      tabs.forEach(t => t.classList.toggle("on", t === tab));
      notes.forEach(n => { n.hidden = n.dataset.note !== v; });
    }));
    demo.dataset.variant = "a";
  });

  // Esc closes the case study
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") window.location.href = "./#work";
  });
});
