## Modern Personal Portfolio (Next.js App Router)

Premium, recruiter-friendly personal portfolio built with:

- **Next.js App Router** + **TypeScript**
- **TailwindCSS v4**
- **Framer Motion** (subtle reveal animations)
- Clean, reusable component architecture

### Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

### Content (from CV)

All copy/data lives in:

- `data/portfolio.ts`

Replace the placeholder fields with the information from your CV.

### CV Download

- Replace `public/cv.pdf` with your real CV PDF file (same filename).

### Folder Structure

- `app/` Next.js App Router
- `components/` reusable UI + navbar + motion helpers
- `data/` portfolio content
- `hooks/` client hooks (active section, reduced motion)
- `lib/` utilities (`cn`)

### Build

```bash
pnpm build
pnpm start
```

### Notes

- Dark-first design with cyan accent and subtle glowing grid.
- Animations respect **reduced motion** settings.
