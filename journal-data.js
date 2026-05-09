/* =========================================================
   journal-data.js — 3 articles + render helpers for journal pages
   - window.AfhJournal.list (article list)
   - window.AfhJournal.bySlug(slug)
   - Renders listing on journal.html
   - Renders single post on journal-post.html (?slug=...)
   ========================================================= */

(() => {
  "use strict";

  const ARTICLES = [
    {
      slug: "teak-vs-sheesham",
      tag: "Wood Notes",
      title: "Teak vs Sheesham — choosing wood for Assam's humidity",
      excerpt: "Why our grandparents chose teak, why we still recommend it, and when sheesham is the better answer.",
      cover: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=1400&q=80&auto=format&fit=crop",
      date: "March 12, 2026",
      readTime: "6 min read",
      author: "Anurag Bordoloi",
      body: `
        <p>Step into any older home in Nagaon district and you will find a teak almirah. Sometimes it has been there for fifty years. Often the family has stopped noticing it. The grain is darker than the day it was bought; the brass handles have settled into a soft patina; and the wood has not warped, not cracked, not surrendered to a single monsoon.</p>
        <p>That is the case for teak in Assam, made simply.</p>

        <h2>What teak does that other woods don't</h2>
        <p>Teak (<em>Tectona grandis</em>) carries a natural oil — tectoquinone — that repels water, fungi, and termites. In a state where the relative humidity sits above 80% for four months of the year, this is not a small advantage. It is the difference between furniture that lasts a lifetime and furniture that is replaced every decade.</p>
        <p>Three properties make teak the default choice for Assamese furniture:</p>
        <ul>
          <li><strong>Dimensional stability.</strong> Teak swells and contracts less than almost any other hardwood available in India. Joints stay tight; doors keep aligning; drawers keep sliding.</li>
          <li><strong>Rot resistance.</strong> The natural oils continue working long after the tree has been felled. A piece of teak left out in the rain will last decades — that is why the British navy used it for decking.</li>
          <li><strong>The patina.</strong> Teak ages beautifully. The honey colour deepens to a rich amber over years, and the grain becomes more pronounced with use. Few woods reward patience like this.</li>
        </ul>

        <blockquote>"My grandfather bought a teak bed in 1971 for the dowry of his eldest daughter. I sleep on it now. The mattress has been replaced twice. The bed has not."</blockquote>

        <h2>Where sheesham wins</h2>
        <p>This is not, however, a sermon for teak. Sheesham (Indian rosewood, <em>Dalbergia sissoo</em>) has its own argument, and we make a great deal of furniture from it.</p>
        <p>Sheesham is denser and harder than teak. The grain is darker, almost chocolate, with rich figure. It carves well — which is why our wedding thrones are often built in sheesham. It also costs about 15% less, which matters when you are buying a full bedroom set.</p>
        <p>The trade-off is durability over time. Sheesham is more sensitive to moisture; in our climate, sheesham furniture should ideally not sit directly against an exterior wall, and the joints benefit from a check every few years.</p>

        <h2>What we actually recommend</h2>
        <p>For pieces that will see heavy daily use — beds, almirahs, dining tables — we recommend solid teak. The price difference pays itself back many times over the life of the piece.</p>
        <p>For decorative or carved pieces — wedding thrones, bridal vanities, side tables — sheesham is often the better choice. The carving holds detail more crisply, and the dark grain feels more ceremonial.</p>
        <p>For modern modular pieces — sliding wardrobes, TV units — we use engineered ply with a teak veneer. It is dimensionally stable, lighter, and lets us hit price points solid wood cannot.</p>

        <h2>A note on the trees</h2>
        <p>All our teak is sourced from plantation forests certified by the Assam Forest Department. We do not use old-growth teak. Sheesham is sourced from regulated supply in Punjab and Uttar Pradesh, also plantation-grown.</p>
        <p>We are happy to walk you through the certificates the next time you visit the workshop.</p>
      `
    },
    {
      slug: "wedding-buying-guide",
      tag: "Weddings",
      title: "Wedding furniture buying guide for Kampur families",
      excerpt: "What to budget, what to keep heirloom, and which pieces always come with the bride.",
      cover: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1400&q=80&auto=format&fit=crop",
      date: "February 21, 2026",
      readTime: "8 min read",
      author: "Hiren Bordoloi",
      body: `
        <p>For most families in Nagaon district, the largest furniture purchase of a generation happens before a wedding. We have been part of this conversation for twenty-eight years, and we have learned a few things worth writing down.</p>

        <h2>Start eighteen months out, not three</h2>
        <p>The single biggest mistake we see is families who walk into the showroom four weeks before the marriage. Solid wood furniture takes time. A bespoke wedding throne pair takes us six to eight weeks. A full bedroom set takes ten weeks. A complete dowry set — bed, almirah, vanity, dining set, sofa, throne — takes us four to five months.</p>
        <p>If you are reading this and the wedding is six months away, today is a good day to start.</p>

        <h2>What to budget</h2>
        <p>For a complete dowry set in solid teak, families in our region typically budget between ₹3,50,000 and ₹6,50,000. The wide range reflects two choices: how many pieces, and how much carving.</p>
        <ul>
          <li><strong>Bed:</strong> ₹55,000 — ₹85,000</li>
          <li><strong>Almirah (3-door):</strong> ₹50,000 — ₹70,000</li>
          <li><strong>Bridal vanity:</strong> ₹35,000 — ₹50,000</li>
          <li><strong>Dining set (6-seater):</strong> ₹75,000 — ₹1,10,000</li>
          <li><strong>Sofa set (3+1+1):</strong> ₹65,000 — ₹95,000</li>
          <li><strong>Wedding throne pair:</strong> ₹1,20,000 — ₹1,80,000</li>
        </ul>
        <p>These are our rates. Most of our customers use 0% EMI for 18 to 24 months — the dowry doesn't need to be paid in one lump.</p>

        <h2>Which pieces become heirloom</h2>
        <p>Three pieces in a wedding set tend to outlast the wedding itself by decades. Spend disproportionately on these:</p>
        <ol>
          <li><strong>The bed.</strong> It will be in daily use for thirty to fifty years. Buy in solid teak. Don't compromise on the joinery.</li>
          <li><strong>The almirah.</strong> The almirah travels with the bride to her new home and often passes to her own daughter. Choose a classical design — three-door with a centre mirror is timeless.</li>
          <li><strong>The wedding throne pair.</strong> This is the most photographed piece of furniture you will ever own. Worth the carving, worth the gold leaf, worth the wait.</li>
        </ol>

        <blockquote>"The thrones we made for Mrs. Kakoti's wedding in 2009 were used again at her son's wedding in 2024. Same thrones, two generations."</blockquote>

        <h2>Which pieces are okay to economise on</h2>
        <p>Conversely, three pieces in most wedding sets are over-bought:</p>
        <ul>
          <li><strong>Side tables.</strong> A simple sheesham side table at ₹9,000 looks identical at six feet to a ₹25,000 carved teak one. Save here.</li>
          <li><strong>Sofa upholstery.</strong> The fabric will need re-doing in seven to ten years anyway. Spend on the frame, not the cover.</li>
          <li><strong>The dressing table.</strong> Vanities go out of fashion faster than other pieces. A reasonable mid-range option lasts the lifetime of its purpose.</li>
        </ul>

        <h2>The conversation worth having</h2>
        <p>Before you visit a showroom, sit down with the parents on both sides and have one frank conversation about budget. Many families don't, and the misalignments only surface when the artisan has already begun the work.</p>
        <p>We will happily quote three versions of any plan — modest, mid, premium — so the family can choose with their eyes open.</p>

        <h2>One last thing</h2>
        <p>Don't choose your wedding furniture from a catalogue. Visit a workshop. Touch the wood. Look at how the joints are cut. Ask the artisan how long he has been doing this. The piece you bring home will be in your child's wedding photo. It deserves a few hours of your time.</p>
        <p>Our showroom is open Mon–Sat. We will keep tea ready.</p>
      `
    },
    {
      slug: "monsoon-care",
      tag: "Care",
      title: "Caring for solid wood through the Assam monsoon",
      excerpt: "A short, practical checklist for the four months when furniture earns its keep.",
      cover: "https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?w=1400&q=80&auto=format&fit=crop",
      date: "January 18, 2026",
      readTime: "5 min read",
      author: "Anurag Bordoloi",
      body: `
        <p>The Assam monsoon arrives in mid-June and stays until early October. For most of those four months, the air carries between 80% and 95% relative humidity. Solid wood does not love this. With small care, however, your furniture will pass through the monsoon untouched. Without it, even teak can develop problems.</p>
        <p>Here is the checklist we share with every customer.</p>

        <h2>1. Move pieces away from exterior walls</h2>
        <p>Exterior walls in our region get damp through the monsoon — not visibly, but enough to transfer moisture to anything pressed against them. Leave at least four inches between any piece of solid wood furniture and the outer walls of the house. This single change prevents 80% of monsoon damage we see.</p>

        <h2>2. Wax once before the rains begin</h2>
        <p>A coat of beeswax-based furniture polish applied in late May seals the surface against ambient moisture. We sell a workshop-blended polish at the showroom, but any quality beeswax-based polish will do. Apply with a soft cloth, in the direction of the grain, and buff dry after an hour.</p>
        <p>Do not use spray polishes — they contain silicones that build up over years and prevent re-finishing.</p>

        <h2>3. Use damp-rid sachets in almirahs and wardrobes</h2>
        <p>Inside enclosed cabinets, humidity climbs higher than the room. Place 2–3 calcium chloride desiccant sachets (commonly sold as "DampRid" or "Bambooria") on the floor of every almirah and wardrobe. Replace them once a month through the rains. Your clothes will thank you. So will the wood.</p>

        <blockquote>"My almirah from 2008 — sixteen monsoons, no warping. We started with the desiccants in the second monsoon. Wish we'd known sooner."</blockquote>

        <h2>4. Watch for sticking drawers</h2>
        <p>If a drawer or door begins to stick during the monsoon, do not force it. Wood swells; forcing closed a swollen drawer can split the runner. Wait two days; the swelling usually relaxes. If it persists, rub a little candle wax on the runners — never sandpaper, never planer. The drawer will fit again in October when the air dries out.</p>

        <h2>5. Don't run a dehumidifier directly next to wood</h2>
        <p>If you use a dehumidifier in a room, place it at least two metres from any wooden piece. Concentrated dry air on one side of a wood panel can cause uneven shrinkage and small cracks. The dehumidifier's job is the room, not the furniture.</p>

        <h2>6. After the rains: a once-over</h2>
        <p>In late October, check every joint and panel. Run your hand over flat surfaces; you are looking for any rough spots where the finish has lifted. A small touch-up with the same beeswax polish is all that is needed for 99% of pieces. If you find anything more — a separated joint, a loose panel — bring it to us. The first re-finish is free for any piece we built; we charge a small fee for pieces by other workshops.</p>

        <h2>The longer point</h2>
        <p>Furniture is not a passive object. It lives in a house, in a climate, with a family. Five minutes of care twice a year is the difference between thirty years of service and ten. We send a reminder text to every customer in late May and late October. If you bought from us and are not getting the texts, please send us a WhatsApp — we'll add you to the list.</p>
      `
    }
  ];

  function bySlug(slug) {
    return ARTICLES.find(a => a.slug === slug);
  }

  /* ---------- Listing renderer ---------- */
  function renderList() {
    const root = document.getElementById("journalList");
    if (!root) return;
    root.innerHTML = ARTICLES.map((a, i) => `
      <a href="journal-post.html?slug=${a.slug}" class="journal-card reveal ${i % 2 === 1 ? "reveal-delay-1" : ""}">
        <div class="journal-card-img">
          <img src="${a.cover}" alt="${a.title}" loading="lazy">
        </div>
        <div class="journal-card-body">
          <div class="journal-card-meta">
            <span class="tag">${a.tag}</span>
            <span>· ${a.readTime}</span>
            <span>· ${a.date}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <span class="read-more">Read more →</span>
        </div>
      </a>
    `).join("");
  }

  /* ---------- Single post renderer ---------- */
  function renderPost() {
    const root = document.getElementById("journalPost");
    if (!root) return;
    const slug = new URLSearchParams(location.search).get("slug");
    const a = bySlug(slug) || ARTICLES[0];

    document.title = `${a.title} · Journal · Assam Furniture House`;

    const hero = root.querySelector("#postHero");
    const cover = root.querySelector("#postCover");
    const body = root.querySelector("#postBody");
    const next = root.querySelector("#postNext");

    if (hero) {
      hero.innerHTML = `
        <div class="meta">
          <span style="color: var(--brass-deep); font-weight: 600; letter-spacing: 0.12em;">${a.tag.toUpperCase()}</span> · ${a.readTime} · ${a.date}
        </div>
        <h1>${a.title}</h1>
        <p style="color: var(--muted); font-size: 1.1rem; max-width: 620px; margin: var(--s-4) auto 0;">${a.excerpt}</p>
        <p style="color: var(--muted); font-size: 0.85rem; margin-top: var(--s-4);">By ${a.author}</p>
      `;
    }
    if (cover) cover.innerHTML = `<img src="${a.cover}" alt="${a.title}">`;
    if (body) body.innerHTML = a.body.trim();
    if (next) {
      const idx = ARTICLES.indexOf(a);
      const nextArt = ARTICLES[(idx + 1) % ARTICLES.length];
      next.innerHTML = `
        <div>
          <div style="font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 4px;">Next article</div>
          <a href="journal-post.html?slug=${nextArt.slug}" style="font-family: var(--font-display); font-size: 1.2rem; color: var(--forest-deep);">${nextArt.title} →</a>
        </div>
        <a href="journal.html" class="btn btn-outline">All articles</a>
      `;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderList();
    renderPost();
  });

  window.AfhJournal = { list: ARTICLES, bySlug };
})();
