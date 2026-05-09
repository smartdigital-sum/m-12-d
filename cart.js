/* =========================================================
   cart.js — Cart + Wishlist state machine (localStorage)
   - window.AfhCart with add/remove/update/clear/getItems
   - window.AfhWishlist with add/remove/has/getItems
   - Cross-tab sync via storage event
   - Renders cart + wishlist pill counts
   - Renders cart.html review tables when present
   - Builds WhatsApp checkout message
   ========================================================= */

(() => {
  "use strict";

  const CART_KEY = "afh_cart_v1";
  const WISH_KEY = "afh_wishlist_v1";
  const WA_NUMBER = "919876543210"; // store WhatsApp number

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { /* quota or disabled */ }
  }

  /* ---------- Cart ---------- */
  const Cart = (() => {
    let items = readJSON(CART_KEY, []); // [{id, qty}]

    function persist() {
      writeJSON(CART_KEY, items);
      dispatch();
    }
    function dispatch() {
      document.dispatchEvent(new CustomEvent("cart:changed", { detail: { items: getItems() } }));
    }
    function add(id, qty = 1) {
      const existing = items.find(i => i.id === id);
      if (existing) existing.qty = Math.min(99, existing.qty + qty);
      else items.push({ id, qty });
      persist();
    }
    function remove(id) {
      items = items.filter(i => i.id !== id);
      persist();
    }
    function update(id, qty) {
      const it = items.find(i => i.id === id);
      if (!it) return;
      if (qty <= 0) remove(id);
      else { it.qty = Math.min(99, qty); persist(); }
    }
    function clear() { items = []; persist(); }
    function getItems() { return items.slice(); }
    function count() { return items.reduce((s, i) => s + i.qty, 0); }
    function has(id) { return items.some(i => i.id === id); }
    function reload() { items = readJSON(CART_KEY, []); dispatch(); }

    return { add, remove, update, clear, getItems, count, has, reload };
  })();

  /* ---------- Wishlist ---------- */
  const Wishlist = (() => {
    let items = readJSON(WISH_KEY, []); // [id]

    function persist() {
      writeJSON(WISH_KEY, items);
      document.dispatchEvent(new CustomEvent("wishlist:changed", { detail: { items: getItems() } }));
    }
    function add(id) {
      if (!items.includes(id)) items.push(id);
      persist();
    }
    function remove(id) {
      items = items.filter(i => i !== id);
      persist();
    }
    function toggle(id) {
      if (items.includes(id)) remove(id);
      else add(id);
    }
    function has(id) { return items.includes(id); }
    function getItems() { return items.slice(); }
    function count() { return items.length; }
    function reload() { items = readJSON(WISH_KEY, []); persist(); }

    return { add, remove, toggle, has, getItems, count, reload };
  })();

  /* ---------- Pill UI ---------- */
  function renderPills() {
    const cartCount = Cart.count();
    const wishCount = Wishlist.count();
    document.querySelectorAll("[data-cart-count]").forEach(el => {
      el.textContent = cartCount;
      el.closest(".cart-pill")?.classList.toggle("has-items", cartCount > 0);
    });
    document.querySelectorAll("[data-wishlist-count]").forEach(el => {
      el.textContent = wishCount;
      el.closest(".cart-pill")?.classList.toggle("has-items", wishCount > 0);
    });
  }

  function bumpCartPill() {
    document.querySelectorAll("[data-cart-count]").forEach(el => {
      const pill = el.closest(".cart-pill");
      if (!pill) return;
      pill.classList.remove("bump");
      void pill.offsetWidth;
      pill.classList.add("bump");
    });
  }

  /* ---------- WhatsApp message builder ---------- */
  function rupee(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }

  function buildOrderMessage(name, phone) {
    const products = (window.AfhProducts && window.AfhProducts.list) || [];
    const lines = [];
    lines.push("Hello Assam Furniture House,");
    lines.push("");
    lines.push("I would like to enquire about the following items:");
    lines.push("");
    let subtotal = 0;
    Cart.getItems().forEach((it, i) => {
      const p = products.find(pp => pp.id === it.id);
      if (!p) return;
      const line = p.price * it.qty;
      subtotal += line;
      lines.push(`${i + 1}. ${p.name} (${p.category}) — qty ${it.qty} — ${rupee(line)}`);
    });
    lines.push("");
    lines.push(`Subtotal: ${rupee(subtotal)}`);
    lines.push(`Delivery: Free (Nagaon district)`);
    lines.push(`Total: ${rupee(subtotal)}`);
    if (name) lines.push(`\nName: ${name}`);
    if (phone) lines.push(`Phone: ${phone}`);
    lines.push(`\nPlease confirm availability and EMI options. Thank you.`);
    return lines.join("\n");
  }

  function checkoutWhatsApp(name, phone) {
    if (Cart.count() === 0) {
      window.showToast && window.showToast("Cart is empty");
      return;
    }
    const msg = buildOrderMessage(name, phone);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  /* ---------- Cart page rendering ---------- */
  function renderCartPage() {
    const root = document.getElementById("cartPage");
    if (!root) return;
    const products = (window.AfhProducts && window.AfhProducts.list) || [];
    const tabCart = root.querySelector('[data-tab="cart"]');
    const tabWish = root.querySelector('[data-tab="wishlist"]');
    const cartList = root.querySelector("#cartList");
    const wishList = root.querySelector("#wishList");
    const cartCountTab = root.querySelector("#cartTabCount");
    const wishCountTab = root.querySelector("#wishTabCount");
    const summarySub = root.querySelector("#sumSubtotal");
    const summaryTotal = root.querySelector("#sumTotal");
    const summaryCount = root.querySelector("#sumCount");
    const cartPanel = root.querySelector("#cartPanel");
    const wishPanel = root.querySelector("#wishPanel");

    function renderCartList() {
      const items = Cart.getItems();
      cartCountTab.textContent = items.reduce((s, i) => s + i.qty, 0);
      if (items.length === 0) {
        cartList.innerHTML = `
          <div class="cart-empty">
            <div class="icon">🛍</div>
            <h3 data-i18n="common.empty_cart_t">Your cart is empty</h3>
            <p data-i18n="common.empty_cart_s">Browse the collection and add a few favourites.</p>
            <a href="products.html" class="btn btn-primary" data-i18n="common.browse">Browse products</a>
          </div>`;
        if (window.I18n) window.I18n.applyTo(cartList);
        return 0;
      }
      let subtotal = 0;
      cartList.innerHTML = items.map(it => {
        const p = products.find(pp => pp.id === it.id);
        if (!p) return "";
        const line = p.price * it.qty;
        subtotal += line;
        return `
          <div class="cart-item" data-id="${p.id}">
            <a href="product.html?id=${p.id}" class="cart-item-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
            <div class="cart-item-info">
              <div class="cart-item-cat">${p.categoryLabel}</div>
              <h4>${p.name}</h4>
              <div class="cart-item-price">${rupee(p.price)}</div>
            </div>
            <div class="cart-item-controls">
              <div class="qty-stepper" role="group" aria-label="Quantity">
                <button data-qty="-1" aria-label="Decrease">−</button>
                <span class="qty-val">${it.qty}</span>
                <button data-qty="1" aria-label="Increase">+</button>
              </div>
              <button class="cart-item-remove" data-action="remove" data-i18n="common.save_for_later">Save for later</button>
            </div>
          </div>
        `;
      }).join("");
      if (window.I18n) window.I18n.applyTo(cartList);
      return subtotal;
    }

    function renderWishList() {
      const ids = Wishlist.getItems();
      wishCountTab.textContent = ids.length;
      if (ids.length === 0) {
        wishList.innerHTML = `
          <div class="cart-empty">
            <div class="icon">♡</div>
            <h3 data-i18n="common.empty_wishlist_t">Your wishlist is empty</h3>
            <p data-i18n="common.empty_wishlist_s">Tap the heart on any product to save it here.</p>
            <a href="products.html" class="btn btn-primary" data-i18n="common.browse">Browse products</a>
          </div>`;
        if (window.I18n) window.I18n.applyTo(wishList);
        return;
      }
      wishList.innerHTML = ids.map(id => {
        const p = products.find(pp => pp.id === id);
        if (!p) return "";
        return `
          <div class="cart-item" data-id="${p.id}">
            <a href="product.html?id=${p.id}" class="cart-item-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
            <div class="cart-item-info">
              <div class="cart-item-cat">${p.categoryLabel}</div>
              <h4>${p.name}</h4>
              <div class="cart-item-price">${rupee(p.price)}</div>
            </div>
            <div class="cart-item-controls">
              <button class="btn btn-brass btn-sm" data-action="move-to-cart" data-i18n="common.move_to_cart">Move to cart</button>
              <button class="cart-item-remove" data-action="wish-remove" data-i18n="common.remove">Remove</button>
            </div>
          </div>
        `;
      }).join("");
      if (window.I18n) window.I18n.applyTo(wishList);
    }

    function renderSummary(subtotal) {
      const items = Cart.getItems();
      const count = items.reduce((s, i) => s + i.qty, 0);
      summaryCount.textContent = count;
      summarySub.textContent = rupee(subtotal);
      summaryTotal.textContent = rupee(subtotal);
    }

    function update() {
      const subtotal = renderCartList();
      renderWishList();
      renderSummary(subtotal);
    }

    // Tab switching
    function switchTab(name) {
      tabCart.classList.toggle("active", name === "cart");
      tabWish.classList.toggle("active", name === "wishlist");
      cartPanel.style.display = name === "cart" ? "" : "none";
      wishPanel.style.display = name === "wishlist" ? "" : "none";
    }
    tabCart.addEventListener("click", () => switchTab("cart"));
    tabWish.addEventListener("click", () => switchTab("wishlist"));

    // Item delegation
    cartList.addEventListener("click", e => {
      const item = e.target.closest(".cart-item");
      if (!item) return;
      const id = item.dataset.id;
      if (e.target.matches("[data-qty]")) {
        const delta = parseInt(e.target.dataset.qty, 10);
        const cur = Cart.getItems().find(i => i.id === id);
        if (cur) Cart.update(id, cur.qty + delta);
      } else if (e.target.matches('[data-action="remove"]')) {
        // Save for later → wishlist
        const cur = Cart.getItems().find(i => i.id === id);
        if (cur) {
          Wishlist.add(id);
          Cart.remove(id);
          window.showToast && window.showToast("Saved for later");
        }
      }
    });
    wishList.addEventListener("click", e => {
      const item = e.target.closest(".cart-item");
      if (!item) return;
      const id = item.dataset.id;
      if (e.target.matches('[data-action="move-to-cart"]')) {
        Cart.add(id, 1);
        Wishlist.remove(id);
        bumpCartPill();
        window.showToast && window.showToast("Moved to cart");
      } else if (e.target.matches('[data-action="wish-remove"]')) {
        Wishlist.remove(id);
      }
    });

    // Checkout button
    const checkoutBtn = root.querySelector("#checkoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        const name = (root.querySelector("#custName")?.value || "").trim();
        const phone = (root.querySelector("#custPhone")?.value || "").trim();
        checkoutWhatsApp(name, phone);
      });
    }

    document.addEventListener("cart:changed", update);
    document.addEventListener("wishlist:changed", update);
    document.addEventListener("i18n:changed", update);
    update();
  }

  /* ---------- Cross-tab sync ---------- */
  window.addEventListener("storage", e => {
    if (e.key === CART_KEY) Cart.reload();
    if (e.key === WISH_KEY) Wishlist.reload();
  });

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderPills();
    document.addEventListener("cart:changed", () => { renderPills(); bumpCartPill(); });
    document.addEventListener("wishlist:changed", renderPills);
    renderCartPage();
  });

  /* ---------- Expose ---------- */
  window.AfhCart = Cart;
  window.AfhWishlist = Wishlist;
  window.AfhCheckout = checkoutWhatsApp;
})();
