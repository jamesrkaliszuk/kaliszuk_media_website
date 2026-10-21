# Video Portfolio Starter

A cinematic dark portfolio built with Astro, Pages CMS, GitHub, and Cloudflare Pages. Video playback uses YouTube embeds; project thumbnails can use YouTube's thumbnail URL automatically.

## Before publishing
1. Replace `YOUR NAME` in `src/layouts/BaseLayout.astro` and page titles/copy as desired.
2. In `src/pages/index.astro`, set `showreelId` to your YouTube showreel video ID (or leave blank to show the designed placeholder).
3. In `src/pages/contact.astro`, replace `YOUR_EMAIL@example.com` and connect a real Tally form; the included contact form is only a placeholder and does not send submissions.
4. Replace or delete `src/content/projects/sample-project.md`. It is marked as a draft and is hidden from the public website.
5. Update `site` in `astro.config.mjs` to your real domain after purchasing it (or when ready to connect it).

## Pages CMS
The `.pages.yml` file configures a visual project editor. Open https://app.pagescms.org, sign in with GitHub, and select this repository. New projects are Markdown files under `src/content/projects/`. Pages CMS commits changes to GitHub; Cloudflare Pages can then rebuild and publish the site.

## Cloudflare Pages build settings
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Upload this starter to GitHub using the browser
Extract the ZIP first. Open your `video-portfolio` repository on GitHub, choose **Add file → Upload files**, then drag the *contents* of the extracted folder into the upload area. Make sure `.pages.yml` is included (it may be hidden by your operating system; turn on hidden files if needed). Commit to `main`.

## Local preview (optional)
Install Node.js 20+ and run:
```sh
npm install
npm run dev
```

This is a starter template, not a fully launched website. Test the build and contact form before sharing the domain publicly.
