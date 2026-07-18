// Progressive enhancement: HTML renders server-side (SEO-safe); this only filters on top.
(function () {
  const input = document.getElementById('search');
  const grid = document.getElementById('grid');
  if (!input || !grid) return;
  const cards = Array.from(grid.querySelectorAll('.card'));
  input.addEventListener('input', function () {
    const q = input.value.toLowerCase().trim();
    cards.forEach(function (c) {
      const hay = (c.getAttribute('data-search') || c.textContent).toLowerCase();
      c.style.display = (!q || hay.includes(q)) ? '' : 'none';
    });
  });
})();
