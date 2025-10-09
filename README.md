# Sylphaxiom.com Website

This site will serve as my primary website for personal and professional needs.

## Details

- Frontend: React.ts
- Backend: APIs written in PHP
- DB: MySQL
- Host: Bluehost basic hosting plan (shared hosting)

This website is designed as a single-page-app with a separated frontend and
backend. At the moment there is no need for a backend as it is an mostly
just an informational site. I do plan to add more functionality and contact
information to the app in the future which will require an API and DB
connections. That work can be seen in the DnD-App project that is currently
ongoing as well.

While there is technically not a need for a DB at this time, I have implemented
a DB and an API which manages the CRUD operations via REST API. I am using a
simple MySQL DB. The table is currently only holding submission data from my
contact form. That is not intended to stay, it should change as there is no need
to store sent email data in a DB. This functionality is only for demonstrational
purposes until I set up a more perminent DB and architecture.

## Architecture/Design

I am using Ract.ts as the front end framework. Some of my additional functionality
in the app are using additional libraries and design patterns: 

- Styling is being done with [MUI](https://mui.com/material-ui/ "MUI documentation") components and custom CSS.
- Client side routing is done via [React-Router](https://reactrouter.com/ "React-router v7 documentation")
- Animations are driven by [Motion](https://motion.dev/docs/react "Motion React documentation")
- Testing is done with [Playwright](https://playwright.dev/docs/ "Playwright documentation")
- API testing done with [Postman](https://www.postman.com/ "Postman home page")
- API code written in generic PHP (no framework)
- REST calls made by the site use [axios](https://axios-http.com/docs/intro "axios documentation")
- 
