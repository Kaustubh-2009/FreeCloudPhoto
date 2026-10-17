/* ==========================================================
   TOOLSHELF — script.js
   1) EDIT CARDS:     change the CARDS array below.
   2) EDIT AFFILIATE: change the AFFILIATES array below.
   ========================================================== */

// Only link to official sites or open-source projects.
const CARDS = [
  { name: "F-Droid", tag: "Open source", url: "https://f-droid.org", desc: "An app store for Android that only lists free software, with the source code for every app you install." },
  { name: "NewPipe", tag: "Open source", url: "https://newpipe.net", desc: "A lightweight YouTube client for Android. No Google account, no tracking, and background playback built in." },
  { name: "Termux", tag: "Open source", url: "https://termux.dev", desc: "A terminal and Linux environment on your phone. Good for learning the command line anywhere." },
  { name: "VLC", tag: "Official", url: "https://www.videolan.org/vlc/", desc: "Plays almost any video or audio file on any device, with no ads and no sign-up." },
  { name: "Bitwarden", tag: "Open source", url: "https://bitwarden.com", desc: "A password manager with a generous free tier. Stores one strong password per site so you don’t have to." },
  { name: "Syncthing", tag: "Open source", url: "https://syncthing.net", desc: "Syncs folders between your own devices directly, without sending files through anyone’s cloud." }
];

// Placeholder links: replace "#" with your real affiliate URLs.
const AFFILIATES = [
  { name: "VPN service", desc: "For public Wi-Fi at college or cafes.", url: "#" },
  { name: "Web hosting", desc: "When your project outgrows GitHub Pages.", url: "#" },
  { name: "Developer tools", desc: "Editors and utilities I actually use.", url: "#" }
];

const arrow = '<svg class="icon" aria-hidden="true"><use href="#i-out"/></svg>';

document.getElementById("cards").innerHTML = CARDS.map(c => `
  <a class="card reveal" href="${c.url}" target="_blank" rel="noopener noreferrer">
    <span class="tag">${c.tag}</span>
    <h3>${c.name} ${arrow}</h3>
    <p>${c.desc}</p>
  </a>`).join("");

document.getElementById("affiliates").innerHTML = AFFILIATES.map(a => `
  <a class="card reveal" href="${a.url}" target="_blank" rel="sponsored noopener noreferrer" data-placeholder="${a.url === '#'}">
    <h3>${a.name} ${arrow}</h3>
    <p>${a.desc}</p>
  </a>`).join("");

// Links still set to "#" do nothing until you fill them in.
document.addEventListener("click", e => {
  const a = e.target.closest('a[href="#"]');
  if (a) e.preventDefault();
});

// Dark / light toggle, remembered in localStorage
const root = document.documentElement;
document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Fade-in on scroll
const io = new IntersectionObserver(items => items.forEach(i => {
  if (i.isIntersecting) { i.target.classList.add("in"); io.unobserve(i.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
