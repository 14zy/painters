var MOSCOW_OFF = 4; // hours
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", 
              "August", "September", "October", "November", "December"];

// desired format => November 1, 2011 21:31:00
function getLocalTime(offset) {
    var d = new Date();
    d.setTime((new Date().getTime()) + 
              (d.getTimezoneOffset() * 60 * 1000) + // local offset
              (1000 * 60 * 60 * offset)); // target offset
			  return MONTHS[d.getMonth()] + " " + d.getDate() + ";" + d.toTimeString().split(" ")[0];
}

function recordData(type){

	if (type == "promo-click") {
		var data = "campaign=" + window.promoCampaign + "&click="
		+ getLocalTime(MOSCOW_OFF)
		+ ";" + window.geoplugin_countryCode()
		+ ";" + window.geoplugin_region()
		+ ";" + window.geoplugin_city()
		+ ";" + window.promoImg
		+ ";" + window.promoText
		+ ";" + window.promoTextSub
		+ ";" + window.promoTextColor
		+ ";" + window.promoTextHoverColor
		+ ";" + window.promoLink;
	} else  {
		var data = "campaign=bigdata&click="
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
	};

	$.ajax({
	    type: 'POST',
	    url: 'http://178.62.133.139/analytics/save.php',
	    data: data
	});
	
};

//// Выбираем промо в зависимости от региона
// setTimeout(function () {

// switch (geoplugin_region()) { //geoplugin_region()
// 	case "Rostov":
// 		window.promoCampaign = "creativespace";
// 		window.promoImgId = [1,2][Math.floor(Math.random() * 2)];
// 		window.promoImg = window.promoCampaign + "/" + window.promoImgId + ".jpg";
//
// 		window.promoTextId = Math.floor(( Math.random() * 2 )) + 1;
// 		switch(window.promoTextId) {
// 		  case 1:
// 			window.promoText = "Выставка \"Натяжение\""; // «Натяжение»
// 			break;
// 		  case 2:
// 			window.promoText = "Инсталяции Крестовой Катерины";
// 			break;
// 		};
//
// 		window.promoTextColor = "black";
// 		window.promoTextHoverColor = "red";
//
// 		window.promoTextSub = "Ростов-на-Дону";
//
// 		window.promoLink = "https://www.facebook.com/groups/CreativeSpace.PRO/permalink/861037833969038/"
// 		break;
//
// 	default:
// 		window.promoCampaign = "drawfox";
// 		window.promoImgId = [2][Math.floor(Math.random() * 1)];
// 		window.promoImg = window.promoCampaign + "/" + window.promoImgId + ".png";
//
// 		window.promoTextId = Math.floor(( Math.random() * 3 )) + 1;
// 		switch(window.promoTextId) {
// 		  case 1:
// 			window.promoText = "Бесплатные видеоуроки по рисованию";
// 			break;
// 		  case 2:
// 			window.promoText = "Видеокурс «Акварельная живопись»";
// 			break;
// 		  case 3:
// 			window.promoText = "Школа рисования онлайн";
// 			break;
// 		};
//
// 		switch(Math.floor(( Math.random() * 2 )) + 1) {
// 		  case 1:
// 			window.promoTextColor = "black";
// 			break;
// 		  case 2:
// 			window.promoTextColor = "#337ab7"; //blue
// 			break;
// 		};
// 		window.promoTextHoverColor = "red";
//
// 		window.promoTextSub = "";
//
// 		window.promoLink = "http://drawfox.com/?utm_source=artchallenge"
// }; // switch
//
// //// Задаем значения верхнему промо
// $( "#promo-text" ).text(window.promoText);
// $( "#promo-text-sub" ).text(window.promoTextSub);
// $( "#promo-img" ).attr("src","pics/promo/" + window.promoImg);
// $( "#promo-text" ).css( "color", window.promoTextColor );
// $( "#promo-link" ).attr("href", window.promoLink);
// $( "#promo-link" ).hover(
//   function() {
// 	  $( "#promo-text" ).css( "color", window.promoTextHoverColor );
// 	  $( "#promo-text" ).css( "text-decoration","underline" );
//   }, function() {
// 	  $( "#promo-text" ).css( "color", window.promoTextColor );
// 	  $( "#promo-text" ).css( "text-decoration","none" );
//   }
// );
//
// }, 1000);

$( "#promo-link" ).click(function() {
	
	recordData("promo-click");
	yaCounter24594722.reachGoal('PROMO-CLICK');

});
