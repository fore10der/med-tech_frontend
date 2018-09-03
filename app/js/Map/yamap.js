export default $(function() {
if (typeof(ymaps) != 'undefined') {
  ymaps.ready(init);
 function init(){ 

  var map = new ymaps.Map("yamap", {
      center: [55.756964, 37.615524],
      zoom: 14
  });

  var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="yamap-placemark"></div>');

  var circlePlacemark = new ymaps.Placemark(
      [55.756964, 37.615524], {}, {
          iconLayout: circleLayout,
          iconShape: {
              type: 'Circle',
              coordinates: [0, 0],
              radius: 17.5
          },
          iconImageOffset: [0, 0]
      }
  );
  map.geoObjects.add(circlePlacemark);
 }
}

});