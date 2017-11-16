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
