# CARS SPEED - test

## Getting Started

To try how it works you need to have NODE.js and GULP installed on your machine and simply do 

```
git clone https://github.com/aleksandarbatin/carsSpeed-app.git
cd carsSpeed-app
npm install
```
All files used for building project are in /src folder. You can see there that I'm using SASS for preprocesing CSS. Inside SASS folder see readme file for explanation of logic that I used for css naming convention and files structure.

## Running the project

As a part of GULP workflow there are some basic tasks like: 

#gulp-sass - for compiling Sass into CSS.

#gulp-plumber - prevent pipe breaking caused by errors from gulp plugins

#gulp-uglufy - minifies all .js files.

#gulp-minify-css - minifies all CSS files.

#gulp-imagemin - to optimize images using imageoptim and jpegmini

#gulp-watch - watches for changes to file content and then executes gulp tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#browser-sync - keep multiple browsers & devices in sync when building websites.

To run and test project or work on it you just need command

```
gulp
```
Enjoy it!

