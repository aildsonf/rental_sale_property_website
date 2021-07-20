Code Challenge Grupo ZAP

# Getting Started
This project was built using the following technologies:
- [Next.js](https://nextjs.org/docs) v11.0.1
- [TypeScript](https://www.typescriptlang.org/docs/) v4.3.5

## Running
In order to run locally, you can simply run one of the two scripts in project root folder:

Bash: `./build-local.sh`

PowerShell: `./build-local.ps1`

## Deploying
As described here, [Getting Started with Next.js and Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel), any change made to the main branch on GitHub will result a deploy on Vercel.
You can access my first deploy here: [Vercel Deployment](https://eng-zap-challenge-typescript-sand.vercel.app/).

## Testing
I set some simple tests with [Cypress](https://docs.cypress.io/guides/overview/why-cypress) v8.
Ensure you have cypress installed or you can do it by running `npm i cypress --save-dev`.
You can run using `npm run cypress:open` and a window should open with the tests.
Choose one and you current browser should be prompted.
##### **Note that tests where set to 'listen' to localhost, but you can change the url inside any test at `cy.visit()` method.
___
### I hope you enjoy! &#128516;

