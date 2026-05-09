/* =========================================================
   i18n.js — English ↔ Assamese dictionary + DOM walker
   Persists choice to localStorage.afh_lang
   Translatable elements use data-i18n="key.path"
   Translatable placeholders use data-i18n-placeholder="key"
   ========================================================= */

const I18N = {
  en: {
    topbar: {
      msg: "Free delivery in Nagaon district · 0% EMI up to 24 months · 25+ years of craftsmanship"
    },
    nav: {
      home: "Home",
      products: "Products",
      studio: "Studio",
      journal: "Journal",
      visit: "Visit",
      about: "About",
      contact: "Contact",
      cart: "Cart",
      wishlist: "Wishlist"
    },
    brand: {
      name: "Assam Furniture House",
      tag: "Boutique · Kampur"
    },
    hero: {
      eyebrow: "Heritage Craftsmanship · Since 1998",
      title_1: "Furniture",
      title_em: "made for memories",
      title_2: "",
      lead: "Hand-crafted solid wood furniture from the heart of Assam — bespoke pieces for the families of Nagaon, Kampur and beyond.",
      cta_primary: "Browse Collection",
      cta_secondary: "Book a Showroom Visit",
      chip_warranty_t: "5-Year Warranty",
      chip_warranty_s: "On every solid wood piece",
      chip_emi_t: "0% EMI",
      chip_emi_s: "Up to 24 months",
      badge: "Boutique Premium",
      floating_t: "1,200+ happy families",
      floating_s: "across Nagaon district"
    },
    sections: {
      categories_eyebrow: "Shop by Room",
      categories_title: "Curated for every space",
      categories_lead: "From candid bedrooms to grand wedding mandaps, find pieces tailored to the rhythm of your home.",
      bestsellers_eyebrow: "This Season",
      bestsellers_title: "Bestsellers",
      bestsellers_lead: "What our families have been bringing home this month.",
      visit_eyebrow: "Step Inside",
      visit_title: "Visit our showroom",
      visit_lead: "Pick a date, a time, and the rooms you're dreaming about. We'll set tea, your seat, and the pieces you want to see.",
      visit_p1_t: "Pick your date",
      visit_p1_s: "Open Mon–Sat. Choose any slot in the next 14 days.",
      visit_p2_t: "Tell us your taste",
      visit_p2_s: "Bedroom, dining, wedding — we'll prep the right corner of the showroom.",
      visit_p3_t: "Sip tea, take your time",
      visit_p3_s: "No commission rush. Walk our floor for as long as you like.",
      visit_cta: "Schedule a visit",
      story_eyebrow: "Our Workshop",
      story_title: "Twenty-five winters at the lathe",
      story_p: "Three generations of the Bordoloi family have been shaping teak, sheesham and Hollong from a single workshop on the banks of the Kolong river. Every joint is hand-cut. Every finish is hand-rubbed. Nothing leaves the floor until our father is satisfied.",
      story_meta_1_t: "25+ Years",
      story_meta_1_s: "of woodcraft",
      story_meta_2_t: "12 artisans",
      story_meta_2_s: "in our workshop",
      story_meta_3_t: "100% solid wood",
      story_meta_3_s: "no veneers",
      emi_eyebrow: "Easy Ownership",
      emi_title: "Take it home today,",
      emi_title_em: "pay across 24 months",
      emi_lead: "Spread the cost of any piece above ₹15,000 with our zero-interest EMI plans. No paperwork. No processing fee. Just a friendly conversation at the showroom.",
      emi_h1_t: "0%",
      emi_h1_s: "Interest",
      emi_h2_t: "24 mo",
      emi_h2_s: "Tenure",
      emi_h3_t: "₹0",
      emi_h3_s: "Down payment",
      emi_calc_label: "Slide to see your monthly instalment",
      emi_calc_for: "For",
      emi_calc_per_month: "per month",
      emi_calc_tenure: "over 12 months",
      journal_eyebrow: "Journal",
      journal_title: "Stories from the workshop",
      journal_lead: "Notes on wood, weddings and the ways our customers make a house their own.",
      journal_more: "Read more",
      journal_all: "All articles",
      testimonials_eyebrow: "Kind Words",
      testimonials_title: "What our families say",
      stats_eyebrow: "By the Numbers",
      stats_title: "A quiet record of trust",
      stat_years: "Years",
      stat_families: "Families",
      stat_pieces: "Pieces delivered",
      stat_artisans: "Artisans",
      cta_title: "Design your home with us",
      cta_em: "we will be your guide",
      cta_lead: "Tell us a little about your space and your taste — we'll send a friendly plan and a no-obligation quote within a day.",
      cta_btn: "Start your plan"
    },
    categories: {
      bedroom: "Bedroom",
      bedroom_s: "Beds, side tables, vanities",
      living: "Living",
      living_s: "Sofas, coffee tables, lounge",
      dining: "Dining",
      dining_s: "Tables, chairs, sideboards",
      study: "Study",
      study_s: "Desks, shelves, kid's corners",
      wardrobe: "Wardrobe",
      wardrobe_s: "Almirahs, sliding wardrobes",
      wedding: "Wedding",
      wedding_s: "Thrones, mandaps, dowry sets"
    },
    common: {
      add_to_cart: "Add to cart",
      added: "Added",
      view: "View",
      starting_at: "Starting at",
      emi_from: "EMI from",
      per_month: "/mo",
      remove: "Remove",
      save_for_later: "Save for later",
      move_to_cart: "Move to cart",
      quantity: "Quantity",
      subtotal: "Subtotal",
      delivery: "Delivery",
      free: "Free",
      total: "Total",
      checkout_wa: "Send order via WhatsApp",
      empty_cart_t: "Your cart is empty",
      empty_cart_s: "Browse the collection and add a few favourites.",
      empty_wishlist_t: "Your wishlist is empty",
      empty_wishlist_s: "Tap the heart on any product to save it here.",
      browse: "Browse products",
      filter_all: "All",
      sort_label: "Sort by",
      sort_featured: "Featured",
      sort_low: "Price: Low to High",
      sort_high: "Price: High to Low",
      sort_name: "Name (A–Z)",
      no_results_t: "No products match this filter",
      no_results_s: "Try a different category or sort option.",
      back_to_products: "Back to all products",
      added_toast: "Added to cart"
    },
    footer: {
      tagline: "Hand-crafted solid wood furniture from Kampur, Assam — for the families that build homes to last.",
      shop: "Shop",
      explore: "Explore",
      stay: "Stay in touch",
      newsletter_p: "Sign up for seasonal collections and journal notes.",
      newsletter_ph: "Your email",
      newsletter_btn: "Subscribe",
      rights: "© 2026 Assam Furniture House. All rights reserved.",
      built: "Boutique Premium · Tier 4 demo"
    },
    visit: {
      title: "Book a showroom visit",
      lead: "We'll keep tea ready and your favourite room set up.",
      step1: "Pick a date",
      step1_help: "Choose any open day in the next two weeks. Sundays are closed.",
      step2: "Pick a time slot",
      step2_help: "Each slot is roughly 60 minutes — enough to walk the floor without rush.",
      step2_first: "Pick a date first",
      step3: "What do you want to see?",
      step3_help: "Pick one or more — we'll prep the right corner.",
      step4: "Your details",
      step4_help: "We'll send a confirmation on WhatsApp.",
      name_l: "Full name",
      phone_l: "Phone (WhatsApp)",
      summary_t: "Your visit",
      summary_d: "Date",
      summary_t_l: "Time",
      summary_i: "Interested in",
      summary_n: "Name",
      summary_p: "Phone",
      none: "—",
      confirm_wa: "Confirm via WhatsApp",
      confirm_help: "We'll receive your visit details on WhatsApp and reply within an hour."
    },
    studio: {
      title: "Design Studio",
      lead: "Pick a wood, a finish, and a budget — we'll send a complete plan via WhatsApp.",
      wood_t: "Choose your wood",
      wood_s: "Each wood ages differently in Assam's humid climate. Our artisans help you pick the right one for your home.",
      finish_t: "Choose a finish",
      finish_s: "From rich natural grain to deep ebony stains — every finish is hand-rubbed.",
      budget_t: "Your monthly budget",
      budget_s: "Adjust the sliders to see what your dream piece would cost per month.",
      price_l: "Total budget",
      down_l: "Down payment",
      tenure_l: "Tenure (months)",
      result_l: "Estimated monthly EMI",
      result_note: "Based on 0% interest. Final price confirmed at the showroom.",
      send_btn: "Send my plan via WhatsApp"
    },
    about: {
      lead: "A small workshop. Three generations. One promise — that the furniture you bring home outlives the trends that brought you to it.",
      story_t: "Our story",
      story_p1: "Assam Furniture House began in 1998 in a single rented shed in Kampur. Hiren Bordoloi, our founder, had spent fifteen years apprenticing at a tea-estate carpenter's workshop before he decided to put his name above his own door.",
      story_p2: "Twenty-eight years later, the workshop on the banks of the Kolong has expanded three times, but the way we make furniture hasn't changed. We still hand-cut every joint. We still hand-rub every finish. And we still don't let a piece leave the floor until the senior craftsman has run his palm over the grain.",
      story_p3: "Today our furniture sits in homes from Kampur to Tezpur, from Guwahati to Shillong. Wedding sets we made fifteen years ago are being passed down to the next generation. That is the only review we ever ask for.",
      timeline_t: "A short timeline",
      values_t: "What we stand for",
      v1_t: "Solid wood, always",
      v1_d: "We never sell veneer or particle board as solid wood. The grain you see is the grain that goes through the piece.",
      v2_t: "Hand-finished",
      v2_d: "Every piece is sanded, stained and waxed by hand. It takes longer. The finish is worth it.",
      v3_t: "Built to outlast trends",
      v3_d: "We design for grandparents, parents and children — not for next year's catalogue."
    },
    contact: {
      lead: "Drop us a line, send us a WhatsApp, or come walk our floor over a cup of tea.",
      address_t: "Showroom",
      address_d: "NH-37, Kampur Town\\nNagaon District, Assam 782426",
      phone_t: "Call us",
      phone_d: "+91 98765 43210",
      whatsapp_t: "WhatsApp",
      whatsapp_d: "+91 98765 43210",
      email_t: "Email",
      email_d: "hello@assamfurniturehouse.in",
      hours_t: "Opening hours",
      hours_mon: "Monday",
      hours_tue: "Tuesday",
      hours_wed: "Wednesday",
      hours_thu: "Thursday",
      hours_fri: "Friday",
      hours_sat: "Saturday",
      hours_sun: "Sunday",
      open_hrs: "10:00 — 19:30",
      closed: "Closed",
      form_t: "Send a message",
      form_l: "We'll reply within a working day.",
      f_name: "Your name",
      f_phone: "Phone (WhatsApp)",
      f_subject: "What's this about?",
      f_subject_g: "General enquiry",
      f_subject_p: "Product enquiry",
      f_subject_v: "Visit booking",
      f_subject_w: "Wedding furniture",
      f_subject_s: "Studio / Custom design",
      f_msg: "Tell us a little more",
      f_send: "Send via WhatsApp"
    },
    journal: {
      lead: "Slow notes on wood, weddings, and what makes a house feel like home in Assam."
    }
  },
  as: {
    topbar: {
      msg: "নগাঁও জিলাত বিনামূলীয়া ডেলিভাৰী · ২৪ মাহলৈকে ০% ইএমআই · ২৫ বছৰৰো অধিক কাৰিকৰীৰ অভিজ্ঞতা"
    },
    nav: {
      home: "ঘৰ",
      products: "সামগ্ৰী",
      studio: "ষ্টুডিঅ’",
      journal: "পত্ৰিকা",
      visit: "চাব আহক",
      about: "আমাৰ বিষয়ে",
      contact: "যোগাযোগ",
      cart: "কাৰ্ট",
      wishlist: "ইচ্ছা তালিকা"
    },
    brand: {
      name: "অসম ফাৰ্ণিচাৰ হাউচ",
      tag: "বুটিক · কামপুৰ"
    },
    hero: {
      eyebrow: "পৰম্পৰাগত কাৰিকৰী · ১৯৯৮ চনৰ পৰা",
      title_1: "স্মৃতিৰ বাবে",
      title_em: "সজোৱা আচবাব",
      title_2: "",
      lead: "অসমৰ অন্তৰৰ পৰা হাতেৰে গঢ়া কঠীয়া কাঠৰ আচবাব — নগাঁও, কামপুৰ আৰু ইয়াৰ বাহিৰৰ পৰিয়ালৰ বাবে বিশেষভাৱে নিৰ্মিত।",
      cta_primary: "সংগ্ৰহ চাওক",
      cta_secondary: "চ’ৰুম দৰ্শনৰ বাবে বুক কৰক",
      chip_warranty_t: "৫ বছৰীয়া ৱাৰাণ্টী",
      chip_warranty_s: "প্ৰতিটো কঠীয়া কাঠৰ সামগ্ৰীত",
      chip_emi_t: "০% ইএমআই",
      chip_emi_s: "২৪ মাহলৈকে",
      badge: "বুটিক প্ৰিমিয়াম",
      floating_t: "১,২০০+ সন্তুষ্ট পৰিয়াল",
      floating_s: "নগাঁও জিলাজুৰি"
    },
    sections: {
      categories_eyebrow: "কোঠা অনুসৰি কিনক",
      categories_title: "প্ৰতিটো ঠাইৰ বাবে বাছনি",
      categories_lead: "শান্ত শোৱনি কোঠাৰ পৰা ৰাজকীয় বিবাহ মণ্ডপলৈ — আপোনাৰ ঘৰৰ ছন্দৰ লগত মিলা সামগ্ৰী।",
      bestsellers_eyebrow: "এই বতৰৰ",
      bestsellers_title: "জনপ্ৰিয় সামগ্ৰী",
      bestsellers_lead: "এই মাহত আমাৰ পৰিয়ালসমূহে ঘৰলৈ অনা সামগ্ৰীসমূহ।",
      visit_eyebrow: "ভিতৰলৈ আহক",
      visit_title: "আমাৰ চ’ৰুম চাব আহক",
      visit_lead: "তাৰিখ, সময় আৰু আপুনি সপোন দেখা কোঠাবোৰ বাছনি কৰক। আমি চাহ, আপোনাৰ আসন আৰু সামগ্ৰীবোৰ সাজু কৰি ৰাখিম।",
      visit_p1_t: "তাৰিখ বাছনি কৰক",
      visit_p1_s: "সোম–শনি খোলা থাকে। আগন্তুক ১৪ দিনৰ যিকোনো সময় বাছনি কৰক।",
      visit_p2_t: "আপোনাৰ পছন্দ কওক",
      visit_p2_s: "শোৱনি কোঠা, ভোজন কোঠা, বিবাহ — আমি চ’ৰুমৰ সঠিক অংশ সাজু কৰিম।",
      visit_p3_t: "চাহ খাই লওঁক, লাহে লাহে চাওক",
      visit_p3_s: "কোনো খৰখেদা নাই। যিমান বিচাৰে সিমান সময় কটাব পাৰে।",
      visit_cta: "ভ্ৰমণ অনুসূচী কৰক",
      story_eyebrow: "আমাৰ কৰ্মশালা",
      story_title: "ল’থত পঁচিছ বছৰীয়া শীত",
      story_p: "বৰদলৈ পৰিয়ালৰ তিনি প্ৰজন্মই কলং নদীৰ পাৰৰ এটাই কৰ্মশালাত শাল, শীশম আৰু হলং কাঠ গঢ়িছে। প্ৰতিটো জোৰা হাতেৰে কাটে। প্ৰতিটো ফিনিচ হাতেৰে ৰগৰে। আমাৰ পিতৃ সন্তুষ্ট নোহোৱালৈকে একোৱে কৰ্মশালা এৰি নাযায়।",
      story_meta_1_t: "২৫+ বছৰ",
      story_meta_1_s: "কাঠৰ কাম",
      story_meta_2_t: "১২ কাৰিকৰ",
      story_meta_2_s: "আমাৰ কৰ্মশালাত",
      story_meta_3_t: "১০০% কঠীয়া কাঠ",
      story_meta_3_s: "কোনো ভিনিয়াৰ নাই",
      emi_eyebrow: "সহজ মালিকানা",
      emi_title: "আজিয়ে ঘৰলৈ আনক,",
      emi_title_em: "২৪ মাহত পৰিশোধ কৰক",
      emi_lead: "আমাৰ বিনাসুদীয়া ইএমআই পৰিকল্পনাৰে ১৫,০০০ টকাৰ ওপৰৰ যিকোনো সামগ্ৰীৰ মূল্য বিতৰণ কৰক। কোনো কাকতপত্ৰ নাই। কোনো প্ৰচেচিং ফী নাই।",
      emi_h1_t: "০%",
      emi_h1_s: "সুদ",
      emi_h2_t: "২৪ মাহ",
      emi_h2_s: "সময়সীমা",
      emi_h3_t: "₹০",
      emi_h3_s: "ডাউন পেমেণ্ট",
      emi_calc_label: "আপোনাৰ মাহিলী কিস্তি চাবলৈ স্লাইড কৰক",
      emi_calc_for: "ৰ বাবে",
      emi_calc_per_month: "প্ৰতিমাহে",
      emi_calc_tenure: "১২ মাহত",
      journal_eyebrow: "পত্ৰিকা",
      journal_title: "কৰ্মশালাৰ কাহিনী",
      journal_lead: "কাঠ, বিবাহ আৰু আমাৰ গ্ৰাহকসকলে ঘৰক নিজৰ কৰি লোৱাৰ কথা।",
      journal_more: "অধিক পঢ়ক",
      journal_all: "সকলো প্ৰবন্ধ",
      testimonials_eyebrow: "মিঠা কথা",
      testimonials_title: "আমাৰ পৰিয়ালে কি কয়",
      stats_eyebrow: "সংখ্যাৰে",
      stats_title: "বিশ্বাসৰ এক শান্ত অভিলেখ",
      stat_years: "বছৰ",
      stat_families: "পৰিয়াল",
      stat_pieces: "ডেলিভাৰী কৰা সামগ্ৰী",
      stat_artisans: "কাৰিকৰ",
      cta_title: "আমাৰ লগত ঘৰ সজাওক",
      cta_em: "আমি আপোনাৰ পথপ্ৰদৰ্শক হ'ম",
      cta_lead: "আপোনাৰ ঠাই আৰু পছন্দৰ বিষয়ে অলপ কওক — আমি এদিনৰ ভিতৰতে এক বন্ধুত্বপূৰ্ণ পৰিকল্পনা আৰু বাধ্যতাহীন উদ্ধৃতি প্ৰেৰণ কৰিম।",
      cta_btn: "আপোনাৰ পৰিকল্পনা আৰম্ভ কৰক"
    },
    categories: {
      bedroom: "শোৱনি কোঠা",
      bedroom_s: "বিচনা, পাৰ্শ্ব টেবুল",
      living: "বৈঠক কোঠা",
      living_s: "চ’ফা, কফি টেবুল",
      dining: "ভোজন কোঠা",
      dining_s: "টেবুল, চকী",
      study: "অধ্যয়ন",
      study_s: "ডেস্ক, কিতাপৰ আলমিৰা",
      wardrobe: "আলমিৰা",
      wardrobe_s: "আলমিৰা, স্লাইডিং",
      wedding: "বিবাহ",
      wedding_s: "সিংহাসন, মণ্ডপ"
    },
    common: {
      add_to_cart: "কাৰ্টত যোগ কৰক",
      added: "যোগ কৰিলে",
      view: "চাওক",
      starting_at: "আৰম্ভ",
      emi_from: "ইএমআই",
      per_month: "/মাহ",
      remove: "আঁতৰাওক",
      save_for_later: "পিছত ৰাখক",
      move_to_cart: "কাৰ্টলৈ যাওক",
      quantity: "পৰিমাণ",
      subtotal: "উপ-যোগফল",
      delivery: "ডেলিভাৰী",
      free: "বিনামূলীয়া",
      total: "মুঠ",
      checkout_wa: "ৱাটছএপৰে অৰ্ডাৰ পঠাওক",
      empty_cart_t: "আপোনাৰ কাৰ্ট খালী",
      empty_cart_s: "সংগ্ৰহ চাই কেইটামান প্ৰিয় সামগ্ৰী যোগ কৰক।",
      empty_wishlist_t: "আপোনাৰ ইচ্ছা তালিকা খালী",
      empty_wishlist_s: "যিকোনো সামগ্ৰীত হৃদয়টো টিপি ইয়াত ৰাখক।",
      browse: "সামগ্ৰী চাওক",
      filter_all: "সকলো",
      sort_label: "ক্ৰমেৰে",
      sort_featured: "নিৰ্বাচিত",
      sort_low: "মূল্য: কম-বেছি",
      sort_high: "মূল্য: বেছি-কম",
      sort_name: "নাম (অ–য)",
      no_results_t: "এই ফিল্টাৰৰ লগত মিলা সামগ্ৰী নাই",
      no_results_s: "ভিন্ন শ্ৰেণী চেষ্টা কৰক।",
      back_to_products: "সকলো সামগ্ৰীলৈ উভতি যাওক",
      added_toast: "কাৰ্টত যোগ কৰা হ'ল"
    },
    footer: {
      tagline: "অসমৰ কামপুৰৰ পৰা হাতেৰে গঢ়া কঠীয়া কাঠৰ আচবাব — চিৰদিন থাকিব পৰা ঘৰ গঢ়া পৰিয়ালসমূহৰ বাবে।",
      shop: "ছপ",
      explore: "অন্বেষণ কৰক",
      stay: "যোগাযোগত থাকক",
      newsletter_p: "ঋতু সংগ্ৰহ আৰু পত্ৰিকা টোকাৰ বাবে চাইন আপ কৰক।",
      newsletter_ph: "আপোনাৰ ইমেইল",
      newsletter_btn: "চাবস্ক্ৰাইব",
      rights: "© ২০২৬ অসম ফাৰ্ণিচাৰ হাউচ। সকলো অধিকাৰ সংৰক্ষিত।",
      built: "বুটিক প্ৰিমিয়াম · টিয়াৰ ৪ ডেমো"
    },
    visit: {
      title: "চ’ৰুম দৰ্শন বুক কৰক",
      lead: "আমি চাহ আৰু আপোনাৰ প্ৰিয় কোঠা সাজু কৰি ৰাখিম।",
      step1: "তাৰিখ বাছনি কৰক",
      step1_help: "আগন্তুক দুসপ্তাহৰ যিকোনো খোলা দিন বাছনি কৰক। দেওবাৰ বন্ধ।",
      step2: "সময় বাছনি কৰক",
      step2_help: "প্ৰতিটো শ্লট প্ৰায় ৬০ মিনিট।",
      step2_first: "প্ৰথমে তাৰিখ বাছনি কৰক",
      step3: "আপুনি কি চাব বিচাৰে?",
      step3_help: "এটা বা ততোধিক বাছনি কৰক।",
      step4: "আপোনাৰ বিৱৰণ",
      step4_help: "আমি ৱাটছএপত নিশ্চিতকৰণ পঠাম।",
      name_l: "সম্পূৰ্ণ নাম",
      phone_l: "ফোন (ৱাটছএপ)",
      summary_t: "আপোনাৰ ভ্ৰমণ",
      summary_d: "তাৰিখ",
      summary_t_l: "সময়",
      summary_i: "আগ্ৰহ",
      summary_n: "নাম",
      summary_p: "ফোন",
      none: "—",
      confirm_wa: "ৱাটছএপৰে নিশ্চিত কৰক",
      confirm_help: "আমি আপোনাৰ ভ্ৰমণৰ বিৱৰণ ৱাটছএপত পাম আৰু এঘণ্টাৰ ভিতৰত উত্তৰ দিম।"
    },
    studio: {
      title: "ডিজাইন ষ্টুডিঅ’",
      lead: "এটা কাঠ, এটা ফিনিচ আৰু এটা বাজেট বাছনি কৰক — আমি ৱাটছএপৰে সম্পূৰ্ণ পৰিকল্পনা পঠাম।",
      wood_t: "আপোনাৰ কাঠ বাছনি কৰক",
      wood_s: "অসমৰ আৰ্দ্ৰ জলবায়ুত প্ৰতিটো কাঠ বেলেগ ধৰণে পুৰণা হয়।",
      finish_t: "এটা ফিনিচ বাছনি কৰক",
      finish_s: "প্ৰতিটো ফিনিচ হাতেৰে ৰগৰা হয়।",
      budget_t: "আপোনাৰ মাহিলী বাজেট",
      budget_s: "আপোনাৰ সপোনৰ সামগ্ৰীৰ মাহিলী খৰচ চাবলৈ স্লাইডাৰ ব্যৱহাৰ কৰক।",
      price_l: "মুঠ বাজেট",
      down_l: "ডাউন পেমেণ্ট",
      tenure_l: "সময়সীমা (মাহ)",
      result_l: "আনুমানিক মাহিলী ইএমআই",
      result_note: "০% সুদৰ ভিত্তিত। চূড়ান্ত মূল্য চ’ৰুমত নিশ্চিত কৰা হ'ব।",
      send_btn: "ৱাটছএপৰে পৰিকল্পনা পঠাওক"
    },
    about: {
      lead: "এটা সৰু কৰ্মশালা। তিনি প্ৰজন্ম। এটা প্ৰতিশ্ৰুতি — আপুনি ঘৰলৈ অনা আচবাব আপোনাক ইয়ালৈ অনা ট্ৰেণ্ডতকৈ অধিক দিনলৈ থাকিব।",
      story_t: "আমাৰ কাহিনী",
      story_p1: "অসম ফাৰ্ণিচাৰ হাউচ ১৯৯৮ চনত কামপুৰৰ এটা ভাড়াঘৰত আৰম্ভ হৈছিল। আমাৰ প্ৰতিষ্ঠাপক হীৰেন বৰদলৈয়ে চাহ-বাগিচাৰ কাঠৰ কাৰিকৰৰ ওচৰত পোন্ধৰ বছৰ শিকাৰু হিচাপে কাটিছিল।",
      story_p2: "আঠাইশ বছৰৰ পিছত, কলং নদীৰ পাৰৰ কৰ্মশালা তিনিবাৰ বঢ়িছে, কিন্তু আমাৰ আচবাব বনোৱাৰ ধৰণ সলনি হোৱা নাই।",
      story_p3: "আজি আমাৰ আচবাব কামপুৰৰ পৰা তেজপুৰলৈ, গুৱাহাটীৰ পৰা শ্বিলংলৈ ঘৰবোৰত আছে। ইয়েই আমাৰ একমাত্ৰ পৰ্যালোচনা।",
      timeline_t: "এক চমু সময়ৰেখা",
      values_t: "আমি কিহৰ পক্ষে",
      v1_t: "সদায় কঠীয়া কাঠ",
      v1_d: "আমি কেতিয়াও ভিনিয়াৰ বা পাৰ্টিকল ব’ৰ্ড কঠীয়া কাঠ হিচাপে বিক্ৰী নকৰোঁ।",
      v2_t: "হাতেৰে ফিনিচ",
      v2_d: "প্ৰতিটো সামগ্ৰী হাতেৰে চেণ্ডিং, ষ্টেইন আৰু ৱাক্স কৰা হয়।",
      v3_t: "ট্ৰেণ্ডতকৈ অধিক দিনলৈ",
      v3_d: "আমি ককা-আই, মাক-দেউতাক আৰু সন্তানসকলৰ বাবে ডিজাইন কৰোঁ।"
    },
    contact: {
      lead: "আমাক এটা শাৰী লিখক, ৱাটছএপ পঠাওক, বা চাহ এটাত আমাৰ ফ্ল’ৰ চাব আহক।",
      address_t: "চ’ৰুম",
      address_d: "এনএইচ-৩৭, কামপুৰ চহৰ\\nনগাঁও জিলা, অসম ৭৮২৪২৬",
      phone_t: "আমাক ফোন কৰক",
      phone_d: "+৯১ ৯৮৭৬৫ ৪৩২১০",
      whatsapp_t: "ৱাটছএপ",
      whatsapp_d: "+৯১ ৯৮৭৬৫ ৪৩২১০",
      email_t: "ইমেইল",
      email_d: "hello@assamfurniturehouse.in",
      hours_t: "খোলা সময়",
      hours_mon: "সোমবাৰ",
      hours_tue: "মঙ্গলবাৰ",
      hours_wed: "বুধবাৰ",
      hours_thu: "বৃহস্পতিবাৰ",
      hours_fri: "শুক্ৰবাৰ",
      hours_sat: "শনিবাৰ",
      hours_sun: "দেওবাৰ",
      open_hrs: "১০:০০ — ১৯:৩০",
      closed: "বন্ধ",
      form_t: "এটা বাৰ্তা পঠাওক",
      form_l: "আমি এদিনৰ ভিতৰতে উত্তৰ দিম।",
      f_name: "আপোনাৰ নাম",
      f_phone: "ফোন (ৱাটছএপ)",
      f_subject: "এই বিষয়ে কি?",
      f_subject_g: "সাধাৰণ অনুসন্ধান",
      f_subject_p: "সামগ্ৰী অনুসন্ধান",
      f_subject_v: "ভ্ৰমণ বুকিং",
      f_subject_w: "বিবাহৰ আচবাব",
      f_subject_s: "ষ্টুডিঅ’ / কাষ্টম ডিজাইন",
      f_msg: "অলপ অধিক কওক",
      f_send: "ৱাটছএপৰে পঠাওক"
    },
    journal: {
      lead: "অসমত কাঠ, বিবাহ আৰু কিহে এটা ঘৰক ঘৰৰ দৰে অনুভৱ কৰায় তাৰ ওপৰত শান্ত টোকা।"
    }
  }
};

const I18nManager = (() => {
  const STORAGE_KEY = "afh_lang";
  let currentLang = "en";

  function getNested(obj, path) {
    return path.split(".").reduce((acc, k) => (acc != null ? acc[k] : undefined), obj);
  }

  function applyTo(root = document) {
    const dict = I18N[currentLang] || I18N.en;
    root.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = getNested(dict, key);
      if (val !== undefined) el.textContent = val;
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getNested(dict, key);
      if (val !== undefined) el.setAttribute("placeholder", val);
    });
    root.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const val = getNested(dict, key);
      if (val !== undefined) el.innerHTML = val.replace(/\\n/g, "<br>");
    });
    document.documentElement.setAttribute("lang", currentLang === "as" ? "as" : "en");
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(el => {
      el.classList.toggle("on", el.getAttribute("data-lang") === currentLang);
    });
  }

  function set(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    applyTo(document);
    document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
  }

  function toggle() {
    set(currentLang === "en" ? "as" : "en");
  }

  function get() { return currentLang; }

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    const val = getNested(dict, key);
    return val !== undefined ? val : key;
  }

  function init() {
    let saved = "en";
    try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) { /* ignore */ }
    currentLang = I18N[saved] ? saved : "en";
    applyTo(document);
    document.querySelectorAll(".lang-toggle").forEach(btn => {
      btn.addEventListener("click", toggle);
    });
  }

  return { init, set, toggle, get, t, applyTo };
})();

document.addEventListener("DOMContentLoaded", I18nManager.init);
window.I18n = I18nManager;
