# Kabir Sahu - Portfolio

Personal portfolio site built with Next.js (App Router), React 19, and Tailwind CSS v4.

## Pages

| Route       | Content                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | About, skills, professional experience, education              |
| `/projects` | Featured projects, category filter, work in progress           |
| `/contact`  | Contact form (FormSubmit) and direct contact links             |

## Editing content

Most content lives in plain TypeScript data files, so updating the site rarely
means touching components:

- `data/projects.ts` - completed projects. Set `featured: true` and a
  `featuredRank` to pin a project to the top of the Projects page.
  `categories` drive the filter chips.
- `data/currentProjects.ts` - the "Currently Working On" section.
- `data/skills.ts` - the skills grid on the home page.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # also regenerates sitemap.xml and robots.txt via next-sitemap
```

Set `SITE_URL` to the deployed URL (for example in Vercel project settings) so
the generated sitemap and robots.txt point at the real domain.
