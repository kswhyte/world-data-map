$( ".USA" ).click(function() {
  console.log('USA!');

});

function(countryCode) {

}

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
  projection: 'orthographic',
  fills: {
    // randomizeColor: function getColor(){
    //   var ascii = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
    //   var color = '#';
    //   while (color.length < 7){
    //     color += String.fromCharCode(ascii[Math.floor(Math.random() * 16)]);
    //   }
    //   if (color === '#ffffff') {
    //     getColor();
    //   } else {
    //     return color;
    //   }
    // },
    defaultFill: "darkgrey",
    randomColor0: getColor(),
    randomColor1: getColor(),
    randomColor2: getColor(),
    randomColor3: getColor(),
    randomColor4: getColor(),
    randomColor5: getColor(),
    randomColor6: getColor(),
    randomColor7: getColor(),
    // eq50: this.fills.randomizeColor(),
    // lt25: this.fills.randomizeColor(),
    // gt75: this.fills.randomizeColor(),
    // lt50: this.fills.randomizeColor(),
    // eq0: this.fills.randomizeColor(),
    // pink: this.fills.randomizeColor(),
    // gt500: this.fills.randomizeColor()
  },
  projectionConfig: {
    rotation: [101, -40] //North America
    // rotation: [-20, 4] //Africa
    // rotation: [30],
    // rotation: [30]
  },
  // Zoom in on Africa
  // element: document.getElementById("container"),
  // scope: 'world',
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
    'CAN': {fillKey: 'randomiColor7'}
  }
// });

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
});
