'use strict';
var navBtn = document.querySelector('.header__nav-btn');
var body = document.body;

navBtn.addEventListener('click', function (e) {
  var curTarget = e.currentTarget;
  curTarget.classList.toggle('header__nav-btn--active');
  body.classList.toggle('menu-opened');
});
