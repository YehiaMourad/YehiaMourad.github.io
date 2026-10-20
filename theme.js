// Light / dark follows the visitor's system or browser setting, automatically.
// The toggle button overrides it for the current visit only, and any change
// to the system setting takes over again.
(() => {
  const root = document.documentElement;
  const mq = matchMedia("(prefers-color-scheme: dark)");
  const read = () => { try { return sessionStorage.getItem("theme"); } catch (e) { return null; } };
  const save = t => { try { t ? sessionStorage.setItem("theme", t) : sessionStorage.removeItem("theme"); } catch (e) {} };
  try { localStorage.removeItem("theme"); } catch (e) {} // old choice that used to stick forever

  const apply = t => { if (t) root.dataset.theme = t; else delete root.dataset.theme; };
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : mq.matches;
  apply(read());

  const toggle = () => {
    const next = isDark() ? "light" : "dark";
    const t = (next === "dark") === mq.matches ? null : next; // back to system = no override
    save(t); apply(t);
  };
  const onSystem = () => { save(null); apply(null); };
  mq.addEventListener ? mq.addEventListener("change", onSystem) : mq.addListener(onSystem);
  document.addEventListener("click", e => { if (e.target.closest("#t-theme, .theme-toggle")) toggle(); });
})();
