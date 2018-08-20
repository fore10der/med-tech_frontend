$(function() {
 $('#nav__icon_header').on('click', function(e) {
 	e.preventDefault();
   $('#nav__menu_header').toggleClass('header__nav--opened');
 });
 $('#nav-header__services-search').on('click', function(e) {
 	e.preventDefault();
  $('#nav-header__services-search-wrap').toggleClass('nav__services-search-wrap--opened');
  $('#nav-header__services-search').toggleClass('nav__services-search--opened');
  $('#nav-header__services-search-block').toggleClass('nav__services-search-block--opened');
 });
 $('#nav-slide_mob-filter').on('click', function(e) {
 	e.preventDefault();
  $('#nav-slide_mob-filter').toggleClass('nav-slide_mob-filter--opened');
  $('#devices__sort_price-wrapper').toggleClass('devices__sort_price-wrapper--opened');
 });
});