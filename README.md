This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Production website URL

Set this environment variable in the deployment environment **before building**:

```text
NEXT_PUBLIC_SITE_URL=https://newcastleapplianceexperts.com.au
```

The application defaults to this confirmed public domain when the variable is
absent. Production builds reject any other origin, including localhost and
Vercel preview hostnames, rather than emitting incorrect public SEO metadata.
Vercel hostname environment variables are deliberately not used for SEO.
For local development only, `NEXT_PUBLIC_SITE_URL=http://localhost:3000` may be
set when running `npm run dev`; remove that override before a production build.

Run `npx tsc --noEmit --incremental false` and `npm run lint` for checks.
In environments where Turbopack process creation is restricted, the verified
production build command is `npx next build --webpack`.

## Online repair submissions

Both repair forms submit to the same-origin Cloudflare Pages Function
at `/api/repair-submissions`. Deploy the repository with the root
`functions/` directory and the existing `out` static build output.

Set `RESEND_API_KEY` as a Cloudflare Pages secret and `REPAIR_FROM_EMAIL`
to an address on a verified sending domain. Requests go to the existing
service inbox, with the customer's address set as Reply-To. Set and
test these values in protected staging before enabling the production
form. Configure Cloudflare rate limiting for POST requests to this
endpoint before launch, and verify that a sample submission and its
attachments reach the service inbox. A static-only preview does not
run the Pages Function.
