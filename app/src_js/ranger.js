$(function() {
	var slider = document.querySelector(".devices__sort_price-ranger");
	noUiSlider.create(slider, {
	start: [200, 800],
	connect: true,
	range: {
		'min': 0,
		'max': 1000
	},
	tooltips: [ true, true ],
	step: 10,
	format: {
	  to: function ( value ) {
		return Math.round(value);
	  },
	  from: function ( value ) {
		return Math.round(value);
	  }
	}

});
});