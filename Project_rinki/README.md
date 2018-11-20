# ReactJs, Node and Bootstrap boilerplate

This is a boilerplate I have made for getting started with a simple website using ReactJs (client side), NodeJs (server side) and Bootstrap for styling.

# Setting up

**npm install** - to download the needed dependencies

# How to run

**npm start** - this will run the website on http://localhost:3000

# Building for production
 **npm run-script build** - this uses webpack to build a distribution website under /dist/ folder 
 
 You will also need to set environment variables NODE_ENV to be set to 'production' and PORT to be whatever port you want the website to run on.. e.g 5000

 # Structure

 ## ReactJs

 All react code is in .jsx files inside of /app/components/ these make up the pages and smaller components as react is split up into different components

 ## NodeJs

 All node code is inside of /server.js by default i've left in two api routes for /api/articles and /api/search and you will be able to talk to your own data source inside of here to talk pull in actual data.

 ## Sass

 All sass / css code is in the /app/sass/ directory, i've set up some default styling to get you started.

 To change the colours, there are variables in /app/sass/modules/_variables.scss

 ## Bootstrap

 The index.tpl.html file has a reference to the bootstrap cdn for version 4.0.0-beta currently. For more information on bootstrap styling goto: https://getbootstrap.com/docs/4.0/getting-started/introduction/

 ## jQuery

 For a few operations i've included jQuery to be able to manipulate the dom e.g. the search modal popup

 ## Font awesome

 The index.tpl.html file has a reference to the fontawesome cdn, for more information follow: http://fontawesome.io