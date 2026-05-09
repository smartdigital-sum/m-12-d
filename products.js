/* =========================================================
   products.js — Product catalogue + filter + add-to-cart
   - PRODUCTS array (single source of truth)
   - window.AfhProducts.list (read-only access)
   - Renders product grids with [data-products] (home) and full grid on products.html
   - Category filter chips (data-cat)
   - Sort select (#sortSelect)
   - URL ?cat= param support
   - Add-to-cart and wishlist buttons wired
   ========================================================= */

(() => {
  "use strict";

  const PRODUCTS = [
    {
      id: "p001",
      name: "Maharaja Carved Bed",
      category: "bedroom",
      categoryLabel: "Bedroom",
      price: 64500,
      was: 78000,
      badge: "Bestseller",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616627562650-86eaeae3d72e?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Natural Honey",
      size: "King · 78 × 72 in",
      desc: "A heritage king-size bed with hand-carved Assamese motifs along the headboard, finished in a warm honey teak. Sleeps two adults comfortably with room to spare for a child.",
      featured: true
    },
    {
      id: "p002",
      name: "Velvet Lounge Sofa",
      category: "living",
      categoryLabel: "Living",
      price: 48500,
      was: 56000,
      rating: 4.7,
      reviews: 88,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham frame",
      finish: "Forest velvet",
      size: "3-seater · 78 in",
      desc: "A sheesham-framed three-seater upholstered in deep forest-green velvet — the kind of sofa you sink into after a long day.",
      featured: true
    },
    {
      id: "p003",
      name: "Banaras Dining Set (6-seater)",
      category: "dining",
      categoryLabel: "Dining",
      price: 87500,
      badge: "New",
      rating: 4.9,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Walnut Stain",
      size: "Table 72 × 36 in · 6 chairs",
      desc: "A grand teak dining table with brass-inlay accents along the edges, paired with six high-back upholstered chairs.",
      featured: true
    },
    {
      id: "p004",
      name: "Brass-Inlay Coffee Table",
      category: "living",
      categoryLabel: "Living",
      price: 18500,
      rating: 4.6,
      reviews: 41,
      image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham",
      finish: "Dark Walnut",
      size: "48 × 24 × 18 in",
      desc: "A low coffee table with traditional brass-pattra inlay along the top — handsome on its own and a quiet showstopper in any living room.",
      featured: true
    },
    {
      id: "p005",
      name: "Scholar's Study Desk",
      category: "study",
      categoryLabel: "Study",
      price: 24500,
      rating: 4.7,
      reviews: 63,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Antique Brown",
      size: "60 × 28 × 30 in",
      desc: "A large writing desk with three drawers, designed for a serious reader — broad enough for a laptop, books, and a brass lamp.",
      featured: true
    },
    {
      id: "p006",
      name: "Library Bookshelf",
      category: "study",
      categoryLabel: "Study",
      price: 32500,
      rating: 4.8,
      reviews: 52,
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Hollong",
      finish: "Natural",
      size: "72 × 36 × 14 in",
      desc: "Five tall shelves of Hollong hardwood, finished light to keep your library bright. Holds approximately 240 books."
    },
    {
      id: "p007",
      name: "Almirah Royal (3-door)",
      category: "wardrobe",
      categoryLabel: "Wardrobe",
      price: 56500,
      was: 64000,
      badge: "Sale",
      rating: 4.7,
      reviews: 71,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Mahogany Stain",
      size: "78 × 60 × 22 in",
      desc: "A traditional three-door almirah with a centre mirror panel, hanging space, and four full-width shelves.",
      featured: true
    },
    {
      id: "p008",
      name: "4-door Sliding Wardrobe",
      category: "wardrobe",
      categoryLabel: "Wardrobe",
      price: 78000,
      rating: 4.6,
      reviews: 38,
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Engineered ply + teak frame",
      finish: "Matte Cream",
      size: "84 × 96 × 24 in",
      desc: "A modern sliding-door wardrobe with internal LED, three drawers, and a full-height mirror on the centre door."
    },
    {
      id: "p009",
      name: "Wedding Throne Pair",
      category: "wedding",
      categoryLabel: "Wedding",
      price: 145000,
      badge: "Heritage",
      rating: 5.0,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1632322474318-bedb31a2b8b1?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1632322474318-bedb31a2b8b1?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Royal Gold-leaf",
      size: "Pair · 56 × 32 × 30 in each",
      desc: "A pair of carved teak thrones finished in gold leaf, designed for the bride and groom seat at traditional Assamese weddings.",
      featured: true
    },
    {
      id: "p010",
      name: "Bridal Vanity",
      category: "wedding",
      categoryLabel: "Wedding",
      price: 38500,
      rating: 4.8,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham",
      finish: "Ivory + brass",
      size: "48 × 22 × 60 in",
      desc: "A delicate three-mirror vanity with brass handles and a soft ivory finish — designed as a bridal gift but loved by every member of the family."
    },
    {
      id: "p011",
      name: "Reading Armchair",
      category: "living",
      categoryLabel: "Living",
      price: 22500,
      rating: 4.7,
      reviews: 47,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham",
      finish: "Mustard upholstery",
      size: "32 × 34 × 38 in",
      desc: "A high-back wingback armchair upholstered in mustard linen — designed to nest in a corner of your library or by a window."
    },
    {
      id: "p012",
      name: "Modular TV Unit",
      category: "living",
      categoryLabel: "Living",
      price: 28500,
      rating: 4.6,
      reviews: 51,
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Engineered + teak veneer",
      finish: "Forest matte",
      size: "84 × 18 × 24 in",
      desc: "A low-slung TV unit with three concealed drawers and an open shelf for your speaker. Cable management built in."
    },
    {
      id: "p013",
      name: "Carved Side Table",
      category: "bedroom",
      categoryLabel: "Bedroom",
      price: 9800,
      rating: 4.5,
      reviews: 29,
      image: "https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham",
      finish: "Honey Brown",
      size: "20 × 16 × 24 in",
      desc: "A small carved side table with a single drawer — perfect beside a bed or armchair."
    },
    {
      id: "p014",
      name: "Kid's Study Set",
      category: "study",
      categoryLabel: "Study",
      price: 18900,
      rating: 4.6,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Sheesham",
      finish: "Soft Cream",
      size: "Desk + chair · adjustable",
      desc: "A growing child's first proper desk — height-adjustable, with a paired chair, and rounded edges that won't bite small elbows."
    },
    {
      id: "p015",
      name: "Round Dining Set (4-seater)",
      category: "dining",
      categoryLabel: "Dining",
      price: 52500,
      rating: 4.7,
      reviews: 33,
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Honey",
      size: "48 in dia · 4 chairs",
      desc: "A round teak dining table for four — for nuclear families and small kitchens that still want to eat together."
    },
    {
      id: "p016",
      name: "Mandap Set (3-piece)",
      category: "wedding",
      categoryLabel: "Wedding",
      price: 185000,
      badge: "Bespoke",
      rating: 5.0,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=900&q=80&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1632322474318-bedb31a2b8b1?w=1200&q=80&auto=format&fit=crop"
      ],
      wood: "Solid Teak",
      finish: "Brass + ivory",
      size: "Mandap pillars + thrones + foot-rest",
      desc: "A complete bespoke mandap set — four carved pillars, a pair of thrones, and matching foot-rests. Built to order over 8 weeks."
    }
  ];

  /* ---------- Helpers ---------- */
  function rupee(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }

  function emiPerMonth(price, months = 12) {
    return Math.round(price / months);
  }

  function ratingStars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    let s = "★".repeat(full);
    if (half) s += "½";
    s += "☆".repeat(5 - full - (half ? 1 : 0));
    return s.slice(0, 5 + (half ? 1 : 0));
  }

  /* ---------- Card renderer ---------- */
  function cardHTML(p) {
    const wished = window.AfhWishlist && window.AfhWishlist.has(p.id);
    const inCart = window.AfhCart && window.AfhCart.has(p.id);
    return `
      <article class="product-card reveal" data-id="${p.id}">
        <div class="product-card-img">
          <a href="product.html?id=${p.id}" aria-label="${p.name}">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </a>
          ${p.badge ? `<span class="product-badge ${p.badge === "Sale" ? "brass" : ""}">${p.badge}</span>` : ""}
          <button class="product-wishlist ${wished ? "active" : ""}" data-action="wishlist" aria-label="Add to wishlist">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>
            </svg>
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-cat">${p.categoryLabel}</div>
          <h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
          <div class="product-rating"><span class="stars">${ratingStars(p.rating)}</span> ${p.rating.toFixed(1)} <span>· ${p.reviews} reviews</span></div>
          <div class="product-price">
            <span class="now">${rupee(p.price)}</span>
            ${p.was ? `<span class="was">${rupee(p.was)}</span>` : ""}
          </div>
          <div class="product-emi"><span data-i18n="common.emi_from">EMI from</span> <strong>${rupee(emiPerMonth(p.price, 12))}</strong><span data-i18n="common.per_month">/mo</span></div>
          <div class="product-actions">
            <button class="btn btn-primary" data-action="add" ${inCart ? 'data-incart="1"' : ""}>
              <span>${inCart ? "✓ " : ""}</span><span data-i18n="${inCart ? "common.added" : "common.add_to_cart"}">${inCart ? "Added" : "Add to cart"}</span>
            </button>
            <a href="product.html?id=${p.id}" class="btn btn-outline" data-i18n="common.view">View</a>
          </div>
        </div>
      </article>
    `;
  }

  /* ---------- Featured / generic grids ---------- */
  function renderFeatured() {
    document.querySelectorAll("[data-products]").forEach(grid => {
      const which = grid.getAttribute("data-products"); // "featured" or "all"
      const limit = parseInt(grid.getAttribute("data-limit") || "0", 10);
      let list = PRODUCTS;
      if (which === "featured") list = list.filter(p => p.featured);
      if (limit > 0) list = list.slice(0, limit);
      grid.innerHTML = list.map(cardHTML).join("");
      if (window.I18n) window.I18n.applyTo(grid);
      attachCardHandlers(grid);
      requestAnimationFrame(() => {
        grid.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
      });
    });
  }

  function attachCardHandlers(root) {
    root.addEventListener("click", e => {
      const card = e.target.closest(".product-card");
      if (!card) return;
      const id = card.dataset.id;
      const wishBtn = e.target.closest('[data-action="wishlist"]');
      const addBtn = e.target.closest('[data-action="add"]');
      if (wishBtn) {
        e.preventDefault();
        if (!window.AfhWishlist) return;
        window.AfhWishlist.toggle(id);
        wishBtn.classList.toggle("active", window.AfhWishlist.has(id));
        window.showToast && window.showToast(window.AfhWishlist.has(id) ? "Saved to wishlist" : "Removed from wishlist");
      } else if (addBtn) {
        e.preventDefault();
        if (!window.AfhCart) return;
        window.AfhCart.add(id, 1);
        window.showToast && window.showToast(window.I18n ? window.I18n.t("common.added_toast") : "Added to cart");
      }
    });
  }

  /* ---------- Products page filter + sort ---------- */
  function initProductsPage() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const chips = document.querySelectorAll(".filter-chips .chip");
    const sortSel = document.getElementById("sortSelect");
    const noResults = document.getElementById("noResults");

    let activeCat = "all";
    let activeSort = "featured";

    // URL param
    const params = new URLSearchParams(location.search);
    const urlCat = params.get("cat");
    if (urlCat) activeCat = urlCat;

    function render() {
      let list = PRODUCTS.slice();
      if (activeCat !== "all") list = list.filter(p => p.category === activeCat);
      switch (activeSort) {
        case "low": list.sort((a, b) => a.price - b.price); break;
        case "high": list.sort((a, b) => b.price - a.price); break;
        case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
        case "featured":
        default: list.sort((a, b) => (b.featured === true) - (a.featured === true)); break;
      }
      if (list.length === 0) {
        grid.innerHTML = "";
        noResults && (noResults.style.display = "block");
      } else {
        noResults && (noResults.style.display = "none");
        grid.innerHTML = list.map(cardHTML).join("");
        if (window.I18n) window.I18n.applyTo(grid);
        // Trigger reveal immediately for newly-rendered cards
        requestAnimationFrame(() => {
          grid.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
        });
      }
    }

    chips.forEach(c => {
      c.addEventListener("click", () => {
        chips.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
        activeCat = c.dataset.cat;
        // Update URL without reload
        const u = new URL(location.href);
        if (activeCat === "all") u.searchParams.delete("cat");
        else u.searchParams.set("cat", activeCat);
        history.replaceState(null, "", u.toString());
        render();
      });
      if (c.dataset.cat === activeCat) {
        chips.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
      }
    });

    if (sortSel) {
      sortSel.addEventListener("change", () => {
        activeSort = sortSel.value;
        render();
      });
    }

    document.addEventListener("cart:changed", render);
    document.addEventListener("wishlist:changed", render);
    document.addEventListener("i18n:changed", render);
    attachCardHandlers(grid);
    render();
  }

  /* ---------- Single product page ---------- */
  function initProductPage() {
    const root = document.getElementById("productPage");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

    const main = root.querySelector("#pdMain");
    const thumbs = root.querySelector("#pdThumbs");
    const title = root.querySelector("#pdTitle");
    const cat = root.querySelector("#pdCat");
    const rating = root.querySelector("#pdRating");
    const price = root.querySelector("#pdPrice");
    const desc = root.querySelector("#pdDesc");
    const specs = root.querySelector("#pdSpec");
    const breadcat = root.querySelector("#pdBreadcrumbCat");

    if (main) main.innerHTML = `<img src="${p.images[0]}" alt="${p.name}">`;
    if (thumbs) {
      thumbs.innerHTML = p.images.map((src, i) => `
        <button class="pd-thumb ${i === 0 ? "active" : ""}" data-idx="${i}" aria-label="Image ${i + 1}">
          <img src="${src}" alt="">
        </button>
      `).join("");
      thumbs.addEventListener("click", e => {
        const t = e.target.closest(".pd-thumb");
        if (!t) return;
        thumbs.querySelectorAll(".pd-thumb").forEach(x => x.classList.remove("active"));
        t.classList.add("active");
        main.querySelector("img").src = p.images[parseInt(t.dataset.idx, 10)];
      });
    }
    if (title) title.textContent = p.name;
    if (cat) cat.textContent = p.categoryLabel;
    if (breadcat) {
      breadcat.textContent = p.categoryLabel;
      breadcat.setAttribute("href", `products.html?cat=${p.category}`);
    }
    if (rating) rating.innerHTML = `<span class="stars">${ratingStars(p.rating)}</span> ${p.rating.toFixed(1)} <span>· ${p.reviews} reviews</span>`;
    if (price) {
      price.innerHTML = `
        <span class="now">${rupee(p.price)}</span>
        ${p.was ? `<span class="was">${rupee(p.was)}</span>` : ""}
      `;
    }
    if (desc) desc.textContent = p.desc;
    if (specs) {
      specs.innerHTML = `
        <div><dt>Wood</dt><dd>${p.wood}</dd></div>
        <div><dt>Finish</dt><dd>${p.finish}</dd></div>
        <div><dt>Size</dt><dd>${p.size}</dd></div>
        <div><dt>EMI from</dt><dd>${rupee(emiPerMonth(p.price, 12))}/mo · 12m</dd></div>
      `;
    }
    document.title = `${p.name} · Assam Furniture House`;

    const addBtn = root.querySelector("#pdAdd");
    const wishBtn = root.querySelector("#pdWish");
    const waBtn = root.querySelector("#pdWa");

    function syncButtons() {
      if (window.AfhCart) {
        const inCart = window.AfhCart.has(p.id);
        addBtn.innerHTML = inCart
          ? '✓ <span data-i18n="common.added">Added</span>'
          : '<span data-i18n="common.add_to_cart">Add to cart</span>';
        if (window.I18n) window.I18n.applyTo(addBtn);
      }
      if (window.AfhWishlist) {
        wishBtn.classList.toggle("active", window.AfhWishlist.has(p.id));
      }
    }
    addBtn?.addEventListener("click", () => {
      window.AfhCart && window.AfhCart.add(p.id, 1);
      window.showToast && window.showToast("Added to cart");
    });
    wishBtn?.addEventListener("click", () => {
      window.AfhWishlist && window.AfhWishlist.toggle(p.id);
      syncButtons();
    });
    if (waBtn) {
      const txt = encodeURIComponent(`Hello, I would like to enquire about: ${p.name} (${p.size}). Please share availability and EMI options.`);
      waBtn.href = `https://wa.me/919876543210?text=${txt}`;
    }
    document.addEventListener("cart:changed", syncButtons);
    document.addEventListener("wishlist:changed", syncButtons);
    syncButtons();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    initProductsPage();
    initProductPage();
  });

  /* ---------- Expose ---------- */
  window.AfhProducts = {
    list: PRODUCTS,
    rupee,
    emiPerMonth,
    cardHTML
  };
})();
