import loadResources from "./loadResources"

export default function initToggler (container, pageNav) {
	loadResources(container, pageNav)
	$(window).on('resize', function(){
		loadResources(container, pageNav,"reload");
	});
	$("." + container + "-slide_prev").on("click", function (e) {
		e.preventDefault();
		loadResources(container,pageNav,"prev");
	})
	$("." + container + "-slide_next").on("click", function (e) {
		e.preventDefault();
		loadResources(container,pageNav,"next");
	})
};