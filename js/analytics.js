function recordData(){
	var currentDate = new Date();
	var data = "click="
	+ getLocalTime(MOSCOW_OFF)
	+ ";" + window.lang
	+ ";" + window.enviroment
	+ ";" + window.currentSetName.slice(0,-3)
	+ ";" + window.truePainterNameEn
	+ ";" + window.years.slice(0,4)
	+ ";" + window.years.slice(-4)	
	+ ";" + window.nationEnSingle
	+ ";" + window.image + ".jpg"
	+ ";" + window.answer;
	
	$.ajax({
	    type: 'POST',
	    url: 'http://178.62.133.139/analytics/bigdata.php',
	    data: data
	});
};