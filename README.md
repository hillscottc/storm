# A ChatGPT integration demo app

This is a demo project designed to to demonstrate coding an Artificial Intelligence interface powered by ChatGPT.

Deployed at https://delightful-bay-06ad1331e.4.azurestaticapps.net

The backend is built on Azure, impemented as a [Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) tooled with [swa cli](https://azure.github.io/static-web-apps-cli/).

It pulls data from the [ChatGPT Api](https://openai.com/api/).

The frontend is a typescript [React](https://react.dev) application tooled with [Vite](https://vite.dev). The styling is [MUI](https://mui.com).

```bash
az login
npx swa build
npx swa deploy --app-name storm --env production
```
