# Toolshelf

A static "app tools & guides" site. Plain HTML, CSS and JavaScript. No build step.

## Files
- `index.html` – page content and text
- `style.css` – design; colors are the variables at the top
- `script.js` – the `CARDS` and `AFFILIATES` lists, dark mode, scroll fade-in
- `privacy.html`, `404.html`, `sitemap.xml`, `robots.txt`, `assets/favicon.svg`

## Edit things
- **Text:** open `index.html` and change the words.
- **Colors:** change `--accent`, `--bg`, `--text` in `style.css` (light and dark blocks).
- **Cards:** edit the `CARDS` array in `script.js`. Link only to official or open-source sites.
- **Support buttons:** in `index.html`, replace each `href="#"` under "Support this project".
- **Affiliate links:** replace `url: "#"` in `AFFILIATES`, or delete that section if unused.
- **Your URL:** replace `YOUR-USERNAME` and `YOUR-REPO` in `index.html`, `sitemap.xml`, `robots.txt`.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub (for example `toolshelf`).
2. Push these files (commands below).
3. Repository **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`, then Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/toolshelf/`.

```bash
cd toolshelf
git init
git add .
git commit -m "Initial commit: Toolshelf site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/toolshelf.git
git push -u origin main
```
