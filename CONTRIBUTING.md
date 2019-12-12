# Contributing

If you would like to contribute to CountLog, you can do one of the following.

- Create a GitHub issue for a bug or feature request.
- Send out a pull request with a bug fix or new feature.

## Running the App Locally

- Run `npm install` to install all dependencies.
- Run `npm start` to run the app.
- Run `npm run build` to create a production build.
- Run `eclint check 'src/**/*'` to check for EditorConfig linting errors.
- Run `tslint src/**/*.ts*` to check for TSLint linting errors.

## MkDocs Installation

- Run `pip install mkdocs` to install MkDocs.
- Run `pip install mkdocs-material` to install the Material UI theme for MkDocs.
- Run `mkdocs serve` to run the docs server.
- Run `mkdocs build` to generate a static site.

## Deploying the App and Documentation

Both the code and documentation are hosted using Netlify. Each commit to the `master`
branch automatically triggers a deployment of the code. However, the documentation
requires special treatment since MkDocs requires `pip` for installation, which Netlify
won't handle for us. The workaround is to use the MkDocs `gh-deploy` command with a
custom branch name, and then have Netlify listen to the custom branch for changes.
Run `mkdocs gh-deploy -b netlify-pages` locally to push to the `netlify-pages` branch.
