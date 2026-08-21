// Motion helpers — reveal on scroll, staggered children, stat counters.
// Respects prefers-reduced-motion.
(function () {
  // Home-page navbar: add .navbar--scrolled once the user scrolls past the top.
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var onScroll = function () {
      if (window.scrollY > 8) navbar.classList.add('navbar--scrolled');
      else navbar.classList.remove('navbar--scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  // 1. Assign stagger delays to children of [data-anim-stagger]
  document.querySelectorAll('[data-anim-stagger]').forEach(function (parent) {
    var step = parseInt(parent.dataset.animStagger, 10) || 70;
    Array.prototype.forEach.call(parent.children, function (child, i) {
      if (!child.hasAttribute('data-anim')) child.setAttribute('data-anim', '');
      child.style.setProperty('--anim-delay', (i * step) + 'ms');
    });
  });

  // 2. Reveal-on-scroll observer
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-anim]').forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: reveal everything
    document.querySelectorAll('[data-anim]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // 3. Counter animation for [data-count]
  function animateCount(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/^([\d,]+)(.*)$/);
    if (!match) return;
    var target = parseInt(match[1].replace(/,/g, ''), 10);
    var suffix = match[2] || '';
    if (!isFinite(target)) return;
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - t, 3);
      var value = Math.round(target * eased);
      el.textContent = value.toLocaleString('en-IN') + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('en-IN') + suffix;
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(function (el) {
      countIO.observe(el);
    });
  }
})();
