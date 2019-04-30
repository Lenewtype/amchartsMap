var data = [{
	id: "JP-47",
	value: 40
},
{
	id: "JP-12",
	value: 405
},
{
	id: "JP-07",
	value: 12
},
{
	id: "JP-01",
	value: 85
},
{
	id: "JP-13",
	value: 560
},
{
	id: "JP-14",
	value: 100
},
{
	id: "JP-15",
	value: 200
},
{
	id: "JP-16",
	value: 42
},
{
	id: "JP-05",
	value: 105
},
{
	id: "JP-06",
	value: 45
},
{
	id: "JP-07",
	value: 400
},
{
	id: "JP-08",
	value: 12
},
{
	id: "JP-09",
	value: 35
},
{
	id: "JP-27",
	value: 350
},
{
	id: "JP-42",
	value: 130
},
{
	id: "JP-37",
	value: 120
},
{
	id: "JP-29",
	value: 300
},
{
	id: "JP-31",
	value: 213
}];

var areaToPrefectureMapping = {
	'osaka': 'JP-27',
	'maebashi': 'JP-10',
	'aichi': 'JP-23',
	'aizuwakamatsu': 'JP-07',
	'umeda': 'JP-27',
	'akasaka': 'JP-13',
	'akihabara':'JP-13',
	'akita': 'JP-05',
	'amagasaki': 'JP-28',
	'shinsaibashi':'JP-27',
	'amerikamura': 'JP-27',
	'gifu': 'JP-21',
	'aomori': 'JP-02',
	'kyoto': 'JP-26',
	'asahikawa': 'JP-01',
	'atsugi': 'JP-14',
	'shibuya':'JP-13',
	'shiga': 'JP-25',
	'tottori': 'JP-31',
	'nakatsugawa' : 'JP-21',
	'tokyo': 'JP-13',
	'himeji': 'JP-28',
	'shinjuku': 'JP-13',
	'chiba' : 'JP-12',
	'fukui': 'JP-18',
	'okaya': 'JP-20',
	'imaike': 'JP-23',
	'harajuku':'JP-13',
	'tokushima': 'JP-36',
	'fukuoka': 'JP-40',
	'ebisu' : 'JP-13',
	'echizen' : 'JP-18',
	'ehime' : 'JP-38',
	'ekoda' : 'JP-13',
	'esaka' : 'JP-23',
	'iga' : 'JP-24',
	'kanazawa' : 'JP-17',
	'nagoya' : 'JP-23',
	'ginowan' : 'JP-47',
	'shizuoka' : 'JP-22',
	'hachioji' : 'JP-13',
	'hakata' : 'JP-40',
	'hakodate' : 'JP-01',
	'hamamatsu' : 'JP-22',
	'hamamatsucho' : 'JP-13',
	'hirakata' : 'JP-27',
	'hiroshima' : 'JP-34',
	'ibaraki' : 'JP-08',
	'ichikawa' : 'JP-12',
	'ikebukuro' : 'JP-13',
	'yamaguchi' : 'JP-35',
	'iwaki' : 'JP-07',
	'izumo' : 'JP-32',
	'nagano' : 'JP-20',
	'sakurai' : 'JP-29',
	'kagawa' : 'JP-37',
	'kagoshima': 'JP-46',
	'kamimaedzu' : 'JP-23',
	'kamishinjou' : 'JP-27',
	'kanagawa' : 'JP-14',
	'kashiwa' : 'JP-12',
	'kawasaki' : 'JP-13',
	'kichijouji': 'JP-13',
	'kobe' : 'JP-28',
	'kochi' : 'JP-39',
	'koenji': 'JP-13',
	'kofu': 'JP-19',
	'koiwa': 'JP-13',
	'kokura': 'JP-40',
	'koriyama': 'JP-40',
	'kotoen':'JP-28',
	'koutouku' : 'JP-13',
	'kumagaya': 'JP-11',
	'kumamoto': 'JP-43',
	'kurashiki': 'JP-33',
	'machida' :'JP-13',
	'maidzuru' : 'JP-26',
	'matsue' : 'JP-32',
	'matsumodo': 'JP-20',
	'matsuyama': 'JP-38',
	'meguro': 'JP-13',
	'namba' : 'JP-27',
	'mie': 'JP-24',
	'minamihorie': 'JP-27',
	'miyagigun': 'JP-04',
	'miyazaki' : 'JP-45',
	'sakae' : 'JP-23',
	'morioka' : 'JP-03',
	'shimokitazawa' : 'JP-13',
	'motoyawata' : 'JP-12',
	'nagasaki' : 'JP-42',
	'naha' : 'JP-47',
	'nakano' : 'JP-13',
	'nara' : 'JP-29',
	'narimasu' : 'JP-13',
	'naruto' : 'JP-36',
	'yokohama': 'JP-14',
	'neyagawa' : 'JP-27',
	'niigata' : 'JP-15',
	'nishikujou' : 'JP-27',
	'neyagawa' : 'JP-27',
	'niigata' : 'JP-15',
	'numazu' : 'JP-22',
	'obihiro' : 'JP-01',
	'oita' : 'JP-44',
	'sapporo' : 'JP-01',
	'sendai' : 'JP-04'
}

var map = am4core.create("chartDiv", am4maps.MapChart);
map.colors.list = [am4core.color('#843D51')];
map.geodata = am4geodata_japanLow;
var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.data= data;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name} - {value} bands";
polygonTemplate.fill = am4core.color("#d3d3d3");

polygonTemplate.propertyFields.fill = "fill";

polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: map.colors.getIndex(1).brighten(2),
  max: map.colors.getIndex(1).brighten(-0.3)
});

var heatLegend = map.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.width = am4core.percent(25);
heatLegend.marginRight = am4core.percent(25);
heatLegend.minValue = 0;
heatLegend.maxValue = 40000000;

// Set up custom heat map legend labels using axis ranges
var minRange = heatLegend.valueAxis.axisRanges.create();
minRange.value = heatLegend.minValue;
minRange.label.text = "Few Bands";
var maxRange = heatLegend.valueAxis.axisRanges.create();
maxRange.value = heatLegend.maxValue;
maxRange.label.text = "So Many Bands";

heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
  return "";
});
