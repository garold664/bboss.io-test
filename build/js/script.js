'use strict';
var navBtn = document.querySelector('.header__nav-btn');
var nav = document.querySelector('.header__nav');
var body = document.body;

nav.style.transition = 'none';
body.classList.remove('no-js');
setTimeout(function () {
  nav.style.transition = '';
}, 300);

navBtn.addEventListener('click', function (e) {
  var curTarget = e.currentTarget;

  if (body.classList.contains('menu-closed')) {

    body.style.top = (parseInt(window.scrollY, 10) * -1) + 'px';
    curTarget.classList.add('header__nav-btn--active');
    body.classList.remove('menu-closed');

    // body.style.position = 'fixed';
  } else {
    var scrollY = body.style.top;
    curTarget.classList.remove('header__nav-btn--active');
    body.classList.add('menu-closed');

    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  }
});
