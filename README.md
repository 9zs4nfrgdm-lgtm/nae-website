# Newcastle Appliance Experts website

The site uses a Next.js static export and a Cloudflare Pages Function for online repair intake.

## Build and check

Use the same Node.js version as the Pages build environment.

```sh
npm ci
npm run lint
npx next typegen
npx tsc --noEmit --incremental false
npm run build
```

The build writes to `out/`. Serve that directory with a static server for
page-only checks. To test the forms, run a Pages-compatible preview from
the repository root with the `functions/` directory available.

Set `NEXT_PUBLIC_SITE_URL=https://newcastleapplianceexperts.com.au`
in the build environment. This is also the default. Keep staging access
restricted even though staging HTML uses the public canonical domain.

## Cloudflare Pages

Use the `nae-website` Pages project. For Git-integrated builds, use
`npm run build`, the repository root, and `out` as the output directory.
Use the Git integration or a supported Wrangler deployment from the
repository root so Cloudflare includes `functions/api/repair-submissions.ts`.
Uploading only `out` through the dashboard does not deploy the Function.

In each environment that accepts submissions, set `RESEND_API_KEY`
as a Pages secret and `REPAIR_FROM_EMAIL` to a verified sender.
Keep preview and production credentials separate. Requests are sent to
the service inbox with the customer's email as Reply-To. Apply production
rate limiting to POST requests at `/api/repair-submissions`.

Before switching traffic, record the release commit and last working
production deployment for rollback. Verify HTTPS and the canonical host,
then test both forms and open the sample attachments in the service inbox.
Verify signed-out access separately for the base Pages address, each
preview alias and historical deployment URLs. Confirm staging sign-in still works.
