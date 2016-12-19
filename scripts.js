var map = new Datamap({
  scope: 'world',
  element: document.getElementById('container'),
  projection: 'orthographic',
  fills: {
    defaultFill: "#dda3a3",
    // gt50: colors(Math.random() * 20),
    // eq50: colors(Math.random() * 20),
    // lt25: colors(Math.random() * 10),
    // gt75: colors(Math.random() * 200),
    // lt50: colors(Math.random() * 20),
    // eq0: colors(Math.random() * 1),
    // pink: '#0fa0fa',
    // gt500: colors(Math.random() * 1)
  },
  projectionConfig: {
    rotation: [97,-30]
    // rotation: [30],
    // rotation: [30]
  },
  element: document.getElementById("container"),
  scope: 'world',
  // Zoom in on Africa
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([23, -3])
      .rotate([4.4, 0])
      .scale(400)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  },
  // data: {
    // 'USA': {fillKey: 'lt50' },
    // 'MEX': {fillKey: 'lt25' },
    // 'CAN': {fillKey: 'gt50' },
    // 'GTM': {fillKey: 'gt500'},
    // 'HND': {fillKey: 'eq50' },
    // 'BLZ': {fillKey: 'pink' },
    // 'GRL': {fillKey: 'eq0' },
    // 'CAN': {fillKey: 'gt50' }
//   }
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
