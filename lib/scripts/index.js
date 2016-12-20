$(window).on('resize', function() {
   map.resize();
});

$( ".USA" ).click(function() {
  console.log('USA!');

});

// function(countryCode) {
//
// }

function getColor(){
  var ascii = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
  var color = '#';
  while (color.length < 7){
    color += String.fromCharCode(ascii[Math.floor(Math.random() * 16)]);
  }
  if (color === '#ffffff') {
    getColor();
  } else {
    return color;
  }
}

var map = new Datamap({
  scope: 'world',
  element: document.getElementById('container'),
  projection: 'orthographic',   //Style of projection to be used. try "mercator"
  // height: null, // If not null, datamaps will grab the height of 'element'
  // width: null, // If not null, datamaps will grab the width of 'element',
  // dataType: 'json', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
  // dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
  responsive: true,
  geographyConfig: {
    highlightOnHover: true,
    // popupOnHover: true,
    // popupTemplate: function() {
    //   return ('<div class="hoverinfo">Heyoooo</div>');
    // }
    // -------------
    // popupTemplate: function (geo, data) {
    //         return ['<div class="hoverinfo">' +  data.name,
    //         '<br/>Payload: ' +  data.yield + ' kilotons',
    //         '<br/>Country: ' +  data.country + '',
    //         '<br/>Date: ' +  data.date + '',
    //         '</div>'].join('');
    // }
    // -------------
    // Defaults
    // popupOnHover: true, // True to show the popup while hovering
    // highlightOnHover: true,
    // highlightFillColor: '#FC8D59',
    // highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    // highlightBorderWidth: 2,
    // highlightBorderOpacity: 1
    // borderWidth: 1,
    // borderOpacity: 1,
    // borderColor: '#FDFDFD',
    hideAntarctica: false
  },
  // setProjection: function(element, options) {
  //   var projection, path;
  //   projection = d3.geoOrthographic()
  //       .center([long, lat])
  //       .scale(element.offsetWidth)
  //       .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
  //   path = d3.geo.path()
  //       .projection( projection );
  //   return {path: path, projection: projection};
  // },
  // -------------
  // Zoom in on Africa
  // setProjection: function(element) {
  //   var projection = d3.geo.equirectangular()
  //     .center([23, -3])
  //     .rotate([4.4, 0])
  //     .scale(400)
  //     .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
  //   var path = d3.geo.path()
  //     .projection(projection);
  //
  //   return {path: path, projection: projection};
  // },
  // -------------
  projectionConfig: {
    rotation: [101, -40] //North America
    // rotation: [-20, 4] //Africa
    // rotation: [30],
    // rotation: [30]
  },
  fills: {
    defaultFill: "grey", // The keys in this object map to the "fillKey" of [data] or [bubbles]
    randomColor0: getColor(),
    randomColor1: getColor(),
    randomColor2: getColor(),
    randomColor3: getColor(),
    randomColor4: getColor(),
    randomColor5: getColor(),
    randomColor6: getColor(),
    randomColor7: getColor(),
  },

  // zoomFunction: function zoomFunction() {
  //   d3.selectAll("path")
  //     .attr("transform",
  //       "translate(" + d3.event.translate
  //       + ") scale (" + d3.event.scale + ")");
  // },
  //
  // zoom: d3.behavior.zoom()
  //   .scaleExtent([0.2, 10])
  //   .on("zoom", this.zoomFunction)
  // -------------
  data: {
    'USA': {fillKey: 'randomColor0'},
    'MEX': {fillKey: 'randomColor1'},
    'CAN': {fillKey: 'randomColor2'},
    'GTM': {fillKey: 'randomColor3'},
    'HND': {fillKey: 'randomColor4'},
    'BLZ': {fillKey: 'randomColor5'},
    'GRL': {fillKey: 'randomColor6'},
    'CAN': {fillKey: 'randomColor7'}
  },
  //------------
  // BUBBLES:

  // bubblesConfig: {
  //   borderWidth: 2,
  //   borderOpacity: 1,
  //   borderColor: '#FFFFFF',
  //   popupOnHover: true, // True to show the popup while hovering
  //   radius: null,
  //   popupTemplate: function(geography, data) { // This function should just return a string
  //     return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
  //   },
  //   fillOpacity: 0.75,
  //   animate: true,
  //   highlightOnHover: true,
  //   highlightFillColor: '#FC8D59',
  //   highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
  //   highlightBorderWidth: 2,
  //   highlightBorderOpacity: 1,
  //   highlightFillOpacity: 0.85,
  //   exitDelay: 100, // Milliseconds
  //   key: JSON.stringify
  // },
});

map.legend();
// map.graticule();

// map.arc([{
//   origin: {
//     latitude: 61,
//     longitude: -149
//   },
//   destination: {
//     latitude: -22,
//     longitude: -43
//   }
// }], {
//   greatArc: true,
//   animationSpeed: 2000
//   });
  // -------------

// map.labels({labelColor: 'blue', fontSize: 12});
// map.labels();
