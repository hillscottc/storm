# An AI integration demo app

This is a demo project designed to to demonstrate coding an AI interface powered by ChatGPT.

Deployed at https://delightful-bay-06ad1331e.4.azurestaticapps.net
It's a responsive design -- will look good on desktop or phone.

The backend is built on Azure, implemented as a [Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) tooled with [swa cli](https://azure.github.io/static-web-apps-cli/).

It pulls data from the [ChatGPT Api](https://openai.com/api/).

It is tooled as an [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static), mainly to allows server-side routes and auth via `staticwebapp.config.json`.

The frontend is a typescript [React](https://react.dev) app tooled with [Vite](https://vite.dev). Single page architecture with [React Router](https://reactrouter.com/). The styling is [MUI](https://mui.com).

## Build

First, you'll need to supply some global environment variables. Rename `.env.sample` to `.env` and supply your own values.

## Start

```bash
npx swa start
```

...or to run without the SWA wrapper and auth stuff

```bash
npm run dev
```

## Deploy

```bash
az login
npx swa build
npx swa deploy --app-name storm --env production
```
