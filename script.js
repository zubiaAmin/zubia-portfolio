// ===== Platform logos (custom flat marks) =====
const platforms = [
  { name: "WordPress", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M4 10l3.5 8L11 9l1 3 3-7"/><path d="M20 8l-4.5 11"/></svg>` },
  { name: "Shopify", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8l1-3h8l2 3"/><path d="M6 8h12l1 12H5z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>` },
  { name: "Wix", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 8c2 6 3 9 4 9s2-4 3-8c1 4 2 8 3 8s2-3 4-9"/><path d="M18 8v9"/><circle cx="18" cy="6" r="0.6" fill="currentColor" stroke="none"/></svg>` },
  { name: "Webflow", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 8l4 9 3-6 3 6 4-9"/><path d="M21 8l-5 9-1.5-3"/></svg>` },
  { name: "Squarespace", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="10" height="10" rx="2"/><rect x="10" y="10" width="10" height="10" rx="2"/></svg>` },
];
const marqueeItems = [...platforms, ...platforms].map(p => `
  <div class="platform-badge">${p.svg}<span>${p.name}</span></div>
`).join("");
document.getElementById("marqueeTrack").innerHTML = marqueeItems;

// ===== Services data =====
const services = [
  { icon: "i-amber", label: "Business & Service Websites", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10l8-6 8 6"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>`, desc: "The core site for a spa, clinic, salon, or firm — built to look credible and convert on the first visit." },
  { icon: "i-mint", label: "E-commerce Stores", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/><path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>`, desc: "Shopify builds with product setup, payments, and a checkout flow that doesn't lose customers halfway." },
  { icon: "i-coral", label: "Landing Pages & Campaigns", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>`, desc: "One page, one offer, one goal — built for a specific campaign, launch, or ad spend." },
  { icon: "i-amber", label: "Website Redesigns", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>`, desc: "Your existing site, rebuilt with modern design and speed — without losing what's already ranking." },
  { icon: "i-mint", label: "Booking & Automation", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9h16"/><path d="M9 13l2 2 4-4"/></svg>`, desc: "Appointment forms, payment flows, and follow-ups connected so the site runs without you." },
  { icon: "i-coral", label: "Care & Maintenance Plans", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z"/><path d="M9.5 12l2 2 3.5-4"/></svg>`, desc: "Ongoing updates, fixes, and small changes after launch, so the site stays fast and current." },
];
document.getElementById("servicesGrid").innerHTML = services.map(s => `
  <div class="service-card">
    <div class="service-icon ${s.icon}">${s.svg}</div>
    <h3>${s.label}</h3>
    <p>${s.desc}</p>
  </div>
`).join("");

// ===== Project data =====
const projects = [
  { img: "images/apricity-pools.jpg", name: "Apricity Pools", tag: "pool design & build · Phoenix, AZ", url: "apricitypools.com" },
  { img: "images/medspa-monic.jpg", name: "Aesthetics & Wellness by Monic", tag: "medical spa · Port Charlotte, FL", url: "aestheticwellnessbymonicmenard.com" },
  { img: "images/bankruptcy-law.jpg", name: "Tirella Law Firm", tag: "bankruptcy attorney · Denver, CO", url: "bankruptcyattorneyindenver.com" },
  { img: "images/blissful-salon.jpg", name: "Blissful Creation Salon", tag: "multicultural hair salon · Dover, DE", url: "blissfulcreationsalon.com" },
  { img: "images/denver-appliance.jpg", name: "Denver's Best Appliance Repair", tag: "home services · Denver, CO", url: "denversbestappliancerepair.com" },
  { img: "images/core-clinic.jpg", name: "Core Clinic Main Line", tag: "medical spa & wellness · Villanova, PA", url: "coreclinicmainline.com" },
  { img: "images/ing-mortgage.jpg", name: "ING Mortgage Corp", tag: "mortgage brokerage · NJ", url: "ingmortgagecorp.com" },
  { img: "images/local-search-360.jpg", name: "Local Search 360", tag: "local SEO agency", url: "localsearch360.com" },
  { img: "images/ideal-protein.jpg", name: "Ideal Protein with Penny", tag: "weight-loss clinic · Nebraska", url: "onesavedpenny.com" },
  { img: "images/pisa-paving.jpg", name: "Pisa Paving, Inc.", tag: "paving & masonry · NY", url: "pisapaving.com" },
  { img: "images/motor-rentals.jpg", name: "Motor Rentals", tag: "motorcycle rentals · Los Angeles, CA", url: "motorentals.net" },
  { img: "images/fish-together.jpg", name: "Fish Together", tag: "community app concept", url: "fish-together.com" },
];

const grid = document.getElementById("workGrid");
grid.innerHTML = projects.map(p => `
  <article class="project">
    <div class="browser-frame">
      <div class="browser-chrome">
        <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
        <span class="url-bar">${p.url}</span>
      </div>
      <div class="browser-body">
        <img src="${p.img}" alt="${p.name} website preview" loading="lazy" />
      </div>
    </div>
    <div class="project-info">
      <span class="project-name">${p.name}</span>
      <span class="project-tag">${p.tag}</span>
    </div>
  </article>
`).join("");

// ===== Hero rotating preview =====
const heroShot = document.getElementById("heroShot");
const heroUrl = document.getElementById("heroUrl");
let heroIndex = 0;
setInterval(() => {
  heroIndex = (heroIndex + 1) % projects.length;
  heroShot.style.opacity = 0;
  setTimeout(() => {
    heroShot.src = projects[heroIndex].img;
    heroUrl.textContent = projects[heroIndex].url;
    heroShot.style.opacity = 1;
  }, 300);
}, 3200);
heroShot.style.transition = "opacity 0.3s ease";

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(".reveal, .reveal-grid");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
revealTargets.forEach(el => revealObserver.observe(el));

// ===== Hero stat count-up =====
const counters = document.querySelectorAll(".count");
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => countObserver.observe(el));

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));


// ===== Contact form (FormSubmit) =====
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  note.textContent = "Sending...";
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });
    if (response.ok) {
      note.style.color = "#4CAF50";
      note.textContent = "✅ Message sent successfully! I'll get back to you soon.";
      form.reset();
    } else {
      note.style.color = "#ff4d4d";
      note.textContent = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    note.style.color = "#ff4d4d";
    note.textContent = "❌ Something went wrong. Please try again.";
  }
});
