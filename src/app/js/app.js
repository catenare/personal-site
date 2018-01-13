import $ from 'jquery'

var prev = 0
var $window = $(window)
var nav = $('.js-nav-background')

$window.on('scroll', function () {
  var scrollTop = $window.scrollTop()
  nav.toggleClass('js-background', scrollTop !== prev)
  // prev = scrollTop
  // console.log('scroll-top:', scrollTop)
})
