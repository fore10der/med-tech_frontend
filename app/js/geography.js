var $map = $(".geography__map");
$(function() {
var $this = $("#KhabarovskKrai");
var xToCenter = toLocaleMapWidth($this[0].getBoundingClientRect().width/2);
var yToCenter = toLocaleMapHeight($this[0].getBoundingClientRect().height/2);
var leftOffset = toLocaleMapWidth($this.offset().left - $map.offset().left);
var topOffset = toLocaleMapHeight($this.offset().top - $map.offset().top);
$(".point").attr("transform", "translate(" + (-376 + leftOffset + xToCenter).toString() + "," + (-2250+topOffset + yToCenter).toString() +")")
});

function toLocaleMapWidth(value) {
	return value * +$map.attr("width") / $map.width();
}

function toLocaleMapHeight(value) {
	return value * +$map.attr("height") / $map.height();
}

function PlacePoint(region) {
	// body...
}