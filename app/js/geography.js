$(function() {
var $this = $("#RostovOblast");
var offsetLeft = $this.offset().left - $this.parent().parent().parent().offset().left;
var offsetTop = $this.offset().top - $this.parent().parent().parent().offset().top;
console.log(offsetLeft, offsetTop);
// var offset = $this.offset();
// var width = $this.innerWidth();
// var height = $this.innerHeight();

// var centerX = offset.left + width / 2;
// var centerY = offset.top + height / 2;
// console.log(centerX,centerY)
});