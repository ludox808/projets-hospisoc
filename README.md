# Projets Hospisoc

This repository hosts the static website available at [projets.hospisoc.be](https://projets.hospisoc.be). The portal aggregates several experimental initiatives developed by Hospisoc.

## Projects

- **FLISP** (`/Flisp2/`): prototype for better social and medical information flow between care professionals.
- **Transports Dialyse** (`/transports-dialyse/`): site exploring transport organisation for dialysis patients.
- **Eladeb**: external psychosocial evaluation tool linked from the main page.
- An "About Hospisoc" section is planned under `/about/`.

## Building and deploying

Most of the pages in this repository are plain HTML that you can edit directly.
The **FLISP** project is different: it is a small React application built in a
separate repository. You need to compile that React app before copying the
result here.

Steps to build the React app:

1. In the `flisp-app` source folder run `npm install` once to install
   dependencies.
2. Execute `npm run build`. A `build/` directory is created.
3. Copy the contents of this `build/` directory into the `Flisp2/` folder of
   this repository, overwriting the old files.

After copying the compiled output, commit and push the changes to the `main`
branch. GitHub Pages will then publish the new version.

To preview the site locally, open `index.html` or run a minimal HTTP server:

```bash
python3 -m http.server
```

## Static versus generated content

* `index.html`, `eladeb3/` and `transports-dialyse/` are maintained as plain
  static HTML files.
* `Flisp2/` is generated from a separate React project and should contain only
  the compiled build output.

## Custom domain

The `CNAME` file configures the custom domain used by GitHub Pages. Currently it contains:

```
projets.hospisoc.be
```

Changing the domain requires updating this file and pointing the corresponding DNS record to GitHub Pages.
