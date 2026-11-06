# Regvin Vinod Kumar: Portfolio

React + Material UI + Vite. Dark theme with a green accent, following the reference template.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in /dist
npm run preview   # preview the build
```

## Editing content

All text lives in **`src/content/content.js`**. Components only import from it.
Edit experience, projects, skills, certifications, contact details and links there.

| Want to…                    | Edit                                                    |
| --------------------------- | ------------------------------------------------------- |
| Add your LinkedIn           | `contact.linkedin` (button is hidden while empty)       |
| Add a profile photo         | put it in `public/`, set `profile.photo`                |
| Add bullets to a job        | `experience.items[n].highlights`                        |
| Add a project               | push an object into `projects.items`                    |
| Link a project              | set `link` on the project                               |
| Replace the resume          | overwrite `public/Regvin_Vinod_Kumar_Resume.pdf`        |

## Structure

```
src/
  content/content.js   all site content
  theme.js             MUI theme (colors, fonts)
  components/          Navbar, Hero, About, Experience, Projects,
                       Skills, Credentials, Contact, Footer, Section
public/
  Regvin_Vinod_Kumar_Resume.pdf
```

## Deploy

`vite.config.js` uses `base: "./"`, so `dist/` works on Netlify, Vercel, GitHub Pages or any static host.
