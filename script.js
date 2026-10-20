/* ==========================================================
   TOOLSHELF — script.js
   1) EDIT CARDS:     change the CARDS array below.
   2) EDIT AFFILIATE: change the AFFILIATES array below.
   ========================================================== */

// Only link to official sites or open-source projects.
const CARDS = [
   { name: "MicroG Services", tag: "Install This First(Most Important)", url: "https://github.com/vancedto/vanced.to/releases/download/2026-8/vanced.to_vanced_gms_microg_v0.3.13.2.250932.apk", desc: "It allows users to access Google services without installing the full Google Play Services package, providing a more lightweight and privacy-focused alternative." },
  { name: "Google Photos", tag: "Click to install", url: "https://github.com/vancedto/vanced.to/releases/download/2026-39/vanced.to_rushi_com.google.android.apps.photos_arm64v8a_v7.92.0.977185651_cli1.17.0.6_p1.23.0.1.apk", desc: "An app for Unlimited Google Cloud storage for free.Just Add your account in which you want Unlimited cloud storage." },
  { name: "Youtube Premium", tag: "Click to install", url: "https://github.com/vancedto/vanced.to/releases/download/2026-7/vanced.to_vanced_youtube_ext_v20.05.46_cli5.0.2_p5.14.1.9.apk", desc: "A Youtube Premium for Android. With your own Google account, no tracking, and background playback built in and many other premium features." },
  { name: "Youtube Music Premium", tag: "Click to install", url: "https://github.com/vancedto/vanced.to/releases/download/2026-7/vanced.to_vanced_youtube_music_ext_arm64_v8a_v8.30.54_cli5.0.2_p5.14.1.9.apk", desc: "A Youtube Music Premium for Android. With your own Google account, no tracking, and download any song and many other premium features." },
  { name: "YouTube Config File", tag: "Click to install(if you want)", url: "YouTube_config_file.txt", desc: "If you want Basic Normal YouTube Premium look." },
  { name: "YouTube Music Config File", tag: "Click to install(if you want)", url: "YouTube_Music_config_file.txt", desc: "If you want Basic Normal YouTube Music Premium look." },
];

// Placeholder links: replace "#" with your real affiliate URLs.
const AFFILIATES = [
  { name: "Claude Code", desc: "For Creating Web Structure", url: "claude.ai" },
  { name: "Web hosting", desc: "When your project outgrows GitHub Pages.", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
  { name: "GitHub Copilot Student", desc: "Editors and utilities I actually use.", url: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students" }
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

// Animated headline: split into words
const h1 = document.querySelector(".hero h1");
h1.setAttribute("aria-label", h1.textContent.trim());
h1.innerHTML = h1.textContent.trim().split(" ").map((w, i) =>
  `<span class="w" aria-hidden="true"><span style="animation-delay:${i * 0.09}s">${w}</span></span>`
).join(" ");
