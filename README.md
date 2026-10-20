# Portfolio: Nathan Satge

My personal website: who I am, my experience, and my cybersecurity projects.

**Live site:** https://nathan-satge.vercel.app

## Stack

| Part | Tool |
|---|---|
| Framework | Next.js 15 (Pages Router), React 19, TypeScript |
| Style and animation | Tailwind CSS 4, Framer Motion |
| Icons | lucide-react, react-icons |
| Contact form | FormSubmit |
| Hosting | Vercel |

## Structure

```text
src/pages/index.tsx      home page: profile, skills, experience, projects
src/pages/projects/      one page per detailed project
src/pages/merci.tsx      thank-you page after the contact form
src/data/                projects and experience lists (edit these to update the site)
public/                  images and CV
```

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Security

- Next.js is kept on a patched 15.5 release (`npm audit` shows no critical issue).
- No secrets in the code: the site is static, and the contact form posts to FormSubmit.
