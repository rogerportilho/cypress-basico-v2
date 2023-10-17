# cypress-basico-v2

[![main](https://github.com/wlsf82/cy-data-test/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/cy-data-test/actions)

Sample project to demonstrate a `cy.dataTest` Cypress custom command.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v18.15.0` and `9.5.1` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests
You can run the tests simulating a desktop or mobile viewport. 

### Desktop
Run `npm test` (or `npm t` for the short version) to run the test in headless mode on a desktop viewreport.

Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewreport.

### Mobile
Run `npm run test:mobile` to run the test in headless mode on a mobile viewreport.

Or, run `npm run cy:open` to open Cypress in interactive mode on a mobile viewreport.

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.



## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).