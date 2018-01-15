import $ from 'jquery'

var prev = 0
var $window = $(window)
var nav = $('.js-nav-background')

$window.on('scroll', function () {
  var scrollTop = $window.scrollTop()
  nav.toggleClass('cn-c-top-bar-scroll-nav-background', scrollTop !== prev)
})
