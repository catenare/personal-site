import $ from 'jquery'
import * as Webfont from 'webfontloader'
import '../../scss/app.scss'

Webfont.load({
  google: {
    families: [
      'Annie Use Your Telescope',
      'Itim',
      'PT Sans Narrow',
      'Roboto'
    ]
  }
})

const prev = 0
const $window = $(window)
const nav = $('.js-nav-background')

$window.on('scroll', function () {
  let scrollTop = $window.scrollTop()
  nav.toggleClass('cn-c-top-bar-scroll-nav-background', scrollTop !== prev)
})
