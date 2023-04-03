# Vanilla Drupal 9 Installation with Custom Theme (EmulsifyCLI)
This repository contains a basic installation of Drupal 9 with a custom theme created using EmulsifyCLI. The project is designed to be used with Lando, a local development environment tool, which simplifies the process of running and managing the project.

## Requirements
You must have the following requirements installed locally for being able to set up this project
- [Lando 3.6.4](https://docs.lando.dev/getting-started/installation.html)
- [Docker 4.15.0](https://www.docker.com/products/docker-desktop/)
- [Composer 2.4.3](https://getcomposer.org/doc/00-intro.md)
- [NVM 0.39.2](https://github.com/nvm-sh/nvm)
- Node.js 18.11.0 (using nvm: `nvm install v8.19.2`)
- [NPM 8.19.2](https://docs.npmjs.com/cli/v6/commands/npm-install)

## Installation

To install the project, follow these steps

Clone the repository to your local machine

`git clone git@github.com:ParallelDevs/emulsify-demo.git`

Start the Lando environment

`lando start`

Import the database

`lando db-import db-backup.gz`

Install the dependencies

`composer install`

Import local configuration files

`lando drush cim`

## Setup the Emulsify custom theme

Navigate to the custom theme directory:

`cd web/themes/custom/tutorial/`

Use the correct version of Node.js using node version manager (nvm)

`nvm use`

Install the theme dependencies

`npm install`
`composer install`

## Usage

To build a production-ready version of the application

`npm run build`

Start a local development server

`npm run develop`

To run Storybook

`npm run storybook`
