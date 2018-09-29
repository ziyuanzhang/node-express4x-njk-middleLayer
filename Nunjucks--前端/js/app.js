var data = [{
    extra: {},
    time: "2016-09-29T08:00:00",
    val: 195,
    level_index: 5,
    id: "71552116",
    name: "日溪乡汶石",
    lng: 119.1921,
    lat: 26.3158,
    type: "PP",
    type_name: "雨量站",
    subjection: "防汛",
    area_id: "350111",
    area_name: "晋安区",
    river_name: "闽江",
    water_system: "闽江",
    station_position: 0,
    city_code: "350100",
    city_name: "福州市"
},
{
    extra: {},
    time: "2016-09-29T16:00:00",
    val: 192,
    level_index: 5,
    id: "71502056",
    name: "寿山乡红寮",
    lng: 119.237221,
    lat: 26.220278,
    type: "ZZ",
    type_name: "河道水位站",
    subjection: "防汛",
    area_id: "350111",
    area_name: "晋安区",
    river_name: "寿山乡红寮",
    water_system: "寿山乡红寮",
    station_position: 0,
    city_code: "350100",
    city_name: "福州市"
}];

nunjucks.configure('/Nunjucks/template', { autoescape: true });

var html = nunjucks.render('tem_data.html', { data: data });

//document.getElementsByClassName("contain").innerHTML=html;  //nocan

$(".contain").append(html);//yes
    //console.log(html);