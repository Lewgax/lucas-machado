(() => {
  const blocks = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('awaiting');
        observer.unobserve(entry.target);
      }
    }
  }, {threshold: 0, rootMargin: '0px 0px -30px 0px'});
  for (const block of blocks) {
    if (block.getBoundingClientRect().top > window.innerHeight) block.classList.add('awaiting');
    observer.observe(block);
  }
})();
