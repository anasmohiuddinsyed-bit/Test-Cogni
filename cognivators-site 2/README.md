# Cognivators — Landing Site (Vite + React + Tailwind)

Dark, cinematic website featuring **POSENTIA** and the “Talk to POSENTIA” CTA.

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy options

### 1) Vercel (recommended)
- Import this repo in Vercel.
- Framework: **Vite**. Build command: `npm run build`. Output: `dist`.
- Add your domain and point DNS as Vercel instructs.

### 2) GitHub Pages
This repo includes a GitHub Actions workflow. Steps:
1. Push to `main`.
2. In repo **Settings → Pages**, select **GitHub Actions** as the source.
3. The workflow builds `dist` and publishes it.
> Note: If your repo name is not `cognivators-site`, update `base` in `vite.config.ts` or set `GITHUB_PAGES=1` env in the workflow.

### 3) Any static host
Upload `/dist` to Netlify, Cloudflare Pages, S3/CloudFront, etc.

## Customize
- Replace `/public/cognivators-logo.png` with your latest logo asset.
- Edit copy in `src/pages/Landing.tsx`.
- Add routes or sections as you scale.

## Subdomain for POSENTIA
Point `posentia.cognivators.com` to your app (Vercel/Render/etc) and keep the CTA URLs in the landing page.
