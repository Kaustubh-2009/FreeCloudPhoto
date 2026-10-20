# FreePremium

A small static website that lists a handful of Android apps, with plain install steps and config files, so people can set them up without hunting around.

**Live site:** https://freepremiumreal.vercel.app

> **Please read:** The apps linked on the site are **third-party, patched (ReVanced / Vanced-style) builds** hosted by other projects, not official releases from Google. This repository only contains the website. It does not host, modify or redistribute any APK. Using patched apps may go against the original services' Terms of Service, so install at your own risk.

## What's on the site

- **Tools shelf:** cards linking to MicroG, Google Photos, YouTube and YouTube Music builds, plus optional config files.
- **Install guide:** a 3-step guide (install the app, install MicroG, import the config).
- **FAQ, support and contact sections**, plus a privacy policy page.
- **Light/dark theme** that remembers your choice.

## Tech stack

Plain HTML, CSS and JavaScript. No framework, no build step, no analytics, no ads.

## Project structure

```
.
├── index.html                    # Main page
├── privacy.html                  # Privacy policy
├── 404.html                      # Not-found page
├── style.css                     # Styles and theme colours (edit :root variables)
├── script.js                     # Cards and links (edit the CARDS / AFFILIATES arrays)
├── favicon.svg                   # Site icon
├── robots.txt                    # Crawler rules
├── YouTube_config_file.txt       # Settings import for YouTube
├── YouTube_Music_config_file.txt # Settings import for YouTube Music
└── README.md
```

## Run locally

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
# open index.html in a browser, or serve it:
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customise

- **Add or remove apps:** edit the `CARDS` array in `script.js`.
- **Change colours:** edit the CSS variables at the top of `style.css`.
- **Update contact links:** edit the links in `index.html`.

## Deploy

**GitHub Pages:** Settings, then Pages, choose the `main` branch and root folder.
**Vercel:** import the repo and deploy with the default static settings.

## Using the config files

1. Open the patched app and tap the Settings icon.
2. Select **RVX**, then **Miscellaneous**.
3. Tap **Import/Export settings**, then **Import settings**.
4. Choose the downloaded config file.

## Disclaimer

This project is not affiliated with or endorsed by Google, YouTube or any app developer. All trademarks belong to their owners. No warranty is provided. Download only from sources you trust and review each project's own page before installing.

## Contact

Kaustubh Bharti: [Linktree](https://linktr.ee/Kaustubh_2009) · [LinkedIn](https://www.linkedin.com/in/kaustubh-bharti)

## License

Add a license of your choice (e.g. MIT) as a `LICENSE` file.
