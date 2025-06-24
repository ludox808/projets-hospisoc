# Projets Hospisoc

This repository hosts the static website available at [projets.hospisoc.be](https://projets.hospisoc.be). The portal aggregates several experimental initiatives developed by Hospisoc.

## Projects

- **FLISP** (`/Flisp2/`): prototype for better social and medical information flow between care professionals.
- **Transports Dialyse** (`/transports-dialyse/`): site exploring transport organisation for dialysis patients.
- **Eladeb**: external psychosocial evaluation tool linked from the main page.
- An "About Hospisoc" section is available under `/about/`.

## Building and deploying

The site is fully static—no build step is required. Update the HTML files and push the changes to the main branch. GitHub Pages will automatically deploy the latest revision.

To preview locally, open `index.html` in your browser or run a small HTTP server, for example:

```bash
python3 -m http.server
```

## Custom domain

The `CNAME` file configures the custom domain used by GitHub Pages. Currently it contains:

```
projets.hospisoc.be
```

Changing the domain requires updating this file and pointing the corresponding DNS record to GitHub Pages.
