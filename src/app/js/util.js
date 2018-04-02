import $ from 'jquery'
import * as Webfont from 'webfontloader'
import '../../scss/site.scss'

Webfont.load({
  google: {
    families: [
      'Lato',
      'Rubik',
      'Tillana'
    ]
  }
})
/*
font-family: 'Lato', sans-serif;
font-family: 'Rubik', sans-serif;
font-family: 'Tillana', cursive;
*/

const prev = 0
const $window = $(window)
const nav = $('.js-nav-background')

$window.on('scroll', function () {
  let scrollTop = $window.scrollTop()
  nav.toggleClass('cn-c-top-bar-scroll-nav-background', scrollTop !== prev)
})
