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

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Contact form (static-friendly: opens mail client) =====

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

