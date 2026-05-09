/* =========================================================
   script.js — Core site behaviours
   - Page loader fade-out
   - Sticky navbar scroll state
   - Mobile hamburger menu
   - Smooth anchor scroll
   - Scroll reveal (IntersectionObserver)
   - Animated number counters
   - Testimonials carousel (auto + dots + swipe)
   - EMI mini-calculator on home
   - Floating WhatsApp delayed entrance
   - Custom cursor (desktop only)
   - Page transition fade
   - Toast helper (window.showToast)
   - Newsletter mailto handler
   ========================================================= */

(() => {
  "use strict";

  /* ---------- 1. Page loader ---------- */
  function initLoader() {
    const loader = document.getElementById("pageLoader");
    if (!loader) return;
    const minDelay = 600;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDelay - elapsed);
      setTimeout(() => loader.classList.add("hidden"), wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
  }

  /* ---------- 2. Sticky navbar ---------- */
  function initNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Active link highlight
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(a => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }

  /* ---------- 3. Hamburger ---------- */
  function initHamburger() {
    const btn = document.getElementById("hamburger");
    const links = document.getElementById("navLinks");
    if (!btn || !links) return;
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }

  /* ---------- 4. Smooth anchor scroll ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        const href = a.getAttribute("href");
        if (href === "#" || href.length < 2) return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        const offset = 92;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      });
    });
  }

  /* ---------- 5. Scroll reveal ---------- */
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }

  /* ---------- 6. Counters ---------- */
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) {
      counters.forEach(el => el.textContent = el.dataset.count);
      return;
    }
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const duration = 1400;
      const start = performance.now();
      const startVal = 0;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(startVal + (target - startVal) * eased);
        el.textContent = v.toLocaleString("en-IN");
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString("en-IN");
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          animate(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => io.observe(el));
  }

  /* ---------- 7. Testimonials carousel ---------- */
  function initTestimonials() {
    const root = document.querySelector(".tcarousel");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".tslide"));
    const dotsWrap = root.querySelector(".tdots");
    if (slides.length === 0) return;
    let idx = 0;
    let timer;

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach((_, i) => {
        const d = document.createElement("button");
        d.className = "tdot" + (i === 0 ? " active" : "");
        d.setAttribute("aria-label", "Slide " + (i + 1));
        d.addEventListener("click", () => go(i, true));
        dotsWrap.appendChild(d);
      });
    }
    const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

    function go(i, manual) {
      slides[idx].classList.remove("active");
      dots[idx]?.classList.remove("active");
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add("active");
      dots[idx]?.classList.add("active");
      if (manual) restart();
    }
    function next() { go(idx + 1); }
    function start() { timer = setInterval(next, 6000); }
    function stop() { clearInterval(timer); }
    function restart() { stop(); start(); }

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    // Swipe
    let sx = 0;
    root.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1), true);
    });
    start();
  }

  /* ---------- 8. EMI mini-calculator ---------- */
  function initEmiMini() {
    const slider = document.getElementById("emiMiniSlider");
    if (!slider) return;
    const valEl = document.getElementById("emiMiniValue");
    const resultEl = document.getElementById("emiMiniResult");
    const tenure = 12;
    function fmt(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }
    function update() {
      const total = parseInt(slider.value, 10);
      if (valEl) valEl.textContent = fmt(total);
      if (resultEl) resultEl.textContent = fmt(total / tenure);
    }
    slider.addEventListener("input", update);
    update();
  }

  /* ---------- 9. Floating WhatsApp delayed entrance ---------- */
  function initWaFloat() {
    const wa = document.querySelector(".wa-float");
    if (!wa) return;
    setTimeout(() => wa.classList.add("in"), 1500);
  }

  /* ---------- 10. Custom cursor ---------- */
  function initCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 1024) return;
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;
    document.body.classList.add("cursor-on");
    let dx = 0, dy = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      dx = e.clientX; dy = e.clientY;
    });
    function tick() {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    const hoverable = "a, button, .chip, .product-card, .tdot, .cart-pill, .lang-toggle, [data-cursor-hover]";
    document.body.addEventListener("mouseover", e => {
      if (e.target.closest(hoverable)) ring.classList.add("cursor-hover");
    });
    document.body.addEventListener("mouseout", e => {
      if (e.target.closest(hoverable)) ring.classList.remove("cursor-hover");
    });
  }

  /* ---------- 11. Page transition ---------- */
  function initPageTransition() {
    const overlay = document.getElementById("pageTransition");
    if (!overlay) return;
    document.addEventListener("click", e => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;
      // Skip external, hash, mailto, tel, target=_blank, modifier keys
      if (
        a.target === "_blank" ||
        a.hasAttribute("download") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http") && !href.includes(location.host) ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
      ) return;
      // Same-page hash
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname && url.search === location.search) return;
      } catch (err) { return; }

      e.preventDefault();
      overlay.classList.add("fade-out");
      setTimeout(() => { window.location.href = a.href; }, 320);
    });
    // On show, ensure overlay is hidden (in case of bfcache restore)
    window.addEventListener("pageshow", () => overlay.classList.remove("fade-out"));
  }

  /* ---------- 12. Toast ---------- */
  let toastTimer;
  window.showToast = function (msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="icon">✓</span>${msg}`;
    toast.classList.add("in");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("in"), 2200);
  };

  /* ---------- 13. Newsletter mailto ---------- */
  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const email = form.querySelector("input[type=email]").value.trim();
      if (!email) return;
      window.showToast("Thanks — we'll be in touch.");
      form.reset();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initNavbar();
    initHamburger();
    initSmoothScroll();
    initReveal();
    initCounters();
    initTestimonials();
    initEmiMini();
    initWaFloat();
    initCursor();
    initPageTransition();
    initNewsletter();
  });
})();
