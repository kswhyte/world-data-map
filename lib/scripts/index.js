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
    // 'USA': {fillKey: 'randomColor0'},
    // 'MEX': {fillKey: 'randomColor1'},
    // 'CAN': {fillKey: 'randomColor2'},
    // 'GTM': {fillKey: 'randomColor3'},
    // 'HND': {fillKey: 'randomColor4'},
    // 'BLZ': {fillKey: 'randomColor5'},
    // 'GRL': {fillKey: 'randomColor6'},
    // 'CAN': {fillKey: 'randomColor7'}
    ABW	Aruba
'AFG'
'AGO'
'AIA'
'ALA'
'ALB'
'AND'
'ARE'
'ARG'
'ARM'
'ASM'
'ATA'
'ATF'
'ATG'
'AUS'
'AUT'
'AZE'
'BDI'
'BEL'
'BEN'
'BES'
'BFA'
'BGD'
'BGR'
'BHR'
'BHS'
'BIH'
'BLM'
'BLR'
'BLZ'
'BMU'
'BOL'
'BRA'
'BRB'
'BRN'
'BTN'
'BVT'
'BWA'
'CAF'
'CAN'
'CCK'
'CHE'
'CHL'
'CHN'
'CIV'
'CMR'
'COD'
'COG'
'COK'
'COL'
'COM'
'CPV'
'CRI'
'CUB'
'CUW'
'CXR'
'CYM'
'CYP'
'CZE'
'DEU'
'DJI'
'DMA'
'DNK'
'DOM'
'DZA'
'ECU'
'EGY'
'ERI'
'ESH'
'ESP'
'EST'
'ETH'
'FIN'
'FJI'
'FLK')
'FRA'
'FRO'
'FSM'
'GAB'
'GBR'
'GEO'
'GGY'
'GHA'
'GIB'
'GIN'
'GLP'
'GMB'
'GNB'
'GNQ'
'GRC'
'GRD'
'GRL'
'GTM'
'GUF'
'GUM'
'GUY'
'HKG'
'HMD'
'HND'
'HRV'
'HTI'
'HUN'
'IDN'
'IMN'
'IND'
'IOT'
'IRL'
'IRN'
'IRQ'
'ISL'
'ISR'
'ITA'
'JAM'
'JEY'
'JOR'
'JPN'
'KAZ'
'KEN'
'KGZ'
'KHM'
'KIR'
'KNA'
'KOR'
'KWT'
'LAO'ao People's Democratic Republic
'LBN'ebanon
'LBR'iberia
'LBY'ibya
'LCA'aint Lucia
'LIE'iechtenstein
'LKA'ri Lanka
'LSO'esotho
'LTU'ithuania
'LUX'uxembourg
'LVA'atvia
'MAC'acao
'MAF'aint Martin (French part)
'MAR'orocco
'MCO'onaco
'MDA'oldova, Republic of
'MDG'adagascar
'MDV'aldives
'MEX'exico
'MHL'arshall Islands
'MKD'acedonia, the former Yugoslav Republic of
'MLI'ali
'MLT'alta
'MMR'yanmar
'MNE'ontenegro
'MNG'ongolia
'MNP'orthern Mariana Islands
'MOZ'ozambique
'MRT'auritania
'MSR'ontserrat
'MTQ'artinique
'MUS'auritius
'MWI'alawi
'MYS'alaysia
'MYT'ayotte
'NAM'amibia
'NCL'ew Caledonia
'NER'iger
'NFK'orfolk Island
'NGA'igeria
'NIC'icaragua
'NIU'iue
'NLD'etherlands
'NOR'orway
'NPL'epal
'NRU'auru
'NZL'ew Zealand
'OMN'man
'PAK'akistan
'PAN'anama
'PCN'itcairn
'PER'eru
'PHL'hilippines
'PLW'alau
'PNG'apua New Guinea
'POL'oland
'PRI'uerto Rico
'PRK'orea, Democratic People's Republic of
'PRT'ortugal
'PRY'araguay
'PSE'alestine, State of
'PYF'rench Polynesia
'QAT'atar
'REU'éunion
'ROU'omania
'RUS'ussian Federation
'RWA'wanda
'SAU'audi Arabia
'SDN'udan
'SEN'enegal
'SGP'ingapore
'SGS'outh Georgia and the South Sandwich Islands
'SHN'aint Helena, Ascension and Tristan da Cunha
'SJM'valbard and Jan Mayen
'SLB'olomon Islands
'SLE'ierra Leone
'SLV'l Salvador
'SMR'an Marino
'SOM'omalia
'SPM'aint Pierre and Miquelon
'SRB'erbia
'SSD'outh Sudan
'STP'ao Tome and Principe
'SUR'uriname
'SVK'lovakia
'SVN'lovenia
'SWE'weden
'SWZ'waziland
'SXM'int Maarten (Dutch part)
'SYC'eychelles
'SYR'yrian Arab Republic
'TCA'urks and Caicos Islands
'TCD'had
'TGO'ogo
'THA'hailand
'TJK'ajikistan
'TKL'okelau
'TKM'urkmenistan
'TLS'imor-Leste
'TON'onga
'TTO'rinidad and Tobago
'TUN'unisia
'TUR'urkey
'TUV'uvalu
'TWN'aiwan, Province of China
'TZA'anzania, United Republic of
'UGA'ganda
'UKR'kraine
'UMI'nited States Minor Outlying Islands
'URY'ruguay
'USA'nited States of America
'UZB'zbekistan
'VAT'oly See (Vatican City State)
'VCT'aint Vincent and the Grenadines
'VEN'enezuela, Bolivarian Republic of
'VGB'irgin Islands, British
'VIR'irgin Islands, U.S.
'VNM'iet Nam
'VUT'anuatu
'WLF'allis and Futuna
'WSM'amoa
'YEM'emen
'ZAF'outh Africa
'ZMB'ambia
'ZWE'imbabwe

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


//List of country Names
// var countries = Datamap.prototype.worldTopo.objects.world.geometries;
// for (var i = 0, j = countries.length; i < j; i++) {
//   console.log(countries[i].properties);
// }
