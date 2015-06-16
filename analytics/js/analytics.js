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

//// Выбираем промо в зависимости от региона
setTimeout(function () {
	
switch (2) { //geoplugin_region()
	case "Rostov":
		window.promoImgId = [1,2][Math.floor(Math.random() * 2)];
		window.promoImg = "creativespace/" + window.promoImgId + ".jpg";

		window.promoTextId = Math.floor(( Math.random() * 2 )) + 1;
		switch(window.promoTextId) {
		  case 1:
			  window.promoText = "Выставка \"Натяжение\""; // «Натяжение»
			break;
		  case 2:
			window.promoText = "Инсталяции Крестовой Катерины";
			break;
		};

		window.promoTextSub = "Creative Space, Ростов-на-Дону";
		window.promoTextColor = "black";
		window.promoTextHoverColor = "red";
		window.promoLink = "https://www.facebook.com/groups/CreativeSpace.PRO/permalink/861037833969038/"
		break;
	default:
		//Реклама мобильного приложения
		window.promoImgId = [1,3,4,6,10][Math.floor(Math.random() * 5)];
		window.promoImg = "mobileapp/iphone" + window.promoImgId + ".png";
		window.promoTextId = Math.floor(( Math.random() * 5 )) + 1;
		window.promoTextColorId = Math.floor(( Math.random() * 2 )) + 1;
		window.promoTextSub = "";
		window.promoTextHoverColor = "black";
		window.promoLink = "https://boomstarter.ru/projects/90794/art_challenge_-_igra_na_znanie_populyarnyh_hudozhnikov"
		
		switch(window.promoTextId) {
		  case 1:
			window.promoText = "Поддержите разработку мобильного приложения!";
			break;
		  case 2:
			window.promoText = "Мобильное приложение Art Challenge";
			break;
		  case 3:
			window.promoText = "Господа, мобильное приложение!";
			break;
		  case 4:
			window.promoText = "Приложение не появится без Вашей помощи!";
			break;
		  case 5:
			window.promoText = "Господа, помогите нам с приложением!";
			break;
		};

		switch(window.promoTextColorId) {
		  case 1:
			window.promoTextColor = "black";
			break;
		  case 2:
			window.promoTextColor = "#337ab7"; //blue
			break;
		};
		// --Реклама мобильного приложения
}; // switch

//// Задаем значения верхнему промо
$( "#promo-text" ).text(window.promoText);
$( "#promo-text-sub" ).text(window.promoTextSub);
$( "#promo-img" ).attr("src","pics/promo/" + window.promoImg); 
$( "#promo-text" ).css( "color", window.promoTextColor );
$( "#promo-link" ).attr("href", window.promoLink);
$( "#promo-link" ).hover(
  function() {
	  $( "#promo-text" ).css( "color", window.promoTextHoverColor );
	  $( "#promo-text" ).css( "text-decoration","underline" );
  }, function() {
	  $( "#promo-text" ).css( "color", window.promoTextColor );
	  $( "#promo-text" ).css( "text-decoration","none" );
  }
);

}, 1000);

$( "#promo-link" ).click(function() {
	
	var data = "click="
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

	console.log(data);

//	$.ajax({
//      type: 'POST',
//      url: 'http://178.62.133.139/analytics/old/post.php',
//      data: data,
//      error: function()
//      {
//			console.log('error');
//      },
//      success: function(response)
//      {
//			console.log('success');
//      }});
//
//	
yaCounter24594722.reachGoal('PROMO-CLICK');
});
