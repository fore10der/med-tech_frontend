var $map = $(".geography__map");
$(function() {
	PlacePoint("KhabarovskKrai");
});

function toLocaleMapWidth(value) {
	return value * +$map.attr("width") / $map.width();
}

function toLocaleMapHeight(value) {
	return value * +$map.attr("height") / $map.height();
}

function PlacePoint(regionName) {
var $this = $("#" + regionName);
var xToCenter = toLocaleMapWidth($this[0].getBoundingClientRect().width/2);
var yToCenter = toLocaleMapHeight($this[0].getBoundingClientRect().height/2);
var leftOffset = toLocaleMapWidth($this.offset().left - $map.offset().left);
var topOffset = toLocaleMapHeight($this.offset().top - $map.offset().top);
var epsilon = {
	x: 0,
	y: 0
};

switch (regionName){
	case "KhabarovskKrai":
		epsilon = {
			x: 32323,
			y: 0
		};
		break;
	default:
		break;
}

console.log(epsilon);

$(".point").attr("transform", "translate(" + (-376 + leftOffset + epsilon.x + xToCenter).toString() + "," + (-2250+topOffset + epsilon.y + yToCenter).toString() +")")
}