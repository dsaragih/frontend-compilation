# Frontend Projects Compilation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective

Create one location wherein all of my FreeCodeCamp Frontend Libraries projects are stored.
[Github Pages](https://dsaragih.github.io/frontend-compilation/)

Completed projects on their individual pages can be found [here](https://github.com/dsaragih/frontend-projects).

## Issues

1. CSS styling for the individual react apps interfere with each other, and they interact differently on each page (presumably because of CSS priorities). Causes the styling of the entire page to be a mess.
2. I tried to use react-bootstrap for the navbar of the site, but I found that using it makes my site unable to load (perpetual loading screen, as if there is an infinite loop). Because of this, I used a navbar created using react by [GeeksforGeeks](https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/), and relegated the original react-bootstrap navbar to index1.js with the code unchanged.
3. In drum-machine.js I used material-ui for the power switch and volume slider. Though the slider loaded and worked fine, the switch did not as I used `withStyles` to style the switch. Oddly, this worked in the original page (can be found in the frontend-projects repo), but in this page I got an error first stating that I should import `withStyles` from @material-ui/styles rather than @material-ui/core. After doing that, I got another error stating that the `theme` argument was undefined. I tried to account for this by adding `const theme = Mui.createTheme();`, but it did not work and so I ended up commenting out the function so that I could deploy the page.
