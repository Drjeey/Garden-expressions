/**
 * Garden Expressions — Main Script
 *
 * Organised into five sections:
 *   1. Constants & DOM Selectors
 *   2. Data
 *   3. Utility Functions
 *   4. Render Functions  (build DOM from data arrays)
 *   5. Event Listeners & Initialisation
 */


/* ============================================================
   1. CONSTANTS & DOM SELECTORS
   ============================================================ */

const WHATSAPP_NUMBER = '256700000000';
const TOAST_DURATION  = 4000; // ms

const nav          = document.getElementById('nav');
const navCta       = document.getElementById('navCta');
const navHamburger = document.getElementById('navHamburger');
const navMobile    = document.getElementById('navMobile');
const heroBg       = document.getElementById('heroBg');
const plantGrid    = document.getElementById('plantGrid');
const potsGrid     = document.getElementById('potsGrid');
const servicesList = document.getElementById('servicesList');
const processSteps = document.getElementById('processSteps');
const quoteForm    = document.getElementById('quoteForm');
const toast        = document.getElementById('toast');


/* ============================================================
   2. DATA
   All product, service and process content lives here.
   To add a plant, push a new object into the `plants` array.
   ============================================================ */

const plants = [
  {
    name: 'Monstera Deliciosa',
    tag:  'Statement Indoor',
    desc: 'The iconic split-leaf tropical. Thrives in bright indirect light and transforms any interior into a botanical statement.',
    price: 120000,
    img:  'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80',
    care: 'Water every 7–10 days. Bright indirect light. Wipe leaves monthly. Loves humidity — perfect near a bathroom.',
  },
  {
    name: 'Fiddle Leaf Fig',
    tag:  'Architectural Indoor',
    desc: 'Bold, graphic foliage that anchors a room. Architect and interior designer favourite across East Africa.',
    price: 185000,
    img:  'assets/Fiddle Leaf Fig.png',
    care: 'Thrives in bright direct light. Water when top 2 cm of soil is dry. Avoid cold drafts. Rotate monthly for even growth.',
  },
  {
    name: 'Bird of Paradise',
    tag:  'Statement Tropical',
    desc: 'Dramatic paddle-shaped leaves evoke the Ugandan highlands. A showstopper for lobbies and living rooms alike.',
    price: 220000,
    img:  'assets/Bird of Paradise.png',
    care: 'Needs 3–4 hrs of direct sun daily. Water every 10 days. Feed monthly in the growing season. Very drought-tolerant.',
  },
  {
    name: 'Snake Plant Zeylanica',
    tag:  'Hardy Indoor',
    desc: 'Near indestructible and air-purifying. Clean architectural lines in variegated deep green. Perfect for beginners.',
    price: 85000,
    img:  'assets/Snake Plant Zeylanica.png',
    care: 'Water once every 2–3 weeks. Tolerates low light. Survives drought. One of the best air purifiers available.',
  },
  {
    name: 'Pothos Golden',
    tag:  'Easy Trailing',
    desc: 'Cascading heart-shaped leaves with golden variegation. A starter favourite that grows with intention.',
    price: 45000,
    img:  'assets/Pothos Golden.png',
    care: 'Tolerates low to bright indirect light. Water when soil is 50% dry. Let trail or climb with a moss pole.',
  },
  {
    name: 'Dwarf Olive Tree',
    tag:  'Outdoor / Patio',
    desc: 'Mediterranean elegance for your terrace. Silvery-green foliage. Extremely drought-hardy once established.',
    price: 240000,
    img:  'assets/Dwarf Olive Tree.png',
    care: 'Full sun essential. Water deeply but infrequently. Prune lightly in dry season. Thrives in tropical highlands.',
  },
  {
    name: 'Philodendron Brasil',
    tag:  'Tropical Trailing',
    desc: 'Stunning lime-green and emerald variegation on heart-shaped leaves. Fast grower with high visual impact.',
    price: 65000,
    img:  'https://images.unsplash.com/photo-1632321600668-0d32e4e66cce?w=600&q=80',
    care: 'Bright indirect light brings out the best colours. Water every 7 days. Mist occasionally. Stake for upright growth.',
  },
  {
    name: 'ZZ Plant',
    tag:  'Ultra Hardy Indoor',
    desc: 'Glossy, waxy leaves on graceful arching stems. Virtually indestructible. Elegant, low-maintenance, and long-lived.',
    price: 95000,
    img:  'assets/ZZ PLANT.png',
    care: 'Extremely drought tolerant. Water every 3–4 weeks. Survives in very low light. Toxic to pets — keep elevated.',
  },
];

const pots = [
  { name: 'Mbale Terracotta',    price: 55000,  img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80' },
  { name: 'Nairobi Stoneware',   price: 89000,  img: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b8?w=600&q=80' },
  { name: 'Glazed Sage Vessel',  price: 72000,  img: 'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=600&q=80' },
  { name: 'Concrete Modern',     price: 110000, img: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=600&q=80' },
  { name: 'Woven Rattan Basket', price: 38000,  img: 'https://images.unsplash.com/photo-1627559741762-ef5e4d30bace?w=600&q=80' },
  { name: 'Ebony Wood Planter',  price: 145000, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
];

const services = [
  {
    name:  'Full Landscape Design',
    desc:  'End-to-end design and installation: site survey, concept development, plant selection, hardscaping, lighting and maintenance handover.',
    price: 'From 500,000 UGX',
  },
  {
    name:  'Interior Planting',
    desc:  'We design and install curated indoor plant schemes for offices, hotels, residences and restaurants — with optional monthly maintenance.',
    price: 'From 150,000 UGX',
  },
  {
    name:  'Plant Sourcing & Delivery',
    desc:  "Can't find a specific plant? We source from our network of nurseries across Uganda and Kenya and deliver to your door.",
    price: 'Delivery from 15,000 UGX',
  },
  {
    name:  'Plant Care & Maintenance',
    desc:  'Monthly visits to water, fertilise, prune and treat. Keep your investment thriving year-round with our expert horticulturists.',
    price: 'From 80,000 UGX / month',
  },
];

const processData = [
  { n: '01', name: 'Consultation',    desc: 'We meet — virtually or on-site — to understand your space, vision, and lifestyle.' },
  { n: '02', name: 'Design Proposal', desc: 'Our team prepares a bespoke concept with moodboards, plant lists, and a detailed quote.' },
  { n: '03', name: 'Sourcing',        desc: 'We source every plant and vessel from vetted nurseries and artisan makers.' },
  { n: '04', name: 'Installation',    desc: 'Our team delivers, installs, and hands over with a complete care guide.' },
];


/* ============================================================
   3. UTILITY FUNCTIONS
   ============================================================ */

/**
 * Format a number as Ugandan Shillings.
 * e.g. formatUGX(120000) → "120,000 UGX"
 */
const formatUGX = (amount) => `${amount.toLocaleString('en-UG')} UGX`;

/**
 * Smoothly scroll to a section by its ID.
 */
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Show the toast notification for TOAST_DURATION ms.
 */
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), TOAST_DURATION);
};

/**
 * Build a WhatsApp deep-link URL with a pre-filled message.
 */
const buildWhatsAppUrl = (fields) => {
  const { name, phone, service, message } = fields;
  const text = [
    `Hi Garden Expressions! I'd like to request a quote.`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service || 'Not specified'}`,
    `Message: ${message || 'No message'}`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};


/* ============================================================
   4. RENDER FUNCTIONS
   Each function builds DOM nodes from the data arrays above
   and appends them to the relevant container element.
   ============================================================ */

/**
 * Render the plant product cards into #plantGrid.
 * Each card includes a hover-reveal care tip overlay.
 */
const renderPlants = () => {
  plants.forEach((plant, index) => {
    const delay = (index % 4) + 1;

    const card = document.createElement('div');
    card.className = `product-card reveal`;
    card.setAttribute('data-delay', delay);

    card.innerHTML = `
      <div class="product-card__img-wrap">
        <img src="${plant.img}" alt="${plant.name}" loading="lazy" />
        <div class="product-card__care-tip">
          <span class="product-card__care-label">Plant Care</span>
          <p>${plant.care}</p>
        </div>
      </div>
      <div class="product-card__info">
        <span class="product-card__tag">${plant.tag}</span>
        <h3 class="product-card__name">${plant.name}</h3>
        <p class="product-card__desc">${plant.desc}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${formatUGX(plant.price)}</span>
          <a href="#quote" class="product-card__enquire">Enquire</a>
        </div>
        <button class="product-card__care-btn" aria-expanded="false">Care tips +</button>
      </div>
    `;

    // Mobile care tip toggle — tap button reveals the panel
    const careBtn = card.querySelector('.product-card__care-btn');
    const careTip = card.querySelector('.product-card__care-tip');
    careBtn.addEventListener('click', () => {
      const isOpen = careTip.classList.toggle('is-open');
      careBtn.textContent = isOpen ? 'Care tips −' : 'Care tips +';
      careBtn.setAttribute('aria-expanded', String(isOpen));
    });

    plantGrid.appendChild(card);
  });
};

/**
 * Render the pot/vessel cards into #potsGrid.
 */
const renderPots = () => {
  pots.forEach((pot, index) => {
    const delay = (index % 3) + 1;

    const card = document.createElement('div');
    card.className = 'pot-card reveal';
    card.setAttribute('data-delay', delay);

    card.innerHTML = `
      <img class="pot-card__img" src="${pot.img}" alt="${pot.name}" loading="lazy" />
      <div class="pot-card__overlay">
        <div class="pot-card__name">${pot.name}</div>
        <div class="pot-card__price">${formatUGX(pot.price)}</div>
      </div>
    `;

    // Clicking a pot card scrolls to the quote form and pre-selects vessel enquiry
    card.addEventListener('click', () => {
      const serviceSelect = quoteForm.querySelector('select[name="service"]');
      if (serviceSelect) serviceSelect.value = 'Pot & Vessel Selection';
      scrollTo('quote');
    });

    potsGrid.appendChild(card);
  });
};

/**
 * Render the services accordion into #servicesList.
 * Clicking a header toggles the .is-open class on its parent item.
 */
const renderServices = () => {
  services.forEach((service, index) => {
    const item = document.createElement('div');
    item.className = 'service-item reveal';
    item.setAttribute('data-delay', index + 1);

    item.innerHTML = `
      <div class="service-item__header">
        <span class="service-item__num">0${index + 1}</span>
        <span class="service-item__name">${service.name}</span>
        <span class="service-item__toggle" aria-label="Toggle service details">+</span>
      </div>
      <div class="service-item__body">
        <div class="service-item__body-inner">
          <p>${service.desc}</p>
          <span class="service-item__price">${service.price}</span>
        </div>
      </div>
    `;

    // Toggle accordion open/closed on header click
    const header = item.querySelector('.service-item__header');
    const toggle = item.querySelector('.service-item__toggle');

    header.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      toggle.textContent = isOpen ? '−' : '+';
    });

    servicesList.appendChild(item);
  });
};

/**
 * Render the 4-step process section into #processSteps.
 */
const renderProcess = () => {
  processData.forEach((step, index) => {
    const el = document.createElement('div');
    el.className = 'process__step reveal';
    el.setAttribute('data-delay', index + 1);

    const isLast = index === processData.length - 1;

    el.innerHTML = `
      <span class="process__step-num">${step.n}</span>
      <div class="process__step-name">${step.name}</div>
      <p class="process__step-desc">${step.desc}</p>
      ${isLast ? '' : '<div class="process__step-line"></div>'}
    `;

    processSteps.appendChild(el);
  });
};


/* ============================================================
   5. EVENT LISTENERS & INITIALISATION
   ============================================================ */

// -- Navigation: scroll to quote form on CTA click ----------
navCta.addEventListener('click', () => scrollTo('quote'));

// -- Navigation: frosted-glass state on scroll --------------
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}, { passive: true });

// -- Navigation: mobile hamburger menu toggle ---------------
navHamburger.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('is-open');
  navHamburger.setAttribute('aria-expanded', String(isOpen));
  navMobile.setAttribute('aria-hidden', String(!isOpen));
});

// Close mobile menu when a nav link is tapped
navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('is-open');
    navHamburger.setAttribute('aria-expanded', 'false');
    navMobile.setAttribute('aria-hidden', 'true');
  });
});

// -- Hero: parallax scroll effect — skipped for reduced-motion users -------
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }
  }, { passive: true });
}

// -- Quote form: validate, build WhatsApp link, submit ------
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data    = new FormData(quoteForm);
  const name    = data.get('name')?.trim();
  const phone   = data.get('phone')?.trim();
  const service = data.get('service');
  const message = data.get('message')?.trim();

  // Basic validation — name and phone are required
  if (!name || !phone) {
    showToast('Please fill in your name and phone number.');
    return;
  }

  // Navigate to WhatsApp — avoids iOS Safari popup blocking
  window.location.href = buildWhatsAppUrl({ name, phone, service, message });
  showToast("Redirecting to WhatsApp — we'll be in touch soon!");
  quoteForm.reset();
});

// -- Scroll Reveal: IntersectionObserver -------------------
// Skipped entirely for reduced-motion users — CSS already shows elements.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-revealed');
        revealObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.12 }
);

// -- Initialise all dynamic content -----------------------
const init = () => {
  // Render data-driven sections
  renderPlants();
  renderPots();
  renderServices();
  renderProcess();

  // Observe reveal targets — or mark all revealed immediately for reduced-motion users
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach((el) => {
      if (prefersReducedMotion) {
        el.classList.add('is-revealed');
      } else {
        revealObserver.observe(el);
      }
    });
};

// Run after DOM is fully parsed (safe because of `defer` on <script>)
init();
