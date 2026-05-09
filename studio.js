/* =========================================================
   studio.js — Design Studio: wood + finish + EMI calculator
   - 4 wood options × 6 finish options
   - 3 sliders (price, down payment, tenure)
   - Live EMI computation
   - Send-my-plan WhatsApp message
   ========================================================= */

(() => {
  "use strict";

  const root = document.getElementById("studioPage");
  if (!root) return;

  const WA_NUMBER = "919876543210";

  const WOODS = [
    { id: "teak", name: "Solid Teak", price_mod: 1.0, swatch: "linear-gradient(135deg, #c08a52, #8e5b29)", desc: "Hard, weather-resistant, ages to a deep honey" },
    { id: "sheesham", name: "Sheesham", price_mod: 0.85, swatch: "linear-gradient(135deg, #6e3b22, #3e1d10)", desc: "Dense, dark, traditional Northeast Indian hardwood" },
    { id: "hollong", name: "Hollong", price_mod: 0.78, swatch: "linear-gradient(135deg, #d4a874, #a87a48)", desc: "Native Assamese hardwood, light and bright" },
    { id: "engineered", name: "Engineered + teak veneer", price_mod: 0.65, swatch: "linear-gradient(135deg, #c4a378, #8e6e44)", desc: "Modern, affordable, dimensionally stable" }
  ];

  const FINISHES = [
    { id: "natural", name: "Natural", swatch: "#c8a376" },
    { id: "honey", name: "Honey", swatch: "#a47139" },
    { id: "walnut", name: "Walnut", swatch: "#5a3622" },
    { id: "ebony", name: "Ebony", swatch: "#1d1410" },
    { id: "cream", name: "Soft Cream", swatch: "#e6d4ad" },
    { id: "ivory", name: "Ivory + Brass", swatch: "linear-gradient(135deg, #efe2c4, #b08d3f)" }
  ];

  const state = {
    wood: WOODS[0],
    finish: FINISHES[1],
    price: 60000,
    down: 0,
    tenure: 12
  };

  /* ---------- Render option grids ---------- */
  function renderWoods() {
    const grid = root.querySelector("#woodGrid");
    grid.innerHTML = WOODS.map((w, i) => `
      <button type="button" class="option-card ${i === 0 ? "selected" : ""}" data-wood="${w.id}">
        <div class="option-swatch" style="background: ${w.swatch};"></div>
        <strong>${w.name}</strong>
        <span>${w.desc}</span>
      </button>
    `).join("");
    grid.addEventListener("click", e => {
      const c = e.target.closest("[data-wood]");
      if (!c) return;
      grid.querySelectorAll(".option-card").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      state.wood = WOODS.find(w => w.id === c.dataset.wood);
      update();
    });
  }

  function renderFinishes() {
    const grid = root.querySelector("#finishGrid");
    grid.innerHTML = FINISHES.map((f, i) => `
      <button type="button" class="option-card ${i === 1 ? "selected" : ""}" data-finish="${f.id}">
        <div class="option-swatch" style="background: ${f.swatch};"></div>
        <strong>${f.name}</strong>
      </button>
    `).join("");
    grid.addEventListener("click", e => {
      const c = e.target.closest("[data-finish]");
      if (!c) return;
      grid.querySelectorAll(".option-card").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      state.finish = FINISHES.find(f => f.id === c.dataset.finish);
      update();
    });
  }

  /* ---------- Sliders ---------- */
  const priceSlider = root.querySelector("#priceSlider");
  const priceLabel = root.querySelector("#priceLabel");
  const downSlider = root.querySelector("#downSlider");
  const downLabel = root.querySelector("#downLabel");
  const tenureSlider = root.querySelector("#tenureSlider");
  const tenureLabel = root.querySelector("#tenureLabel");
  const monthlyEl = root.querySelector("#monthlyEmi");
  const adjPriceEl = root.querySelector("#adjPrice");
  const sendBtn = root.querySelector("#sendPlan");

  function rupee(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }

  function update() {
    state.price = parseInt(priceSlider.value, 10);
    state.down = Math.min(parseInt(downSlider.value, 10), state.price - 5000);
    if (parseInt(downSlider.value, 10) !== state.down) downSlider.value = state.down;
    state.tenure = parseInt(tenureSlider.value, 10);

    // Adjust max down based on price
    downSlider.max = Math.max(5000, Math.floor(state.price * 0.6));

    const adjustedPrice = Math.round(state.price * state.wood.price_mod);
    const financed = Math.max(0, adjustedPrice - state.down);
    const monthly = state.tenure > 0 ? financed / state.tenure : financed;

    priceLabel.textContent = rupee(state.price);
    downLabel.textContent = rupee(state.down);
    tenureLabel.textContent = state.tenure + (window.I18n && window.I18n.get() === "as" ? " মাহ" : " months");
    monthlyEl.textContent = rupee(monthly);
    adjPriceEl.textContent = rupee(adjustedPrice);
  }

  [priceSlider, downSlider, tenureSlider].forEach(s => s.addEventListener("input", update));

  sendBtn.addEventListener("click", () => {
    const adjustedPrice = Math.round(state.price * state.wood.price_mod);
    const financed = Math.max(0, adjustedPrice - state.down);
    const monthly = state.tenure > 0 ? financed / state.tenure : financed;
    const lines = [
      "Hello Assam Furniture House,",
      "",
      "I have built a plan in your Design Studio:",
      "",
      `Wood: ${state.wood.name}`,
      `Finish: ${state.finish.name}`,
      `Estimated price: ${rupee(adjustedPrice)}`,
      `Down payment: ${rupee(state.down)}`,
      `Tenure: ${state.tenure} months`,
      `Monthly EMI: ${rupee(monthly)}`,
      "",
      "Please share availability and a final quote. Thank you."
    ];
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  });

  document.addEventListener("i18n:changed", update);

  renderWoods();
  renderFinishes();
  update();
})();
