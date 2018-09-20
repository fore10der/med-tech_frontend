import loadResources from "./loadResources"

export default function initToggler (container, pageNav = {}) {
	if ($("." + container).get(0)){
	loadResources(container, pageNav)
	$(window).on('resize', function(){
		loadResources(container, pageNav,"reload");
	});
	if (container!=="geography__map"){
		$("." + container + "-slide_prev").on("click", function (e) {
			e.preventDefault();
			loadResources(container,pageNav,"prev");
		})
		$("." + container + "-slide_next").on("click", function (e) {
			e.preventDefault();
			loadResources(container,pageNav,"next");
		})
	}
	}
};