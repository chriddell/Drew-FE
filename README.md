# Drew FE-Code Test

To rebuild the application, remove the 'dist' folder and then run 'gulp dist' in the terminal (after npm install -ing).

## Code Structure

I've split my code into two top-level folders: app + dist.

App is the src folder and contains:

- sass partials;
- js 'partials';
- media (only images in this instance, but could videos, fonts etc.)

Dist contains:

- the built application (compiled from a gulp command)

A further breakdown of the code structure below:

## CSS

- Uses BEM
- Split into partial folders based on the ITCSS methodology
- Also uses prefixes/namespaces to indicate a classes purpose: c- for components, l- for layout, u- for utility

## JS

- I would ideally liked to have used ES6 and compiled it with Babel (therefore allowing me to use require() and import libraries installed via NPM), however as I used Gulp (as directed in your README) I didn't have any experience using these two together, and so opted for a simpler option
- Again due to the above, I called the blazy.js library from a CDN to save time.

## Images

- I optmized these manually from Photoshop rather than in a build step. This allows more control over how they will appear in browser I think. I also added the faded overlay on the sidebar blocks in Photoshop because it allowed me to optimize the images to a smaller size.
- I optimized the SVG using SVGO https://github.com/svg/svgo
- I chose to lazyload the hero image as I didn't want to reduce it's quality too much.
- I wouldn't normally push a media folder to Git, but in this instance I think it's acceptable!

I think the above covers most of my decisions within the code. The rest should be self-explanatory after looking through the files!

## Future implementations

- Modernizr (specifically for the no-touchevents detect - allowing me to remove :hover events when on a touch device)
- Parallax effect on the hero image
- Improving the mobile menu transition and appearance
- Measuring the spacings exactly as the design (I don't have access to Sketch!)

I hope you find/have found this readme helpful, if not, feel free to ping me any questions @ chrisliddell1991@gmail.com
