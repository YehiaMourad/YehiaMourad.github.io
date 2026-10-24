// Case study interactions: Detailed / TL;DR switch, design option demo, Esc to close.

// initCase() also runs after a locked case study is unlocked and its content is added.
window.initCase = () => {
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

  // Galleries: arrows, thumbnails (dots on phones), counter, keyboard and swipe
  document.querySelectorAll(".gallery:not([data-ready])").forEach(initGallery);
};

function initGallery(g) {
  g.dataset.ready = "1";
  const slides = [...g.querySelectorAll(":scope > figure")];
  if (!slides.length) return;
  const n = slides.length, reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const track = document.createElement("div");
  track.className = "g-track";
  slides[0].before(track);
  slides.forEach((f, i) => {
    f.classList.add("g-slide");
    f.setAttribute("role", "group");
    f.setAttribute("aria-roledescription", "slide");
    f.setAttribute("aria-label", `${i + 1} of ${n}: ${f.dataset.title || ""}`);
    track.appendChild(f);
  });
  const arrow = (dir, label, d) => `<button class="g-arrow" type="button" data-step="${dir}" aria-label="${label}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg></button>`;
  g.insertAdjacentHTML("beforeend", `
    <div class="g-cap" aria-live="polite"><h3></h3><p></p></div>
    <div class="g-bar">
      <span class="g-count"></span>
      <div class="g-thumbs">${slides.map((f, i) => {
        const img = f.querySelector("img");
        return `<button class="g-thumb" type="button" data-i="${i}" aria-label="Slide ${i + 1}: ${f.dataset.title || ""}"><img src="${img ? img.getAttribute("src") : ""}" alt="" loading="lazy"></button>`;
      }).join("")}</div>
      <div class="g-arrows">${arrow(-1, "Previous slide", "M15 6l-6 6 6 6")}${arrow(1, "Next slide", "M9 6l6 6-6 6")}</div>
    </div>`);
  g.setAttribute("role", "region");
  g.setAttribute("aria-roledescription", "carousel");
  g.tabIndex = 0;
  const cap = g.querySelector(".g-cap"), count = g.querySelector(".g-count"), thumbs = [...g.querySelectorAll(".g-thumb")];
  const prev = g.querySelector('[data-step="-1"]'), next = g.querySelector('[data-step="1"]');
  let cur = -1;
  const show = i => {
    if (i === cur) return;
    cur = i;
    const f = slides[i];
    cap.querySelector("h3").textContent = f.dataset.title || "";
    cap.querySelector("p").textContent = (f.querySelector("figcaption") || {}).textContent || "";
    count.textContent = `${i + 1} / ${n}`;
    thumbs.forEach((t, k) => t.setAttribute("aria-current", k === i ? "true" : "false"));
    prev.disabled = i === 0; next.disabled = i === n - 1;
  };
  const go = i => {
    i = Math.max(0, Math.min(n - 1, i));
    track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
    show(i);
  };
  // swipe and trackpad scrolling move the track natively; keep the caption in step
  let st;
  track.addEventListener("scroll", () => {
    clearTimeout(st);
    st = setTimeout(() => show(Math.round(track.scrollLeft / track.clientWidth)), 60);
  }, { passive: true });
  g.addEventListener("click", e => {
    const b = e.target.closest("[data-step], [data-i]");
    if (!b) return;
    go(b.dataset.i != null ? +b.dataset.i : cur + +b.dataset.step);
  });
  g.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); go(cur + (e.key === "ArrowRight" ? 1 : -1)); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(n - 1); }
  });
  addEventListener("resize", () => track.scrollTo({ left: cur * track.clientWidth }));
  show(0);
}

document.addEventListener("DOMContentLoaded", () => {
  window.initCase();

  // Esc closes the case study
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") window.location.href = "./#work";
  });
});
