/* Aplica el tema antes de pintar la página (evita parpadeo). Se carga en <head>. */
(() => {
  document.documentElement.classList.add('js');
  const KEY = 'gc-theme';
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = saved === 'dark' || saved === 'light' ? saved : system;

  window.gcSetTheme = theme => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    document.querySelectorAll('.theme-toggle').forEach(b => {
      b.setAttribute('aria-pressed', theme === 'dark');
      b.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
    });
  };
})();
