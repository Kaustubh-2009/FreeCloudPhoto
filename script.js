/* ==========================================================
   TOOLSHELF — script.js
   1) EDIT CARDS:     change the CARDS array below.
   2) EDIT AFFILIATE: change the AFFILIATES array below.
   ========================================================== */

// Only link to official sites or open-source projects.
const CARDS = [
   { name: "MicroG Services", tag: "Install This First(Most Important)", url: "https://github.com/vancedto/vanced.to/releases/download/2026-8/vanced.to_vanced_gms_microg_v0.3.13.2.250932.apk", desc: "MicroG, also known as GMSCore, is a free and open-source implementation of Google's proprietary Android user space apps and libraries. It allows users to access Google services without installing the full Google Play Services package, providing a more lightweight and privacy-focused alternative. MicroG is essential for running apps that depend on Google services on devices or custom ROMs that don't include them by default." },
  { name: "Google Photos", tag: "Open source", url: "https://github.com/vancedto/vanced.to/releases/download/2026-39/vanced.to_rushi_com.google.android.apps.photos_arm64v8a_v7.92.0.977185651_cli1.17.0.6_p1.23.0.1.apk", desc: "An app for Unlimited Google Cloud storage for free." },
  { name: "Youtube Premium", tag: "Open source", url: "https://github.com/vancedto/vanced.to/releases/download/2026-7/vanced.to_vanced_youtube_ext_v20.05.46_cli5.0.2_p5.14.1.9.apk", desc: "A Youtube Premium for Android. With your own Google account, no tracking, and background playback built in and many other premium features." },
  { name: "Youtube Music Premium", tag: "Open source", url: "https://github.com/vancedto/vanced.to/releases/download/2026-7/vanced.to_vanced_youtube_music_ext_arm64_v8a_v8.30.54_cli5.0.2_p5.14.1.9.apk", desc: "A Youtube Music Premium for Android. With your own Google account, no tracking, and download any song and many other premium features." },
  { name: "X", tag: "Official", url: "https://github.com/vancedto/vanced.to/releases/download/2026-29/vanced.to_vanced_twitter_piko_v12.7.1-release.0_cli1.10.0_p3.8.0.4.apk", desc: "Use Twitter with all features and No Ads." },
  { name: "All In one Pdf reader", tag: "Open source", url: "https://github.com/vancedto/vanced.to/releases/download/2026-39/vanced.to_rushi_alldocumentreader.office.viewer.filereader.pdfviewer_arm64v8a_v3.2.4_cli1.17.0.6_p1.23.0.1.apk", desc: "This App will unlock premium membership features without requiring a subscription and eliminate in-app advertisements and promotional banners. Users can enjoy a seamless, unrestricted experience with full access to advanced tools right out of the box." }
];

// Placeholder links: replace "#" with your real affiliate URLs.

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
