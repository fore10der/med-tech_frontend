$(function() {
 $('#nav__icon_header').on('click', function() {
   $('#nav__menu_header').toggleClass('header__nav--opened');
 });
 $('#nav-header__services-search').on('click', function() {
  $('#nav-header__services-search-wrap').toggleClass('nav__services-search-wrap--opened');
  $('#nav-header__services-search').toggleClass('nav__services-search--opened');
  $('#nav-header__services-search-block').toggleClass('nav__services-search-block--opened');
 });
});