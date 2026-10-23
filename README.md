This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Import [github.com/azahruddin101/plassio](https://github.com/azahruddin101/plassio) in Vercel (team **InnovBit** or your personal account).
2. Confirm project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (repository root)
   - **Build Command:** `npm run build`
   - **Output Directory:** leave **empty** (do not set `public` or `.next`)
   - **Install Command:** `npm install`
3. Deploy **Production** from the `main` branch.

If the live URL shows Vercel’s plain `404: NOT_FOUND` page, the project exists but no successful production deployment is assigned—open **Deployments**, fix any failed build, then **Promote to Production**.

Local production check:

```bash
npm install
npm run build
npm start
```
