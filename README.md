# san-webkit

## Requirements

Following tools should be pre-installed:

- [Node.js](https://nodejs.org/en/) >= v20.10.0 – JavaScript runtime environment
- [pnpm](https://pnpm.io/) = v8.x – package manager

## Installation

[pnpm](https://pnpm.io/) is used as a package manager, since it's a more efficient alternative to [npm](https://pnpm.io/motivation).

Install project's dependencies using a following command:

```bash
pnpm i
```

## Developing

```bash
npm run dev # for HTTP
npm run dev:https # for HTTPS
```

Chromium-based browsers may require additional steps to access the local HTTPS server:

- If `Accept and Continue` button is absent: click anywhere on the page and type `thisisunsafe`
- Reset `HSTS` for the local domain in the `chrome://net-internals/#hsts` settings

## Publishing a new version of the library

1. Switch to the `next` branch and run `git pull`
2. Run `npm run lib:release`
