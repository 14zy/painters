//<!-- Yandex.Metrika counter -->
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24594722 = new Ya.Metrika({id:24594722,
                    webvisor:false,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");



$('#mc-embedded-subscribe-form').submit(function () {
  
  function IsEmail(email) {
      var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return regex.test(email);
  };

  if (IsEmail($('#mce-EMAIL')[0].value)) {
    var data = "email=" + $('#mce-EMAIL')[0].value;
    $.ajax({
        type: 'POST',
        url: '//artchallenge.me/post.php',
        data: data,
        error: function()
        {
          swal({
            title: "Ошибка!",
            type: "error",
            text: "Что-то пошло не так :("
          });
        },
        success: function(response)
        {
          swal({
            title: "Art Challenge",
            type: "success",
            text: "Вы успешно подписались на рассылку!"
          });
        }});
  
  } else {
    swal({
      title: "Ошибка!",
      type: "warning",
      text: "Проверьте правильность написания email"
    });
  };
 yaCounter24594722.reachGoal('SUBSCRIBE');
 return false;
});


//boomstarter

var MOSCOW_OFF = 4; // hours
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", 
              "August", "September", "October", "November", "December"];

// desired format => November 1, 2011 21:31:00
function getLocalTime(offset) {
    var d = new Date();
    d.setTime((new Date().getTime()) + 
              (d.getTimezoneOffset() * 60 * 1000) + // local offset
              (1000 * 60 * 60 * offset)); // target offset
			  return MONTHS[d.getMonth()] + " " + d.getDate() + "; " + d.toTimeString().split(" ")[0];
}



$( document ).ready(function() {
	//Верхний баннер
	window.promoImg = Math.floor(( Math.random() * 10 )) + 1;
	window.promoTextId = Math.floor(( Math.random() * 8 )) + 1;
	window.promoTextColorId = Math.floor(( Math.random() * 4 )) + 1;

	switch(window.promoTextId) {
	  case 1:
		window.promoText = "Поддержите разработку мобильного приложения!";
		break;
	  case 2:
  		window.promoText = "Скоро будет мобильное приложение!";
  		break;
	  case 3:
  		window.promoText = "Мобильное приложение Art Challenge";
  		break;
	  case 4:
  		window.promoText = "Мы разрабатываем мобильное приложение!";
  		break;
	  case 5:
		window.promoText = "Господа, поддержите нас на Boomstarter";
		break;
	  case 6:
		window.promoText = "Господа, мобильное приложение!";
		break;
	  case 7:
		window.promoText = "Приложение не появится без Вашей помощи!";
		break;
	  case 8:
		window.promoText = "Господа, помогите нам с приложением!";
		break;
	};
	
	switch(window.promoTextColorId) {
	  case 1:
		window.promoTextColor = "black";
		break;
	  case 2:
		window.promoTextColor = "#a94442"; //red
  		break;
	  case 3:
		window.promoTextColor = "#337ab7"; //blue
  		break;
	  case 4:
		window.promoTextColor = "#15cb63"; //green
		break;

	};

	$( "#promo-text" ).text(window.promoText);
	$( "#promo-img" ).attr("src","pics/promo/iphone" + window.promoImg + ".png");
	$( "#promo-link" ).css( "color", window.promoTextColor );
	// --Верхний баннер
	
	// Промо окно
	
    var promoDiv = "\
   	<div class='col-xs-4' style='padding-left: 5%'>\
		<img class='img-responsive' src='pics/promo/banner2.png'>\
	</div>\
   	<div class='col-xs-8' style='text-align: justify; color: black; padding-right: 5%'>\
		<br>\
		<p>Господа, мы хотим сделать бесплатное мобильное приложение, чтобы играть в Art Challenge можно было всегда и везде, даже без интернета!</p>\
		<p>Вы сможете просматривать работы и читать биографии 118 художников, более 20 000 картин всегда будут в Вашем кармане!</p>\
		<p>Обычно, подобные приложения направлены на заработок денег и не доступны бесплатно.</p>\
		<p>Мы же хотим разбить эту практику и сделать по-настоящему открытое и бесплатное приложение, доступное всем!</p>\
		<p>Пожалуйста, поддержите нашу инициативу и получите сувениры с символикой Art Challenge на память!</p>\
		<br>\
		<div style=''>\
			<button id='promoBtnYes' class='btn btn-lg btn-primary'>Поддержать Art Challenge</button>\
			<button id='promoBtnNo' class='btn btn-lg btn-danger'>Мне не интересно</button>\
		</div>\
	</div>\
	"
	if (getCookie("promoYes") != 1) {
	    window.msgPromo = new PNotify({
	        title: "Поддержите разработку мобильного приложения!", //Господа, помогите нам с приложением!
	        text: promoDiv,
	        type: 'note',
	        hide: false,
	        animate_speed: "normal",
	        icon: false,
	        addclass: "stack-promo",
	        opacity: 0.95,
	        buttons: {
	          closer: true,
	          sticker: false
	        },
	        history: {
	          history: true,
	          menu: false
	        }
	    });
	};

	$( "#promoBtnYes" ).click(function() {
		window.msgPromo.remove(); 
		window.open('https://boomstarter.ru/projects/90794/art_challenge_-_igra_na_znanie_populyarnyh_hudozhnikov', '_blank');
        swal({
          title: "Спасибо за Вашу поддержку!",
          type: "success",
        });
		setCookie('promoYes',1,360);
		yaCounter24594722.reachGoal('PROMO-BTN-YES');
	});


	$( "#promoBtnNo" ).click(function() {
		window.msgPromo.remove();
		yaCounter24594722.reachGoal('PROMO-BTN-NO');
	});
	
	
	// --Промо окно

});

$( "#promo-link" ).click(function() {
	
	var currentDate = new Date()
	
	var data = "click=" 
	+ getLocalTime(MOSCOW_OFF)
	+ "; " + window.promoTextId 
	+ "; " + window.promoText 
	+ "; " + window.promoImg
	+ "; " + window.promoTextColor
	+ "; " + window.promoTextColorId;
		
    $.ajax({
        type: 'POST',
        url: 'http://178.62.133.139/analytics/post.php',
        data: data,
        error: function()
        {
			console.log('error');
        },
        success: function(response)
        {
			console.log('success');
        }});
	
	
  yaCounter24594722.reachGoal('PROMO-CLICK');
});