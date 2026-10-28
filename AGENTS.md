<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- Next.js 16.4 App Router with Turbopack, React 19.3, TypeScript (strict), Tailwind CSS v4.
- UI is Pimolu UI (`@pimolu/react` + `@pimolu/web-styles`), pinned to `0.1.0-beta.3.1`. Do not bump the beta versions without re-testing the build.
- Routes live in `app/`; there is no `src/` directory. The `@/*` alias maps to the repo root (`./*`).

## Commands

- `npm run dev` — dev server at http://localhost:3000. Turbopack is the default; dev output goes to `.next/dev`, so `dev` and `build` can run concurrently.
- `npm run lint` — ESLint flat config. `next lint` was removed in Next 16.
- `npm run typecheck` — runs `next typegen && tsc --noEmit`. Run typegen first: `PageProps`, `LayoutProps`, and `RouteContext` are generated into `.next/types`, and `next-env.d.ts` is gitignored, so a bare `tsc` fails on a clean checkout.
- `npm run build` / `npm run start` — production build and serve. If prerendering fails, retry with `npx next build --debug-prerender`.
- No test runner or CI/CD pipeline is configured. Lint, typecheck, and build are the local verification.
- Node 22.12+ is required (`engines` + `.nvmrc`). Use npm; the repository is locked with `package-lock.json`.
- Only one dev server per project. If port 3000 is taken, `next dev` prints the running server's URL and PID — reuse it instead of killing it.

## Next.js 16 specifics

- Before using routing, data-fetching, caching, or metadata APIs, read the version-matched docs in `node_modules/next/dist/docs/`; the installed version differs from most training data.
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`. Data is dynamic by default: cache with `"use cache"`, and wrap uncached async reads (`fetch`, `cookies()`, `headers()`, `params`, `searchParams`) in `<Suspense>` or prerendering fails.
- Cache Components requires the Node.js runtime. Do not add `export const runtime` (even `'nodejs'`); it is unsupported with this flag.
- `revalidateTag` requires a cacheLife profile: `revalidateTag("tag", "max")`. Use `updateTag` inside Server Actions when the user must see their write immediately.
- Middleware is now `proxy.ts` exporting `proxy` (Node runtime only); `middleware.ts` is deprecated.
- With `partialPrefetching`, links prefetch a shared App Shell by default; `<Link prefetch={true}>` opts into URL-specific data.

## Styling and Pimolu UI

- `app/layout.tsx` imports `@pimolu/web-styles/styles.css` before `./globals.css` and wraps the app in `PimoluProvider defaultTheme="system"`. Keep that order: Pimolu tokens/components must load before the page overrides.
- Build UI from `@pimolu/react` components (`Box`, `VStack`/`HStack`, `Heading`, `Text`, `Code`, `Button`, `Link`, etc.) instead of raw HTML or another UI library. `app/page.tsx` is a client component because it passes click handlers.
- Pimolu spacing props are numeric/enum values, not strings: `gap={3}`, not `gap="3"`.
- Tailwind v4 is compiled by the `@tailwindcss/turbopack` loader in `next.config.ts`'s `turbopack.rules`; there is no PostCSS or `tailwind.config.*`. Keep it that way unless deliberately migrating.
- `app/globals.css` holds the Tailwind entry plus the starter page's custom classes (wordmark, instructions, actions, footer). The look intentionally follows the Vite starter: Inter/system stack, no `next/font`.
