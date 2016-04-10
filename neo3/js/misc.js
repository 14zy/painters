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


// $( document ).ready(function() {
	
	// Промо окно
	//     var promoDiv = "\
	//    	<div class='col-xs-4' style='padding-left: 5%'>\
	// 	<img class='img-responsive' src='pics/promo/bottom-banner14.png'>\
	// </div>\
	//    	<div class='col-xs-8' style='text-align: justify; color: black; padding-right: 5%'>\
	// 	<br>\
	// 	<p>Мы искренне благодарим всех, кто поддержал наш проект!</p>\
	// 	<p>Очень приятно, что среди Вас, господа, так много тех, кто готов поддерживать Art Challenge.</p>\
	// 	<p>Список меценатов скоро появится в игре и навсегда останется в ней!</p>\
	// 	<p>Если Вам нравится Art Challenge - у Вас остается всего несколько часов, чтобы помочь проекту.</p>\
	// 	<p>Даже малая сумма - 100 или 200 р. - значимый вклад в общее дело, и в конечном итоге - в культуру и искусство!</p>\
	// 	<p>Благодарим Вас, господа! Рады, что Вы с нами!</p>\
	// 	<br>\
	// 	<div style=''>\
	// 		<button id='promoBtnYes' class='btn btn-lg btn-success'>Поддержать Art Challenge</button>\
	// 		<button id='promoBtnNo' class='btn btn-lg btn-danger'>Мне не интересно</button>\
	// 	</div>\
	// </div>\
	// "
	// var date1 = new Date("6/18/2015");
	// var date2 = new Date();
	// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	// var diffDays = Math.ceil(timeDiff / (1000 * 3600)) + 12;
	//
	// // if (getCookie("promo") != 2) {
	//     window.msgPromo = new PNotify({
	//         title: "До конца кампании осталось " + diffDays + " часов!",
	//         text: promoDiv,
	//         type: 'note',
	//         hide: false,
	//         animate_speed: "normal",
	//         icon: false,
	//         addclass: "stack-promo",
	//         opacity: 0.95,
	//         buttons: {
	//           closer: false,
	//           sticker: false
	//         },
	//         history: {
	//           history: true,
	//           menu: false
	//         }
	//     });
	//
	// // 	setCookie('promo',2,360);
	// // };
	//
	// $( "#promoBtnYes" ).click(function() {
	// 	window.msgPromo.remove();
	// 	window.open('https://boomstarter.ru/projects/90794/art_challenge_-_igra_na_znanie_populyarnyh_hudozhnikov', '_blank');
	//         swal({
	//           title: "Спасибо за Вашу поддержку!",
	//           type: "success",
	//         });
	// 	yaCounter24594722.reachGoal('PROMO-BTN-YES');
	// });
	//
	//
	// $( "#promoBtnNo" ).click(function() {
	// 	window.msgPromo.remove();
	// 	yaCounter24594722.reachGoal('PROMO-BTN-NO');
	// });
	// --Промо окно

// });


// Промо баннер нижний

// window.promoBottomImg = [1,2,3,5,7,8,10,12,14][Math.floor(Math.random() * 9)];
// 		window.promoBottomTextId = Math.floor(( Math.random() * 7 )) + 1;
// 		switch(window.promoBottomTextId) {
// 		  case 1:
// 			window.promoBottomText = "Без Вас приложение не появится!";
// 			break;
// 		  case 2:
// 			window.promoBottomText = "Народное финансирование мобильного приложения";
// 			break;
// 		  case 3:
// 			window.promoBottomText = "Сбор средств на мобильное приложение";
// 			break;
// 		  case 4:
// 			window.promoBottomText = "Господа, давайте сделаем мобильное приложение!";
// 			break;
// 		  case 5:
// 			window.promoBottomText = "Мобильное приложение ArtChallenge";
// 			break;
// 		  case 6:
// 			window.promoBottomText = "Господа, помогите нам с приложением!";
// 			break;
// 		  case 7:
// 			window.promoBottomText = "Господа, мобильное приложение!";
// 			break;
// 		};
//
// 		$( "#promo-bottom-text" ).html(window.promoBottomText);
// 		$( "#promo-bottom-img" ).attr("src","pics/promo/bottom-banner" + window.promoBottomImg + ".png");
//
//
//
// $( "#promo-bottom" ).hover(function() {
// 	$( this).animate({ marginBottom: '-80px' }, 500);
// 	$( "#promo-bottom p" ).css("display", "block");
// }, function() {
// 	$( this ).animate({ marginBottom: '-440px' }, 500);
// 	$( "#promo-bottom p" ).css("display", "none");
//   }
// );
//
// $( "#promo-bottom" ).click(function() {
// 	window.open('https://boomstarter.ru/projects/90794/art_challenge_-_igra_na_znanie_populyarnyh_hudozhnikov', '_blank');
// 	yaCounter24594722.reachGoal('PROMO-BOTTOM-CLICK');
//
// 	var currentDate = new Date()
//
// 	var data = "click="
// 	+ getLocalTime(MOSCOW_OFF)
// 	+ "; " + window.promoBottomText
// 	+ "; " + window.promoBottomImg;
//     $.ajax({
//         type: 'POST',
//         url: 'http://178.62.133.139/analytics/mayak.php',
//         data: data,
//         error: function()
//         {
// 			console.log('error');
//         },
//         success: function(response)
//         {
// 			console.log('success');
//         }});
//
// });
// --Промо баннер нижний