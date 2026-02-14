# Promidata – Website

Next.js website voor Promidata, IT-oplossingen voor de promotional products en workwear industrie.

## Run instructions

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build voor productie

```bash
npm run build
npm start
```

## Pagina's

- **`/`** – Originele homepage
- **`/improved-design`** – Nieuwe B2B SaaS-stijl landing page (2025–2026 design patterns)

## Content wijzigen

Alle teksten van de **Improved Design** pagina staan in:

**`content/improved-home.ts`**

Pas hier o.a. aan:
- Hero (headline, subcopy, CTA-teksten)
- Social proof (supplier-namen, claim)
- Value pillars (ERP, Webshops, Sourcing, Data)
- Solutions (promotional & workwear oplossingen)
- How it works (3 stappen)
- Metrics / stat-cards
- Testimonials
- FAQ (vragen en antwoorden)
- Final CTA
- Contactgegevens
- Footer links

Wijzigingen verschijnen direct bij de volgende page refresh.

## Assets

- **Afbeeldingen**: plaats in `public/` (bijv. `public/logo.png`, `public/hero-image.png`)
- **Supplier logo's**: voeg toe aan `content/improved-home.ts` in `socialProof.supplierNames`, of vervang de LogoCloud-component voor echte logo-afbeeldingen
- **Hero visual**: de placeholder in `components/improved/Hero.tsx` kan vervangen worden door een screenshot, mock UI of video

## Componenten (Improved Design)

Herbruikbare componenten in `components/improved/`:

| Component    | Beschrijving                    |
|-------------|----------------------------------|
| `Nav`       | Navigatiebalk                    |
| `Hero`      | Hero-sectie met CTA's            |
| `LogoCloud` | Social proof met supplier-namen |
| `Features`  | Value pillars (4 kaarten)        |
| `SolutionsTabs` | Promotional vs Workwear tabs |
| `HowItWorks`| 3 stappen                        |
| `Stats`     | Metrics / stat-cards             |
| `Testimonials` | Klantquotes                   |
| `Integrations` | Ecosysteem-integraties       |
| `FAQ`       | Veelgestelde vragen              |
| `CTA`       | Final call-to-action             |
| `Footer`    | Contact, links, newsletter       |

## Technologie

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (subtiele animaties)

## SEO

De Improved Design pagina bevat:
- Metadata (title, description, OG tags)
- Structured data (Organization, SoftwareApplication)
- Semantische headings (h1, h2)
