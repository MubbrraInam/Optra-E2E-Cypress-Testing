# hirestream-e2e-tests
Cypress tests for Hirestream app

---

## Introduction to Cypress

Cypress is a relatively new automated tests tool which is gaining popularity at a very rapid pace

Here is the home page for Cypress if someone wants to look it up

<https://www.cypress.io/>

Cypress has very strong documentation so a new comer could find most of the information from their own site

<https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell>

Also as a starting point it would be good to go through these tutorial videos

<https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices>

---

## Test Setup

Tests are placed in `e2e-tests` folder, so before doing any of the below mentioned tasks you need to cd into this folder

### Installations

You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

`npm install`

which will install Cypress and other supporting tools

---

### Environment Variables

Following Environment Vars should be set before running the tests

`CYPRESS_ADMIN_GOOGLE_ID`

`CYPRESS_ADMIN_GOOGLE_PASSWORD`

_Note_: The above are credentials for an admin user while below are the credentials for a non admin user

`CYPRESS_USER_GOOGLE_ID`

`CYPRESS_USER_GOOGLE_PASSWORD`

---

### Run Tests

To run cypress tests in interactive mode use following command

`npm run cy:open`

To run cypress tests in normal mode use following command

`npm run cy:run`

---

### Using ES LInt

ESLint is also setup in the repo, you can use it by typing following command in terminal

`npm run lint`

---

## Docker Setup

Docker setup is also available for those who want to run the tests without doing any installations

To run the tests in Docker

* Provide the values for environment variables in the env_vars.env
* Use following command in terminal
        `docker-compose -f docker-compose.yml -f cy-run.yml up`

---

## Running Tests in Interactive Mode using Docker

You can also execute tests in interactive mode directly from Docker, for that you would need to do
some extra steps

As a pre-requisite you need to install XQuartz using following command

`brew cask install xquartz`

or install it directly from <https://www.xquartz.org/>

### To configure XQuartz

* Open XQuartz using following command in terminal
  * `open -a XQuartz`
* In the XQuartz preferences, go to the “Security” tab and make sure you’ve got “Allow connections from network clients” ticked

### To run the tests

* Provide the values for environment variables in the env_vars.env
* Grab the IP of the host machine and add it to the allowed X11 hosts by running these commands
  * `IP=$(ipconfig getifaddr en0)`
  * `/usr/X11/bin/xhost + $IP`
* Pass the environment variable DISPLAY to show Cypress GUI on the host system
  * `DISPLAY=$IP:0`
* Use following command in terminal
  * `docker-compose -f docker-compose.yml -f cy-open.yml up`
