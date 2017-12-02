# Basic webpack setup
* Starter template for multi-page website using Webpack.

## Notes
* 3 Nov. 2017
  * Added `gh-pages` to deploy site to github pages.
* 10 Nov. 2017
  * Added testing
    * Python robot framework - `mkvirtualenv -a . {name}`
    * `pip install robotframework`
* 16 November 2017
  * Got emmet to work. Got rid of a bunch of extensions. Enabled tab in preferences for emmet. Delete any emmet related extensions.
## npm run options
* `npm run dev` - startup webpack-dev-server in dev mode
* `npm start` - webpack dev server in production mode
* `gh-deploy:build` - build and push to gh-pages
* `npm test` - run test script

## Robot Framework - for testing
* Requirements
  * python (python3)
  * virtualenvwrappers - with all the requirements for it
* `mkvirtualenv -a . johanpersonalsite` - create virtual environment for python

## Settings
```
$global-font-size: 100%;
$global-width: rem-calc(1200);
$global-lineheight: 1.5;
$foundation-palette: (
  primary: #1779ba,
  secondary: #767676,
  success: #3adb76,
  warning: #ffae00,
  alert: #cc4b37,
);
$light-gray: #e6e6e6;
$medium-gray: #cacaca;
$dark-gray: #8a8a8a;
$black: #0a0a0a;
$white: #fefefe;
$body-background: $white;
$body-font-color: $black;
$body-font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
$body-antialiased: true;
$global-margin: 1rem;
$global-padding: 1rem;
$global-position: 1rem;
$global-weight-normal: normal;
$global-weight-bold: bold;
$global-radius: 5px;
$global-menu-padding: 0.7rem 1rem;
$global-menu-nested-margin: 1rem;
$global-text-direction: ltr;
$global-flexbox: true;
$global-prototype-breakpoints: false;
$global-button-cursor: auto;
$global-color-pick-contrast-tolerance: 0;
$print-transparent-backgrounds: true;

@include add-foundation-colors;
```

