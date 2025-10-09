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

I am using Ract.ts as the front end framework. Some of my additional functionalities
in the app are using additional libraries and design patterns: 

- Styling is being done with [MUI](https://mui.com/material-ui/ "MUI documentation") components and custom CSS.
- Client side routing is done via [React-Router](https://reactrouter.com/ "React-router v7 documentation")
- Animations are driven by [Motion](https://motion.dev/docs/react "Motion React documentation")
- Testing is done with [Playwright](https://playwright.dev/docs/ "Playwright documentation")
- API testing done with [Postman](https://www.postman.com/ "Postman home page")
- API code written in generic PHP (no framework)
- REST calls made by the site use [axios](https://axios-http.com/docs/intro "axios documentation")

The site is built to be modular. While it is not structured that way now, I intend to
implement a custom CMS to allow the format to expand with user-base. I would like to use
this site for future business and have decided to split the application into 2 sides.
The portfolio side and the creative side. The portfolio side is intended to be a place
where creators can have their own profile to display their personal work. This is
separate from the main site so it can stand alone if someone wanted to use it as
a professional portfolio. The creative side is intended to be a front-end for the
business itself. A place for creative people to get together and collaborate on
projects. I also intend for this to be the entry point for my D&D application.

With that in mind, you can see a clear division in the routing of the application.
The Cover.tsx page is being used as the landing point. From there users can click a
button to go to the portfolio side of the app or the creative side of the app. Once
they navigate to their chosen side of the application, the navbar at the top populates
and displays the available pages. There is an array in Navigation.tsx which contains
any paths that we do not want to display. This is to prevent people from going to 
pages that are not completed yet. The contact page is shared between both sides of
the application. The navigation links there merely let you choose Portfolio or Creative.

## Supporting Components

For this project I also built some Python scripts to aid me in my development and
deployment of the application. Since I am testing locally with Vite through VS Code and
WAMP, I also have set up a subdirectory on the public website to be used as a testing
area for this, or any other application I am working on. The API calls also go to and
from a subdomain. The python scripts that I build can be found in the py_scripts repo
here. They are basic and are called after build operations (see package.json for commands)

The script moves all files necessary for the project after build to a staging directory.
I have set up API, DEV, and PROD staging areas in my directory tree. Each of those areas
has a directory for the project and a cache to save the last version of the deployed app.
After the script caches the previous build and moves the current build to the staging area
After everything is staged, the script uses [Paramiko](https://docs.paramiko.org/en/stable/ "paramiko documentation")
to FTP the files to the remote web host. They are also (depending on the switches used) moves
to the WAMP directory for additional local testing.
